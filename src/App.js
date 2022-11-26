import "./App.css";
import Home from "./pages/Home/Home";
import Albums from "./pages/Albums/Albums";
import RootLayout from "./pages/RootLayout/RootLayout";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/home" element={<Home/>} />
      <Route path="/photoalbum" element={<Albums/>}/>
    </Route>
  )
);

const App = () => {
  return   <RouterProvider router={router} />
};

export default App;
