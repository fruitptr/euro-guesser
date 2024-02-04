import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { ScaleFade } from '@chakra-ui/react';

const geoUrl =
  "https://raw.githubusercontent.com/amcharts/amcharts4/master/dist/geodata/es2015/json/region/world/europeUltra.json"


  
function Map({correctCountriesGuessed}) {
  return (
    <ScaleFade initialScale={0.9} in={true}>
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
                    },
                    hover: {
                      fill: isCorrectGuess ? "#94AD99" : "#E0E0E0",
                      stroke: "#FFFFFF",
                    },
                    pressed: {
                      fill: isCorrectGuess ? "#94AD99" : "#E0E0E0",
                      stroke: "#FFFFFF",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>


      </ComposableMap>
    </ScaleFade>
  );
}

export default Map;
