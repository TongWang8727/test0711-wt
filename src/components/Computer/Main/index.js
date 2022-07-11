import Banner from "../../../assets/banner.png";
import "./style.css";
import store from "../../../redux/store";
import PriceCard from "./PriceCard";
import { useState } from "react";

export default function MainPage() {
  const priceData = store.getState();
  const [select,setSelect]=useState('')
  const handleSelect=(index)=>{
    setSelect(index)
    console.log(index)
  }
  return (
    <>
      <div className="main-page-frame">
        <div className="main-page-frame-context">
          <div className="main-page-frame-context-img">
            <img src={Banner} alt="" />
            {/* <div className="main-page-frame-context-img-background"></div> */}
          </div>
          <div className="main-page-frame-context-price-card">
            {priceData.map((item,index) => {
              return (
                <PriceCard
                  typeName={item.typeName}
                  price={item.price}
                  viewsMonth={item.viewsMonth}
                  ArExperiences={item.ArExperiences}
                  index={index}
                  setSelect={setSelect}
                  select={select}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
