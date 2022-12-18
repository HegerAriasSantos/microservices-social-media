import { UseCase } from '@app/base/useCases/use-case';
import { Observable } from 'rxjs';
import { IUserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class UserResetPasswordUseCase
  implements UseCase<{ password: string }, boolean>
{
  constructor(private userRepository: UserRepository) {}

  execute(params: { password: string }): Observable<boolean> {
    return this.userRepository.resetPassword(params);
  }
}
