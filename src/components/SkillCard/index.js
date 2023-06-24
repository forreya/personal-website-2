// import Tilt from "react-parallax-tilt";
// import React from "react";
// import { Container } from "./styles";
// import Image from "next/image";

// function SkillCard(props) {
//   return (
//     <Tilt
//       tiltReverse={true}
//       tiltMaxAngleX={15}
//       tiltMaxAngleY={15}
//       gyroscope={true}
//     >
//       <Container>
//         <p>{props.data.title}</p>
//         <div>
//           <Image
//             src={`/static/assets/${props.data.first.icon}`}
//             alt={props.data.first.alt}
//             width={32}
//             height={32}
//           />
//           <Image
//             src={`/static/assets/${props.data.second.icon}`}
//             alt={props.data.second.alt}
//             width={32}
//             height={32}
//           />
//           <Image
//             src={`/static/assets/${props.data.third.icon}`}
//             alt={props.data.third.alt}
//             width={32}
//             height={32}
//           />
//           <Image
//             src={`/static/assets/${props.data.fourth.icon}`}
//             alt={props.data.fourth.alt}
//             width={32}
//             height={32}
//           />
//         </div>
//       </Container>
//     </Tilt>
//   );
// }

// export default SkillCard;

import Tilt from "react-parallax-tilt";
import React, { useState } from "react";
import { Container } from "./styles";
import Image from "next/image";

function SkillCard(props) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <Tilt
      tiltReverse={true}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      gyroscope={true}
    >
      <Container>
        {hoveredIndex === null && <p>{props.data.title}</p>}
        {hoveredIndex === 0 && props.data.first.alt && <p>{props.data.first.alt}</p>}
        {hoveredIndex === 1 && props.data.second.alt && <p>{props.data.second.alt}</p>}
        {hoveredIndex === 2 && props.data.third.alt && <p>{props.data.third.alt}</p>}
        {hoveredIndex === 3 && props.data.fourth.alt && <p>{props.data.fourth.alt}</p>}
        <div>
          <div
            onMouseEnter={() => handleImageHover(0)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <Image
              src={`/static/assets/${props.data.first.icon}`}
              alt={props.data.first.alt}
              width={32}
              height={32}
            />
          </div>
          <div
            onMouseEnter={() => handleImageHover(1)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <Image
              src={`/static/assets/${props.data.second.icon}`}
              alt={props.data.second.alt}
              width={32}
              height={32}
            />
          </div>
          <div
            onMouseEnter={() => handleImageHover(2)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <Image
              src={`/static/assets/${props.data.third.icon}`}
              alt={props.data.third.alt}
              width={32}
              height={32}
            />
          </div>
          <div
            onMouseEnter={() => handleImageHover(3)}
            onMouseLeave={() => handleImageHover(null)}
          >
            <Image
              src={`/static/assets/${props.data.fourth.icon}`}
              alt={props.data.fourth.alt}
              width={32}
              height={32}
            />
          </div>
        </div>
      </Container>
    </Tilt>
  );
}

export default SkillCard;
