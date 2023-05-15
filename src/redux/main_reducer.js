import { mainApi } from "./../api/api";

const GET_STAFF_PICKS = "main_reducer/GET_STAFF_PICKS";
const GET_NEW_RELEASES = "main_reducer/GET_NEW_RELEASES";

let initialState = {
  staffPics: [
    {
      id: 6,
      brand: "Мяу",
      name: "Вологий корм для котів з рибою в ніжному соусі",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/ee/3f/a3e36567fa89ef1393d4223c9900.jpeg",
      price: 310.39,
      size: [2400, 415],
      trending: 1,
      year: 2023,
      model: "Мяу",
    },
    {
      id: 7,
      brand: "Optimeal",
      name: "Adult Cats Rabbit white sauce - вологий корм з кроликом у білому соусі для дорослих котів",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/4d/90/313749649c2b6806273fb6a932b7.jpeg",
      price: 298.5,
      size: [1020],
      trending: 1,
      year: 2023,
      model: "Optimeal",
    },
    {
      id: 8,
      brand: "Purina Pro Plan (Пуріна Про План)",
      name: "Delicate NutriSavour with Turkey in gravy Шматочки з індичкою для котів з чутливим травленням",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/59/03/64da47310c657755a32239b321cc.jpeg",
      price: 35.9,
      size: [85],
      trending: 1,
      year: 2023,
      model: "Delicate NutriSavour",
    },
    {
      id: 9,
      brand: "Purina Pro Plan (Пуріна Про План)",
      name: "Adult Шматочки в паштеті з куркою для дорослих котів",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/a2/08/788c46566d3e7d3b02f234147606.jpeg",
      price: 41,
      size: [85],
      trending: 1,
      year: 2023,
      model: "Adult Шматочки",
    },
    {
      id: 10,
      brand: "Royal Canin",
      name: "Diabetic Feline Pouches Дієтичний вологий корм для котів при цукровому діабеті",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/fe/55/31a6b7a165928acd449338b6f1c4.jpeg",
      price: 41.79,
      size: [85],
      trending: 1,
      year: 2023,
      model: "Diabetic Feline Pouches",
    },
    {
      id: 21,
      brand: "Royal Canin",
      name: "Medium Adult - сухий корм для дорослих собак середніх порід (від 12 місяців)",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/3b/51/3fb3f42352c6924951ed35ac28f4.jpeg",
      price: 3075,
      size: [1, 4, 10, 15],
      trending: 1,
      year: 2023,
      model: "Royal Canin",
    },
    {
      id: 22,
      brand: "Royal Canin",
      name: "Labrador Retriever Adult - сухий корм для дорослих собак породи Лабрадор-ретрівер (від 15 місяців)",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/36/1e/2d90797245797cc2fb44278c813d.jpeg",
      price: 2620,
      size: [3, 12],
      trending: 1,
      year: 2023,
      model: "Royal Canin",
    },
    {
      id: 30,
      brand: "ProVET",
      name: "ІНСЕКТОСТОП НАШИЙНИК «STOP»",
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/74/32/ba0b288efbc269f6cb26d01411a4.jpeg",
      price: 40,
      oldPrice: null,
      size: ["1 шт"],
      trending: 2,
      year: 2023,
      model: "ProVET",
    },
  ],
  newReleases: [
    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/9c/4a/ff3991d99818bda327489ac1406f.png",
      size: ["    10 мл ", "50 мл "],
      brand: "ЗооXелс",
      year: 2023,
      trending: 5,
      model: "ЗооXелс",
      name: "Мелоксивет суспензія",
      price: 424,
      id: 503357,
    },

    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/10/9f/385f00e5a27e7dc18f4bd570abc0.jpeg",
      size: ["    1 уп.х 1 піпетка "],
      brand: "ProVET",
      year: 2023,
      trending: 5,
      model: "ProVET",
      name: "МЕГАСТОП краплі (для собак вагою до 20 до 30 кг)",
      price: 64,
      id: 417421,
    },

    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/7d/85/a15020c1fb8fb172be00c1918251.jpeg",
      size: ["1 уп.(2 табл.)"],
      brand: "ProVET",
      year: 2023,
      trending: 5,
      model: "ProVET",
      name: "ProVET Моксістоп МІНІ Антигельмінтний препарат для собак і коті",
      price: 103,
    },

    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/30/a8/8842c2cebb61ff595564787a485c.jpeg",
      size: ["    1 таб."],
      brand: "KRKA",
      year: 2023,
      trending: 5,
      model: "KRKA",
      name: "Мілпразон Таблетки від глистів для цуценят",
      price: 77,
    },
    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/dd/f7/191d0129e5f9da294e20e5349c17.jpeg",
      size: ["125 мл "],
      brand: "VetExpert",
      year: 2023,
      trending: 5,
      model: "VetExpert",
      name: "OtiFlush Ear Solution Розчин для очистки вух котів і собак",
      price: 409,
      id: 200340,
    },

    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/9e/86/d661abf2f626f69525957ce2e29f.jpeg",
      size: ["1 уп.х 4 піпетки "],
      brand: "ProVET",
      year: 2023,
      trending: 5,
      model: "ProVET",
      name: "ProVET МЕГА СТОП (ДЛЯ СОБАК ВІД 20 ДО 30 КГ)",
      price: 280,
      id: 200787,
    },

    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/1f/33/bb5916627533c9a2e0945b3d0200.jpeg",
      size: ["30 кап "],
      brand: "Cymedica",
      year: 2023,
      trending: 5,
      model: "Cymedica",
      name: "Веторил (Vetoryl) 10 мг",
      price: 1763,
      id: 421330,
    },

    {
      imageURL:
        "https://petslike.net/media/cache/app_shop_product_small_thumbnail/4b/75/c464fe99589e8376be8e48aab306.jpeg",
      size: ["60 мл ", "130 мл "],
      brand: "Cymedica",
      year: 2023,
      trending: 5,
      model: "Cymedica",
      name: "СкінМед Отік – лосьйон для гігієни вух",
      price: 156,
      id: 71615,
    },
  ],
};

const getStaffPics = (staffPics) => ({
  type: GET_STAFF_PICKS,
  staffPics,
});

const getNewReleases = (newReleases) => ({
  type: GET_NEW_RELEASES,
  newReleases,
});

export const getStaffPicsTh = () => async (dispatch) => {
  let data = await mainApi.getStaffPics();
  dispatch(getStaffPics(data.data[0].mainStaffPics));
  dispatch(getNewReleases(data.data[0].mainNewReleases));
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STAFF_PICKS:
      return {
        ...state,
        staffPics: [...action.staffPics],
      };
    case GET_NEW_RELEASES:
      return {
        ...state,
        newReleases: [...action.newReleases],
      };
    default:
      return state;
  }
};

export default mainReducer;
