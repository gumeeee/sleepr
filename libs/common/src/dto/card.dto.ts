import { Field, InputType } from '@nestjs/graphql';
import {
  IsCreditCard,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CardDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Field()
  cvc?: string;

  @IsNumber()
  @IsOptional()
  @Field()
  exp_month?: number;

  @IsNumber()
  @IsOptional()
  @Field()
  exp_year?: number;

  @IsCreditCard()
  @IsOptional()
  @Field()
  number?: string;

  @IsString()
  @IsOptional()
  @Field()
  token?: string;
}
