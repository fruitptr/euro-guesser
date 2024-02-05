import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/fruitptr/country-guesser/main/src/assets/europeUltra.json"


  
function Map({correctCountriesGuessed}) {
  return (
    <ComposableMap 
      projection="geoMercator"
      projectionConfig={{
        center: [20, 41],
        scale: 300
      }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isCorrectGuess = correctCountriesGuessed.includes(geo.properties.id);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isCorrectGuess ? "#94AD99" : "#E0E0E0",
                    stroke: "#FFFFFF",
                    outline: "none"
                  },
                  hover: {
                    fill: isCorrectGuess ? "#94AD99" : "#E0E0E0",
                    stroke: "#FFFFFF",
                    outline: "none"
                  },
                  pressed: {
                    fill: isCorrectGuess ? "#94AD99" : "#E0E0E0",
                    stroke: "#FFFFFF",
                    outline: "none"
                  },
                }}
              />
            );
          })
        }
      </Geographies>


    </ComposableMap>
  );
}

export default Map;
