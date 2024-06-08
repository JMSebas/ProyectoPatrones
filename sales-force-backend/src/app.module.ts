import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
// import { PrismaService } from './prisma/prisma.service';
// import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './infraestructura/prisma/prisma.module';
import { PersonModule } from './modules/person/person.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { LocationModule } from './modules/location/location.module';
import { ConsumerModule } from './modules/consumer/consumer.module';
import { PermissionModule } from './modules/permission/permission.module';
import { ModuleModule } from './modules/module/module.module';
import { QuotaModule } from './modules/quota/quota.module';
import { PaymentMethodModule } from './modules/payment-method/payment-method.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { CategoryModule } from './modules/category/category.module';
import { BrandModule } from './modules/brand/brand.module';
import { ProductModule } from './modules/product/product.module';
import { ItemModule } from './modules/item/item.module';
import { ServiceModule } from './modules/service/service.module';
import { DelegationModule } from './modules/delegation/delegation.module';
import { ChanceModule } from './modules/chance/chance.module';
import { TaskModule } from './modules/task/task.module';
import { CommentModule } from './modules/comment/comment.module';
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
  imports: [AuthModule, PrismaModule, PersonModule, EmployeeModule, LocationModule, ConsumerModule, PermissionModule, ModuleModule, QuotaModule, PaymentMethodModule, TransactionModule, CategoryModule, BrandModule, ProductModule, ItemModule, ServiceModule, DelegationModule, ChanceModule, TaskModule, CommentModule],
  providers: [PersonService, EmployeeService, LocationService, ConsumerService, PermissionService, ModuleService, QuotaService, PaymentMethodService, TransactionService, CategoryService, BrandService, ProductService, ItemService, ServiceService, DelegationService, ChanceService, TaskService, CommentService]
  // imports: [UserModule, PrismaModule],
  // controllers: [AppController],
  // providers: [AppService, PrismaService],
})
export class AppModule {}
