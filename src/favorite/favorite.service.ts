import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Favorite } from '@prisma/client';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  async addToFavorites(
    userId: number,
    phraseBankId: number,
  ): Promise<Favorite> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const phraseBank = await this.prisma.phraseBank.findUnique({
      where: { id: phraseBankId },
    });

    if (!phraseBank) {
      throw new NotFoundException('Phrase bank not found');
    }

    const favorite = await this.prisma.favorite.create({
      data: {
        user: { connect: { id: userId } },
        phraseBank: { connect: { id: phraseBankId } },
      },
    });

    return favorite;
  }

  async findAll(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        favorites: {
          include: {
            phraseBank: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user.favorites.map((favorite) => favorite.phraseBank);
  }

  findAllFavorites(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: { phraseBank: { include: { phrases: true } } },
    });
  }

  remove(userId: number, id: number) {
    return this.prisma.favorite.delete({
      where: {
        id,
      },
    });
  }
}
