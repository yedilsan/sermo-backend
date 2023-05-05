import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';
import { unlink } from 'fs/promises';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, editUserDto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName: editUserDto.firstName,
        lastName: editUserDto.lastName,
      },
    });

    delete user.hash;

    return user;
  }
  async editImage(userId: number, file: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const previousAvatar = user.avatar;
    if (previousAvatar) {
      try {
        const avatarPath = previousAvatar.split(
          'http://localhost:3333/users/image/',
        )[1];
        await unlink(`./uploads/profileimages/${avatarPath}`);
      } catch (error) {
        console.error(`Error deleting previous avatar: ${error.message}`);
      }
    }
    const userUpdate = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar: file,
      },
    });

    delete userUpdate.hash;

    return userUpdate;
  }
  async getUsername(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
}
