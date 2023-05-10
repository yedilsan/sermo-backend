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
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Public } from 'decorators/public.decorator';
import { Roles } from 'src/auth/decorator';
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

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //@Roles('ADMIN')
  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('filefnsdig');
    const imageUrl = `http://localhost:3333/files/images/${file.filename}`;
    return this.categoryService.create(createCategoryDto, imageUrl);
  }
  @Public()
  @Get()
  findAll() {
    console.log('find all');
    return this.categoryService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }
  @Public()
  @Patch(':id')
  //@Roles('ADMIN')
  @UseInterceptors(FileInterceptor('image', storage))
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `http://localhost:3333/files/images/${file.filename}`;
    return this.categoryService.update(+id, updateCategoryDto, imageUrl);
  }
  @Public()
  @Delete(':id')
  //@Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
