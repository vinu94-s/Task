import React from "react";
function Card(props){
return(
    
    <div className="container">
<div className="card">
 <img src={props.img} className="card_img" alt=""/>
 <div className="card_body">
 <h2 className="card_title">{props.title}</h2>
 <h3 className="card_price">{props.price}</h3>
 <button className="card_btn">Add cart</button>
 </div>
 </div>
 <div className="card">
 <img src={props.img} className="card_img" alt=""/>
 <div className="card_body">
 <h2 className="card_title">{props.title_1}</h2>
 <h3 className="card_price">{props.price_1}</h3>
 <button className="card_btn">Add cart</button>
 </div>
 </div>
 <div className="card">
 <img src={props.img} className="card_img" alt=""/>
 <div className="card_body">
 <h2 className="card_title">{props.title_2}</h2>
 <h3 className="card_price">{props.price_2}</h3>
 <button className="card_btn">Add cart</button>
 </div>
 </div>
 <div className="card">
 <img src={props.img} className="card_img" alt=""/>
 <div className="card_body">
 <h2 className="card_title">{props.title_3}</h2>
 <h3 className="card_price">{props.price_3}</h3>
 <button className="card_btn">Add cart</button>
 </div>
 </div>  
 </div>
);
}
export default Card;