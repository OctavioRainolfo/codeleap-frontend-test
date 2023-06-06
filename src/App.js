import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AnimatedRoutes from "./components/animatedRoutes";

function App() {

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;