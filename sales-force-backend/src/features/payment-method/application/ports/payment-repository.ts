import { PaymentMethod } from "@prisma/client";
import { CreatePaymentMethodDto } from "../dto/create-payment-method.dto";
import { UpdatePaymentMethodDto } from "../dto/update-payment-method.dto";

export interface PaymentMethodServiceInterface {

    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod>;
    findAll(): Promise<PaymentMethod[]>;
    findOne(id: number): Promise<PaymentMethod | null>;
    update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<PaymentMethod>;
    remove(id: number): Promise<PaymentMethod>;
  }
  