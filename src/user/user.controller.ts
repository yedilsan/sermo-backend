import { Body, Controller, Get, Patch } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
//import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { Public } from 'decorators/public.decorator';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  //users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
