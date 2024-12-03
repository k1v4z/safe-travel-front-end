export interface User {
    id: string;
    username: string;
    name: string;
    email: string;
    role: "Administrator" | "Viewer";
    status: "Active" | "Inactive";
    last_login: string;
    avatar: string;
  }
  