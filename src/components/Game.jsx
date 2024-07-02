import React, { useState } from "react";
import { Button } from "./Button";
import { matrix } from "../util/matrix";
export const Game = () => {
    const [ButtonClicked,SetButtonClicked] = useState(true);
    const [isWinner,SetIsWinner] = useState(-1);
    return (

        <div>
           <Button type="button" name="0" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button>
           <Button type="button" name="1" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button>
           <Button type="button" name="2" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button><br/>
           <Button type="button" name="3" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button>
           <Button type="button" name="4" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button>
           <Button type="button" name="5" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button><br/>
           <Button type="button" name="6" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button>
           <Button type="button" name="7" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button>
           <Button type="button" name="8" ButtonClicked={ButtonClicked} SetButtonClicked={SetButtonClicked} matrix={matrix} isWinner={isWinner} SetIsWinner={SetIsWinner}>-</Button>
        </div>

    );
}