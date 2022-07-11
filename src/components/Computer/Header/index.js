import "./style.css";
import Logo from "../../../assets/Logo.png";
import Fill from "../../../assets/Fill 1.png";
import MenuCut from "../../../assets/BG_menu.png";
import Arrow from "../../../assets/arrow.png";
import { useState } from "react";
import { Link } from 'react-router-dom'
export default function ComputerHeader() {
  const [Campaigns, setCampaigns] = useState(false);
  const [Roars, setRoars] = useState(false);
  const [Statistic, setStatistic] = useState(false);
  const [Teams, setTeams] = useState(false);
  const [Plans, setPlans] = useState(true);
  const [Mobile, setMobile] = useState(false);

  const handdleCampaigns = () => {
    console.log(111)
    setCampaigns(true);
    setRoars(false);
    setStatistic(false);
    setTeams(false);
    setPlans(false);
    setMobile(false);
  };
  const handdleRoars = () => {
    setCampaigns(false);
    setRoars(true);
    setStatistic(false);
    setTeams(false);
    setPlans(false);
    setMobile(false);
  };
  const handdleStatistic = () => {
    setCampaigns(false);
    setRoars(false);
    setStatistic(true);
    setTeams(false);
    setPlans(false);
    setMobile(false);
  };
  const handdleTeams = () => {
    setCampaigns(false);
    setRoars(false);
    setStatistic(false);
    setTeams(true);
    setPlans(false);
    setMobile(false);
  };
  const handdlePlans = () => {
    setCampaigns(false);
    setRoars(false);
    setStatistic(false);
    setTeams(false);
    setPlans(true);
    setMobile(false);
  };
  const handdleMobile = () => {
    setCampaigns(false);
    setRoars(false);
    setStatistic(false);
    setTeams(false);
    setPlans(false);
    setMobile(true);
  };

  return (
    <>
      <div className="computer-header-frame">
        <div className="computer-header-left">
          <div className="computer-header-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="computer-header-menu">
            <div
              className={
                Campaigns
                  ? "computer-header-menu-title-onclick"
                  : "computer-header-menu-title"
              }
              onClick={handdleCampaigns}
            >
              Campaigns
            </div>
            <div
              className={
                Roars
                  ? "computer-header-menu-title-onclick"
                  : "computer-header-menu-title"
              }
              onClick={handdleRoars}
            >
              Roars
            </div>
            <div
              className={
                Statistic
                  ? "computer-header-menu-title-onclick"
                  : "computer-header-menu-title"
              }
              onClick={handdleStatistic}
            >
              Statistic
            </div>
            <div
              className={
                Teams
                  ? "computer-header-menu-title-onclick"
                  : "computer-header-menu-title"
              }
              onClick={handdleTeams}
            >
              Teams
            </div>
            <div className="computer-header-menu-cut">
              <img src={MenuCut} alt="" />
            </div>
            <div
              className={
                Plans
                  ? "computer-header-menu-title-onclick"
                  : "computer-header-menu-title"
              }
              onClick={handdlePlans}
            >
              Plans
            </div>
            <div
              className={
                Mobile
                  ? "computer-header-menu-title-onclick"
                  : "computer-header-menu-title"
              }
              onClick={handdleMobile}
            ><Link to='/ComputerPage'>
              Mobile App</Link>
            </div>
          </div>
        </div>
        <div className="computer-header-right">
          <div className="computer-header-right-btn">Create ROAR</div>
          <div className="computer-header-menu-cut">
            <img src={MenuCut} alt="" />
          </div>
          <div className="computer-header-menu-cut">
            <img src={Fill} alt="" />
          </div>
          <div className="computer-header-menu-title">John Dou</div>
          <div className="computer-header-menu-arrow"><img src={Arrow} alt="" /></div>
        </div>
      </div>
    </>
  );
}
