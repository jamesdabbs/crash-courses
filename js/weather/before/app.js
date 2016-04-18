;(function() {
    console.log("It works")
    var s = document.getElementById("day-table-body");

    var dayName = "Tuesday";
    var dayWeather = "H";
    var dayHigh = 79;
    var dayLow = 55;

    s.innerHTML = `
      <tr class="day">
        <td class="day__name">${dayName}</td>
        <td class="day__weather"><i data-icon="${dayWeather}"></i></td>
        <td class="day__high">${dayHigh}</td>
        <td class="day__low">${dayLow}</td>
      </tr>`;
})();
