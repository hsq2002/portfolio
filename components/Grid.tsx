import React from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
  <section id="about">
    <BentoGrid>
      {gridItems.map((item, i) => (
        <BentoGridItem
        id={item.id}
        key={i}
        title={item.title}
        description={item.description}
        className={item.className} //classNames in gridItems
                                    //array get called and apply tailwind
        img={item.img}
        imgClassName = {item.imgClassName}
        titleClassName = {item.titleClassName}
        spareImg = {item.spareImg}
        />

      ))}
    </BentoGrid>
  </section>
)};

export default Grid;
