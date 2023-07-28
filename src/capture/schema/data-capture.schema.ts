/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface Hasil {
  baris_1: number[];
  baris_2: number[];
}

@Schema()
export class Datahasil {
  @Prop({ required: true })
  namafile: string;

  @Prop({ required: true, type: Object })
  hasil: Hasil;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  deviceId: string;

  @Prop({ required: true })
  deviceName: string;

  @Prop({ required: true })
  location: string;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const DatahasilSchema = SchemaFactory.createForClass(Datahasil);