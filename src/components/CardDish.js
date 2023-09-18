import React from "react";

function CardDish(props) {
   
  return (
    <li className="text-center">
        <a href="javaScript:;" onClick={()=>{props.showPopup(props.item.strMeal)}}>
      <img src={props.item.strMealThumb} alt="meals" className="br" />
      <p>{props.item.strMeal}</p>
      </a>
    </li>
  );
}

export default CardDish;
