import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { PurpleHealthCheckService } from './health-check.service';

@Module({
  imports: [TerminusModule],
  providers: [PurpleHealthCheckService],
  exports: [PurpleHealthCheckService],
})
export class HealthCheckModule {}
