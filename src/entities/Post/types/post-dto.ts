export interface PostDTO {
  id: number;
  title: string;
  body: string;
  tags: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    login: string;
    last_name: string;
    first_name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}
