export type UserRow = {
  id: number;
  email: string;
  name: string | null;
  createdAt: string;
};

export type UserFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Partial<Record<'email' | 'name' | 'password', string>>;
};
