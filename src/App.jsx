import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Speakers from "./pages/Speakers";
import HeadPhones from "./pages/HeadPhones";
import EarPhones from "./pages/EarPhones";
// product
import ProductCart from "./product-detail/ProdutCart";
// layout
import RootsLayout from "./layout/RootsLayout";
import Headphones_1 from "./product-detail/Headphones_1";
import Headphones_2 from "./product-detail/Headphones_2";
import Headphones_3 from "./product-detail/Headphones_3";
import Speaker_4 from "./product-detail/Speaker_4";
import Speaker_5 from "./product-detail/Speaker_5";
import Airpods_6 from "./product-detail/Airpods_6";
import NotFound from "./pages/NotFound";
function App() {  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootsLayout />}>
        <Route index element={<Home />} />
        <Route path="headphones" element={<HeadPhones />} />
        <Route path="product" element={<ProductCart />}>
          <Route index path="xx99" element={<Headphones_1 />} />
          <Route path="xx991" element={<Headphones_2 />} />
          <Route path="xx59" element={<Headphones_3 />} />
          <Route path="zx9" element={<Speaker_4 />} />
          <Route path="zx7" element={<Speaker_5 />} />
          <Route path="yx1" element={<Airpods_6 />} />
        </Route>
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<EarPhones />} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
