import "./style.css";

export default function MobileButton({ value, style, onClick, index }) {
  if (style === "blue") {
    return (
      <>
        <div className="mobbile-blue-button">
          <button onClick={onClick}>{value}</button>
        </div>
      </>
    );
  } else if (style === "white") {
    return (
      <>
        <div className="mobbile-white-button">
          <button onClick={onClick}>{value}</button>
        </div>
      </>
    );
  } else if (style === "white-blue") {
    return (
      <>
        <div className="mobbile-white-blue-button">
          <button onClick={onClick}>{value}</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mobbile-green-button">
          <button onClick={onClick}>{value}</button>
        </div>
      </>
    );
  }
}
