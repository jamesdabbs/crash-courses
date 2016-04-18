;(function() {
    console.log("It works")
    var s = document.getElementById("day-table-body");

    function buildDayRow(day) {
        return `
          <tr class="day">
            <td class="day__name">${day.name}</td>
            <td class="day__weather"><i data-icon="${day.weather}"></i></td>
            <td class="day__high">${day.high}</td>
            <td class="day__low">${day.low}</td>
          </tr>`;
    }

    var days = [
        { name: "Tuesday", weather: "H", high: 79, low: 55 },
        { name: "Tuesday", weather: "R", high: 81, low: 61 },
        { name: "Thursday", weather: "R", high: 72, low: 57 },
    ]

    var html = "";
    days.forEach(function(day) {
        html = html + buildDayRow(day);
    })

    s.innerHTML = html;
})();
