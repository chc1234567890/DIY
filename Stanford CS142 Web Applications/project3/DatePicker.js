'use strict';
function DatePicker(id, callback){
    DatePicker.prototype.render = function(date){
        let month = date.getMonth() + 1, monthdate = date.getDate(), year = date.getFullYear();
        callback(id, {month: month, day: monthdate, year: year});
        let DAY = 86400000;
        let dayOfMonth = function(d){
            let month = d.getMonth() + 1, year = d.getFullYear();
            if(month == 2) return year % 4 != 0 ? 28 : (year % 100 != 0 ? 29 : (year % 400 == 0 ? 29 : 28));
            return [0,31,0,31,30,31,30,31,31,30,31,30,31][month];
        };
        let s =  `<table class="calendar">`;
        date.setTime(date.getTime() - DAY * (monthdate - 1));
        let weeks = Math.ceil((date.getDay() + dayOfMonth(date)) / 7);
        date.setTime(date.getTime() - DAY * date.getDay());

        s += `<tr>`;
        for(let j = 0; j <= 6; j++){
            s += `<td>` + ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][j] + `</td>`;
        }
        s += `</tr>`;

        for(let i = 1; i <= weeks; i++){
            s += `<tr>`;
            for(let j = 0; j <= 6; j++){
                s += "<td>" + date.getDate() + "</td>";
                date.setTime(date.getTime() + DAY);
            }
            s += `</tr>`;
        }

        s += `</table>`;
        document.getElementById(id).innerHTML = s;
    };
}