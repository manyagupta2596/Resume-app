import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import c from '../../assets/c.png';
import js from '../../assets/js.png';
import css from '../../assets/css.png';
function Experience(){
  const statements=[
 " 1.Developed and maintained software applications using various programming languages and frameworks.",
"2.Collaborated with cross-functional teams to design and implement new features and enhancements.",
"3.Managed and optimized databases to ensure data integrity and performance.",
"4.Conducted code reviews to maintain high-quality code standards and best practices.",
"5.Implemented and maintained CI/CD pipelines to streamline the development and deployment processes."

  ]
  const iconImages=[js,c,css];
  return(
    <div className='exp-container'>
      < p className='exp-title'>
      Experience</p>
      <div className='exp-card-container'>
        <ExperienceCard
        Companyname='ABC pvt Ltd'
        designation='SDE 2'
        Statements={statements}
        iconImages={ iconImages}
        />
        <ExperienceCard
        Companyname='DEF pvt Ltd'
        designation='SDE 1'
        Statements={statements}
        iconImages={ iconImages}
        />
         <ExperienceCard
        Companyname='XYZ pvt Ltd'
        designation='SDE 3'
        Statements={statements}
        iconImages={ iconImages}
        />
      </div>
    </div>
  )
}
export default Experience;