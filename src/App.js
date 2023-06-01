import SignUpModal from "./components/signUpModal";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import SignUp from "./pages/signUp";
import MainScreen from "./pages/mainScreen";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/mainScreen" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

export default App;