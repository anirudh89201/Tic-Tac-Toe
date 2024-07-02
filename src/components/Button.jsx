import React, { useState } from "react";
import { directions } from "../util/matrix.js";
export const Button = ({name,ButtonClicked,SetButtonClicked,matrix,isWinner,SetIsWinner}) => {
    const [value,Setvalue] = useState();
    const clickHandler = () => {
        let val = parseInt(name);
        SetButtonClicked((prevState) => !(prevState));
        if(ButtonClicked) {
            Setvalue(0);
            matrix[val] = 0;
        }
        else {
            Setvalue(1);
            matrix[val] = 1;
        }
        for(let i=0;i<directions.length;i++){
            if(matrix[i][0] === 0 && matrix[i][1] === 0 && matrix[i][2] === 0)
                SetIsWinner(0);
            else if(matrix[i][0] ===1 && matrix[i][1] === 1 && matrix[i][2] === 1)
                SetIsWinner(1);
        }
        console.log(isWinner);
    }
    return (
        <>
        <button type="button" style={{width:"40px", height:"50px", borderRadius:"30%"}} onClick={clickHandler}>{value}</button>
        </>
    );
}