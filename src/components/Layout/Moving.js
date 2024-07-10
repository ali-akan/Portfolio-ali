import React, { useRef, useEffect } from "react";
import classes from "./Moving.module.css";

import anime from "animejs";
import newYork from "../../assets/newYork.jpg";

function Moving() {
  const newYorkRef = useRef(null);

  useEffect(() => {
    anime({
      targets: newYorkRef.current,
      translateX: [-20, 10],
      translateY: [20, 50],

      direction: "alternate",
      duration: 4000,

      loop: true,
      easing: "linear",
    });
  }, []);

  return (
    <div className={classes.main}>
      <img ref={newYorkRef} src={newYork} alt="car" />
    </div>
  );
}

export default Moving;
