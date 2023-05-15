import axios from "axios";

const instance = axios.create({
  baseURL: "https://646295764dca1a661349d24e.mockapi.io/",
});

const mainInstance = axios.create({
  baseURL: "https://63e0f6da59bb472a742d31c4.mockapi.io/",
});

export const sneakersApi = {
  getAllSneakers() {
    return instance.get("cart").then((resp) => []);
  },
};

export const cartApi = {
  getCartOrder() {
    return instance.get("cart");
  },

  addToCart(order) {
    return instance.post("cart", order);
  },

  setItemQuantiny(id, total) {
    return instance.put("cart/" + id, total);
  },

  deleteFromCart(id) {
    return instance.delete("cart/" + id);
  },
};

export const mainApi = {
  getStaffPics() {
    return mainInstance.get("mainStaffPics").then((resp) => []);
  },
};

export const favoritesApi = {
  getFavorites() {
    return instance.get("favorites");
  },
  addFavorite(data) {
    return instance.post("favorites", data);
  },
  deleteFavorite(id) {
    return instance.delete("favorites/" + id);
  },
};
