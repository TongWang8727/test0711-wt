import "./style.css";
import Logo from "../../../assets/Mobbile/Mlogo.png";
import Cut from "../../../assets/Mobbile/Cut.png";
import Fill from "../../../assets/Fill 1.png";
import Shape from "../../../assets/Mobbile/Shape.png";
export default function MobbileHeader() {
  return (
    <>
      <div className="mobbile-header-frame">
        <div className="mobbile-header-left">
          <div className="mobbile-header-img">
            <img src={Logo} alt="" />
          </div>
          <div>
            <img src={Cut} alt="" />
          </div>
        </div>
        <div className="mobbile-header-center">
          <div className="mobbile-header-center-title">MENU</div>
          <div className="mobbile-header-img-shape">
            <img src={Shape} alt="" />
          </div>
        </div>
        <div className="mobbile-header-right">
          <div>
            <img src={Cut} alt="" />
          </div>
          <div className="mobbile-header-img">
            <img src={Fill} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
