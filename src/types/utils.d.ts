type DatabaseConstraintError = {
  type: 'unique' | 'check' | 'not null' | 'foreign key' | 'unknown';
  columnName?: string;
  message?: string;
};

type AuthRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
  libraryId: string;
};
