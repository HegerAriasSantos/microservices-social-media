import { Observable } from 'rxjs';
import { IUserModel } from '@domain/user/models/user.model';

export abstract class UserRepository {
  abstract login(params: {
    username: string;
    password: string;
  }): Observable<IUserModel>;
  abstract register(params: {
    phoneNum: string;
    password: string;
  }): Observable<IUserModel>;
  abstract getUserProfile(): Observable<IUserModel>;
  abstract resetPassword(params: { password: string }): Observable<boolean>;
}
