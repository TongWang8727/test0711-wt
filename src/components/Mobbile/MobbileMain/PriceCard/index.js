import { useState } from "react";
import MobbileButton from "../../../Button/MobbileButton/index";
import "./style.css";

export default function MobbilePriceCard({
  typeName,
  price,
  viewsMonth,
  ArExperiences,
  select,
  setSelect,
  index,
}) {
  const [isDisplay,setIsDisplay]=useState(false)
  const handleDispaly=()=>{
    setIsDisplay(!isDisplay)
  }
  return (
    <>
      <div className="mobbile-price-card-frame">
        <div
          className={
            select === index ? "mobbile-price-card-header-onclick" : "mobbile-price-card-header"
          }
        >
          <div className={
            select === index ? "mobbile-price-card-header-typaName-onclick" : "mobbile-price-card-header-typaName"
          }>{typeName}</div>
          <div>
            <span className={
            select === index ? "mobbile-price-card-header-price-onclick" : "mobbile-price-card-header-price"
          }>${price}</span>/month
          </div>
        </div>
        <div className="mobbile-price-card-center">
          <div className="mobbile-price-card-center-context">
            <div className="mobbile-price-card-center-context-frame">
              <div>VIews/month</div>
              <div className="mobbile-price-card-center-context-num">{viewsMonth}</div>
            </div>
            <div className="mobbile-price-card-center-context-frame">
              <div>AR experiences</div>
              <div className="mobbile-price-card-center-context-num">
                {ArExperiences}
              </div>
            </div>
          </div>
        </div>
        <div className="mobbile-price-card-footer">
        <div className="mobbile-price-card-footer-btn-plan">
        <MobbileButton
              value="Plan info"
              style={isDisplay ?'white-blue':'white'}
              index={index}
              onClick={handleDispaly}
            />
          </div>
          {isDisplay&&<div className={
            select === index ? "mobbile-price-card-footer-ul-onclick" : "mobbile-price-card-footer-ul"
          }>
            <ul>
              <li>Augmented reality editor</li>
              <li>Content management system</li>
              <li>Hosting/storage of your ar experiences</li>
              <li>AR projects Dashboard</li>
              <li>Product maintenance and access to releases</li>
              <li>Customer support</li>
            </ul>
          </div>}
          <div className="mobbile-price-card-footer-btn">
            <MobbileButton
              value={select === index ? "Your current plan":"Buy Now"}
              style={select === index ? "green":"blue"}
              index={index}
              onClick={()=>{setSelect(index)}}
            />
          </div>
        </div>
      </div>
    </>
  );
}
