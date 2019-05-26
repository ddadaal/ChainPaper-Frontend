import { Store } from "simstate";

interface User {
  username: string;
  token: string;
}

interface IUserStore {
  loggedIn: boolean;
  user: User | null;
}

export class UserStore extends Store<IUserStore> {
  state = {
    loggedIn: false,
    user: null,
  } as IUserStore;

  logout = () => {
    this.setState({ user: null, loggedIn: false });
  };

  login = (username: string, token: string) => {
    this.setState({
      user: { username, token },
      loggedIn: true,
    });
  }


}
