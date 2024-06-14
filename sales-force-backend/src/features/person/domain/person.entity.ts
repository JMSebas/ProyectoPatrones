// import { Prisma, PrismaClient } from "@prisma/client";
// import { PrismaService } from "src/prisma/prisma.service";

// export class Person {
//     constructor(private readonly prismaService: PrismaService) {
//         this.addMiddlewares();
//     }

//     private addMiddlewares() {
//         this.prismaService.$use(async (params, next) => {
//             if (params.model === 'Person') {
//                 const result = await next(params);

//                 if (params.action === 'create') {
//                     await this.prismaService.comment.create({
//                         data: {
//                             personId: result.id,
//                             content: `Persona creada con ID: ${result.id}`
//                         }
//                     });
//                 } else if (params.action === 'update') {
//                     await this.prismaService.comment.create({
//                         data: {
//                             personId: params.args.where.id,
//                             content: `Persona actualizada con ID: ${params.args.where.id}`
//                         }
//                     });
//                 }

//                 return result;
//             }

//             return next(params);
//         });
//     }
// }
