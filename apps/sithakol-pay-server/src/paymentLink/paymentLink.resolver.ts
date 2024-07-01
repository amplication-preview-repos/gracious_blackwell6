import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentLinkResolverBase } from "./base/paymentLink.resolver.base";
import { PaymentLink } from "./base/PaymentLink";
import { PaymentLinkService } from "./paymentLink.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentLink)
export class PaymentLinkResolver extends PaymentLinkResolverBase {
  constructor(
    protected readonly service: PaymentLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
