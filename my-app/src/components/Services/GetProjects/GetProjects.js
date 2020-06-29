import htmlImg from "../../../images/HTML.png";
import cssImg from "../../../images/CSS.png";
import jsImg from "../../../images/JS.png";
import reactImg from "../../../images/REACT.png";
import portfolio1 from "../../../images/portfolio1.png";
import portfolio2 from "../../../images/portfolio2.png";
import portfolio3 from "../../../images/portfolio3.png";
import portfolio4 from "../../../images/portfolio4.png";

const allProjects = [
  {
    id: 1,
    name: "Coffee Shop",
    mainImg: portfolio1,
    otherImgs: [htmlImg, cssImg, jsImg],
    href: "https://coffeeshop.martynapuzio.pl/",
  },
  {
    id: 2,
    name: "Stopwatch",
    mainImg: portfolio2,
    otherImgs: [htmlImg, cssImg, reactImg],
    href: "https://accessories.martynapuzio.pl/",
  },
  {
    id: 3,
    name: "Filmoteka",
    mainImg: portfolio3,
    otherImgs: [htmlImg, cssImg, jsImg],
    href: "https://filmoteka.martynapuzio.pl/",
  },
  {
    id: 4,
    name: "Dog Shelter",
    mainImg: portfolio4,
    otherImgs: [htmlImg, cssImg, reactImg],
    href: "https://dogshelter.martynapuzio.pl/",
  },
];
export function getAllProjects() {
  return allProjects;
}
