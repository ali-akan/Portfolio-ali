import { BsGithub } from "react-icons/bs";
import { AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import classes from "./Contact.module.css";

const Contact = () => {
  const links = [
    {
      id: "github",
      name: "Github",
      icon: <BsGithub />,
      link: "https://githubcom/ali-akan",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/muhammedaliakan/",
    },
  ];

  const contactLinks = links.map((element) => (
    <div className={classes.list} key={element.id}>
      <a href={`${element.link}`} target="_blank" rel="noreferrer">
        <div className={classes.element}>
          <h3>{element.link && element.icon}</h3>
          <h4>{element.name}</h4>
        </div>
      </a>
    </div>
  ));

  return (
    <div id="contact" className={classes.contact}>
      <h2>Contact</h2>
      <div>{contactLinks}</div>
      <div>
        <div>
          <MdOutlineEmail />
          <p>aali.akan@gmail.com</p>
        </div>
        <div>
          <AiOutlinePhone />
          <p>+90 534 209 91 75</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
