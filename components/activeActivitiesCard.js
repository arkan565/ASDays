import React from 'react';
import {
    PieChart,
    Pie,
    ResponsiveContainer
} from 'recharts';

export default class ActiveActivitiesCard extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.interval = setInterval(() => this.setState({
            time: Date.now()
        }), 1000);
    }
    renderChart(){
        if(this.props.activity.active){
            let startHourSplit = this.props.activity.startTime.split(":");
            let startHour = parseInt(startHourSplit[0]);
            let finishHourSplit = this.props.activity.finishTime.split(":");
            let finishHour = parseInt(finishHourSplit[0]);
            let duration = (finishHour - startHour) * 3600;
            let date = new Date();
            let data = [{
                    name: 'Passed time',
                    value: (date.getHours()-startHour  ) * 3600 +date.getMinutes()*60+date.getSeconds() ,
                    fill: 'rgb(255, 221, 87)'
                },
                {
                    name: 'Remaining time',
                    value: duration - ((date.getHours() - startHour) * 3600 + date.getMinutes() * 60 + date.getSeconds()),
                    fill: 'grey'
                },
            ];
            return (
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie data={data} startAngle={90} endAngle={-270} outerRadius="100%" isAnimationActive={false} dataKey="value"/>
                    </PieChart>
                </ResponsiveContainer>
            )
        }else{
            return(
                <div> Start at {this.props.activity.startTime}</div>
            )
        }
       
    }
    render(){
        
        let imgStyle={
            maxWidth:"100%",
            maxHeight:"70vh",
            margin:"auto",
            width:"auto"
        }
        let cardStyle={
            maxHeight:"86vh",
            display:"inline-block",
            width:"100%",
            borderRadius:"1%",
        }
        let cardStyleActive = {
            maxHeight: "86vh",
                display: "inline-block",
                width: "100%",
                borderRadius: "1%",
                boxShadow: "",
                border: "solid rgb(255, 221, 87)",
                boxShadow: "none",
        }
        let textStyle = {
            justifyContent:"center"
        }
        return (
        <div className="column">
           <div  className="card" style={this.props.activity.active?cardStyleActive:cardStyle}>
                <header className="card-content">
                    <p className="card-header-title" style={textStyle}>
                        {this.props.activity.title}
                    </p>
                </header>
                <div className="content">
                    {this.renderChart()}
                </div>             
            </div>
        </div>
        )
    }
}