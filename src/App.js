import style from "./App.module.scss";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Sneakers from "./components/MainContent/SneakersSection/Sneakers";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/common/preloader/Preloader";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import CartContainer from "./components/MainContent/CartSection/CartContainer";
import SneakerPageContainer from "./components/MainContent/SneakersSection/SneakersPage/SneakersPageContainer";
import MainContainer from "./components/MainContent/MainSection/MainContainer";
import FavoritesContainer from "./components/MainContent/FavoritesSection/FavoritesContainer";
import PlaceOrder from "./components/MainContent/CartSection/PlaceOrder/PlaceOrder";
import { useEffect } from "react";
import { initializeApp } from "./redux/app_reducer";
import Action from "./components/Action/Action";
import PetPropose from "./components/PetPropose/PetPropose";
import { useTranslation } from "react-i18next";

let App = ({ initializeApp, isInitialized }) => {
  useEffect(() => {
    initializeApp();
  }, []);
  const { t } = useTranslation();

  return isInitialized ? (
    <div className={style.appWrapper}>
      <Action />
      <Header />
      <main className={style.mainContent}>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<MainContainer />}></Route>
            <Route path="/sneakers" element={<Sneakers />} />
            <Route
              path="/korm"
              element={<Sneakers korm={korm} title={t("food")} />}
            />
            <Route
              path="/accessories"
              element={<Sneakers korm={accessories} title={t("accessories")} />}
            />
            <Route
              path="/medicine"
              element={<Sneakers korm={medicine} title={t("medicine")} />}
            />
            <Route path="/sneakers/:id" element={<SneakerPageContainer />} />
            <Route path="/korm/:id" element={<SneakerPageContainer />} />
            <Route path="/accessories/:id" element={<SneakerPageContainer />} />
            <Route path="/medicine/:id" element={<SneakerPageContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/cart/place_order" element={<PlaceOrder />} />
            <Route path="/favorites" element={<FavoritesContainer />} />
            <Route path="*" element={<Preloader />} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  ) : (
    <Preloader />
  );
};

App = connect(
  (state) => {
    return { isInitialized: state.app.isInitialized };
  },
  {
    initializeApp,
  }
)(App);

export default App;

