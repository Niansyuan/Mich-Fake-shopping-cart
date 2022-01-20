import { useState } from "react";
import { useQuery } from "react-query";
//components
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Item from "./Item/Item";
//styles
import { StyledButton, Wrapper } from "./App.styles";
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
  //set state
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);
  //set function
  const getTotalItems = (items: CartItemType[]) => null;
  const handleAddToCart = (clickType: CartItemType) => null; //clickType為參數，並設定其type為CartItemType
  const handleRemoveFromCart = () => null;

  //<LinearProgress /> 顯示進度條
  if (isLoading) {
    return <LinearProgress />
  };
  if (error) {
    return <div>something went wrong</div>
  };

  return (
    <Wrapper>
      {/* sideBar for cartItems */}
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        cartItemsList
      </Drawer>
      {/* button for open cart */}
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      {/* grid for each item */}
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={4}
          >
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
