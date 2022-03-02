import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
//import Navbar automatically looking for index.js
function App() {
  return (
    <Router>
     <Navbar />
    </Router>
  );
}

export default App;
