import './ExperienceCard.css';
export default function ExperienceCard(
{
  Companyname,
        designation,
        Statements,
        iconImages
})


{
  return(
    <div className='card-container'>
      <p className='card-title'>{Companyname}</p>
      <p className='card-subtitle'>Designation: {designation}</p>
      {
        Statements.map((item,index)=>(
          <p key={item} className='card-sentence'>
            {item}
          </p>
        ))
      }
      <p className='ex-othertitle'>
        Tech Stack used
      </p>
      <div class='card-icon'>
        {
          iconImages.map((icon,index)=>(
            <img key={icon} src={icon} alt={icon}/>
          ))
        }
      </div>
    </div>
  )
}