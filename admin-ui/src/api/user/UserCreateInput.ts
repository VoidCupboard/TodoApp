export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  todos?: string | null;
  username: string;
};
