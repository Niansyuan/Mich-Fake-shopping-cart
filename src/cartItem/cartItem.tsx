import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { Button } from "@mui/material";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "../cartItem/cartItem.styles";
//component
import AlertDialog from "../dialog/dialog";

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    removeOnce: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart, removeOnce }) => (
    <Wrapper>
        <div>
            <div className="deletButton">
                <AlertDialog item={item} removeOnce={removeOnce} />
                <h3>{item.title}</h3>
            </div>
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