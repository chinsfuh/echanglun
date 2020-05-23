
import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Listing from './Listing.jsx';
import BasicExample from './Example.jsx';
import Header from './Header.jsx';
import Services from './Services.jsx';
import Footer from './Footer.jsx';
import CarServices from './CarServices.jsx';
import SearchPage from './SearchPage.jsx';
import ContactUs from './ContactUs.jsx';
import CarService from './CarServices.jsx';
import ShoesService from './ShoesServices.jsx';
import BusinessInfo from './BusinessInfo.jsx';
import SignupForm from './SignupForm.jsx';
import Profile from "./Profile";
import history from "../utils/history";
import { useAuth0 } from "../api/react-auth0-spa";
import NavBar from "./NavBar.jsx";




const App = () => {
  const { loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return(
    <div>
      <header>
      <Header />
     
      </header>
      { 
        isAuthenticated
        ? <Services />
        : <div> <NavBar /><h2>Please login</h2></div>
        

        
      }
    </div>
  );
//   return(


//   <div>
//     {/* <BasicExample /> */}
//     {/* <Listing Firstname="Syafiq" Lastname="Pozi" Age="29"/> */}
//     {/* <h1>Welcome to Meteor!</h1> */}
//     {/* <Hello /> */}
//     <Header />
//     <Services /> 
//     {/* <CarService />
//     <ShoesService /> */}
//     {/* <SearchPage /> */}
//     <SignupForm />
//     {/* <Info /> */}
//     <BusinessInfo />
//     <ContactUs />
//     <Footer />

//   </div>
// );
 }

export default App;

// ReactDOM.render(routing, document.getElementById("root"));