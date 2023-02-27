import './App.css';

import Weather from './Components/Weather';

import { WeatherProvider } from './Context/Context';

function App() {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
}

export default App;
