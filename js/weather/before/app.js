;(function() {
    let app = document.getElementById('weather-app');
    let cityName = 'world';

    let days = [
        { name: 'Tuesday', icon: 'H', high: 79, low: 55 },
        { name: 'Wednesday', icon: 'R', high: 81, low: 61 }
    ]

    function renderDay(day) {
        return `<tr class="day">
             <th class="day__name">${day.name}</th>
             <td class="day__weather"><i data-icon="${day.icon}"></td>
             <td class="day__high">${day.high}</td>
             <td class="day__low">${day.low}</td>
           </tr>`;
    }

    function renderDays(days) {
        var rows = "";
        days.forEach(function(day) {
            rows += renderDay(day)
        })

        app.innerHTML=`<table class="days"><tbody>${rows}</tbody></table>`;
    }

    let apiKey = '8e2d87f18292dd1305f3d6fbde147405';

    document.querySelector('.city__nameInput').addEventListener('change', function(e) {
        getForecast(this.value);
    })

    function getForecast(city) {
        let req = new XMLHttpRequest();
        req.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=${apiKey}`)
        req.onload = function(res) {
            console.log(res.target.response);
        };
        req.send();
    }

    getForecast("Atlanta");

    setTimeout(function() {
        renderDays(days)
    }, 1000)
})();
