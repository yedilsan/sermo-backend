import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhraseBankService } from './phrase-bank.service';
import { CreatePhraseBankDto } from './dto/create-phrase-bank.dto';
import { UpdatePhraseBankDto } from './dto/update-phrase-bank.dto';
import { Public } from 'decorators/public.decorator';

@Controller('phrase-bank')
export class PhraseBankController {
  constructor(private readonly phraseBankService: PhraseBankService) {}
  @Public()
  @Post()
  create(@Body() createPhraseBankDto: CreatePhraseBankDto) {
    return this.phraseBankService.create(createPhraseBankDto);
  }
  @Public()
  @Get()
  findAll() {
    return this.phraseBankService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phraseBankService.findOne(+id);
  }
  @Public()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhraseBankDto: UpdatePhraseBankDto,
  ) {
    return this.phraseBankService.update(+id, updatePhraseBankDto);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phraseBankService.remove(+id);
  }
}
