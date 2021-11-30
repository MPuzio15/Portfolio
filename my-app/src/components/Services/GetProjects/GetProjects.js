import htmlImg from "../../../assets/icons/HTML.png";
import cssImg from "../../../assets/icons/CSS.png";
import jsImg from "../../../assets/icons/JS.png";
import reactImg from "../../../assets/icons/REACT.png";
import django from "../../../assets/icons/django.png";
import reactNativeIcon from "../../../assets/icons/reactNative.png";
import typeScriptIcon from "../../../assets/icons/typeScriptIcon.png";
import npmIcon from "../../../assets/icons/npmIcon.png";
import portfolio0 from "../../../assets/images/portfolio0.png";
import portfolio1 from "../../../assets/images/portfolio1.png";
import portfolio2 from "../../../assets/images/portfolio2.png";
import portfolio3 from "../../../assets/images/portfolio3.png";
import portfolio4 from "../../../assets/images/portfolio4.png";
import portfolio5 from "../../../assets/images/portfolio6.png";
import portfolio6 from "../../../assets/images/portfolio5.png";

const allProjects = [
  {
    id: 0,
    name: "react-native-carousel-library",
    mainImg: portfolio5,
    otherImgs: [reactNativeIcon, typeScriptIcon, npmIcon],
    href: "https://www.npmjs.com/package/react-native-carousel-library",
  },
  {
    id: 1,
    name: "react-native-data-storage-hooks",
    mainImg: portfolio6,
    otherImgs: [reactNativeIcon, typeScriptIcon, npmIcon],
    href: "https://www.npmjs.com/package/react-native-data-storage-hooks",
  },
  {
    id: 2,
    name: "Foodbrainers",
    mainImg: portfolio0,
    otherImgs: [cssImg, jsImg, django],
    href: "https://piscine-maison-07591.herokuapp.com/",
  },
  {
    id: 3,
    name: "Coffee Shop",
    mainImg: portfolio1,
    otherImgs: [htmlImg, cssImg, jsImg],
    href: "https://coffeeshop.martynapuzio.pl/",
  },
  {
    id: 4,
    name: "Stopwatch",
    mainImg: portfolio2,
    otherImgs: [htmlImg, cssImg, reactImg],
    href: "https://accessories.martynapuzio.pl/",
  },
  {
    id: 5,
    name: "Filmoteka",
    mainImg: portfolio3,
    otherImgs: [htmlImg, cssImg, jsImg],
    href: "https://filmoteka.martynapuzio.pl/",
  },
  {
    id: 6,
    name: "Dog Shelter",
    mainImg: portfolio4,
    otherImgs: [htmlImg, cssImg, reactImg],
    href: "https://dogshelter.martynapuzio.pl/",
  },
];

export function getAllProjects() {
  return allProjects;
}
