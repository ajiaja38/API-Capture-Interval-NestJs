import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Datahasil } from './schema/data-capture.schema';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as moment from 'moment-timezone';

@Injectable()
export class CaptureService {
  constructor(
    @InjectModel(Datahasil.name)
    private readonly captureModel: mongoose.Model<Datahasil>,
  ) {}

  async getCaptureByDeviceId(deviceId: string): Promise<any> {
    const dateTime = moment().tz('Asia/Jakarta').format('HH:mm:ss DD-MM-YYYY');

    const capture = await this.captureModel
      .findOne({ deviceId })
      .select('namafile hasil createdAt deviceId updatedAt location');

    if (!capture) {
      throw new NotFoundException(
        'Gagal mendapatkan capture terbaru, deviceId tidak ditemukan!.',
      );
    }

    return {
      ...capture.toObject(),
      dateTime,
    };
  }
}