let korm = [
  {
    id: 1,
    brand: "Клуб 4 Лапи",
    name: "Adult Cats Rabbit - сухий корм з кроликом для дорослих котів",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/3c/c3/653e0a195bbdcd0cff7b74499c79.png",
    price: 1945,
    size: [2, 14],
    trending: 3,
    year: 2023,
    model: "Сухий корм",
  },
  {
    id: 2,
    brand: "Клуб 4 Лапи",
    name: "М'ясна паличка з індичкою та ягням",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/9c/3e/6e2a2ef6780ee5da7b7edce6b90e.jpeg",
    price: 11.9,
    size: [5],
    trending: 2,
    year: 2023,
    model: "М'ясна паличка",
  },
  {
    id: 3,
    brand: "Клуб 4 Лапи",
    name: "Adult Cats Hairball Control - сухий корм з ефектом виведення шерсті з травного тракту у котів",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/5c/af/a898968acc8244ff4d78d38efd49.png",
    price: 1732.08,
    size: [300, 2000, 5000, 14000],
    trending: 6,
    year: 2022,
    model: "Сухий корм",
  },
  {
    id: 4,
    brand: "Royal Canin",
    name: "Sterilised wet in jelly Вологий корм (шматочки в желе) для дорослих стерилізованих котів",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/32/28/b9dc431c7f85963a392d0420789f.jpeg",
    price: 39.47,
    size: [85, 1020],
    trending: 3,
    year: 2023,
    model: "Вологий корм",
  },
  {
    id: 5,
    brand: "Мяу",
    name: "Вологий корм для котів з кроликом в ніжному соусі",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/55/8a/920e9def23431fedb5daafa6ea36.jpeg",
    price: 310.39,
    size: [2400, 415],
    trending: 5,
    year: 2023,
    model: "Вологий корм",
  },
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
    model: "Вологий корм",
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
    model: "Вологий корм",
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
    model: "Шматочки в паштеті",
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
    model: "Шматочки в паштеті",
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
    model: "Вологий корм",
  },
  {
    id: 11,
    brand: "Optimeal",
    name: 'Набір "Adult Cats Cod Fish & Vegetable Вологий корм для дорослих котів з тріскою та овочами в желе" (3+1)',
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/7c/36/1196e37bcb30d3c693b0b0012595.jpeg",
    price: 73,
    size: [0.34],
    trending: 1,
    year: 2023,
    model: "Вологий корм",
  },
  {
    id: 12,
    brand: "Optimeal",
    name: "Adult Cats Lamb & Vegetables - вологий корм з ягням та овочами для дорослих котів",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/2b/7b/ae99b33ae054f274de7017341842.jpeg",
    price: 298.5,
    size: [12, 85],
    trending: 1,
    year: 2023,
    model: "Вологий корм",
  },
  {
    id: 13,
    brand: "Optimeal",
    name: "Adult Cats Veal Cranberry sauce - вологий корм з телятиною у журавлинному соусі для дорослих котів",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/87/99/6379258b263eee50e4c84277e624.jpeg",
    price: 298.5,
    size: [12, 85],
    trending: 1,
    year: 2023,
    model: "Вологий корм",
  },
  {
    id: 14,
    brand: "Gourmet",
    name: "Gold Ніжні биточки з індичкою та шпинатом",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/39/fd/e4675245a5377aec60016b523f48.jpeg",
    price: 285.6,
    size: [85, 12],
    trending: 1,
    year: 2023,
    model: "Биточки",
  },
  {
    id: 15,
    brand: "Purina Pro Plan (Пуріна Про План)",
    name: "Kitten Паштет із куркою для кошенят",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/74/a4/8df6fedf5b146c1662f90bfbfb76.jpeg",
    price: 32.8,
    size: [85],
    trending: 1,
    year: 2023,
    model: "Паштет",
  },
  {
    id: 16,
    brand: "Optimeal",
    name: "Kitten Chicken - вологий корм з куркою для кошенят",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/2a/cd/d5496c44ab059920a4119225ce5c.jpeg",
    price: 290,
    size: [12, 85],
    trending: 1,
    year: 2023,
    model: "Вологий корм",
  },
  {
    id: 17,
    brand: "Клуб 4 Лапи",
    name: "Adult Cats Veal - сухий корм з телятиною для дорослих котів",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/b0/28/9b81ac39347562ea1ae7e2fa7820.png",
    price: 1600,
    sizes: [300, 14],
    trending: 1,
    year: 2023,
    model: "Сухий корм",
  },
  {
    id: 18,
    brand: "Royal Canin",
    name: "Maxi Adult - сухий корм для дорослих собак великих порід (від 15 місяців)",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/9e/30/c538e0231c1562894986a7db15b6.jpeg",
    price: 3075,
    size: [4, 15],
    trending: 5,
    year: 2022,
    model: "Сухий корм",
  },
  {
    id: 19,
    brand: "Royal Canin",
    name: "Maxi Puppy - сухий корм для цуценят великих порід (від 2 місяців)",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/93/dd/5d184bbc1369820ed5536744b8c7.jpeg",
    price: 2580,
    size: [1, 4, 15],
    trending: 5,
    year: 2022,
    model: "Сухий корм",
  },
  {
    id: 20,
    brand: "Royal Canin",
    name: "Hypoallergenic - гіпоалергенний сухий корм для дорослих собак із харчовою непереносимістю",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/3b/71/dc4a2b9855e3e33762af02e4b7dd.jpeg",
    price: 656.47,
    size: [2, 14],
    trending: 2,
    year: 2023,
    model: "Сухий корм",
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
    model: "Сухий корм",
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
    model: "Сухий корм",
  },
  {
    id: 23,
    brand: "Purina Pro Plan (Пуріна Про План)",
    name: "Veterinary Diets EN Gastrointestinal Сухий корм-дієта, для лікування кишкових розладів у собак будь-якого віку",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/ac/86/03d2ed4f8a766b94bde55f027864.jpeg",
    price: 394.4,
    size: [1.5, 12],
    trending: 2,
    year: 2023,
    model: "Сухий корм",
  },
  {
    id: 24,
    brand: "Purina Pro Plan (Пуріна Про План)",
    name: "Adult Medium OptiBalance Chicken Сухий корм з куркою для дорослих собак середніх порід",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/40/0b/fbf5c85dc245fb2355bbbb81c843.jpeg",
    price: 726,
    size: [3, 14],
    trending: 3,
    year: 2023,
    model: "Сухий корм",
  },
  {
    id: 25,
    brand: "Royal Canin",
    name: "Mini Adult - сухий корм для дорослих собак дрібних розмірів (від 10 місяців)",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/d2/20/58af8f420a4190824247bff32de5.jpeg",
    price: 2280,
    size: [800, 2000, 4000, 8000],
    trending: 4,
    year: 2023,
    model: "Сухий корм",
  },
  {
    id: 26,
    brand: "Royal Canin",
    name: "Pug Adult - сухий корм для дорослих собак породи Мопс (від 10 місяців)",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/7c/92/1fbe19bdbe1a40cd8ac33836fe35.jpeg",
    price: 831.6,
    oldPrice: 990,
    size: [500, 1500, 3000, 7500],
    trending: 5,
    year: 2023,
    model: "Сухий корм",
  },
];

