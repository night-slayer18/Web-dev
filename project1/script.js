function generateCalendar() {
    const year = parseInt(document.getElementById("yearInput").value);
    const month = parseInt(document.getElementById("monthInput").value);
    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
      alert("Please enter valid year and month values.");
      return;
    }
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    let calendarHTML = "<h2>" + monthNames[month - 1] + " " + year + "</h2>";
    calendarHTML += "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

    let day = 1;
    for (let i = 0; i < 6; i++) {
      if (day > daysInMonth) {
        break;
      }
      calendarHTML += "<tr>";
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          calendarHTML += "<td></td>";
        } else {
          calendarHTML += `<td>${day}</td>`;
          day++;
        }
      }
      calendarHTML += "</tr>";
    }
    calendarHTML += "</table>";
    document.getElementById("calendar").innerHTML = calendarHTML;
}