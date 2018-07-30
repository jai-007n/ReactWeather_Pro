var React=require('react');



var WeatherMessage=(props)=>
{
      var {temp, location}=props;
  return(
    <h3>It's {temp} celcius at {location} !!</h3>
  );
};

module.exports = WeatherMessage;
