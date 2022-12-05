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
import Favorite from "./pages/Favorite/Favorite";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout />}>
      <Route path="/" index element={<Home />} />
      <Route path="/photoalbum" element={<Albums />} />
      <Route path="/favorite" element={<Favorite />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
