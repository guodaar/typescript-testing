export type User = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  id: number;
  createdAt: string;
  updatedAt: string;
};

export type LoginUser = Omit<User, "createdAt" | "updatedAt">;
