import React, { useState } from "react";

function Pages(props) {
  let numberofpages = [];
  for (let i = 1; i <= Math.ceil(props.Fldish.length/props.itemsperpage); i++) {
    numberofpages.push(i);
  }

  let shownextdish=(event)=>{

    props.setcurrentpage(event.target.id)
      
  }

  let page = numberofpages.map((pageno) => {
    return <li id={pageno} onClick={shownextdish}>{pageno}</li>;
  });

  return (
    <section>
      <ul className="pagination">{page}</ul>
    </section>
  );
}

export default Pages;
