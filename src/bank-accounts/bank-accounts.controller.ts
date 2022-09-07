import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param,
  HttpCode, 
} from '@nestjs/common';

import { BankAccountsService } from './bank-accounts.service';

import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { TransferBankAccountDto } from './dto/transfer-bank-account.dto';

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

  @HttpCode(204)
  @Post('transfer')
  transfer(@Body() transferDto: TransferBankAccountDto): Promise<void> {
    return this.bankAccountsService.transfer(
      transferDto.from,
      transferDto.to,
      transferDto.amount
    );
  }
}
