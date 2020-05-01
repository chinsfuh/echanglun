
import React, {useState} from 'react';
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter,Router, Route, Switch, Link } from "react-router-dom";
// import Navbar from "./Navbar";

const NavbarRoute = () => {
    const[isOpen, setOpen] = useState(false);
    //responsive on click the Navbar will show the list of menu Navbar
    handleClick=()=>{
        setOpen(!state.isOpen)
    }

    //create a method that when Navbar menu is click, it dissapear the Navbar menu list, but show the content only of pages only
    closeNavbar = () =>{
        setOpen(false);
    };

    return (

        <div>
            {/* <Navbar /> */}
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/about" onClick={() => closeNavbar()}>About Us</Link>
                    </li>
                </ul>
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    {/* <Route exact path="/service" component={Service} /> */}
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default NavbarRoute;