import React from "react";
import PageHeaderContent from '../../components/PageHeaderContent/index'
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/menu.PNG";
import ImageTwo from "../../images/tictac.PNG";
import ImageThree from "../../images/academy.PNG";
import ImageFour from "../../images/word-count.PNG";
import ImageFive from "../../images/chat.PNG";
import ImageSix from "../../images/WeatherApp.PNG";

import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Resturant Menu",
    image: ImageOne,
    link: "https://github.com/Gule-Nayab/Resturant-Menu",
  },
  {
    id: 1,
    name: "TicTac-Toe",
    image: ImageTwo,
    link: "https://github.com/Gule-Nayab/TicToc-Toe",
  },
  {
    id: 1,
    name: "Gul-Academy ",
    image: ImageThree,
    link: "https://github.com/Gule-Nayab/Gul-Academy",
  },
  {
    id: 2,
    name: "Word Count",
    image: ImageFour,
    link: "https://github.com/Gule-Nayab/Wordount-App",
  },
  {
    id: 3,
    name: "Chat App",
    image: ImageFive,
    link: "https://github.com/Gule-Nayab/Chat-Box",
  },
  {
    id: 3,
    name: "Weather App",
    image: ImageSix,
    link: "https://github.com/Gule-Nayab/WeatherApp-React",
  },
 

];

const filterData = [
  {
    filterId: 1,
    label: "__My Projects__",
  },
  {
    filterId: 2,
    label: "",
  },
  {
    filterId: 3,
    label: "",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  const handleButtonClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleButtonClick(item.link)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
