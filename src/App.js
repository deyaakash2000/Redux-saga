import Bodycontainer from "./components/Bodycontainer";
import Cart from "./components/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Bodycontainer />}></Route>
          <Route exact path='/cart' element={< Cart />}></Route>
        </Routes>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
