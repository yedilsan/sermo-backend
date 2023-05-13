import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise-category.dto';
import { unlink } from 'fs/promises';

@Injectable()
export class ExerciseCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(
    createExerciseCategoryDto: CreateExerciseCategoryDto,
    imageURL: string,
  ) {
    return this.prisma.exerciseCategory.create({
      data: {
        text: createExerciseCategoryDto.text,
        image: imageURL,
      },
    });
  }

  findAll() {
    return this.prisma.exerciseCategory.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.exerciseCategory.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateExerciseCategoryDto: UpdateExerciseCategoryDto,
    imageURL: string,
  ) {
    const category = await this.prisma.exerciseCategory.findUnique({
      where: {
        id,
      },
    });
    if (!category) {
      throw new NotFoundException('Exercise cateogry not found');
    }
    if (category.image) {
      try {
        const imagePath = category.image.split(
          'http://localhost:3333/files/images/',
        )[1];
        await unlink(`./uploads/${imagePath}`);
      } catch (error) {
        console.error(`Error deleting previous image: ${error.message}`);
      }
    }

    return this.prisma.exerciseCategory.update({
      where: {
        id,
      },
      data: {
        text: updateExerciseCategoryDto.text,
        image: imageURL,
      },
    });
  }

  remove(id: number) {
    return this.prisma.exerciseCategory.delete({
      where: {
        id,
      },
    });
  }
}
