let lat;
let long;
let API_KEY = "1c18bdc3e52a15f56b3af6951038e572";

document.getElementById("submit").addEventListener("click", () => {
  // get the lat and long
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log("lat", lat, "long", long);
        // fetch
        //document.body.innerHTML += `<br/><br/><iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.body.innerHTML += `
            <br/><br/>
            <p>location : ${data.name}</p>
            <p>${lat}, ${long}</p>
            <p>timezone: ${data.timezone}</p>
            <p>offset-STD: ${data.wind.speed}</p>
            <p>offset-STD-seconds: ${data.main.humidity}</p>
            <p>offset-DST: ${data.wind.deg}</p>
            <p>offset-DST-seconds: ${data.main.feels_like}</p>
            <p>country:</p>
            <p>pincode:</p>
            <p>city:</p>

            `;
          });
      },
      (error) => {
        alert(error);
      }
    );
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
