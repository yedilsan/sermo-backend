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
import { ExerciseCategoryService } from './exercise-category.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise-category.dto';
import { Public } from 'decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/category/category.controller';

@Controller('exercise-category')
export class ExerciseCategoryController {
  constructor(
    private readonly exerciseCategoryService: ExerciseCategoryService,
  ) {}
  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() createExerciseCategoryDto: CreateExerciseCategoryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `https://sermo-backend.onrender.com/files/images/${file.filename}`;
    return this.exerciseCategoryService.create(
      createExerciseCategoryDto,
      imageUrl,
    );
  }
  @Public()
  @Get()
  findAll() {
    return this.exerciseCategoryService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseCategoryService.findOne(+id);
  }
  @Public()
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', storage))
  update(
    @Param('id') id: string,
    @Body() updateExerciseCategoryDto: UpdateExerciseCategoryDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `https://sermo-backend.onrender.com/files/images/${file.filename}`;
    return this.exerciseCategoryService.update(
      +id,
      updateExerciseCategoryDto,
      imageUrl,
    );
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseCategoryService.remove(+id);
  }
}
