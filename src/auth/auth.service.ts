// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // CAMBIO AQUÍ: Especificar el tipo de retorno de validateUser
  // Retorna el usuario sin la contraseña (User sin 'password') o null
  validateUser(username: string, pass: string): Omit<User, 'password'> | null {
    const user = this.usersService.findOne(username);
    if (!user || !user.password) {
      return null;
    }

    // Compara la contraseña proporcionada con el hash almacenado
    // const isPasswordValid = await bcrypt.compare(pass, user.password);
    const isPasswordValid = user.password == pass;

    if (isPasswordValid) {
      const { password, ...result } = user; // Excluye la contraseña hasheada del resultado
      return result; // Retorna el objeto de usuario sin la contraseña
    }
    return null; // Contraseña incorrecta
  }

  login(user: Omit<User, 'password'>) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
