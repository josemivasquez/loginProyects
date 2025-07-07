import { UsersService, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Omit<User, 'password'> | null;
    login(user: Omit<User, 'password'>): {
        access_token: string;
    };
}
