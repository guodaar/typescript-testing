import { LoginUser, NewUser, User } from "../types/user";

const mockUsers: User[] = [
  {
    id: 1,
    email: "rokas@gmail.com",
    password: "rokas",
    first_name: "Rokas",
    last_name: "Andreikenas",
    createdAt: "2023-03-02T20:30:06.000000Z",
    updatedAt: "2023-03-02T20:30:06.000000Z",
  },
  {
    id: 2,
    email: "romas@gmail.com",
    password: "romas",
    first_name: "Romas",
    last_name: "Romelis",
    createdAt: "2023-03-02T20:30:06.000000Z",
    updatedAt: "2023-03-02T20:30:06.000000Z",
  },
  {
    id: 3,
    email: "tomas@gmail.com",
    password: "tomas",
    first_name: "Tomas",
    last_name: "Tomelis",
    createdAt: "2023-03-02T20:30:06.000000Z",
    updatedAt: "2023-03-02T20:30:06.000000Z",
  },
];

export const fetchUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 1000);
  });
};

export const createUser = async (newUser: NewUser): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...newUser,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }, 1000);
  });
};

export const deleteUser = async (id: number): Promise<User> => {
  const deletedUser = mockUsers.filter((user) => user.id === id)[0];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(deletedUser);
    }, 1000);
  });
};

export const loginUser = async (loggingUser: LoginUser): Promise<User> => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser;
    const userChecker = (u: User) =>
      u.email === email && u.password === password;
    const existingUser = users.find(userChecker);

    existingUser ? resolve(existingUser) : reject("Invalid credentials");
  });
};
