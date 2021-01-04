import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [HealthCheckModule],
})
export class CommonModule {}
