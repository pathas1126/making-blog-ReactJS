import React, { Component } from "react";

const API_KEY = "513227f1586a6eda78e65143171a75aa";

export class Home extends Component {
  state = {
    temperature: 0,
    name: ""
  };

  getWeather = () => {
    fetch(
      `api.openweathermap.org/data/2.5/weather?id=1835848&appid=${API_KEY}`,
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          temperature: Math.floor(data.main.temp - 273.15),
          name: data.weather[0].main
        });
      });
  };
  componentDidMount() {
    this.getWeather();
  }
  render() {
    console.log(this.state);
    const { temperature, name } = this.state;
    return (
      <>
        <h1>오늘의 날씨</h1>
        <h3>온도: {temperature}</h3>
        <h3>날씨: {name}</h3>
      </>
    );
  }
}

export default Home;
