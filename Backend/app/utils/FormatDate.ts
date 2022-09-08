export default (date: any) => {
    let d: any = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = '' + d.getHours(),
    min = '' + d.getMinutes(),
    sec = '' + d.getSeconds()
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (min.length < 2) min = '0' + min;
    if (sec.length < 2) sec = '0' + sec;

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}