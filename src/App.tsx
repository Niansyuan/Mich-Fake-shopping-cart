import { useState } from "react";
import { useQuery } from "react-query";
//components
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//styles
import { Wrapper } from "./App.styles";
//types
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data);
  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
