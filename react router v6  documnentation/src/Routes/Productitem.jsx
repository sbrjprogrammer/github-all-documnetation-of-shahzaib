import React from "react";
import shoes from "../shoeObject/Shoes";

function Productitem() {
  return (
    <ul>
        {Object.entries(shoes).map(([slug,{name,img}])=>{
            return <li key={slug}>
                {name}
                <img src={img} alt="pics" />
                </li>
        })}
    </ul>
  );
}

export default Productitem;
