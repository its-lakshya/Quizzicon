import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Store from "./store/Store";
import Welcome from "./components/Welcome"


const AppLayout = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"signin",
        element:<Signin/>
      },
      {
        path:"welcome",
        element:<Welcome/>
      },
      // {
      //   path:"/game",
      //   element:<Game/>,
      //   children:[
      //     {
      //       path:"/game/ques1",
      //       element:<Question1/>,
      //     },
      //     {
      //       path:"/game/ques2",
      //       element:<Question2/>,
      //     },
      //     {
      //       path:"/game/ques3",
      //       element:<Question3/>,
      //     }
      //   ]
      // },
      // {
      //   path:"/score",
      //   element:<Score/>
      // }

    ]
  }
])

const App = () => {
  return (
    <Provider store={Store}>
      <RouterProvider router ={appRouter}/>
    </Provider>
  )
}

export default App;