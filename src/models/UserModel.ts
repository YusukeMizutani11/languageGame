import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

async function allUserData(): Promise<User[]> {
  const allUsers = await userRepository.find();
  return allUsers;
}

async function addUser(
  email: string,
  passwordHash: string,
  userName: string,
  libraryId: string
): Promise<User> {
  // Create the new user object
  let newUser = new User();
  newUser.email = email;
  newUser.passwordHash = passwordHash;
  newUser.userName = userName;
  newUser.libraryId = libraryId;

  console.log(userName);
  console.log('define username');

  // Then save it to the database
  // NOTES: We reassign to `newUser` so we can access
  // NOTES: the fields the database autogenerates (the id & default columns)
  newUser = await userRepository.save(newUser);

  return newUser;
}

async function getUserByEmail(email: string): Promise<User | null> {
  return userRepository.findOne({ where: { email } });
}

async function getUserById(userId: string): Promise<User | null> {
  const user = await userRepository.findOne({ where: { userId } });
  return user;
}

async function getUsersByViews(minViews: number): Promise<User[]> {
  const users = await userRepository
    .createQueryBuilder('user')
    .where('profileViews >= :minViews', { minViews }) // NOTES: the parameter `:minViews` must match the key name `minViews`
    .select(['user.email', 'user.profileViews', 'user.joinedOn', 'user.userId'])
    .getMany();

  return users;
}

async function updateEmailAddress(userId: string, newEmail: string): Promise<User | null> {
  const user = await getUserById(userId);

  if (user) {
    await userRepository
      .createQueryBuilder()
      .update(User)
      .set({ email: newEmail })
      .where({ userId: user.userId })
      .execute();
  }

  return user;
}

export { allUserData, addUser, getUserByEmail, getUserById, getUsersByViews, updateEmailAddress };
