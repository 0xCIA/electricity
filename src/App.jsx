import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation/Navigation';
import Body from './Body';
import Footer from './Footer';
import './app.scss'
import Contact from './Contact';
import ErrorModal from './ErrorModal';
import { Route, Routes } from 'react-router-dom';
import useGetData from './effects/useGetData';
import './Navigation/navigation.scss'
import CurrentPrices from './CurrentPricePage/CurrentPrices';
import CurrentPriceKm from './CurrentPricePage/CurrentPriceKm';

function App() {
 
  useGetData();
const mainPage = (
    <>
      <Body />  
      <Footer />
    </>
  );


  return (
    <Container>
      <Navigation />

      <Routes>
        <Route path='/' element={mainPage} />
        <Route path='/gas' element={mainPage} />
        <Route path='/gas/:dataType' element={mainPage} />
        <Route path='/electro' element={mainPage} />
        <Route path='/electro/:dataType' element={mainPage} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/currentprice' element={<CurrentPrices />} />
        <Route path='/currentprice/km' element={<CurrentPriceKm />} />
      </Routes>
      <ErrorModal />
    </Container>
  );
}
export default App;

