import { Store } from "simstate";

interface IUiStore {
  registerModalShown: boolean;
  loginModalShown: boolean;
}

export class UiStore extends Store<IUiStore> {

  state = {
    registerModalShown: false,
    loginModalShown: false,
  };

  toggleLoginModalShown = () => {
    this.setState({ loginModalShown: !this.state.loginModalShown });
  }

  toggleRegisterModalShown = () => {
    this.setState({ registerModalShown: !this.state.registerModalShown });
  }

}
