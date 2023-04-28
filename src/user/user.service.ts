import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    delete user.hash;

    return user;
  }
  async editImage(userId: number, file: string) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar: file,
      },
    });

    delete user.hash;

    return user;
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
