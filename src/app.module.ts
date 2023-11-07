import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './api/patient/patient.module';

@Module({
  imports: [
    MongooseModule.forRoot('여기에 이메일에서 받은 값을 넣어주세요!'),
    PatientModule,
  ],
})
export class AppModule {}
