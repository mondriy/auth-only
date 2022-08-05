import { userList } from 'data/users.list';
import { User } from 'shared/models/User';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const UserService = {
  async authorization(user: User): Promise<string | Error> {
    await sleep(1000);

    const isUserExist = await userList.find((currentUser) => {
      return JSON.stringify(user) === JSON.stringify(currentUser);
    });

    if (!isUserExist) throw Error(`Пользователя ${user.login} не существует`);

    return user.login;
  },
};
