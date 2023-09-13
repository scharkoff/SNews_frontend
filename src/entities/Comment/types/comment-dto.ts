import { PostDTO } from '@/entities/Post/types/post-dto';
import { UserDTO } from '@/entities/User/types/user-dto';

export interface CommentDTO {
  id: number;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: UserDTO;
  post: PostDTO;
}
