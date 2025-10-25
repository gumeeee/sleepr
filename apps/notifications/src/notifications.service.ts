import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  // eslint-disable-next-line @typescript-eslint/require-await
  async notifyEmail({ email }: NotifyEmailDto) {
    console.log(email);
  }
}
