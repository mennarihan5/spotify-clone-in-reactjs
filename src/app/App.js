import './App.css';
import{RouterProvider, createBrowserRouter} from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage.jsx';
import LoginPage from '../components/LoginPage/LoginPage.jsx';
import IsProtectedRoute from '../Hoc/IsProtectedRoute.jsx';
import {routes} from '../routes.js';
import DashboardPage from '../components/Dashboard/Dashboard.jsx';
// import {UseNavigation} from "./Hooks/useNavigation.jsx";


const router = createBrowserRouter([
  {
    path: '',
    element:<IsProtectedRoute><LandingPage /></IsProtectedRoute>
  },
  {
    path: '/',
    element: <IsProtectedRoute><LandingPage /></IsProtectedRoute>
  },
  {
    path: routes.dashboard(),
    element: <IsProtectedRoute><DashboardPage /></IsProtectedRoute>
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <h4>404</h4>
  }
]);

function App() {
  return(
      <RouterProvider router={router}/>
  )

  // const {url} = UseNavigation();

  // switch(url.toLocaleLowerCase()) {
  //   case "home":
  //     return <LandingPage />;
  //     <ToastContainer/>
  //   case "login":
  //     return <LoginPage />;  
  //   default:
  //     return <LandingPage />;
  //     break;
  // }
}

export default App;
