import { useState } from "react";
import { useQuery } from "react-query";
//components
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Item from "./Item/Item";
import Cart from "./cart/cart";
//styles
import { StyledButton, Wrapper } from "./App.styles";
//types
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
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
  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0); //reduce(action, initialValue)
  };


  //clickType為參數，並設定其type為CartItemType
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prevState) => {
      //1. Is the item already added in the cart
      const isItemInCart = prevState.find((item) => item.id === clickedItem.id)
      if (isItemInCart) {
        return prevState.map((item) => (
          item.id === clickedItem.id ?
            { ...item, amount: item.amount + 1 } : item
        ))
      };
      //2.first time the item is add
      return [...prevState, { ...clickedItem, amount: 1 }]
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevState) => {
      return prevState.reduce((ack, item) => { //ack是accumulator，用來累積回呼函式回傳值的累加器，回傳上一次呼叫後的累加數值。
        if (item.id === id) {
          if (item.amount === 1) {
            return ack
          };
          return [...ack, { ...item, amount: item.amount - 1 }]
        } else {
          return [...ack, item]
        };
      }, [] as CartItemType[])
    })
  };

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
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      {/* button for open cart */}
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge
          badgeContent={getTotalItems(cartItems)}
          color="error"
        >
          <AddShoppingCartIcon fontSize="large" />
        </Badge>
      </StyledButton>
      {/* grid for each item */}
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={3}
          >
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;