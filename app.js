const currentWeather = {
  apiUrl: "https://weatherdbi.herokuapp.com/data/weather/",
  location: "Dhapakhel",
};

async function getData() {
  const response = await fetch(
    `${currentWeather.apiUrl}${currentWeather.location}`
  );
  const data = await response.json();
  address = [data.region];
  fullAdd = address.toString();
  town = fullAdd.split(",", 2);
  console.log(town[0]);
  comment = data.currentConditions.comment;

  //   dayHour = data.currentConditions.dayhour;
  temp = data.currentConditions.temp.c;
  precip = data.currentConditions.precip;
  humidity = data.currentConditions.humidity;
  wind = data.currentConditions.wind.km;
  icon = data.currentConditions.iconURL;
  // console.log(dayHour, temp, percip, humidity, wind, icon, comment);

  document.getElementById("region").textContent = town[0];
  //   document.getElementById("dayhour").textContent = dayHour;
  document.getElementById("comment").textContent = comment;
  document.getElementById("temp").textContent = temp;
  document.getElementById("precip").textContent = precip;
  document.getElementById("humidity").textContent = humidity;
  document.getElementById("wind").textContent = wind;
  document.getElementById("icon").src = icon;

  //--------------ONE---------------------------------------
  firstDIcon = data.next_days[0].iconURL;
  document.getElementById("one-icon").src = firstDIcon;
  firstDDay = data.next_days[0].day;
  firstDDaySlice = firstDDay.slice(0, 3);
  document.getElementById("one-day").textContent = firstDDaySlice;
  firstDMaxTemp = data.next_days[0].max_temp.c;
  document.getElementById("one-max-temp").textContent = firstDMaxTemp;
  firstDMinTemp = data.next_days[0].min_temp.c;
  document.getElementById("one-min-temp").textContent = firstDMinTemp;
  //------------TWO-------------------------------------------
  secondDIcon = data.next_days[1].iconURL;
  document.getElementById("two-icon").src = secondDIcon;
  secondDDay = data.next_days[1].day;
  secondDDaySlice = secondDDay.slice(0, 3);
  document.getElementById("two-day").textContent = secondDDaySlice;
  secondDMaxTemp = data.next_days[1].max_temp.c;
  document.getElementById("two-max-temp").textContent = secondDMaxTemp;
  secondDMinTemp = data.next_days[1].min_temp.c;
  document.getElementById("two-min-temp").textContent = secondDMinTemp;
  //------------THREE-------------------------------------------
  thirdDIcon = data.next_days[2].iconURL;
  document.getElementById("three-icon").src = thirdDIcon;
  thirdDDay = data.next_days[2].day;
  thirdDDaySlice = thirdDDay.slice(0, 3);
  document.getElementById("three-day").textContent = thirdDDaySlice;
  thirdDMaxTemp = data.next_days[2].max_temp.c;
  document.getElementById("three-max-temp").textContent = thirdDMaxTemp;
  thirdDMinTemp = data.next_days[2].min_temp.c;
  document.getElementById("three-min-temp").textContent = thirdDMinTemp;
  console.log("weather call");
}
getData();
setInterval(getData, 600000);
//--------------------------------------------------------------------

//------------------------RANDOM IMAGE------------------------------
function loremPicsum() {
  const url1 = `https://picsum.photos/350/?random=${Math.random()}`;
  document.getElementById("lorem-picsum").src = url1;
  console.log("Picsum call");
}
loremPicsum();
setInterval(loremPicsum, 600000);
//---------------------------------------------------------------------

//----------------------RANDOM QUOTE------------------------------------
function generateQuote() {
  let ranNum = Math.floor(Math.random() * 1643);
  const quote = document.getElementById("quote");
  const authorName = document.getElementById("author");
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote.innerText = data[ranNum].text;
      if (data[ranNum].author == null) {
        authorName.innerText = "~🙏~";
      } else {
        authorName.innerText = `~ ${data[ranNum].author} ~`;
      }
    });
}
generateQuote();
setInterval(generateQuote, 600000);
