import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Injectable()
export class BankAccountsService {
  create(createBankAccountDto: CreateBankAccountDto): string {
    return 'This action adds a new bankAccount';
  }

  findAll(): string {
    return `This action returns all bankAccounts`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} bankAccount`;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto): string {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number): string {
    return `This action removes a #${id} bankAccount`;
  }
}
