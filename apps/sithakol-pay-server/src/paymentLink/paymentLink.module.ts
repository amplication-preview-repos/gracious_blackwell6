import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentLinkModuleBase } from "./base/paymentLink.module.base";
import { PaymentLinkService } from "./paymentLink.service";
import { PaymentLinkController } from "./paymentLink.controller";
import { PaymentLinkResolver } from "./paymentLink.resolver";

@Module({
  imports: [PaymentLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentLinkController],
  providers: [PaymentLinkService, PaymentLinkResolver],
  exports: [PaymentLinkService],
})
export class PaymentLinkModule {}
