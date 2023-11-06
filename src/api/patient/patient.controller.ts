import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './schema/patient.schema';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('/')
  getAll(): Promise<Patient[]> {
    return this.patientService.getAllPatients();
  }

  @Get('/id/:id')
  getUerById(@Param('id') id: string): Promise<Patient> {
    return this.patientService.getPatientById(id);
  }

  @Get('/search')
  getPatientListBySearch(
    @Query('searchTerm') searchTerm: string,
    @Query('searchField') searchField: string,
  ): Promise<Patient[]> {
    return this.patientService.getPatientsBySearch(searchTerm, searchField);
  }

  @Post('/')
  create(@Body() patientData: Patient): Promise<Patient> {
    return this.patientService.createPatient(patientData);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() patientData: Partial<Patient>,
  ): Promise<Patient> {
    return this.patientService.updatePatient(id, patientData);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<boolean> {
    return this.patientService.deletePatient(id);
  }
}
