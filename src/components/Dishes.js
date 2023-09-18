import React, { useContext } from "react";
import { useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import {AllMenuContext} from "./Menu"
import Addcart from "./Addcart";

function Dishes() {
  const [showPopup, setshowPopup] = useState(false);
  const [currentdish, setcurrentdish] = useState("");
  const AllMenus=useContext(AllMenuContext)

  let showPopupHandler = (Meals) => {
    setcurrentdish(Meals);
    setshowPopup(true);
  };

  let maxdish = 8;

  let new_menu = AllMenus.map((item, index) => {
    if (index < maxdish) {
      return <CardDish item={item} showPopup={showPopupHandler} />;
    }
  });
  return (
    <section className="special-dishes">
      {showPopup && (
        <Popup setshowPopup={setshowPopup}
         currentdish={currentdish} 
         fullMenu={AllMenus}
         />
      )}
      <div className="container">
        <Addcart/>
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            recipe that identifies an individual chef or restaurant. Ideally it
            should be unique and allow an informed gastronome to name the chef
            in a blind tasting. It can be thought of as the culinary equivalent
            of an artist finding their own style, or an author finding their own
            voice.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap text-align">{new_menu}</ul>
        </div>
      </div>
    </section>
  );
}

export default Dishes;
