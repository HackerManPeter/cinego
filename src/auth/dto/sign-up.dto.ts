import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { SubscriptionType } from '../../user/enum/userType';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsMobilePhone('en-NG')
  @IsOptional()
  phoneNumber?: string;

  @IsDateString()
  dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(SubscriptionType)
  @IsNotEmpty()
  subscriptionType: SubscriptionType;
}
