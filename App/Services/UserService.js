export default class UserService {
  constructor(options) {
    this.userGateway = options.userGateway;
  }

  async signUp(user) {
    return this.userGateway.signUp(user);
  }

  async logIn({phone, password}) {
    const {accessToken} = this.userGateway.logIn({phone, password});

    await this.userGateway.setAccessToken(accessToken);
    return this.getUserInfo();
  }

  async getUserInfo() {
    return this.userGateway.getUserInfo();
  }

  async logOut() {
    await this.userGateway.logOut();
  }
}
