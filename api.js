async function basicInformation() {
    fetch('https://weathertoday-1.onrender.com/basic') 
    .then(response => {
      if (!response.ok) {
        throw new Error("Lỗi kết nối server");
      }
      return response.json();
    })
    .then(data => {
      console.log("Basic Data:", data);
      renderUI(data); 
    })
    .catch(error => {
      console.log(error.message);
    });
} 

async function getByCity() {
  const cityInput = document.getElementById('cityInput').value;
  
  if(!cityInput) {
      alert("Please enter a city name");
      return;
  }

  fetch(`https://weathertoday-1.onrender.com/search?city=${cityInput}`)
  .then(response => {
    if (!response.ok) {
      alert("City not found or Server Error");
      throw new Error("No okay");
    }
    return response.json();
  })
  .then(data => {
    console.log("Search Data:", data);
    renderUI(data); 
  })
  .catch(error => {
    console.log(error.message);
  });
}

function renderUI(data) {
    document.getElementById('cityName').innerText = data.city;
    document.getElementById('temp').innerText = data.nhietdo + "°C"; 
    document.getElementById('humid').innerText = data.doam + "%";
    document.getElementById('wind').innerText = data.tocdogio + " m/s";
    document.getElementById('feelsliketemp').innerText = data.camgiacnhu + "°C";
}

basicInformation();
