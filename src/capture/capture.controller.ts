import { Controller, Param, Get } from '@nestjs/common';
import { CaptureService } from './capture.service';

@Controller('capture')
export class CaptureController {
  constructor(private readonly captureService: CaptureService) {}

  @Get('/:id')
  async getCaptureById(@Param('id') deviceId: string): Promise<object> {
    const capture = await this.captureService.getCaptureByDeviceId(deviceId);

    return {
      status: 'success',
      message: 'berhasil get capture',
      data: capture,
    };
  }
}
