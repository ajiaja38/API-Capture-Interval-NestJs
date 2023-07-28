import { Module } from '@nestjs/common';
import { CaptureService } from './capture.service';
import { CaptureController } from './capture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Datahasil, DatahasilSchema } from './schema/data-capture.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Datahasil.name, schema: DatahasilSchema },
    ]),
  ],
  providers: [CaptureService],
  controllers: [CaptureController],
})
export class CaptureModule {}
