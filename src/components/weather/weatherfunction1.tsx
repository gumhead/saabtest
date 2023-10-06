import React, { useEffect, useState } from "react";
export function weatherComponent() {
    const [data, setWeather] = useState([]);

    const fetchData = () => {
        return fetch("https://goweather.herokuapp.com/weather/Stockholm")
            .then((response) => response.json())
            .then((data) => setWeather(data));
    }
        useEffect(() => {
            fetchData();
        },[])
    return (data);
};
export default weatherComponent;

