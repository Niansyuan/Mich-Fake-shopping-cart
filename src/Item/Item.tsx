import { Button } from "@mui/material";
import { useState } from "react";
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
const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    const [readmore, setReadmore] = useState(true);
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>Item details
                    <span className="ellipsis">...</span>
                    <span hidden={readmore}>{item.description}</span>
                    <button className="more" hidden={!readmore} onClick={() => setReadmore(false)}>read more</button>
                    <button className="more" hidden={readmore} onClick={() => setReadmore(true)}>Hide info</button>
                </p>
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
        </Wrapper >
    )
};

export default Item;