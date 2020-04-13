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



const App = () => (
  <div>
    {/* <BasicExample /> */}
    {/* <Listing Firstname="Syafiq" Lastname="Pozi" Age="29"/> */}
    <h1>Welcome to Meteor!</h1>
    {/* <Hello /> */}
    {/* <Info /> */}
    <Header />
    <Services /> 
    <CarService />
    <ShoesService />
    <SearchPage />
    <ContactUs />
    <Footer />

  </div>
);
export default App;

// ReactDOM.render(routing, document.getElementById("root"));