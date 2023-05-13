import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpeechTherapistService } from './speech-therapist.service';
import { CreateSpeechTherapistDto } from './dto/create-speech-therapist.dto';
import { UpdateSpeechTherapistDto } from './dto/update-speech-therapist.dto';
import { Public } from 'decorators/public.decorator';

@Controller('speech-therapist')
export class SpeechTherapistController {
  constructor(
    private readonly speechTherapistService: SpeechTherapistService,
  ) {}

  @Public()
  @Post()
  create(@Body() createSpeechTherapistDto: CreateSpeechTherapistDto) {
    return this.speechTherapistService.create(createSpeechTherapistDto);
  }
  @Public()
  @Get()
  findAll() {
    return this.speechTherapistService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speechTherapistService.findOne(+id);
  }
  @Public()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpeechTherapistDto: UpdateSpeechTherapistDto,
  ) {
    return this.speechTherapistService.update(+id, updateSpeechTherapistDto);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speechTherapistService.remove(+id);
  }
}
