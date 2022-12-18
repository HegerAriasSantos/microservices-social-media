import { UserRepository } from '../repositories/user.repository';
import { GetUserProfileUseCase } from './get-user-profile.usecase';
import { UserLoginUseCase } from './user-login.usecase';
import { UserRegisterUseCase } from './user-register.usecase';
import { UserResetPasswordUseCase } from './reset-user-password.usecase';

const userLoginUseCaseFactory = (userRepo: UserRepository) =>
  new UserLoginUseCase(userRepo);

const userLoginUseCaseProvider = {
  provide: UserLoginUseCase,
  useFactory: userLoginUseCaseFactory,
  deps: [UserRepository],
};

const userRegisterUseCaseFactory = (userRepo: UserRepository) =>
  new UserRegisterUseCase(userRepo);

const userRegisterUseCaseProvider = {
  provide: UserRegisterUseCase,
  useFactory: userRegisterUseCaseFactory,
  deps: [UserRepository],
};

const getUserProfileUseCaseFactory = (userRepo: UserRepository) =>
  new GetUserProfileUseCase(userRepo);
const getUserProfileUseCaseProvider = {
  provide: GetUserProfileUseCase,
  useFactory: getUserProfileUseCaseFactory,
  deps: [UserRepository],
};

const resetUserPasswordUseCaseFactory = (userRepo: UserRepository) =>
  new UserResetPasswordUseCase(userRepo);

const resetUserPasswordUseCaseProvider = {
  provide: UserResetPasswordUseCase,
  useFactory: resetUserPasswordUseCaseFactory,
  deps: [UserRepository],
};

export const userUseCases = [
  userLoginUseCaseProvider,
  userRegisterUseCaseProvider,
  getUserProfileUseCaseProvider,
  resetUserPasswordUseCaseProvider,
];
