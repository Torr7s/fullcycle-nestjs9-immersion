import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountsController } from './bank-accounts.controller';
import { BankAccountsService } from './bank-accounts.service';

describe('BankAccountsController', (): void => {
  let controller: BankAccountsController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankAccountsController],
      providers: [BankAccountsService],
    }).compile();

    controller = module.get<BankAccountsController>(BankAccountsController);
  });

  it('should be defined', (): void => {
    expect(controller).toBeDefined();
  });
});
