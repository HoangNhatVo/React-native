export default class UserGateway {
  constructor({restConnector, localStorageConnector}) {
    this.restConnector = restConnector;
    this.localStorageConnector = localStorageConnector;
  }

  async signUp({phone, password, username, email}) {
    try {
      const {data} = await this.restConnector.post('/users/signup', {
        phone,
        password,
        username,
        email,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async logIn({phone, password}) {
    try {
      const {data} = await this.restConnector.post('/users/login', {
        phone,
        password,
      });
      return data.accessToken;
    } catch (error) {
      console.log(error);
    }
  }

  async setAccessToken(accessToken) {
    this.restConnector.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    await this.localStorageConnector.setItem('access_token', accessToken);
  }

  async getUserInfo() {
    try {
      const {data} = await this.restConnector.post('/user/me');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async logOut() {
    await this.localStorageConnector.removeItem('access_token');
    this.restConnector.defaults.headers.common.Authorization = null;
  }
}
