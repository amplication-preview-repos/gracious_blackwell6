/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
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
import { Transaction } from "../../transaction/base/Transaction";
import { User } from "../../user/base/User";

@ObjectType()
class PaymentLink {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expiresAt!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  linkId!: string | null;

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
  requestedAmountInCrypto!: number | null;

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
  requestedAmountInFiat!: number | null;

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
    type: () => [Transaction],
  })
  @ValidateNested()
  @Type(() => Transaction)
  @IsOptional()
  transactions?: Array<Transaction>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { PaymentLink as PaymentLink };
