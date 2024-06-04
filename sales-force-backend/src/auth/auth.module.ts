import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import {JwtModule} from '@nestjs/jwt'
import { jwtSecret } from 'src/utils/constants';

@Module({
  imports: [PrismaModule, JwtModule,
    JwtModule.register({
      secret: jwtSecret, // Aquí debes proporcionar tu clave secreta
      signOptions: { expiresIn: '60m' }, // Opciones de firma del token
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}



