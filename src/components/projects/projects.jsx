import ProjectBox from "./ProjectBox/ProjectBox";
import "./projects.css";
export default function Projects(){
  const ProjectsData=[
    {
      images:"https://repository-images.githubusercontent.com/509644496/da47fdb0-23c4-4179-953b-64c5a58951db",
      title:"E-Gaming registration website",
      sentence:[
        "It is used to register for e-gaming tournaments",
        "It includes articles as well as information about new games ",
        "It has very popular games included",
        "It has user authentication page with database connected"
      ],
      link:"https://www.google.co.in"
    },
    {
      images:"https://repository-images.githubusercontent.com/509644496/da47fdb0-23c4-4179-953b-64c5a58951db",
      title:"E-Gaming registration website",
      sentence:[
        "It is used to register for e-gaming tournaments",
        "It includes articles as well as information about new games ",
        "It has very popular games included",
        "It has user authentication page with database connected"
      ],
      link:"https://www.google.co.in"
    },
    {
      images:"https://repository-images.githubusercontent.com/509644496/da47fdb0-23c4-4179-953b-64c5a58951db",
      title:"E-Gaming registration website",
      sentence:[
        "It is used to register for e-gaming tournaments",
        "It includes articles as well as information about new games ",
        "It has very popular games included",
        "It has user authentication page with database connected"
      ],
      link:"https://www.google.co.in"
    },
  ];
  return(
    <div className='prj-full'>
      <p className="prj-title">Projects</p>
    <div className="prj-container">
      {
        ProjectsData.map((project,index)=>(
          <ProjectBox
          key={project.title}
          title={project.title}
          image={project.images}
          sentence={project.sentence}/>
        ))
      }
    </div>
    </div>
  )
}