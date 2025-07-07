import { Injectable } from '@nestjs/common';

export type User = { userId: number; username: string; password?: string };

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'testuser',
      password: 'testpassword', // ¡No uses contraseñas planas en producción!
    },
    {
      userId: 2,
      username: 'john',
      password: 'doe',
    },
  ];

  findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
}
