import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
} from '@nestjs/common';

import { BankAccountsService } from './bank-accounts.service';

import { CreateBankAccountDto } from './dto/create-bank-account.dto';

import { BankAccountEntity } from './entities/bank-account.entity';

@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto): Promise<BankAccountEntity> {
    return this.bankAccountsService.create(createBankAccountDto);
  }

  @Get()
  findAll(): Promise<BankAccountEntity[]> {
    return this.bankAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BankAccountEntity> {
    return this.bankAccountsService.findOne(id);
  }
}
