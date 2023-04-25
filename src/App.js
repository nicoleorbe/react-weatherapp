import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-container row shadow p-4 pt-5 pb-5 bg-body-tertiary rounded">
          {/* first row / search bar */}
          <Search />
          {/* second row */}
          <CurrentWeather />
          {/* third row */}
          <WeatherDetails />
          {/* fourth row */}
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
