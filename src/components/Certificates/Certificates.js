import { SiUdemy } from 'react-icons/si'
import { FaFreeCodeCamp } from 'react-icons/fa'
import classes from './Certificates.module.css'
import { Fragment } from 'react'

const Certificates = () => {
  const certificateList = [
    {
      id: 'freecodecamp',
      flag: 'Free Code Camp',
      name: 'Responsive Web Design',
      image: <FaFreeCodeCamp className={classes.icon}/>,
      description: 'free code camp courses',
      link: 'https://freecodecamp.org/certification/fcc31d1c157-f97b-4088-916c-ebe86197e5fb/responsive-web-design'
    },
    {
      id: 'javascript',
      flag: 'Udemy & Academind',
      name: 'Accelerated JavaScript Training',
      image: <SiUdemy className={classes.icon}/>,
      description:
        'The certificate indicates the entire course was completed as validated by the student.',
      link: 'https://www.udemy.com/certificate/UC-a8e827c7-b8bd-4a02-bbb6-09c66083f1e2/'
    },
    {
      id: 'react',
      flag: 'Udemy & Academind',
      name: 'React(incl Hooks, React Router, Redux)',
      image: <SiUdemy className={classes.icon}/>,
      description: '',
      link: 'https://www.udemy.com/certificate/UC-1d43eabc-6162-4781-bfb9-5ce4d31a6f54/'
    }
  ]

  const certificate = certificateList.map((element) => (
    <div key={element.id} className={classes.list}>
      <a href={`${element.link}`} target="_blank" rel="noreferrer">
        <div>
          <h5>{element.name}</h5>
        </div>
      </a>
    </div>
  ))

  return (<Fragment>

    <div id="certificate" className={classes.certificate}>
      {certificate}
    </div>
  </Fragment>
  )
}

export default Certificates