import React, {useCallback, useState} from 'react';

const ShowWeather = ({ error, data }) => {

    const city = data.name;
    const country = data.sys ? data.sys.country : null;
    const temperature = data.main ? data.main.temp : null;
    const pressure = data.main ? data.main.pressure : null;
    const visibility =  data ? data.visibility : null;
    const humidity = data.main ? data.main.humidity : null;
    const clouds =  data.clouds ? data.clouds.all : null;
  
    // Values in standard units
    const pressureInAtm = (pressure / 1000).toFixed(2);
    const visibilityInKM = (visibility / 1000).toFixed(2);
    const tempInCelcius = (temperature / 10).toFixed(2);

    const [bgcolor, setBgColor] = React.useState(""); 
 
    // Add dynamic background based on color
    const dynamicBackgroundColor = (temp) => {
        if(temp < 10) {
            setBgColor("#bbeafa");
         } else if(temp > 10 && tempInCelcius < 30) {
             setBgColor("#fcfa5b");
         } else if(temp > 30){
             setBgColor("#ff512f");
         }
    }

  //  useEffect to call dynamicBackgroundColor function
   React.useEffect(() => {
       dynamicBackgroundColor(tempInCelcius);
    }, [tempInCelcius]);
   
    return (
        <React.Fragment>
            <div className='showWeather'>
                <div className="weather_main" style={{ background: bgcolor}}>
                    <h1 className="weather_heading">
                        {city} <br/> <span> {country} </span> 
                    </h1>
                    <h3 className="temp">Temperature: {tempInCelcius} C</h3>
                    <hr/>
                    <div className="weather_data">
                        <p>
                            Pressure <br/> {pressureInAtm} atm{" "}
                        </p>
                        <p>
                             Visibilty <br/> {visibilityInKM} Km
                        </p>
                    </div>
                    <div className="weather_data">
                        <p>
                            Humidity: <br/> {humidity}%{" "}
                        </p>
                        <p>
                            Clouds <br/> {clouds} % {" "}     
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default ShowWeather
