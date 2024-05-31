import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherDetailComp from "./components/WeatherDetailComp";
import WindDetails from "./components/WindDetails";
import DayWeather from "./components/DayWeather";
import { Box, CircularProgress } from "@chakra-ui/react";
function App() {
  const [data, setData] = useState(null);
  const [cityValue, setCityValue] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (city) => {
    let key = "PPCV27QRRS3KYLBSQH4C63ALX";
    setLoading(true)
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityValue}?unitGroup=metric&key=${key}&contentType=json`
    );
    let data = "";
    if (response.status === 200) {
      data = await response.json();
    } else {
      data = null;
    }
    setLoading(false)
    setData(data);
  };

  const handleCityValue = (event) => {
    setCityValue(event.target?.value);
  };

  return (
    <Box>
      <Search
        fetchData={fetchData}
        handleCityValue={handleCityValue}
        cityValue={cityValue}
      />

      {loading ? (
        <CircularProgress isIndeterminate color='black' />
      ) : (
        <>
          <WeatherDetailComp data={data} />
          <WindDetails data={data} />
          {data?.days?.map((day) => {
            return (
              <DayWeather
                key={day.datetimeEpoch}
                date={day.datetime}
                condition={day.conditions}
                maxTemp={day.tempmax}
                minTemp={day.tempmin}
                icon={day.icon}
              />
            );
          })}
        </>
      )}
    </Box>
  );
}

export default App;
