import React from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import 'bulma/css/bulma.css';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';
import fetch from 'isomorphic-unfetch';

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export default class Editor extends React.Component {
    static async getInitialProps() { //choose beetween production host or development host
        let res = await fetch(`http://localhost:3000/config`);
        const config = await res.json();
        return {
            config
        }
    }
    constructor(props) {
        super(props);
        this.state = {date:""}
        this.type="";
        this.message=[];
        this.date="default";
        this.activities=[];
        this.edit=false;
        this.changeType=this.changeType.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.fetchDate=this.fetchDate.bind(this);
        this.addActivity=this.addActivity.bind(this);
        this.changeTitle=this.changeTitle.bind(this);
        this.save=this.save.bind(this);
        this.calendars = null;
        this.auxActivity=[];
    }
    
    typeSwitch(){
        switch(this.type){
            case "weekDay":
                if(weekDays.filter(day=>day==this.date).length<=0){
                    this.date=weekDays[0];
                }
                return(
                    <div className="select">
                        <select name="type" id="type" onChange={this.changeDate}>
                            {weekDays.map((day,index)=>{
                                return(<option key={index} value={`${day}`}>{day}</option>);
                            })}
                        </select>
                    </div>
                )
            case "Date":
                return(
                    <div style={{display:"inline-block"}}>
                        <input className="input" type="date" name="date" id="date" value={this.date} onChange={this.changeDate}/>
                    </div>
                )
                break;
            default:
                break;
        }
    }
    save(){
        fetch(`http://localhost:3000/editor/${this.date}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                activities:this.activities,
                date:this.date
            })
        }).then(res=>{
            res.json().then(
                res=>{
                    this.message.splice(0, 0,res.message);
                    this.setState({date:new Date()})
                    setTimeout(()=>{
                        this.message.pop();
                        this.setState({
                            date: new Date()
                        })
                    },2000)
                }
            )
        })
    }
  
    changeType(event){
        this.type = event.target.value;
        if(this.type=="default"){
            this.changeDate(event)
        }
        this.setState({type:event.target.value});
    }   
    changeDate(event){
        this.date=event.target.value;
        this.activities=[];
        this.edit=false;
        this.setState({
            date: this.date
        })
    }
    fetchDate(){
        fetch(`http://localhost:3000/editor/${this.date}`)
        .then(res => {
            res.json()
            .then(res => {
                this.activities = res.activities;
                this.edit=true;
                this.setState({
                    date: this.date
                })
            })
        });
        
    }
    changeTitle(index, event) {
        this.activities[index].title = event.target.value;
        this.setState({
            date: new Date()
        })
    }
    changeTime(index,event){
        let splitDate;
        switch(event.target.attributes["name"].value){
            case "startHour":
                splitDate = this.activities[index].startTime.split(":")
                splitDate[0]=event.target.value;
                this.activities[index].startTime = splitDate.join(":")
                break;
            case "startMinute":
                splitDate = this.activities[index].startTime.split(":")
                splitDate[1] = event.target.value;
                this.activities[index].startTime = splitDate.join(":")
                break;
            case "finishHour":
                splitDate = this.activities[index].finishTime.split(":")
                splitDate[0] = event.target.value;
                this.activities[index].finishTime = splitDate.join(":")
                break;
            case "finishMinute":
                splitDate = this.activities[index].finishTime.split(":")
                splitDate[1] = event.target.value;
                this.activities[index].finishTime=splitDate.join(":")
                break;
        }
        this.setState({
            date: event.target.value
        })
    }
    addActivity(){
        this.activities.push({title:"title",startTime:"00:00",finishTime:"00:00"});
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        var switchRender = this.typeSwitch();
        return(
            <div className="container">
                <div style={{position:"absolute",right:"0",display:"inline-block",maxWidth:"50%"}}>
                   {this.message.map((message,index)=>{
                        return(
                            <div key={index} style={{zIndex:"100"}} className="notification is-primary">
                                {message}
                            </div>
                        )
                   })}
                   
                </div>
                <div className="select">
                    <select className="select is-info" name="type" id="type" onChange={this.changeType}>
                        <option value="default">Default</option>
                        <option value="weekDay">Week Day</option>
                        <option value="Date">Date</option>
                    </select>
                </div>
                {this.typeSwitch()}
                <a className="button is-info" onClick={this.fetchDate}>
                Edit
                </a>
                <br/>
                {this.activities.map((activity,index)=>{
                    let splitStartDate = activity.startTime.split(':');
                    let splitFinishDate = activity.finishTime.split(':');
                    return(
                        <div key={index} className="card" style={{display:"inline-block",margin:"10px"}} >
                        title:<br/>
                        <div style={{display:"inline-block"}}><input className="input" type="text" value={activity.title} onChange={(e)=>this.changeTitle(index,e)}/></div><br/>
                        start time:<br/>
                        <div style={{display:"inline-block"}}><input className="input" type="number" min="00" max="23" name="startHour" value={splitStartDate[0]} onChange={(e)=>this.changeTime(index,e)}/></div> 
                        : 
                        <div style={{display:"inline-block"}}><input className="input" type="number" min="00" max="59" gap="1" name="startMinute" value={splitStartDate[1]}  onChange={(e)=>this.changeTime(index,e)}/></div><br/>
                        finish time:<br></br>
                        <div style={{display:"inline-block"}}><input className="input" type="number" min="00" max="23" name="finishHour" value={splitFinishDate[0]} onChange={(e)=>this.changeTime(index,e)}/></div>
                        : 
                        <div style={{display:"inline-block"}}><input className="input" type="number" min="00" max="59" gap="1" name="finishMinute" value={splitFinishDate[1]}  onChange={(e)=>this.changeTime(index,e)}/></div><br/>
                        <br/>
                        <button onClick={()=>{this.activities.splice(index,1);this.setState({date:new Date()})}} className="button is-danger">Delete</button>                        
                        </div>)
                    })}
                    {this.edit?<div><a className="button is-info" onClick={this.addActivity}>Add activity</a><a className="button is-success" onClick={this.save}>Save</a></div>:""}
            </div>
        )
    }
}