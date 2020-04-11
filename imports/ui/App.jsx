import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Listing from './Listing.jsx';
import BasicExample from './Example.jsx';
import Header from './Header.jsx';
import Services from './Services.jsx';
import Footer from './Footer.jsx';
import SearchPage from './SearchPage.jsx';
import ContactUs from './ContactUs.jsx';



const App = () => (
  <div>
    {/* <BasicExample /> */}
    {/* <Listing Firstname="Syafiq" Lastname="Pozi" Age="29"/> */}
    <h1>Welcome to Meteor!</h1>
    {/* <Hello /> */}
    {/* <Info /> */}
    <Header />
    <Services /> 
    <SearchPage />
    <ContactUs />
    <Footer />
  </div>
);
export default App;

// ReactDOM.render(routing, document.getElementById("root"));