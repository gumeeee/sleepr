import {
  PaymentsServiceController,
  PaymentsServiceControllerMethods,
} from '@app/common';
import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentsCreateChargeDto } from '../dto/payments-create-charge.dto';
import { PaymentsService } from './payments.service';

@Controller()
@PaymentsServiceControllerMethods()
export class PaymentsController implements PaymentsServiceController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UsePipes(new ValidationPipe())
  async createCharge(data: PaymentsCreateChargeDto) {
    return this.paymentsService.createCharge(data);
  }
}
