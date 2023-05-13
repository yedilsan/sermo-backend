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
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Public } from 'decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/category/category.controller';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}
  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('image', storage))
  create(
    @Body() createExerciseDto: CreateExerciseDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `http://localhost:3333/files/images/${file.filename}`;
    return this.exercisesService.create(createExerciseDto, imageUrl);
  }
  @Public()
  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exercisesService.findOne(+id);
  }
  @Public()
  @Get('exerciseSubCategory/:exerciseSubCategoryId')
  findByExerciseSubCategoryId(
    @Param('exerciseSubCategoryId') exerciseSubCategoryId: string,
  ) {
    return this.exercisesService.findByExerciseSubCategoryId(
      +exerciseSubCategoryId,
    );
  }

  @Public()
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', storage))
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `http://localhost:3333/files/images/${file.filename}`;
    return this.exercisesService.update(+id, updateExerciseDto, imageUrl);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exercisesService.remove(+id);
  }
}
