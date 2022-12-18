import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserEntity } from '@repositories/user/entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { IUserModel } from '@domain/user/models/user.model';
import { Injectable } from '@angular/core';
import { BaseService } from '@base/services/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();

  constructor(private BaseService: BaseService) {
    super();
  }

  login(params: {
    username: string;
    password: string;
  }): Observable<IUserModel> {
    return this.BaseService.Post<IUserEntity>('https://example.com/login', {
      params,
    }).pipe(map(this.userMapper.mapFrom));
  }
  register(params: {
    phoneNum: string;
    password: string;
  }): Observable<IUserModel> {
    return this.BaseService.Post<IUserEntity>('https://example.com/register', {
      params,
    }).pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<IUserModel> {
    return this.BaseService.Get<IUserEntity>('https://example.com/user').pipe(
      map(this.userMapper.mapFrom)
    );
  }
  resetPassword(params: { password: string }): Observable<boolean> {
    return this.BaseService.Get<boolean>('https://example.com/reset-password');
  }
}
