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
import { PhraseBankService } from './phrase-bank.service';
import { CreatePhraseBankDto } from './dto/create-phrase-bank.dto';
import { UpdatePhraseBankDto } from './dto/update-phrase-bank.dto';
import { Public } from 'decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFilter } from 'src/files/options/image.option';

export const storage = {
  storage: diskStorage({
    destination: './uploads',
    filename: editFileName,
  }),
  fileFilter: imageFilter,
};

@Controller('phrase-bank')
export class PhraseBankController {
  constructor(private readonly phraseBankService: PhraseBankService) {}
  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() createPhraseBankDto: CreatePhraseBankDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `http://localhost:3333/files/images/${file.filename}`;
    return this.phraseBankService.create(createPhraseBankDto, imageUrl);
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
  @UseInterceptors(FileInterceptor('image', storage))
  update(
    @Param('id') id: string,
    @Body() updatePhraseBankDto: UpdatePhraseBankDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `http://localhost:3333/files/images/${file.filename}`;
    return this.phraseBankService.update(+id, updatePhraseBankDto, imageUrl);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phraseBankService.remove(+id);
  }
}
