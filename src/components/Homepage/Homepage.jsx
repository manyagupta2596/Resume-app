import './Homepage.css';
import linkicon from '../../assets/icon.png';
import giticon  from '../../assets/icon3.png';
function Homepage(){
  return(
    <div className='hp-container'>
      <div className='hp-left'>
      <p className='hp-left-h1'>
        <span className='intro'>Hi,</span>my name is
      </p>
      <p className='hp-left-h2'>
        Manya Gupta

      </p>
      <p className='hp-left-h3'>
        Student at <span className='intro'>Lovely Professional University</span>

      </p>
      <p className='hp-left-desc'>
        I am currently pursuing Btech Computer science and engineering.I am good at data structures and algorithms along with languages such as JAVA,C++ and web development languages such as HTML,CSS,Javascript,Node.js and basics of react and bootstrap.I am also good at other skills such as content writing and english proficiency.

      </p>
      <div>
        <a href='https://www.linkedin.com/in/manya-gupta-748a5624a/' target='_blank'>
         <img
          src={linkicon}
           alt='icon'
            className='logo'/>
                </a>
      </div>
      <div>
        <a href='https://github.com/manyagupta2596' target='_blank'>
         <img
          src={giticon}
           alt='icon'
            className='logo'/>
                </a>
      </div>
      <a href='mailto:manyagupta602@gmail.com'>
        <button className='btn'>Get in Touch</button>
      </a>
      </div>
      <div className='hp-right'>
        <img src='https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif' alt='GIF'/>
      </div>
    </div>
  )
}
export default Homepage;