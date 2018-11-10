import React from 'react';

export default class ActivitiesGrid extends React.Component {
     constructor(props) {
         super(props);
         this.activitiesGridStyle = {
             "display": "grid",
             "gridTemplateRows": "repeat(24,1fr)",
             "height":"100%",
             "border":"solid 1px #DADADA"
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
                if(finishHour==0){
                    duration =  (24- startHour)
                }
                let style = {
                    "gridRowStart": offset,
                    "gridRowEnd": `span ${duration}`,
                    "backgroundColor": "#DCEDC8"
                };
                if(activity.active){
                    style.backgroundColor = "#ffdd57";
                }
                
                
                return(
                    <div key={index} style={style}>{activity.title}</div>
                )
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