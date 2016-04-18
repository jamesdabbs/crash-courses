;(function() {
    console.log("It works")
    var s = document.getElementById("day-table-body");

    // Go get the weather for Detroit
    var req = new XMLHttpRequest();
    req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Detroit&APPID=8e2d87f18292dd1305f3d6fbde147405');
    req.onload = doStuff;
    req.send();

    function doStuff(res) {
        var data = JSON.parse(res.target.response);
        var tempDisplay = document.getElementById("temp-display");
        tempDisplay.innerHTML = kToF(data.main.temp);

        var days = [
            { name: "Tuesday", weather: "H", high: 79, low: 55 },
            { name: "Tuesday", weather: "R", high: 81, low: 61 },
            { name: "Thursday", weather: "R", high: 72, low: 57 },
        ]

        renderForecast(days)
    }

    function kToF(k) {
        return Math.round(k * (9 / 5) - 459.67);
    }

    function buildDayRow(day) {
        return `
          <tr class="day">
            <td class="day__name">${day.name}</td>
            <td class="day__weather"><i data-icon="${day.weather}"></i></td>
            <td class="day__high">${day.high}</td>
            <td class="day__low">${day.low}</td>
          </tr>`;
    }

    function renderForecast(days) {
        var html = "";
        days.forEach(function(day) {
            html = html + buildDayRow(day);
        })

        s.innerHTML = html;
    }
})();
