import { Store } from "simstate";

interface IUserStore {
  loggedIn: boolean;
}

export class UserStore extends Store<IUserStore> {
  state = {
    loggedIn: false,
  }

  logout = () => {
    this.setState({ loggedIn: false });
  };


}
