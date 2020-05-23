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
<<<<<<< HEAD
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

=======
}
>>>>>>> 481524353563eb2abf30cde7fa3f3b68385e2580
export default App;

      // <div> 
      //     <NavBarLogin />
      //     <h2>Please Login</h2>
      //   </div>