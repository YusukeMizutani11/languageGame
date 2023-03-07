type DatabaseConstraintError = {
  type: 'unique' | 'check' | 'not null' | 'foreign key' | 'unknown';
  columnName?: string;
  message?: string;
};

type AuthRequest = {
  email: string;
  password: string;
  userName: string;
  libraryId: string;
};

type UserIdParam = {
  userId: string;
};

type NewEmailBody = {
  email: string;
};
