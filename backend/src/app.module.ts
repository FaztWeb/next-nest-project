import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
