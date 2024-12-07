export interface User {
  id: string;
  username: string;
  roles: {
    role: {
      id: string;
      name: string;
    };
  }[];  
  last_login: string;
  status: string;
  avatar: string;
}
