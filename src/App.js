import logo from './logo.svg';
import NavBar from './components/header/NavBar';
import FoodApp from './components/FoodApp';
import ThankYou from './components/ThankYou';
import FoodItems from './components/FoodItems';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar />
      {/* <FoodApp /> */}

      <Routes>
      <Route path="/" element={<FoodApp />} />   
      <Route path="/fooditems" element={<FoodItems />} /> 
        {/* <Route path='/' component={ FoodApp } /> */}
        {/* <Route path='/fooditems' component={FoodItems} /> */}
        <Route path="/thankyou" element={ <ThankYou /> }/>
      </Routes>
      
      {/* <FoodItems /> */}
      {/* <ThankYou /> */}
    </>
  );
}

export default App;
