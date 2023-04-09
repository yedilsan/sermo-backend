import { PartialType } from '@nestjs/mapped-types';
import { CreatePhraseBankDto } from './create-phrase-bank.dto';

export class UpdatePhraseBankDto extends PartialType(CreatePhraseBankDto) {}
