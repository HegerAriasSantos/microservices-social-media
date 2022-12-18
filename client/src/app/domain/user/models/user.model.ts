export interface IUserModel {
  id: string;
  fullName: string;
  username: string;
  email: string;
  createdAt: Date;
  profilePicture: string;
  activationStatus: boolean;
}
