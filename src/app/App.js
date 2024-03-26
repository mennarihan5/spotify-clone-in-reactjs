import './App.css';
import LandingPage from '../components/LandingPage/LandingPage.jsx';
import LoginPage from '../components/LoginPage/LoginPage.jsx';
import {UseNavigation} from "./Hooks/useNavigation.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {url} = UseNavigation();

  switch(url.toLocaleLowerCase()) {
    case "home":
      return <LandingPage />;
      <ToastContainer/>
    case "login":
      return <LoginPage />;  
    default:
      return <LandingPage />;
      break;
  }
}

export default App;
