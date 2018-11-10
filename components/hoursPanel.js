import React from 'react';
var moment = require('moment');
export default class HoursPanel extends React.Component{
    constructor(props) {
        super(props);
        this.hoursPanelStyle = {
            "display": "grid",
            "gridTemplateRows": "repeat(24, 1fr)"
        }
        this.hourDivStyle ={
            border: "solid",
            borderWidth:"1px 0px 1px 1px",
            borderColor:"#DADADA",
            textAlign: "center"

        }
    }
    renderHours(){
        let hours = []
        for(var i=0;i<24;i++){
            let date = new Date();
            date.setHours(Math.trunc(i));
            date.setMinutes(0);
            hours.push(<div style={this.hourDivStyle} key={date}>{moment(date).format("HH:mm")}</div>)
        }    
        return hours;
    }
    render(){

        return(
        <div style={this.hoursPanelStyle}>
            {this.renderHours()}
        </div>
        )
    }
}