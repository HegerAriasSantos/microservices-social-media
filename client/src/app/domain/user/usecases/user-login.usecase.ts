import { Observable } from 'rxjs';
import { UseCase } from '@base/useCases/use-case';
import { IUserModel } from '@app/domain/user/models/user.model';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { IUserDTO } from '../models/DTOs/userDTO';

export class UserLoginUseCase implements UseCase<IUserDTO, IUserModel> {
  constructor(private userRepository: UserRepository) {}

  execute(params: IUserDTO): Observable<IUserModel> {
    return this.userRepository.login(params);
  }
}
