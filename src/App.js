
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './pages/Home/Home.jsx'
import Menu from './pages/Menu/Menu/Menu.jsx';
import Order from './pages/Order/Order/Order.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/SignUp/Signup.jsx';
import PrivateRouter from './Router/PrivateRouter.jsx';
import UserDashBoard from './Layout/UserDashBoard.jsx';
import UserCart from './Dashboard/UserCart.jsx';
import AllUsers from './Dashboard/AllUsers.jsx';
import AddItems from './Dashboard/AddItems/AddItems.jsx';
import AdminRoute from './Router/AdminRoute.jsx';
import ManageItem from './Dashboard/ManageItem/ManageItem.jsx';
import UpdateItem from './Dashboard/UpdateItem/UpdateItem.jsx';
import Payment from './Dashboard/Payment/Payment.jsx';
import PaymentHistory from './Dashboard/PaymentHistory/PaymentHistory.jsx';
import UserHome from './Dashboard/UserHome/UserHome.jsx';
import AdminHome from './Dashboard/AdminHome/AdminHome.jsx';
import AddReview from './Dashboard/AddReview/AddReview.jsx';
import ModeratorRouter from './Router/ModeratorRouter.jsx'
import ModeratorHome from './Dashboard/ModeratorHome/ModeratorHome.jsx'
import AddUsers from './Dashboard/AddUsers/AddUsers.jsx';
function App() {

   
 const router = createBrowserRouter([
 
  {
    path:'/',
    element:<Main></Main>,
    children:[ 
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/menu',
        element: <PrivateRouter><Menu></Menu></PrivateRouter>
      },
      {
        path:'/order/:category',
        element: <PrivateRouter><Order></Order></PrivateRouter>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },

    ]
  },

  {
    path:'dashboard',
    element:<UserDashBoard></UserDashBoard>,
    children:[
      // normal users routes
      {
        path:'userHome',
        element: <UserHome></UserHome>
      },
     

      {
        path:'cart',
        element: <UserCart></UserCart>
      },
      
      {
        path:'payment',
        element: <Payment></Payment>
      },
      {
        path:'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:'addreview',
        element: <AddReview></AddReview>
      },
      


      // moderator routes
    
      {
        path:'moderatorHome',
        element: <ModeratorRouter> <ModeratorHome></ModeratorHome> </ModeratorRouter>
      },

      
      {
        path:'additems',
        element: <ModeratorRouter><AddItems></AddItems></ModeratorRouter>
      },
      {
        path:'manageitem',
        element: <ModeratorRouter> <ManageItem></ManageItem></ModeratorRouter>
      },
      {
        path:'updateitem/:id',
        element: <ModeratorRouter> <UpdateItem></UpdateItem> </ModeratorRouter>,
          loader:  ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },

     // admin route 
     
     {
      path: 'adminHome',
      element : <AdminRoute><AdminHome></AdminHome></AdminRoute>

     },

     {
      path:'allusers',
      element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    },
    {
      path: 'addusers',
      element:<AddUsers></AddUsers>
    }
     

    ]
  }
  
 
 ])

  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} > </RouterProvider>
      
    </div>
  );
}

export default App;
