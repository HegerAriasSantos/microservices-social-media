import { Mapper } from '@base/mapper/mapper';
import { IUserModel } from '@app/domain/user/models/user.model';
import { IUserEntity } from '@repositories/user/entities/user-entity';

export class UserImplementationRepositoryMapper extends Mapper<
  IUserEntity,
  IUserModel
> {
  mapFrom(param: IUserEntity): IUserModel {
    return {
      id: param.id,
      fullName: param.name,
      username: param.userName,
      email: param.email,
      profilePicture: param.userPicture,
      activationStatus: param.activationStatus,
      createdAt: param.createdAt,
    };
  }
  mapTo(param: IUserModel): IUserEntity {
    return {
      id: param.id,
      name: param.fullName,
      userName: param.username,
      email: param.email,
      userPicture: param.profilePicture,
      activationStatus: param.activationStatus,
      createdAt: param.createdAt,
    };
  }
}
