import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
//import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('users')
export class UserController {
  //users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
