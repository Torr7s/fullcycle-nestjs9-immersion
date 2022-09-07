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

  async transfer(from: string, to: string, amount: number): Promise<void> {
    const fromAccount: BankAccountEntity = await this.repository.findOneBy({ account_number: from });
    const toAccount: BankAccountEntity = await this.repository.findOneBy({ account_number: to });

    fromAccount.balance -= amount;
    toAccount.balance += amount;

    await this.repository.save(fromAccount);
    await this.repository.save(toAccount);
  }
}
