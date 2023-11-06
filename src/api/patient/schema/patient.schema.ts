import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { Gender } from 'src/enum';

const options: SchemaOptions = {
  timestamps: true,
};

export type PatientDocument = Patient & Document;

@Schema(options)
export class Patient {
  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Prop({
    required: true,
    enum: Gender,
  })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  birthdate: number;

  @Prop({
    required: true,
  })
  @IsString()
  underlyingConditions: string;

  @Prop({
    required: true,
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({
    each: true,
    message: '통증부위 각 요소들은 문자열이어야 합니다.',
  })
  painAreas: string[];

  @Prop({
    required: false,
  })
  @IsOptional()
  @IsString()
  memo: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
