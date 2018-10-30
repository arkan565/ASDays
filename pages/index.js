import React from 'react';
import 'bulma/css/bulma.css';
import LeftPanel from '../components/leftPanel';
import fetch from 'isomorphic-unfetch';

export default class Index extends React.Component{
    constructor(props) {
        super(props)
        this.nextActivities=[];
        this.day={

        }
    }
    static async getInitialProps() {
        
        let res = await fetch('http://localhost:3000/day');
        const day = await res.json();
        return {
            day
        }
    }
    setActive(){
        let date = new Date();
        let stringDate = `${date.setHours()}:${date.setMinutes()}`;
        for(var i=0;i<this.props.activities.length;i++){
            activity=this.props.activities.length[i]
            if (activity.startTime > stringDate && (activity.finishTime < stringDate || activity.finishTime === "00:00")) {
                activity.active = true;
            }
        }
        this.props.json.activities.forEach(activity => {
            if(activity.startTime>stringDate && (activity.finishTime<stringDate ||activity.finishTime==="00:00")){
                activity.active=true;
            }
        });
    }
    renderHours(){
        let hours = []
        for(var i=0;i<24;i++){
            let date = new Date();
            date.setHours(Math.trunc(i));
            date.setMinutes(0);
            hours.push(<div>{moment(date).format("HH:mm")}</div>)
        }    
        return hours;
    }
    render(){
        return(
            <div className="container">
                <div className="columns">
                    <div className = "column is-one-third" >
                        <LeftPanel activities={this.props.day.activities?this.props.day.activities:""}></LeftPanel>
                    </div>
                    <div className = "column is-three-quarters">
                    </div>
                </div>
            </div>
        )
    }
}