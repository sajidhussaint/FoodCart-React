import React from "react";

function Popup(props) {
  let dishDetails = props.fullMenu
    .filter((Menuitem) => {
      return Menuitem.strMeal === props.currentdish;
    })
    .map((item) => {
      return (
        <div className="popup-content-data">
            <div className="popup-header">
            <img src={item.strMealThumb} alt="" />
            <h5 className="popup-header-category">{item.strCategory}</h5>
            </div>
          <h2 >{item.strMeal}</h2>
          <p>{item.strInstructions}</p>

          <ul className="dish-ingredients">
              <li>{item.strIngredient1}</li>
              <li>{item.strIngredient2}</li>
              <li>{item.strIngredient3}</li>
              <li>{item.strIngredient4}</li>
              
          </ul>
         
        </div>
      );
    });

  let exitbtn = () => {
    props.setshowPopup(false);
  };
  return (
    <div className="popup">
      <div className="popup-content">
      {dishDetails}
        <button>Order Now </button>
        <h5 onClick={exitbtn} className="popup-close">
          X
        </h5>
      </div>
    </div>
  );
}

export default Popup;
