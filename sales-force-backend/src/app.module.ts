import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
// import { PrismaService } from './prisma/prisma.service';
// import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

import { BrandModule } from './features/brand/infrastructure/brand.module';
import { BrandController } from './features/brand/infrastructure/controllers/brand.controller';
import { BrandService } from './features/brand/application/services/brand.service';






@Module({
  imports: [AuthModule, PrismaModule, BrandModule,
    
  ],
  providers: [BrandService,

  ],
  controllers: [ BrandController,

  ]
  // imports: [UserModule, PrismaModule],
  // controllers: [AppController],
  // providers: [AppService, PrismaService],
})
export class AppModule {}
