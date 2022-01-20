import { Button } from "@mui/material";
import { fchmod } from "fs";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "../cartItem/cartItem.styles";

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="ItemInfo">
                <p>Price: $ {item.price}</p>
                <p>Total: $ {(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="cartItemButtons">
                <Button
                    disableElevation
                    size="small"
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    disableElevation
                    size="small"
                    variant="contained"
                    onClick={() => addToCart(item)}
                >
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItem;