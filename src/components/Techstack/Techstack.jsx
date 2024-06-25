import './Techstack.css';

import Techstackicon from './Techstackicon/Techstackicon';
import {Techstackrowone,Techstackrowtwo} from '../../constants';

function Techstack(){
  
  return(
    <div className='ts-container'>
      <p className='title'>Techstack</p>
      <div className='ts-icon-container'>
        {
          Techstackrowone.map(function(element,index){
            
            return(
              <Techstackicon title={element.iconName} alt={element.iconAltProperty} image={element.iconImage}/>
            )
          })
        }
        
        
      </div>
      <div className='ts-icon-container'>
        {
          Techstackrowtwo.map(function(element,index){
            
            return(
              <Techstackicon title={element.iconName} alt={element.iconAltProperty} image={element.iconImage}/>
            )
          })
        }
        
        
      </div>
    </div>
  )
}
export default Techstack;