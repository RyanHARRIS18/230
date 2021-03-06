const apiforecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=${unit}&appid=${apiKey}`;
fetch(apiforecastURL)
    .then((response) => response.json())
    .then((forecasts) => {
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 1);
        let hourString = '18:00:00';
        let counter = 1;
        //Loop through results
        forecasts.list.forEach(
            (forecast) => {
                if (forecast.dt_txt.includes(hourString)) {
                    const element = document.getElementById(`temp${counter}`);
                    element.innerHTML = (forecast.main.temp) + '&deg;F';
                    nextDate.setDate(nextDate.getDate() + 1);
                    dateString = getDateString(nextDate);
                    const imageElement = document.getElementById(`img${counter}`);
                        imageElement.setAttribute('src','https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png');
                        imageElement.setAttribute('alt', forecast.weather[0].description);
                        counter += 1;

                }
                
            }
        );
    });

   
    
    function getDateString(date) {
        let dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        return dateString;
    }
    
