import {
  Controller,
  Get,
  Param,
  Res,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpStatus,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FilesService } from './files.service';
import { Response } from 'express';
import { Public } from 'decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFilter } from '../files/options/image.option';
import { diskStorage } from 'multer';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Public()
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return {
      status: HttpStatus.OK,
      message: 'Image uploaded successfully!',
      data: response,
    };
  }
  @Public()
  @Get('images/:name')
  findOne(@Param('name') name: string, @Res() res: Response) {
    const file = createReadStream(join(process.cwd(), `/uploads/${name}`));
    file.pipe(res);
  }
}
