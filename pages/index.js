import React from 'react';
import 'bulma/css/bulma.css';
import LeftPanel from '../components/leftPanel';
import ActiveActivities from '../components/activeActivities'
import fetch from 'isomorphic-unfetch';
export default class Index extends React.Component{
    static async getInitialProps() { //choose beetween production host or development host
        let res = await fetch(`http://localhost:3000/day`);
        const day = await res.json();
        return {
            day
        }
    }
    constructor(props) {
        super(props)
        this.nextActivities=[];
        this.active=[]
        this.day={

        }
        this.timeout=null;
    }
    orderActivities(day){
        let activities=[];
        const length=day.activities.length;
        for (let i = 0; i < length;i++){
            let minI = 0;
            let minStartTime = day.activities[0].startTime;
            let minFinishTime = day.activities[0].finishTime;
            for (let j = 1; j < day.activities.length; j++) {
                if (day.activities[j].startTime<minStartTime) {
                    minI=j;
                    minStartTime = day.activities[j].startTime;
                    minFinishTime = day.activities[j].finishTime;
                } else if (day.activities[j].startTime == minStartTime && day.activities[j].finishTime < minFinishTime){
                     minI = j;
                     minStartTime = day.activities[j].startTime;
                     minFinishTime = day.activities[j].finishTime;
                }
            }
            activities.push(day.activities[minI]);
            day.activities.splice(minI,1);
        }
        return activities;
    }
    setActive() {
        let date = new Date();
        this.props.day.activities.forEach(activity => {
            let splitStartDate = activity.startTime.split(':');
            let startHour = parseInt(splitStartDate[0], 10);
            let splitFinishDate = activity.finishTime.split(':');
            let finishHour = parseInt(splitFinishDate[0], 10);
            activity.active = (startHour <= date.getHours() && (finishHour > date.getHours() || activity.finishTime === "00:00")); //set if active is good or bad
        });
        this.active = this.props.day.activities.filter(activity => activity.active == true);
    }
    getNext(activities){
        let next= [];
        let date = new Date();
        activities.map((activity)=>{
            let splitStartDate = activity.startTime.split(':');
            let startHour = parseInt(splitStartDate[0], 10);
            if(startHour>date.getHours() && next.length<3){
                next.push(activity)
            }
        })
        this.nextActivities=next;
    }
    setTimeout(){
        let minTime= -1;
        let date = new Date();
        for (let i = 0; i < this.active.length; i++) {
            let activity=this.active[i];
            let splitFinishDate = activity.finishTime.split(':');
            let finishHour = parseInt(splitFinishDate[0], 10);
            let finishMinutes = parseInt(splitFinishDate[1], 10);
            let secondsLeft= 60-date.getSeconds()+1;
            let minutes = (finishMinutes != 0 ? finishMinutes - date.getMinutes()-1 : 60 - date.getMinutes()-1);
            let hours = (finishHour!=0?finishHour-date.getHours()-1:24-date.getHours()-1);
            let timeleft = 3600*1000*hours+60*1000*minutes+secondsLeft*1000;
            if(minTime==-1 || timeleft<minTime){
                minTime=timeleft;
            }
        }
        for(let i=0;i<this.nextActivities.length;i++){
            let activity=this.nextActivities[i];
            let splitStartDate = activity.startTime.split(':');
            let startHour = parseInt(splitStartDate[0], 10);
            let startMinute = parseInt(splitStartDate[1], 10);
            let secondsLeft = 60 - date.getSeconds() + 1;
            let minutes = (startMinute != 0 ? startMinute - date.getMinutes() - 1 : 60 - date.getMinutes() - 1);
            let hours = (startHour != 0 ? startHour - date.getHours() - 1 : 24 - date.getHours() - 1);
            let timeleft = 3600 * 1000 * hours + 60 * 1000 * minutes + secondsLeft * 1000;
            if (minTime == -1 || timeleft < minTime) {
                minTime = timeleft;
            }
        }
        try {
            clearTimeout(this.timeout)
        } catch (ex) {

        }
        if(minTime!=-1){
            this.timeout = setTimeout(() => this.setState({
                time: Date.now()
            }), minTime);
        }
        console.log(minTime)
    }

    render(){
        this.props.day.activities = this.orderActivities(this.props.day);
        this.setActive();
        this.getNext(this.props.day.activities);
        this.setTimeout();
        return(
            <div className="container">
                <div style={{marginBottom:"5vh",textAlign:"center"}}>
                    <h1 className="title is-1">Schedule</h1>
                </div> 
                <div className="columns">
                    <div className = "column is-one-third" >
                        <LeftPanel activities={this.props.day.activities?this.props.day.activities:""}></LeftPanel>
                    </div>
                    <div className = "column is-two-thirds">
                        <ActiveActivities active={this.active} next={this.nextActivities}></ActiveActivities>
                    </div>
                </div>
            </div>
        )
    }
}
//<LeftPanel activities={this.props.day.activities?this.props.day.activities:""}></LeftPanel>
//                        <ActiveActivities active={this.active} next={this.nextActivities}></ActiveActivities>