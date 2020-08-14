import React from "react";
import "./styles.scss";

function ResultQuotes({ quotes, currentCurrency }) {
  const [showMore, setShowMore] = React.useState(false);
  let resultInitial = [];
  let result = [];
  let count = 0;
  for (const key in quotes) {
    if (quotes.hasOwnProperty(key)) {
      const value = quotes[key];

      if (key != currentCurrency) {
        (count < 4 ? resultInitial : result).push(
          <div key={key} className="quote">
            <div className="cell">
              <img
                height="32"
                src={`https://cdn.ipregistry.co/flags/emojitwo/${key
                  .substr(0, 2)
                  .toLocaleLowerCase()}.svg`}
              />
              <span>
                {key}
              </span>
            </div>
            <div className="cell">
              <span>
                {value.toFixed(3)}
              </span>
            </div>
          </div>
        );
        count++;
      }
    }
  }
  return (
    <div className="result">
      {resultInitial}
      {showMore ? result : ""}
      {resultInitial.length
        ? <button
            className="button-more"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Mostrar solo 3 cotizaciones" : "Ver más cotizaciones"}
          </button>
        : ""}
    </div>
  );
}

export default ResultQuotes;
