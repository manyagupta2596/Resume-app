import './Techstackicon.css';

export default function Techstackicon(props){
  return(
    
    <div className='ts-icon'>
      <img src={props.image} alt={props.alt}/>
      <p>{props.title}</p>
    </div>

  )
}