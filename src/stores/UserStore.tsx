import { Store } from "simstate";

interface User {
  username: string;
  token: string;
}

interface IUserStore {
  loggedIn: boolean;
  user: User | null;
}

const STORAGE_KEY = "User";

export function getUserInfoInStorage(): User | null {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data) as User;
  } else {
    return null;
  }
}

export class UserStore extends Store<IUserStore> {
  state = {
    loggedIn: false,
    user: getUserInfoInStorage(),
  } as IUserStore;

  constructor() {
    super();
    const data = getUserInfoInStorage();
    this.state = {
      loggedIn: !!data,
      user: data
    };
  }

  logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    this.setState({ user: null, loggedIn: false });
  };

  login = (username: string, token: string) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username, token }));
    this.setState({
      user: { username, token },
      loggedIn: true,
    });
  }


}