let medicine = [
  {
    id: 27,
    brand: "Simparica",
    name: "TRIO - жувальні таблетки від глистів, бліх і кліщів для собак",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/92/c9/4d120671af3c9967992e2e3b32d4.jpeg",
    price: 423,
    oldPrice: 447,
    size: [
      "1 табл. ( 1,25 кг - 2,5 кг )",
      "1 табл. ( 2,5 кг - 5 кг )",
      "1 табл. ( 5 кг - 10 кг )",
      "1 табл. ( 10 кг - 20 кг )",
      "1 табл. ( 20 кг - 40 кг )",
      "1 табл. ( 40 кг - 60 кг )",
    ],
    trending: 1,
    year: 2023,
    model: "Таблетки",
  },
  {
    id: 28,
    brand: "ProVET",
    name: "ПРАЗІСТОП (ТАБЛЕТКИ)",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/e6/b4/201fd1c028d8f2c7bc301aa2a23b.jpeg",
    price: 81.6,
    oldPrice: 102,
    size: ["10 таб."],
    trending: 2,
    year: 2023,
    model: "Таблетки",
  },
  {
    id: 29,
    brand: "Simparica",
    name: "Simparica Таблетки від бліх та кліщів для собак вагою від 20 до 40 кг",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/d3/b9/753d2e912e3b6f868053fee7ab3e.jpeg",
    price: 325,
    oldPrice: 340,
    size: ["1 таб."],
    trending: 5,
    year: 2023,
    model: "Таблетки",
  },
  {
    id: 31,
    brand: "ProVET",
    name: "ПРАЗИСТОП (КРАПЛІ)",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/49/b9/2733bb2d34e485b41d2849e289c0.jpeg",
    price: 45.6,
    oldPrice: 57,
    size: ["5 мл"],
    trending: 5,
    year: 2023,
    model: "КРАПЛІ",
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
    model: "ІНСЕКТОСТОП",
  },
  {
    id: 32,
    brand: "Simparica",
    name: "Таблетки від бліх та кліщів для собак вагою від 40 до 60 кг",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/2f/31/226d2f6207e0bfeb181a91aa769f.jpeg",
    price: 379,
    oldPrice: null,
    size: ["1 табл."],
    trending: 3,
    year: 2023,
    model: "ІНСЕКТОСТОП",
  },
  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/74/a0/cf5d79032091a0f58b1ddf0837eb.jpeg",
    size: ["1 таб. "],
    brand: "KRKA",
    year: 2023,
    trending: 5,
    model: "Таблетки",
    name: "Дехінел Плюс зі смаком м'яса, для собак",
    price: 37.22,
    id: 2014438,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/2c/5d/c7c92ba3dfa24e2833b403ed72dd.jpeg",
    size: ["100 мл "],
    brand: "VetExpert",
    year: 2023,
    trending: 5,
    model: "Спрей",
    name: "NanoSilver Chlorhexidine Антибактеріальний спрей з наносріблом і хлоргексидином для котів і собак",
    price: 349,
    id: 2014068,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/dd/f7/191d0129e5f9da294e20e5349c17.jpeg",
    size: ["125 мл "],
    brand: "VetExpert",
    year: 2023,
    trending: 5,
    model: "OtiFlush",
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
    model: "МЕГА СТОП",
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
    model: "Веторил",
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
    model: "Лосьйон",
    name: "СкінМед Отік – лосьйон для гігієни вух",
    price: 156,
    id: 71615,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/90/21/1d117b7b1c24f834cf4b850fbaff.jpeg",
    size: ["    1 піпетка * 4 мл "],
    brand: "Bayer",
    year: 2023,
    trending: 5,
    model: "Advantix",
    name: "Advantix для собак понад 25 кг",
    price: 250,
    id: 47263,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/d6/e2/f3781e728c16b16a6ff212511935.jpeg",
    size: ["    1 піпетка * 4 мл "],
    brand: "Bayer",
    year: 2023,
    trending: 5,
    model: "Краплі",
    name: "Advantix - краплі (0,4 мл) на холку для захисту собак до 4 кг від бліх, волосоїдів, кліщів",
    price: 180,
    id: 47223,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/c7/fa/f3456cb90e5ff359db6ce84d03d9.png",
    size: ["    15 мг ", "50 мг ", "    150 мг "],
    brand: "KRKA",
    year: 2023,
    trending: 5,
    model: "Антибіотик",
    name: "Енроксил Антибіотик, 10 таблеток",
    price: 90,
    id: 4986186,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/7c/be/31eab2db4c2537a90e6665c28a56.jpeg",
    size: ["1 уп.х 1 піпетка "],
    brand: "ProVET",
    year: 2023,
    trending: 5,
    model: "ПРОФІЛАЙН",
    name: "ПРОФІЛАЙН (ДЛЯ СОБАК ВІД 20 ДО 40 КГ)",
    price: 122,
    id: 412709,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/1c/ef/626bcbe5949339c0a89431943dc8.jpeg",
    size: ["     30 таб "],
    brand: "VetExpert",
    year: 2023,
    trending: 5,
    model: "Hepatiale Forte",
    name: "Hepatiale Forte Advanced Харчова добавка для підтримання та захисту функцій печінки у котів і собак",
    price: 909,
    id: 346169,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/9c/4a/ff3991d99818bda327489ac1406f.png",
    size: ["    10 мл ", "50 мл "],
    brand: "ЗооXелс",
    year: 2023,
    trending: 5,
    model: "Мелоксивет",
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
    model: "КРАПЛІ",
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
    model: "Моксістоп",
    name: "Моксістоп МІНІ Антигельмінтний препарат для собак і коті",
    price: 103,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/30/a8/8842c2cebb61ff595564787a485c.jpeg",
    size: ["    1 таб."],
    brand: "KRKA",
    year: 2023,
    trending: 5,
    model: "Таблетки",
    name: "Мілпразон Таблетки від глистів для цуценят",
    price: 77,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/42/a2/7498dc480a56be002088df766649.png",
    size: ["    30 мл ", "50 мл "],
    brand: "Лорі Вет",
    year: 2023,
    trending: 5,
    model: "Лосьйон",
    name: "Отомін лосьйон для вух",
    price: 28,
    id: 93897,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/b8/11/fa667cdd312b1d127304638288df.jpeg",
    size: ["75 мл "],
    brand: "VetExpert",
    year: 2023,
    trending: 5,
    model: "Тонік",
    name: "Ear Cleanser Спеціальний тонік для догляду за вухами котів і соба",
    price: 409,
    id: 202443,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/e0/40/ebc761fa5dfa223b12c53916519b.jpeg",
    size: ["    30 таб "],
    brand: "VetExpert",
    year: 2023,
    trending: 5,
    model: "UrinoVet",
    name: "UrinoVet Dog Харчова добавка для підтримання сечовидільної функції у собак",
    price: 659,
    id: 658181,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/f9/b9/fb8305287288b432392b2986ab26.jpeg",
    size: ["    1 шт "],
    brand: "ProVET",
    year: 2023,
    trending: 5,
    model: "ПРОФІЛАЙН",
    name: "ПРОФІЛАЙН Нашийник зелений",
    price: 128,
    id: 410170,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/cc/39/8b6469645ff6f9da5131f601b320.jpeg",
    size: ["  60 табл "],
    brand: "AnimAll",
    year: 2023,
    trending: 5,
    model: "Таблетки",
    name: "FitoLine Дерматолайф Таблетки",
    price: 126,
    id: 203818,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/1b/4c/5c38093c312d5c8aa9fac00b1164.jpeg",

    size: ["   70 см "],
    brand: "Bayer",
    year: 2023,
    trending: 5,
    model: "Foresto",
    name: "Foresto - нашийник (70 см) для захисту cобак від бліх, волосоїдів, іксодових кліщів",
    price: 1171,
    id: 38191,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/ef/c8/1d2fba688815acb9e88c51e41e99.jpeg",
    size: ["15 мл "],
    brand: "Vitomax",
    year: 2023,
    trending: 5,
    model: "Стресостоп",
    name: "Стресостоп універсальний препарат для котів та собак",
    price: 154.41,
    id: 38200,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/12/98/efc0e28d8fef207548a6477ba0e5.jpeg",
    size: ["66 см "],
    brand: "Bayer",
    year: 2023,
    trending: 5,
    model: "Kiltix",
    name: "Kiltix Нашийник проти бліх та кліщів для собак 66 с",
    price: 445,
    id: 35107,
  },

  {
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/93/b5/55ba3725e82087dd771334b6b5d5.jpeg",
    size: ["1 піпетка * 2,5 мл "],
    brand: "Bayer",
    year: 2023,
    trending: 5,
    model: "Advantix",
    name: "Advantix для собак від 10 до 25 кг",
    price: 237.25,
    id: 47247,
  },
];

