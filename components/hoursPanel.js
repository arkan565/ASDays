import React from 'react';
var moment = require('moment');
export default class HoursPanel extends React.Component{
    constructor(props) {
        super(props);
        this.hoursPanelStyle = {
            "display": "grid",
            "gridTemplateRows": "repeat(24, 1fr);"
        }
    }
    renderHours(){
        let hours = []
        for(var i=0;i<24;i++){
            let date = new Date();
            date.setHours(Math.trunc(i));
            date.setMinutes(0);
            hours.push(<div key={date}>{moment(date).format("HH:mm")}</div>)
        }    
        return hours;
    }
    render(){
        return(
        <div className={this.hoursPanelStyle}>
            {this.renderHours()}
        </div>
        )
    }
}