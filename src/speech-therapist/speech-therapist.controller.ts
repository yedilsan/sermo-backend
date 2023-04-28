import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeechTherapistService } from './speech-therapist.service';
import { CreateSpeechTherapistDto } from './dto/create-speech-therapist.dto';
import { UpdateSpeechTherapistDto } from './dto/update-speech-therapist.dto';

@Controller('speech-therapist')
export class SpeechTherapistController {
  constructor(private readonly speechTherapistService: SpeechTherapistService) {}

  @Post()
  create(@Body() createSpeechTherapistDto: CreateSpeechTherapistDto) {
    return this.speechTherapistService.create(createSpeechTherapistDto);
  }

  @Get()
  findAll() {
    return this.speechTherapistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speechTherapistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeechTherapistDto: UpdateSpeechTherapistDto) {
    return this.speechTherapistService.update(+id, updateSpeechTherapistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speechTherapistService.remove(+id);
  }
}
