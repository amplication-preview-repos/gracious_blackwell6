import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentLinkService } from "./paymentLink.service";
import { PaymentLinkControllerBase } from "./base/paymentLink.controller.base";

@swagger.ApiTags("paymentLinks")
@common.Controller("paymentLinks")
export class PaymentLinkController extends PaymentLinkControllerBase {
  constructor(
    protected readonly service: PaymentLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
