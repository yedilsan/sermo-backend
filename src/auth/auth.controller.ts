import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Public } from 'decorators/public.decorator';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AuthLoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
  @Public()
  @Post('signin')
  signin(@Body() dto: AuthLoginDto) {
    return this.authService.signin(dto);
  }
}
