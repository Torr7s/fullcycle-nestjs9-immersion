import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountsService } from './bank-accounts.service';

describe('BankAccountsService', (): void => {
  let service: BankAccountsService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccountsService],
    }).compile();

    service = module.get<BankAccountsService>(BankAccountsService);
  });

  it('should be defined', (): void => {
    expect(service).toBeDefined();
  });
});
