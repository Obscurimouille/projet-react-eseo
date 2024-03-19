import { Product } from "../types/product";
import lion from "../assets/lion.png";
import cocopops from "../assets/cocopops.png";
import tresors from "../assets/tresors.png";
import shards from "../assets/shards.jpeg";
import riceKrispies from "../assets/rice-krispies.jpg";
import nesquik from "../assets/nesquik.jpg";
import goldenGrahams from "../assets/golden-grahams.jpg";
import ree from "../assets/ree.jpg";
import smaks from "../assets/smaks.jpg";

const Cereals: Product[] = [
  {
    name: "Cocopops",
    image: cocopops,
    price: 2.4,
    weight: 500,
  },
  {
    name: "Lion",
    image: lion,
    price: 2.1,
    specialOffer: {
      oldPrice: 2.79,
    },
    weight: 400,
  },
  {
    name: "Trésors",
    image: tresors,
    price: 1.82,
    weight: 375,
  },
  {
    name: "Ree",
    image: ree,
    price: 2.1,
    weight: 375,
  },
  {
    name: "Unlucky Shards",
    image: shards,
    price: 2.5,
    specialOffer: {
      oldPrice: 3.2,
    },
  },
  {
    name: "Rice Krispies",
    image: riceKrispies,
    price: 2.1,
    weight: 510,
  },
  {
    name: "Nesquik",
    image: nesquik,
    price: 2.4,
    weight: 375,
  },
  {
    name: "Golden Grahams",
    image: goldenGrahams,
    price: 2.1,
    weight: 375,
  },
  {
    name: "Smaks",
    image: smaks,
    price: 2.1,
    weight: 375,
    specialOffer: {
      oldPrice: 2.79,
    },
  },
];

export default Cereals;
