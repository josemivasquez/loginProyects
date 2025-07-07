// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'; // Importa UsersModule
import { PassportModule } from '@nestjs/passport'; // Importa PassportModule
import { LocalStrategy } from './local.strategy'; // Importa tu estrategia
import { JwtModule } from '@nestjs/jwt'; // Importa JwtModule
import { AuthController } from './auth.controller'; // Importa AuthController

@Module({
  imports: [
    UsersModule, // Para usar UsersService
    PassportModule, // Para las estrategias de Passport
    JwtModule.register({
      secret: 'SUPER_SECRETO_NO_USAR_EN_PRODUCCION', // ¡Usa una variable de entorno en producción!
      signOptions: { expiresIn: '60s' }, // Token válido por 60 segundos
    }),
  ],
  providers: [AuthService, LocalStrategy], // Registra AuthService y la estrategia
  controllers: [AuthController], // Registra AuthController
})
export class AuthModule {}
