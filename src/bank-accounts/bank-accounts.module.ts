import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { BankAccountEntity } from './entities/bank-account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BankAccountEntity
    ])
  ],
  controllers: [BankAccountsController],
  providers: [BankAccountsService]
})
export class BankAccountsModule {};
