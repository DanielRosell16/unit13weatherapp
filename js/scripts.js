


const myDate = new Date();

const todayDayNumber = myDate.getDay();


const myweekday = new Array(7);
    myweekday[0] = "Sunday"
    myweekday[1] = "Monday"
    myweekday[2] = "Tuesday"
    myweekday[3] = "Wednesday"
    myweekday[4] = "Thursday"
    myweekday[5] = "Friday"
    myweekday[6] = "Saturday"


// Add an API for the weather app
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5781860&appid=e1c6284fd66e0ca5608eeee575adacf2&units=imperial"

fetch(apiURL)
.then((response) => response.json())
.then((weatherInfo => {
    console.log(weatherInfo);


    document.getElementById('place').textContent=weatherInfo.city.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.list[0].main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.list[0].wind.speed;



    let myList = weatherInfo.list;


    let forecastDayNumber = todayDayNumber

console.log(todayDayNumber)

    for (i=0; i < myList.length; i++) {
        var time = myList[i].dt_txt;
        if(time.includes('21:00:00')) {

            console.log("Found an entry with 21:00:00 in the time. It was report " + i + " from myList of 40")

            forecastDayNumber += 1;
            if (forecastDayNumber === 7){
                forecastDayNumber = 0;
            }

            let theDayName = document.createElement('span')
            theDayName.textContent = myweekday[forecastDayNumber];

            let theTemp = document.createElement('p');
            theTemp.textContent = weatherInfo.list[i].main.temp; + "\x80";

            let iconCode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";

            let theIcon = document.createElement('img');
            theIcon.src = iconPath;


            let theDay = document.createElement('div');
            theDay.appendChild(theDayName)
            theDay.appendChild(theTemp)
            theDay.appendChild(theIcon)

            document.getElementById("weatherForecast").appendChild(theDay)





        } //end of if
    } //end of for



})); //end of fat arrow function




// my api key is e1c6284fd66e0ca5608eeee575adacf2



// city zip api https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}