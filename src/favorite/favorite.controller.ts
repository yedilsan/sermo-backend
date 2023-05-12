import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { GetUser } from 'src/auth/decorator';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post(':phraseBankId')
  addToFavorites(
    @GetUser('id') userId: number,
    @Param('phraseBankId') phraseBankId: string,
  ) {
    return this.favoriteService.addToFavorites(userId, parseInt(phraseBankId));
  }
  @Get()
  findAll(@GetUser('id') userId: number) {
    return this.favoriteService.findAll(userId);
  }

  @Get('favorites')
  findAllFavorites(@GetUser('id') userId: number) {
    return this.favoriteService.findAllFavorites(userId);
  }

  @Delete(':id')
  remove(@GetUser('id') userId: number, @Param('id') id: string) {
    return this.favoriteService.remove(userId, +id);
  }
}
