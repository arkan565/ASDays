import React from 'react';
import 'bulma/css/bulma.css';
import LeftPanel from '../components/leftPanel';
import ActiveActivities from '../components/activeActivities'
import fetch from 'isomorphic-unfetch';
export default class Index extends React.Component{
    static async getInitialProps() { //choose beetween production host or development host
        const res = await fetch(`http://localhost:3000/day`);
        let day = await res.json();
        const res2 = await fetch(`http://localhost:3000/config`);
        const config = await res2.json();
        //day.activities= day.activities.filter(days=>days.startTime>`${config.startTime.value}:00`);
        //day.activities = day.activities.filter(days => days.startTime < `${config.finishTime.value}:00`);
        return {
            day,config
        }
    }
    constructor(props) {
        super(props)
        this.nextActivities=[];
        this.state = {
            width: 0,
            height: 0
        }
        this.active=[]
        this.day={

        }
        this.config={

        }
        this.timeout=null;
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
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
            let startMinute = parseInt(splitStartDate[1], 10);
            let splitFinishDate = activity.finishTime.split(':');
            let finishHour = parseInt(splitFinishDate[0], 10);
            let finishMinute = parseInt(splitFinishDate[1], 10);
            if ((startHour < date.getHours()) || (startHour == date.getHours() && startMinute <= date.getMinutes())){
                activity.active =(finishHour > date.getHours() || activity.finishTime === "00:00" || (finishHour==date.getHours() && finishMinute>date.getMinutes())); //set if active is good or bad
            }else{
                activity.active=false;
            }
        });
        this.active = this.props.day.activities.filter(activity => activity.active == true);
    }
    getNext(activities){
        let next= [];
        let date = new Date();
        activities.map((activity)=>{
            let splitStartDate = activity.startTime.split(':');
            let startHour = parseInt(splitStartDate[0], 10);
            if(startHour>=date.getHours() && !activity.active && next.length<3){
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
            if(hours<0){
                hours=0;
            }
            if(minutes<0){
                minutes=0;  
            }
            let timeleft = (3600*1000*hours)+(60*1000*minutes)+(secondsLeft*1000);
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
            if (hours < 0) {
                hours = 0;
            }
            if (minutes < 0) {
                minutes = 0;
            }
            let timeleft = (3600 * 1000 * hours) + (60 * 1000 * minutes) + (secondsLeft * 1000);
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
    }

    render(){
        this.props.day.activities = this.orderActivities(this.props.day);
        this.setActive();
        this.getNext(this.props.day.activities);
        this.setTimeout();
        
        if(this.props.config.layout && this.props.config.layout.background){
            this.background = this.props.config.layout.background;
        }else{
            this.background = "";
        }
        if(this.props.config.layout && this.props.config.layout.text){
            this.color = this.props.config.layout.text;
        }else{
            this.color = "#4a4a4a";
        }
        if(this.props.config.layout && this.props.config.layout.title){
            this.title = this.props.config.layout.title
        }else{
            this.title = "#363636";
        }
        return(
            <div className="container">
                <style jsx global>
                {`
                    body { 
                        background: ${this.background};
                        color: ${this.color};
                    };
                `}
                </style>
                <title>Day Panel</title>
                <div style={{marginBottom:"5vh",textAlign:"center"}}>
                    <h1 className="title is-1" style = {{color:this.title}}>Schedule</h1>
                </div> 
                <div className="columns">
                    <div className = "column is-one-third" >
                        <LeftPanel config={this.props.config} activities={this.props.day.activities?this.props.day.activities:""}></LeftPanel>
                    </div>
                    <div className = "column is-two-thirds">
                        <div style={this.state.width>800?{position:"fixed",width:"60vw"}:{}}>
                            <ActiveActivities config={this.props.config} active={this.active} next={this.nextActivities}></ActiveActivities>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}