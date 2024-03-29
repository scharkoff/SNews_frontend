import { UserDTO } from '@/entities/User/types/user-dto';

export interface PostDTO {
  id: number;
  title: string;
  body: string;
  tags: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  user: UserDTO;
}
