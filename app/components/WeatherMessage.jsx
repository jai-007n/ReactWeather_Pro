var React=require('react');



var WeatherMessage=({temp,location})=>
{

{

  return(
    <h3>It's {temp} celcius at {location} !!</h3>
  );
}

};

module.exports = WeatherMessage;
