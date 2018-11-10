import React from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import 'bulma/css/bulma.css';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.type="default";
        this.date="";
        this.activities=[];
    }
    componentDidMount(){
        const calendars = bulmaCalendar.attach('[type="date"]');
        calendars.forEach(calendar => {
            // Add listener to date:selected event
            calendar.on('date:selected', date => {
                console.log(date);
            });
        });
    }
    save(){

    }
    changeType(){

    }
    addActivity(){
        
    }
    render() {
        
        return(
            <div>
                <select name="type" id="type" onChange={this.changeType()}>
                    <option value="default">Default</option>
                    <option value="weekDay">Week Day</option>
                    <option value="day">day</option>
                </select>
                {()=>{
                    switch(this.type){
                        case "default":
                            
                            break;
                        case "weekDay":
                            break;
                        case "Date":
                            return(
                                <div></div>
                            )
                            break;
                    }
                }}
            </div>
        )
    }
}