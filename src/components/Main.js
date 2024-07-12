import React from "react";
import Card from "./UI/Card";
import Moving from "./Layout/Moving";
import classes from "./Main.module.css";
import Certificates from "./Certificates/Certificates";

const Main = () => {
  return (
    <div className={classes.main}>
      <Moving />
      <div className={classes.cardsContainer}>
        <div className={classes.leftColumn}>
          <Card>
            <h3>
              Specializing in front-end development, dedicated to crafting
              meaningful digital experiences.
            </h3>
          </Card>
          <Card>
            <h2>What's my focus?</h2>I am passionate about creating intuitive
            user interfaces and elevating web applications with innovative
            solutions that resonate deeply with users.
          </Card>
          <Card>
            Check out some of my notable projects: Github LinkedIn Instagram
            Projects Certificates Contact Details: +90534 209 91 75
            aali.akan@gmail.com
          </Card>
          <Card>
            <Certificates />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
