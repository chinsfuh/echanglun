import React from 'react';
import Info from './Info.jsx';
import BusinessInfo from './BusinessInfo.jsx';
import SignupForm from './SignupForm.jsx';
import Profile from "./Profile";
import history from "../utils/history";
import { useAuth0 } from "../api/react-auth0-spa";
import NavBarLogin from "./NavBarLogin.jsx";
import About from "./About";
import Contact from "./Contact";
import NavbarRoute from "./NavbarRoute.jsx";
import Authenticated from "./Authenticated.jsx";
import NotAuthenticated from "./NotAuthenticated.jsx";

const App = () => {
  const { loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        isAuthenticated  //is user authenticated?
          ? <Authenticated /> //do authenticated stuff
          : <NotAuthenticated />   // <NotAuthenticated />do nonauthenticated stuff       
      }
      
    </div>
  );
 }


export default App;

  