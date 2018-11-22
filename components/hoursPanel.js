import React from 'react';
var moment = require('moment');

export default class HoursPanel extends React.Component{
    constructor(props) {
        super(props);
        this.hoursPanelStyle = {
            "display": "grid",
            "gridTemplateRows": `repeat(${this.props.config.finishTime.value-this.props.config.startTime.value}, 1fr)`,
            "height":"100%",
            "minHeight":"85vh"
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
        let date = new Date();
        for(var i=parseInt(this.props.config.startTime.value);parseInt(i)<parseInt(this.props.config.finishTime.value);i++){
            date.setHours(Math.trunc(i));
            date.setMinutes(0);
            if(this.props.config.format=="12"){
                hours.push(<div style={this.hourDivStyle} key={date}>{moment(date).format("hh:mm A")}</div>)
            }else{
                hours.push(<div style={this.hourDivStyle} key={date}>{moment(date).format("HH:mm")}</div>)
            }

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