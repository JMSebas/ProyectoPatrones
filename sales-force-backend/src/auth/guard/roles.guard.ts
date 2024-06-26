import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();

       
        const cookieHeader = request.headers.cookie;
        if (!cookieHeader) {
            return false;
        }

        const cookies = cookieHeader.split('; ');
        const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
        if (!tokenCookie) {
            return false;
        }

       
        const tokenValue = tokenCookie.split('=')[1];
        const token = this.jwtService.decode(tokenValue);
        if (!token) {
            return false;
        }

        const userRole = token['role'];
        return roles.includes(userRole);
    }
}

