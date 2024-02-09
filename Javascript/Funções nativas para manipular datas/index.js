var date = new Date();
var minute
var segundo
hour = date.getHours();
minute = date.getMinutes();
second = date.getSeconds(); 
hour = (hour < 10) ? `0${hour}` : hour;
minute = (minute < 10) ? `0${minute}`: minute;
second = (second < 10) ? `0${second}` : second;

document.write(`${hour}:${minute}:${second}`);