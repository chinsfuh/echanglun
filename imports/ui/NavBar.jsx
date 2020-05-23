// import React, {Component} from 'react';
// import logo from './img/logo.png';
// import './css/Navbar.css';
// import {Link} from 'react-router-dom';

// class Navbar extends Component{
    
//   state={
//     isOpen:false
//   }

//   //responsive on click the Navbar will show the list of menu Navbar
//   handleClick=()=>{
//     this.setState({
//       isOpen:!this.state.isOpen,
//     })
//   }

//   //create a method that when Navbar menu is click, it dissapear the Navbar menu list, but show the content only of pages only
//   closeNavbar = ()=>{
//     this.setState({
//       isOpen:false
//     })
//   }

  
//   render(){
//         return(
//             <nav>
//             <div className="logoBtn">
//               <div className="logo">
//               <Link to="/"onClick= {this.closeNavbar}><img src={logo} 
//               className="logo"   alt=""/></Link>
//               </div>
              
             
//               <div className="btn" onClick={this.handleClick}> 
//               <div className="bar"></div>
//               <div className="bar"></div>
//               <div className="bar"></div>
//             </div>
//             </div>
            
//             <ul className={this.state.isOpen ?
//             'showNav':'undefined'}>
//               <li><Link to="/" onClick= {this.closeNavbar}>Home</Link></li>
//               <li><Link to="/service" onClick= {this.closeNavbar}>Service</Link></li>
//               <li><Link to="/about" onClick= {this.closeNavbar}>About</Link></li>
//               <li><Link to="/contact" onClick= {this.closeNavbar}>Contact</Link></li>
//             </ul>
//             </nav>
//         )
//     }
// }

// export default Navbar;