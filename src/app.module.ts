import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './api/patient/patient.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://patient-health:humanscape@patient-health.waxxptg.mongodb.net/patientHealth?retryWrites=true&w=majority',
    ),
    PatientModule,
  ],
})
export class AppModule {}
