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
    name: "Coffe Shop",
    mainImg: portfolio1,
    otherImgs: [htmlImg, cssImg, jsImg],
  },
  {
    id: 2,
    name: "Stopwatch",
    mainImg: portfolio2,
    otherImgs: [htmlImg, cssImg, reactImg],
  },
  {
    id: 3,
    name: "Filmoteka",
    mainImg: portfolio3,
    otherImgs: [htmlImg, cssImg, jsImg],
  },
  {
    id: 4,
    name: "Dog Shelter",
    mainImg: portfolio4,
    otherImgs: [htmlImg, cssImg, reactImg],
  },
];
export function getAllProjects() {
  return allProjects;
}
