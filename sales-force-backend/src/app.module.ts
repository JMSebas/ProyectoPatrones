import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';


import { TaskModule } from './features/task/infrastructure/task.module';
import { CategoryModule } from './features/category/infrastructure/category.module'; 
import { ChanceModule } from './features/chance/infrastructure/chance.module'; 
import { ConsumerModule } from './features/consumer/infrastructure/consumer.module';
import { DelegationModule } from './features/delegation/infrastructure/delegation.module';
import { EmployeeModule } from './features/employee/infrastructure/employee.module';
import { LocationModule } from './features/location/infrastructure/location.module'; 
import { ItemModule } from './features/item/infrastructure/item.module';
import { PaymentMethodModule } from './features/payment-method/infrastructure/payment-method.module'; 
import { PermissionModule } from './features/permission/infrastructure/permission.module';
import { PersonModule } from './features/person/infrastructure/person.module'; 
import { ProductModule } from './features/product/infrastructure/product.module'; 
import { QuotaModule } from './features/quota/infrastructure/quota.module'; 
import { TransactionModule } from './features/transaction/infrastructure/transaction.module';
import { ModuleModule } from './features/module/infrastructure/module.module';
import { ServiceModule } from './features/service/infrastructure/service.module';
import { EventEmitterModule } from '@nestjs/event-emitter';




@Module({

  imports: [AuthModule, 
    PrismaModule,  
    TaskModule,  
    CategoryModule, 
    ChanceModule, 
    ConsumerModule, 
    DelegationModule, 
    EmployeeModule, 
    LocationModule, 
    ItemModule, 
    PaymentMethodModule, 
    PermissionModule, 
    PersonModule, 
    ProductModule, 
    QuotaModule, 
    TransactionModule, 
    ModuleModule, 
    ServiceModule,
    EventEmitterModule.forRoot()
    
  ],

})
export class AppModule {}
