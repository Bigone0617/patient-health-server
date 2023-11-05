import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './schema/patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>,
  ) {}

  async getAllPatients(): Promise<Patient[]> {
    return await this.patientModel.find().exec();
  }

  async getPatientById(id: string): Promise<Patient> {
    const patient = await this.patientModel.findById(id);

    if (!patient) {
      throw new Error('유저를 찾을 수 없습니다.');
    }

    return patient;
  }

  async getPatientsBySearch(
    searchTerm: string,
    searchField: string,
  ): Promise<Patient[]> {
    let query: any = {};
    switch (searchField) {
      case 'name':
        query = { name: { $regex: searchTerm, $options: 'i' } };
        break;
      case 'underlyingConditions':
        query = { underlyingConditions: { $in: [searchTerm] } };
        break;
      case 'painAreas':
        query = { painAreas: { $in: [searchTerm] } };
        break;
      default:
        throw new Error('Invalid search field');
    }

    return await this.patientModel.find(query).exec();
  }

  async createPatient(patientData: Patient): Promise<Patient> {
    const createdPatient = new this.patientModel(patientData);
    return await createdPatient.save();
  }

  async updatePatient(
    id: string,
    patientData: Partial<Patient>,
  ): Promise<Patient> {
    return await this.patientModel
      .findByIdAndUpdate(id, patientData, { new: true })
      .exec();
  }

  async deletePatient(id: string): Promise<boolean> {
    const deletePatient = await this.patientModel.findByIdAndRemove(id).exec();
    return deletePatient ? true : false;
  }
}
