import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PhrasesService } from './phrases.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';
import { Public } from 'decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { audioFilter, editFileName } from 'src/files/options/image.option';

export const storage = {
  storage: diskStorage({
    destination: './audios',
    filename: editFileName,
  }),
  fileFilter: audioFilter,
};

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('sound', storage))
  create(
    @Body() createPhraseDto: CreatePhraseDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('filefnsdig');
    const soundUrl = `http://localhost:3333/files/audio/${file.filename}`;
    return this.phrasesService.create(createPhraseDto, soundUrl);
  }

  @Public()
  @Get()
  findAll() {
    return this.phrasesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phrasesService.findOne(+id);
  }

  @Public()
  @Get('phraseBank/:phraseBankId')
  findByPhraseBankId(@Param('phraseBankId') phraseBankId: string) {
    return this.phrasesService.findByPhraseBankId(+phraseBankId);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('sound', storage))
  update(
    @Param('id') id: string,
    @Body() updatePhraseDto: UpdatePhraseDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const soundUrl = `http://localhost:3333/files/audio/${file.filename}`;
    return this.phrasesService.update(+id, updatePhraseDto, soundUrl);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phrasesService.remove(+id);
  }
}
