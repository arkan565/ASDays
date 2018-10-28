const fs = require('fs');

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var readDay = (date)=>{
    
    if (fs.existsSync(`../res/days/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.json`)) {
        return JSON.parse(fs.readFileSync(`../res/days/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.json`));
    } else if (fs.existsSync(`../res/days/${weekdays[date.getDay()]}`)) {
        return JSON.parse(fs.readFileSync(`../res/days/${weekDays[date.getDay()]}`));
    }else{
        try{
            return JSON.parse(fs.readFileSync(`../res/days/default.json`));
        }catch(ex){
            return null;
        }
    }
}

var writeDay = (date,data)=>{
    fs.writeFileSync(`../res/days/${date}`,JSON.stringify(data));
}

module.exports({
    readDay,
    writeDay
})