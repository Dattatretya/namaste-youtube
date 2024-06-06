import Body from "./components/Body";
import Head from "./components/Head";
import {Provider} from "react-redux"
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <Provider store={store}>
    <div >
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
  ]
},
{
  path:"/watch",
  element: <WatchPage/>
}

])

export default App;
