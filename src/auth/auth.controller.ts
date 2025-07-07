// src/auth/auth.controller.ts
import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; // Importa AuthGuard
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto'; // Importa el DTO

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local')) // Usa la estrategia 'local'
  login(@Request() req, @Body() loginDto: LoginDto) {
    return this.authService.login(req.user); // req.user es el resultado de LocalStrategy.validate()
  }
}
