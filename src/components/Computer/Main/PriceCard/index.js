import { useState } from "react";
import Button from "../../../Button";
import "./style.css";

export default function PriceCard({
  typeName,
  price,
  viewsMonth,
  ArExperiences,
  select,
  setSelect,
  index,
}) {
  return (
    <>
      <div className="price-card-frame">
        <div
          className={
            select === index ? "price-card-header-onclick" : "price-card-header"
          }
        >
          <div className={
            select === index ? "price-card-header-typaName-onclick" : "price-card-header-typaName"
          }>{typeName}</div>
          <div>
            <span className={
            select === index ? "price-card-header-price-onclick" : "price-card-header-price"
          }>${price}</span>/month
          </div>
        </div>
        <div className="price-card-center">
          <div className="price-card-center-context">
            <div className="price-card-center-context-frame">
              <div>VIews/month</div>
              <div className="price-card-center-context-num">{viewsMonth}</div>
            </div>
            <div className="price-card-center-context-frame">
              <div>AR experiences</div>
              <div className="price-card-center-context-num">
                {ArExperiences}
              </div>
            </div>
          </div>
        </div>
        <div className="price-card-footer">
          <div className={
            select === index ? "price-card-footer-ul-onclick" : "price-card-footer-ul"
          }>
            <ul>
              <li>Augmented reality editor</li>
              <li>Content management system</li>
              <li>Hosting/storage of your ar experiences</li>
              <li>AR projects Dashboard</li>
              <li>Product maintenance and access to releases</li>
              <li>Customer support</li>
            </ul>
          </div>
          <div className="price-card-footer-btn">
            <Button
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
