
 
function search(){
    place=city.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=1c46b465a507578fb9601d4ad7f3673e&units=metric`).then(d=>d.json()).then(data=>displayreport(data))
}

function displayreport(details){

    data=`<div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-md-8 col-lg-6 col-xl-4">

      <div class="card" style="color: #4B515D; border-radius: 35px;">
        <div class="card-body p-4">

          <div class="d-flex">
            <h6 class="flex-grow-1">${(place).toUpperCase()}</h6>
            <h6><span id="time"></span></h6>
          </div>

          <div class="d-flex flex-column text-center mt-5 mb-4">
            <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${details.main.temp}°C </h6>
            <span class="small" style="color: #868B94">${details.weather[0].main}</span>
          </div>

          <div class="d-flex align-items-center">
            <div class="flex-grow-1" style="font-size: 1rem;">
              <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${details.wind.speed} km/h</span></div>
              <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${details.main.humidity}% </span>
              </div>
              <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${details.sys.sunrise}</span>
              </div>
            </div>
            <div>
              <img src="http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png"
                width="100px">
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>`

  result.innerHTML=data

    }

    document.getElementById("ti").onmouseover = function() {mouseOver()};    
    function mouseOver() {
      document.getElementById("ti").style.fontSize = "50px";
    }
    document.getElementById("ti").onmouseout = function() {mouseOut()};    
    function mouseOut() {
      document.getElementById("ti").style.fontSize = "";
    }





