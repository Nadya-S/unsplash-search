class UnsplashApi {
  constructor() {
    this.baseUrl =
      "https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs";
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  getCards(searchText, page) {
    const params = new URLSearchParams({
      query: searchText,
      page: page,
    }).toString();
    return fetch(`${this.baseUrl}&${params}`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }
}

export default new UnsplashApi();
