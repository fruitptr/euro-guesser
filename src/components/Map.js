import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/amcharts/amcharts4/master/dist/geodata/es2015/json/region/world/europeUltra.json"


  
function Map({correctCountriesGuessed}) {
  return (
    <ComposableMap 
      projection="geoMercator"
      projectionConfig={{
        center: [20, 50],
        scale: 300
      }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isCorrectGuess = correctCountriesGuessed.includes(geo.properties.name);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isCorrectGuess ? "#94AD99" : "#E0E0E0",
                    stroke: "#FFFFFF",
                  },
                  hover: { fill: "#94AD99", stroke: "#FFFFFF" },
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