let accessories = [
  {
    id: 22,
    brand: "Trixie",
    name: "Миска для котів пласка зелена",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/5b/26/592a9c3d4f9627832feb37e269cf.jpeg",
    price: 123.16,
    size: ["0.2"],
    trending: 1,
    year: 2023,
    model: "Миска для котів",
  },
  {
    id: 23,
    brand: "Trixie",
    name: "Миска для котів, пластикова",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/c1/d2/97a27c8077b8ae74e865995473e1.jpeg",
    price: 36.4,
    size: [200],
    trending: 1,
    year: 2023,
    model: "Миска для котів",
  },
  {
    id: 24,
    brand: "Trixie",
    name: "Миска для котів Котик",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/37/75/67b83d20aa9d2b5829e44d2df5aa.jpeg",
    price: 248.94,
    size: [1],
    trending: 2,
    year: 2023,
    model: "Миска для котів",
  },
  {
    id: 25,
    brand: "Trixie",
    name: "Curved Stream Поїлка-фонтан для котів, біла",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/f2/28/c640069ec510421ae6e4f83f9873.jpeg",
    price: 1847,
    size: [2.5],
    trending: 2,
    year: 2023,
    model: "Поїлка-фонтан для котів",
  },
  {
    id: 26,
    brand: "AnimAll",
    name: "Пластикова миска в формі рибки, для кішок, жовто-синя",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/36/59/66e0aedbc9970e1a3a552c98c0e7.jpeg",
    price: 59,
    size: [200],
    trending: 2,
    year: 2023,
    model: "Миска в формі рибки",
  },
  {
    id: 27,
    brand: "Harley and Cho",
    name: "Lunch Bar White Wood + White Миски на підставці",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/1d/8e/677491e921057a3e62933fd9b985.jpeg",
    price: 990,
    size: ["XS", "S", "M", "L"],
    trending: 2,
    year: 2023,
    model: "Миски на підставці",
  },
  {
    id: 28,
    brand: "Harley and Cho",
    name: "Lunch Bar Black Stone + Black Миски на підставці",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/5f/3e/23738b7cca80d54d8100903f8904.jpeg",
    price: 1190,
    size: ["XS", "S", "M", "L"],
    trending: 2,
    year: 2023,
    model: "Миски на підставці",
  },
  {
    id: 29,
    brand: "Harley and Cho",
    name: "Lunch Bar Brown Stone + Black Миски на підставці",
    imageURL:
      "https://petslike.net/media/cache/app_shop_product_small_thumbnail/4a/8e/996f902425ebb09631d3521f80c2.jpeg",
    price: 1190,
    size: ["XS", "S", "M", "L"],
    trending: 2,
    year: 2023,
    model: "Миски на підставці",
  },
];
