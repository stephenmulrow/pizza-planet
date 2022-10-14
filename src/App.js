import './App.css';
import Home from "./components/Home"
import Chef from "./components/Chef"
import Owner  from './components/Owner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
  
    <Router>
      <Routes>
        <Route 
          path = "/"
          exact
          element = {<Home />}/>
        <Route 
          path = "/owner"
          exact
          element = {<Owner />}/>
        <Route 
          path = "/chef"
          exact
          element = {<Chef />}/>

      </Routes>
    </Router>

  )
}

export default App;
