import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";

function CustomCursor() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });

      const { cursor } = getComputedStyle(e.target);

      if (cursor === "pointer") {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 7.5,
      y: mousePos.y - 7.5,
    },
    hover: {
      scale: 1.2,
      x: mousePos.x - 15,
      y: mousePos.y - 15,
    },
  };

  return (
    <Container>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </Container>
  );
}

export default CustomCursor;
