import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
// import { PrismaService } from './prisma/prisma.service';
// import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

import { BrandModule } from './features/brand/infrastructure/brand.module';
import { TaskModule } from './features/task/infrastructure/task.module';
import { CommentModule } from './features/comment/infrastructure/comment.module';
import { CategoryModule } from './features/category/infrastructure/category.module'; 
import { ChanceModule } from './features/chance/infrastructure/chance.module'; 
import { ConsumerModule } from './features/consumer/consumer/consumer.module';
import { DelegationModule } from './features/delegation/delegation/delegation.module';
import { EmployeeModule } from './features/employee/employee/employee.module';
import { LocationModule } from './features/location/location/location.module';
import { ItemModule } from './features/item/item/item.module';
import { PaymentMethodModule } from './features/payment-method/payment-method/payment-method.module';
import { PermissionModule } from './features/permission/permission/permission.module';
import { PersonModule } from './features/person/infrastructure/person.module'; 
import { ProductModule } from './features/product/product/product.module';
import { QuotaModule } from './features/quota/quota/quota.module';
import { TransactionModule } from './features/transaction/transaction/transaction.module';






@Module({
  imports: [AuthModule, PrismaModule, BrandModule, TaskModule, CommentModule, CategoryModule, ChanceModule, ConsumerModule, DelegationModule, EmployeeModule, LocationModule, ItemModule, PaymentMethodModule, PermissionModule, PersonModule, ProductModule, QuotaModule, TransactionModule,
    
  ],

  // controllers: [AppController],
  // providers: [AppService, PrismaService],
})
export class AppModule {}
