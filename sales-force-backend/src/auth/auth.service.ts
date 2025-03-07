import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constants';
import { Request, Response } from 'express';
import { SigninDto } from './dto/signin.dto';



@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async signup(dto: AuthDto) {
       
        const { username, password, role, isActive, personId } = dto
        
        const foundUser = await this.prisma.employee.findUnique({ where: { username } })
        if (foundUser) {
            throw new BadRequestException('Username already exists')
        }

        const hashedPassword = await this.hashPassword(password)

        await this.prisma.employee.create({
            data: {
                username,
                hashedPassword,
                role,
                isActive,
                personId
            }
        })

        return {
            message: 'sigup was succefull'
        }
    }


    async signin(dto: SigninDto, req: Request, res: Response) {
        const { username, password } = dto
        const foundUser = await this.prisma.employee.findUnique({ where: { username } })

        if (!foundUser) {
            throw new BadRequestException('Wrong credentials')
        }

        const isMatch = await this.comparePasswords({
            password,
            hash: foundUser.hashedPassword
        })

        if (!isMatch) {
            throw new BadRequestException('Wrong password')
        }

        const token = await this.signToken({
            id: foundUser.id,
            username: foundUser.username,
            role: foundUser.role
        });

        if (!token) {
            throw new ForbiddenException()
        }

        res.cookie('token', token)

        return res.send({ message: 'Logged in succesfully' })
    }


    async signout(req: Request, res: Response) {
        res.clearCookie('token')
        return res.send({ message: 'Logged out succesfully' })
    }


    async hashPassword(password: string) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        return hashedPassword
    }

    async comparePasswords(args: { password: string, hash: string }) {
        return await bcrypt.compare(args.password, args.hash)
    }

    async signToken(args: { id: number; username: string; role: string }) {
        const payload = args
        return this.jwt.signAsync(payload, { secret: jwtSecret })
    }

    



}
