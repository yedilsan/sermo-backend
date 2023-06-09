import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser, Roles } from 'src/auth/decorator';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFilter } from 'src/files/options/image.option';
import { Response } from 'express';
import { Public } from 'decorators/public.decorator';

export const storage = {
  storage: diskStorage({
    destination: './uploads/profileimages',
    filename: editFileName,
  }),
  fileFilter: imageFilter,
};

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  //users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
  @Roles('ADMIN')
  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }

  //@UseGuards(JwtGuard)
  @Patch('edit')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    console.log(userId);
    return this.userService.editUser(userId, dto);
  }
  @Patch('avatar')
  @UseInterceptors(FileInterceptor('avatar', storage))
  uploadImage(
    @GetUser('id') userId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Not correct file type');
    } else {
      return this.userService.editImage(
        userId,
        `https://sermo-backend.onrender.com/users/image/${file.filename}`,
      );
    }
  }
  @Public()
  @Get('image/:filename')
  async getAvatar(
    @Param('filename') filename,
    @Res() res: Response<Express.Response>,
  ) {
    res.sendFile(filename, { root: './uploads/profileimages' });
  }
}
