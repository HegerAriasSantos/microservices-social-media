import { Observable } from 'rxjs';
import { UseCase } from '@base/useCases/use-case';
import { IUserModel } from '@app/domain/user/models/user.model';
import { UserRepository } from '@domain/user/repositories/user.repository';

export class GetUserProfileUseCase implements UseCase<void, IUserModel> {
  constructor(private userRepository: UserRepository) {}

  execute(): Observable<IUserModel> {
    return this.userRepository.getUserProfile();
  }
}
