import './Navbar.css';
const NavOptions=['About','Tools','Experience','Projects','Resume']
function NavOption(props){
  return <p>{props.navitem}</p>
}
function Navbar(){
  var name='Manya Gupta'
  return(
    <div className='container'>
     <div className='Nav-left'>
      {name}
     </div>
     <div className='Nav-right'>
     {
      NavOptions.map(function(item,index){
        return(
          <NavOption key={item} navitem={item}/>
        )
      })
     }
     </div>
    </div>
  )
}
export default Navbar