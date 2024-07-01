/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
  IsEnum,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumPaymentLinkStatus } from "./EnumPaymentLinkStatus";
import { TransactionCreateNestedManyWithoutPaymentLinksInput } from "./TransactionCreateNestedManyWithoutPaymentLinksInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PaymentLinkCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expiresAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  linkId?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  requestedAmountInCrypto?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  requestedAmountInFiat?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentLinkStatus,
  })
  @IsEnum(EnumPaymentLinkStatus)
  @IsOptional()
  @Field(() => EnumPaymentLinkStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutPaymentLinksInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutPaymentLinksInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutPaymentLinksInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutPaymentLinksInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { PaymentLinkCreateInput as PaymentLinkCreateInput };
