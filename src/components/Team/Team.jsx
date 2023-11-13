import React from "react";
import "./Team.css";
import MyCard from "./MyCard";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
    {
      id: 2,
      image: Image2,
      title: "UI/UX design",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
    {
      id: 3,
      image: Image3,
      title: "UI/UX design",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elitaenean commodo ligula eget.",
    },
  ];






const Team = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Our Team</h2>
            <div className="services__container grid">
                {data.map((item) => (
                    <div className="services__card" key={item.id}>
                        <img className="services__img"src={item.image} alt="" />
                        <h3 className="services__title">{item.title}</h3>
                        <p className="services__description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};



export default Team;
