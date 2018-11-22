const fs = require('fs');
var path = require('path');

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var readDay = (date)=>{
    if (fs.existsSync(`${__dirname}/res/days/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.json`)) {
        return JSON.parse(fs.readFileSync(`${__dirname}/res/days/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.json`));
    } else if (fs.existsSync(`${__dirname}/res/days/${weekDays[date.getDay()]}.json`)) {
        return JSON.parse(fs.readFileSync(`${__dirname}/res/days/${weekDays[date.getDay()]}.json`));
    }else{
        try{
            data = fs.readFileSync(`${__dirname}/res/days/default.json`, 'utf8');
            return JSON.parse(fs.readFileSync(`${__dirname}/res/days/default.json`));
        }catch(ex){
            return null;
        }
    }
}
var readExactDay = (date) =>{
    if(date=="default"){
        try {
            data = fs.readFileSync(`${__dirname}/res/days/default.json`, 'utf8');
            return JSON.parse(fs.readFileSync(`${__dirname}/res/days/default.json`));
        } catch (ex) {
            return null;
        }
    }
    else if(weekDays.filter(day=>day==date).length>0){
        if (fs.existsSync(`${__dirname}/res/days/${date}.json`)) {
            return JSON.parse(fs.readFileSync(`${__dirname}/res/days/${date}.json`));
        }else{
            return null;
        }
    
    }
    else{
        date = new Date(date);
        if (fs.existsSync(`${__dirname}/res/days/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.json`)) {
            return JSON.parse(fs.readFileSync(`${__dirname}/res/days/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.json`));
        }else{
            return null;
        }
    }
}
var writeDay = (date,data) => {
    fs.writeFileSync(`${__dirname}/res/days/${date}.json`, JSON.stringify(data));
}
var readConfig = () => {
    return JSON.parse(fs.readFileSync(`${__dirname}/res/config/config.json`));
}
var writeConfig = (data)=> {
     fs.writeFileSync(`${__dirname}/res/config/config.json`, JSON.stringify(data));
}
module.exports = {
    readDay,
    readExactDay,
    writeDay,
    readConfig,
    writeConfig
}