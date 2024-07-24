import React, { useRef, useEffect } from "react";
import classes from "./Moving.module.css";

import anime from "animejs";
import newYork from "../../assets/NYC.jpg";

function Moving() {
  const newYorkRef = useRef(null);

  useEffect(() => {
    anime({
      targets: newYorkRef.current,
      translateX: [10, 40],
      translateY: [10, 20],
      direction: "alternate",
      duration: 3000,
      scale: [0.3, 0.3],
      loop: true,
      easing: "linear",
    });

    // Add opacity animation
    anime({
      targets: newYorkRef.current,
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div className={classes.main}>
      <img ref={newYorkRef} src={newYork} alt="car" />
    </div>
  );
}

export default Moving;
