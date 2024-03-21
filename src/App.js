import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import "./Footer.css";
const App = () => {
  const [radius, setRadius] = useState("");
  const [circumference, setCircumference] = useState(null);
  const [area, setArea] = useState(null);

  const handleClear = (e) => {
    e.preventDefault();
    setCircumference(null);
    setRadius("");
    setArea(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://circle-backend-uyt0.onrender.com/calculate-area",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ radius }),
        }
      );
      const data = await response.json();
      setArea(data.area);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://circle-backend-uyt0.onrender.com/calculate-circumference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ radius }),
        }
      );
      const data = await response.json();
      setCircumference(data.circumference);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <label>
                <h1>Enter circle Radius:</h1>
              </label>
              <input
                type="number"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                required
              />
              <div className="buttons">
                <button type="submit"> Area</button>
                <button onClick={handleSubmit2}> Circumference </button>
                <button className="clear" onClick={handleClear}>
                  {" "}
                  Clear{" "}
                </button>
              </div>{" "}
            </div>
          </form>
          {area && (
            <p className="area">
              Area of <span className="radii">{radius} </span>is:
              <strong>{area}</strong>{" "}
            </p>
          )}
          {circumference && (
            <p className="area">
              Circumference of <span className="radii">{radius} </span> is :
              <strong>{circumference}</strong>{" "}
            </p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
