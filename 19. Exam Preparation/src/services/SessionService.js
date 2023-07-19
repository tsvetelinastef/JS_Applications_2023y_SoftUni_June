const key = 'accessToken';

export class SessionService {
    getAccessToken() {
        return sessionStorage.getItem(key);
    }

    setAcessToken(accessToken) {
        return sessionStorage.setItem(key, accessToken);
    }

    removeAccessToken() {
        return sessionStorage.removeItem(key);
    }
}
