import React from "react";

function Dishes(props) {
let maxdish=8;

  let new_menu = props.spMenu.map((item,index)=>{
      if(index<maxdish){
    return (
      <li className="text-center">
        <img src={item.strMealThumb} alt="meals"className="br"/>
        <p>{item.strMeal}</p>
      </li>
    );
  }});
  return (
    <section className="special-dishes">
      <div className="container">
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
