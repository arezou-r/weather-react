import axios from 'axios';
import {useState} from 'react';
import CircleLoader from "react-spinners/CircleLoader";

export default function Weather(props) {
    let [temp , setTemp] = useState(null);

    function showTemp(response) {
        setTemp(response.data.main.temp);
    }

    let apiKey = "d57ba12fe2c36fb7d6e4a542d490147c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
    

  return (
    <div>
      <CircleLoader 
        loading={true}
        color="#36d7b7"
        cssOverride={{
            display: "block",
            margin: "auto",
          }}
        aria-label="Loading Spinner"
        data-testid="loader"
        size="60"
        speedMultiplier="1"
      />
      
    <div>Weather in {props.cityName} is {temp}</div>
    </div>
  );
}