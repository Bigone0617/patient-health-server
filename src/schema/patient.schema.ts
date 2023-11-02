// import * as mongoose from 'mongoose';

import { IsEnum, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { Gender } from 'src/enum';

// export const PatientSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   gender: { type: String, enum: ['M', 'F'], required: true },
//   birthdate: { type: Number, required: true },
//   underlyingConditions: [{ type: String }],
//   painAreas: [{ type: String }],
//   notes: { type: String },
// });

// export interface Patient extends mongoose.Document {
//   name: string;
//   gender: string;
//   birthdate: number;
//   underlyingConditions: string[];
//   painAreas: string[];
//   notes: string;
// }

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Patient extends Document {
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
}
