import "./ProjectBox.css";
export default function ProjectBox(
  {
    image,title,sentence,link
  }){
  return(
    <div className="prj-box-container">

      <div className="prj-box-img-container">
      <img src={image} alt={title}/>
      </div>
      <div className="prj-desc">
      <div className="prj-box-title">{title}</div>
      <div className="prj-box-sentence">
        {sentence.map((sentence,index)=>(
          <p key={sentence}>{sentence}</p>
        ))}
      </div>
      <p className='prj-link'>
        
        <a href={link} target="_blank">{link}</a>
      </p>

      </div>
    </div>
  );
}