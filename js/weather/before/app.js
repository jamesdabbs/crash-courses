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

    var tuesday = { name: "Tuesday", weather: "H", high: 79, low: 55 };
    s.innerHTML = buildDayRow(tuesday);
})();
