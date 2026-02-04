describe('Reservations', () => {
  let jwt: string;

  beforeAll(async () => {
    const user = {
      email: 'noreply.notifications.app.builder@gmail.com',
      password: 'StrongPassword123!@',
    };

    await fetch('http://auth:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await fetch('http://auth:3001/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    jwt = await response.text();
  });

  test('Create & Get', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const createdReservation = await createReservation();

    const reservationGet = await fetch(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      `http://reservations:3000/reservations/${createdReservation._id}`,
      { headers: { Authentication: jwt } },
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const reservation = await reservationGet.json();

    expect(createdReservation).toEqual(reservation);
  });

  const createReservation = async () => {
    const responseCreate = await fetch(
      'http://reservations:3000/reservations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authentication: jwt,
        },
        body: JSON.stringify({
          startDate: '02-01-2025',
          endDate: '02-05-2025',
          placeId: '123',
          charge: {
            amount: 13,
            card: {
              token: 'pm_card_visa',
            },
          },
        }),
      },
    );

    expect(responseCreate.ok).toBeTruthy();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return responseCreate.json();
  };
});
