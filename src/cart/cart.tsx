import CartItem from "../cartItem/cartItem";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./cart.styles";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    //Total Price in the cart
    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((ack: number, item) => {
            return ack + item.amount * item.price
        }, 0)
    };
    return (
        <Wrapper>
            <div className="cartItemList">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <p>No Item in cart</p> : null}
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))}
            </div>
            <div className="totalPrice">
                <h2>Total:${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>
        </Wrapper>
    );
};

export default Cart;