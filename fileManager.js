const fs = require('fs');
var path = require('path');

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var readDay = (date)=>{
    if (fs.existsSync(`${__dirname}/res/days/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.json`)) {
        return JSON.parse(fs.readFileSync(`${__dirname}/res/days/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.json`));
    } else if (fs.existsSync(`${__dirname}/res/days/${weekDays[date.getDay()]}`)) {
        return JSON.parse(fs.readFileSync(`${__dirname}/res/days/${weekDays[date.getDay()]}`));
    }else{
        try{
            data = fs.readFileSync(`${__dirname}/res/days/default.json`, 'utf8');
            return JSON.parse(fs.readFileSync(`${__dirname}/res/days/default.json`));
        }catch(ex){
            console.log(ex);
            return null;
        }
    }
}

var writeDay = (date,data)=>{
    fs.writeFileSync(`../res/days/${date}`,JSON.stringify(data));
}

module.exports = {
    readDay,
    writeDay
}