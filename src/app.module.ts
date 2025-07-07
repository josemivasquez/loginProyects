// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module'; // ¡Importa AuthModule!

@Module({
  imports: [UsersModule, AuthModule], // Añade UsersModule y AuthModule
  controllers: [], // Si lo tienes
  providers: [], // Si lo tienes
})
export class AppModule {}
