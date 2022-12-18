import { Observable } from 'rxjs';
import { UseCase } from '@base/useCases/use-case';
import { IUserModel } from '@domain/user/models/user.model';
import { UserRepository } from '@domain/user/repositories/user.repository';

export class UserRegisterUseCase
  implements UseCase<{ phoneNum: string; password: string }, IUserModel>
{
  constructor(private userRepository: UserRepository) {}

  execute(params: {
    phoneNum: string;
    password: string;
  }): Observable<IUserModel> {
    return this.userRepository.register(params);
  }
}
