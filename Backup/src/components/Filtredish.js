import React, { useState } from "react";
import Pages from "./Pages";

function Filtredish(props) {
  let [allMenu, setallMenu] = useState(props.allMenu);
  let [Fldish, setfldish] = useState([]);
  let [active, setactive] = useState("Beef");
  let [hidden,sethidden]=useState("hidden")
  let [currentpage,setcurrentpage]=useState(1)
  let [itemsperpage, setitemsperpage] = useState(4)

  let posoflastdish=currentpage* itemsperpage;

  let indexoffirstdish=posoflastdish-itemsperpage;

  let showthesedishesnow=Fldish.slice(indexoffirstdish,posoflastdish)



let maxitem=4;
  let Beef = props.SingleDish.map((item,index) => {
    if(index<maxitem){
    return (
      <li>
        <img src={item.strMealThumb} alt="" />
        <p>{item.strMeal}</p>
      </li>
    );
    }
  });

  function showresult(cat) {
    props.setSingleDish([])
    sethidden("access")
    setactive(cat);
    let Fldishare = allMenu
      .filter((item) => {
        return item.strCategory === cat;
      })
      .map((item) => {
        return (
          <li>
            <img src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>
          </li>
        );
      });
    setfldish(Fldishare);
  }

  let Catlist = props.spCat.map((item) => {

    return (
      <li
        className={item.strCategory === active ? "active" : ""}
        onClick={() => {
          showresult(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });
  return (
    <div>
      <div className="filtred-dishes">
        <div className="container">
          <div className="text-center">
            <h2>Choose Your Dishes</h2>
            <p>
              Food preference, food intake, and eating behavior are heavily
              influenced by taste. Density of taste buds on the tongue, genetic
              differences in taste receptors, and differences in taste receptor
              sensitivity all contribute to an individual's taste perception and
              to subsequent food preferences.{" "}
            </p>
            <ul className="flex flex-wrap gap text-align">{Catlist}</ul>
          </div>
        </div>
      </div>

      <div className="catlist">
        <ul className="flex flex-wrap gap text-align">
          {Beef}
          {Fldish.length > 0 ? (
            showthesedishesnow
          ) : (
            <div className={hidden} id="alert">
              <h3>Sorry, No Items Found</h3>
              <h4>please try another dishes</h4>
            </div>
          )}
        </ul>
        
      </div>
      <div>
          <Pages Fldish={Fldish} itemsperpage={itemsperpage} currentpage={currentpage} setcurrentpage={setcurrentpage} />
        </div>
    </div>
  );
}

export default Filtredish;
