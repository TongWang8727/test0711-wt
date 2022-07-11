import { useState } from "react";
import MobbileBanner from "../../../assets/Mobbile/MobbileBanner.png";
import store from "../../../redux/store";
import MobbilePriceCard from "./PriceCard";
import "./style.css";
export default function MobbileMain() {
  const priceData = store.getState();
  const [select, setSelect] = useState("");
  return (
    <>
      <div className="mobbile-main-frame">
        <div className="mobbile-main-img">
          <img src={MobbileBanner} alt="" />
        </div>
        <div className="mobbile-main-price-card">
          {priceData.map((item, index) => {
            return (
              <MobbilePriceCard
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
    </>
  );
}
