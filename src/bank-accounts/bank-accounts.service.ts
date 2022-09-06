import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBankAccountDto } from './dto/create-bank-account.dto';

import { BankAccountEntity } from './entities/bank-account.entity';

@Injectable()
export class BankAccountsService {
  constructor(
    @InjectRepository(BankAccountEntity)
    private repository: Repository<BankAccountEntity>
  ) {};

  async create({ account_number }: CreateBankAccountDto): Promise<BankAccountEntity> {
    const bankAccount: BankAccountEntity = this.repository.create({
      account_number,
      balance: 0
    });

    await this.repository.insert(bankAccount);

    return bankAccount;
  }

  async findAll(): Promise<BankAccountEntity[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<BankAccountEntity> {
    return this.repository.findOneBy({ id });
  }
}
