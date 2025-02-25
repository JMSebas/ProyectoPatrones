import { Body, Controller, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { SigninDto } from './dto/signin.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Authentication")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto)
  }

  @Post('signin')
  signin(@Body() dto: SigninDto, @Req() req, @Res() res) {
    return this.authService.signin(dto, req, res)
  }

  

  @Get('signout')
  signout(@Req() req, @Res() res) {
    return this.authService.signout(req, res)
  }



}

