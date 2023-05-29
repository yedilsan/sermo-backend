import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { unlink } from 'fs/promises';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto, imageURL: string) {
    return await this.prisma.category.create({
      data: {
        text: createCategoryDto.text,
        image: imageURL,
      },
    });
  }

  findAll() {
    return this.prisma.category.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
    imageURL: string,
  ) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    if (category.image) {
      try {
        const imagePath = category.image.split(
          'https://sermo-backend.onrender.com/files/images/',
        )[1];
        await unlink(`./uploads/${imagePath}`);
      } catch (error) {
        console.error(`Error deleting previous image: ${error.message}`);
      }
    }

    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        text: updateCategoryDto.text,
        image: imageURL,
      },
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
