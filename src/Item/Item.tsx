import { Button } from "@mui/material";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./Item.styles";

type Props = {
    item: CartItemType,
    handleAddToCart: (clickType: CartItemType) => void;//設定handleAddToCart的type，那因為它return nothing，所以return void
};

//Item is a functional component
//React.FC<Props> is the type for Item
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button
            onClick={() => handleAddToCart(item)}
            variant="text"
            disableElevation
            size="large"
        >
            Add to cart
        </Button> {/*為了不要立即觸發onClick，這邊使用inline function */}
    </Wrapper>
);

export default Item;