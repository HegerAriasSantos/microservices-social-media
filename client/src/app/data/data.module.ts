import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { UserImplementationRepository } from './repositories/user/user-implementation.repository';
import { userUseCases } from '../domain/user/usecases';

@NgModule({
  providers: [
    ...userUseCases,
    { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
