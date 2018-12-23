import React from 'react';

export default class ActivitiesGrid extends React.Component {
     constructor(props) {
        super(props);
        this.activitiesGridStyle = {
            "display": "grid",
            "gridTemplateRows": `repeat(${4*(this.props.config.finishTime.value-this.props.config.startTime.value)}, 1fr)`,
            "height":"100%",
            "border":"solid 1px",
            "borderColor":"#DADADA"
        }

        if(this.props.config.layout && this.props.config.layout.tableBorder){
            this.activitiesGridStyle.borderColor = this.props.config.layout.tableBorder;
        }
     }
    renderActivities(){
        try{
            let activities=[]
            return this.props.activities.map((activity,index) => {
                let splitStartDate = activity.startTime.split(':'); 
                let startHour = parseInt(splitStartDate[0],10);
                let startMinute = parseInt(splitStartDate[1], 10);
                let splitFinishDate=activity.finishTime.split(':');
                let finishHour = parseInt(splitFinishDate[0], 10);
                let finishMinute = parseInt(splitFinishDate[1], 10);
                let offset=1+((startHour)*4)+(Math.trunc((startMinute)/15));
                let duration = 4*(finishHour-startHour)+(Math.ceil((finishMinute-startMinute)/15));

                if(finishMinute>0){
                    duration=duration+1;
                }
                if(finishHour==0){
                    duration =  (24- startHour)
                }
                let style = {
                    "gridRowStart": offset-(this.props.config.startTime.value*4),
                    "gridRowEnd": `span ${duration}`,
                    "backgroundColor": "#DCEDC8",
                    "borderBottom":"2px",
                    "borderTop":"0",
                    "borderLeft":"0",
                    "borderRight":"0",
                    "borderStyle":"solid",
                    "borderColor":"white"
                };
                if(this.props.config.layout && this.props.config.layout.activity){
                    style.backgroundColor = this.props.config.layout.activity;
                }
                if(activity.active){
                    style.backgroundColor = "#ffdd57";
                    if(this.props.config.layout && this.props.config.layout.active){
                        style.backgroundColor = this.props.config.layout.active;
                    }
                }
                
                if(parseInt(startHour)<parseInt(this.props.config.startTime.value)){
                    return (<div></div>)
                }else{
                    return(
                        <div key={index} style={style}>{`${activity.title} ${activity.startTime}-${activity.finishTime}`}</div>
                    )
                }
               
            })
        }catch(ex){
            return "";
        }
    }
    render(){
        return(
            <div style={this.activitiesGridStyle}>
                {this.renderActivities()}
            </div>
        )
    }
}