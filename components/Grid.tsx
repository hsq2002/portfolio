import React from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
  <section id="about">
    <BentoGrid>
      {gridItems.map(({id, title, description, className,
          img, imgClassName, titleClassName, spareImg, test
      }) => (
        <BentoGridItem
        id={id}
        key={id}
        title={title}
        description={description}
        className={className} //classNames in gridItems
                                    //array get called and apply tailwind
        img={img}
        imgClassName = {imgClassName}
        titleClassName = {titleClassName}
        spareImg = {spareImg}
        />

      ))}
    </BentoGrid>
  </section>
)};

export default Grid;
