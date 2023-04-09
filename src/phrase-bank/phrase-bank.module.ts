import { Module } from '@nestjs/common';
import { PhraseBankService } from './phrase-bank.service';
import { PhraseBankController } from './phrase-bank.controller';

@Module({
  controllers: [PhraseBankController],
  providers: [PhraseBankService],
})
export class PhraseBankModule {}
