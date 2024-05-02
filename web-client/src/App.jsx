import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mens' element={<ShopCategory category="men" />} />
      <Route path='/womens' element={<ShopCategory category="men" />} />
      <Route path='/product' element={<Product />}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/cart' element={<Cart />} />
    </Route>
     
    )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
