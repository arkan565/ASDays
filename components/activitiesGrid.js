import React from 'react';

export default class ActivitiesGrid extends React.Component {
     constructor(props) {
         super(props);
         this.activitiesGridStyle = {
             "display": "grid",
              "gridTemplateRows": `repeat(${this.props.config.finishTime.value-this.props.config.startTime.value}, 1fr)`,
             "height":"100%",
             "border":"solid 1px #DADADA",
             
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
                let offset=1+startHour;
                let duration = (finishHour-startHour);

                if(finishMinute>0){
                    duration=duration+1;
                }
                if(finishHour==0){
                    duration =  (24- startHour)
                }
                let style = {
                    "gridRowStart": offset-this.props.config.startTime.value,
                    "gridRowEnd": `span ${duration}`,
                    "backgroundColor": "#DCEDC8",
                    "borderBottom":"2px",
                    "borderTop":"0",
                    "borderLeft":"0",
                    "borderRight":"0",
                    "borderStyle":"solid",
                    "borderColor":"white"
                };
                if(activity.active){
                    style.backgroundColor = "#ffdd57";
                }
                
                if(startHour<this.props.config.startTime.value){
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