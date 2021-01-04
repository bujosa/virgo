import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { CurboHealthCheckService } from './health-check.service';

@Module({
  imports: [TerminusModule],
  providers: [CurboHealthCheckService],
  exports: [CurboHealthCheckService],
})
export class HealthCheckModule {}
