import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentLinkServiceBase } from "./base/paymentLink.service.base";

@Injectable()
export class PaymentLinkService extends PaymentLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
