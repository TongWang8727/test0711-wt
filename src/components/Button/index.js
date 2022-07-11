import "./style.css";

export default function Button({ value, style, onClick, index }) {
  if (style === "blue") {
    return (
      <>
        <div className="blue-button">
          <button onClick={onClick}>{value}</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="green-button">
          <button onClick={onClick}>{value}</button>
        </div>
      </>
    );
  }
}
