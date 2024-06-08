import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
// import { PrismaService } from './prisma/prisma.service';
// import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

import { PersonService } from './core/application/services/person/person.service';
import { EmployeeService } from './core/application/services/employee/employee.service';
import { LocationService } from './core/application/services/location/location.service';
import { ConsumerService } from './core/application/services/consumer/consumer.service';
import { PermissionService } from './core/application/services/permission/permission.service';
import { ModuleService } from './core/application/services/module/module.service';
import { QuotaService } from './core/application/services/quota/quota.service';
import { PaymentMethodService } from './core/application/services/payment-method/payment-method.service';
import { TransactionService } from './core/application/services/transaction/transaction.service';
import { CategoryService } from './core/application/services/category/category.service';
import { BrandService } from './core/application/services/brand/brand.service';
import { ProductService } from './core/application/services/product/product.service';
import { ItemService } from './core/application/services/item/item.service';
import { ServiceService } from './core/application/services/service/service.service';
import { DelegationService } from './core/application/services/delegation/delegation.service';
import { ChanceService } from './core/application/services/chance/chance.service';
import { TaskService } from './core/application/services/task/task.service';
import { CommentService } from './core/application/services/comment/comment.service';



@Module({
  imports: [AuthModule, PrismaModule],
  providers: [PersonService, EmployeeService, LocationService, ConsumerService, PermissionService, ModuleService, QuotaService, PaymentMethodService, TransactionService, CategoryService, BrandService, ProductService, ItemService, ServiceService, DelegationService, ChanceService, TaskService, CommentService]
  // imports: [UserModule, PrismaModule],
  // controllers: [AppController],
  // providers: [AppService, PrismaService],
})
export class AppModule {}
