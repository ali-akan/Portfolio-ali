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
            Check out some of my notable projects:
            <a
              className={classes.link}
              href={"https://github.com/ali-akan"}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github{" "}
            </a>
          </Card>
          <Card>
            <Certificates />
          </Card>
          <Card>Contact Details:</Card>
          <Card>+90534 209 91 75</Card>
          <Card>aali.akan@gmail.com</Card>
          <Card>
            <a
              className={classes.link}
              href={"https://www.linkedin.com/in/muhammedaliakan/"}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn{" "}
            </a>{" "}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
