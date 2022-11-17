import './App.css';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<List /> } />
        <Route path='/create' element={<Add /> } />
        <Route path='/edit' element={<Edit /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;