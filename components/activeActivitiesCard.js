import React from 'react';
import 'bulma/css/bulma.css';
import {
    PieChart,
    Pie,
    ResponsiveContainer
} from 'recharts';

export default class ActiveActivitiesCard extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.config);
        this.renderChart = this.renderChart.bind(this);
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
            let startMinutes = parseInt(startHourSplit[1]);
            let finishHourSplit = this.props.activity.finishTime.split(":");
            let finishHour = parseInt(finishHourSplit[0]);
            let finishMinutes = parseInt(finishHourSplit[1]);
            let duration = (finishHour - startHour) * 3600+(finishMinutes-startMinutes)*60;
            let date = new Date();
            let active = 'rgb(255, 221, 87)';
            if(this.props.config && this.props.config.layout && this.props.config.layout.active){
                active = this.props.config.layout.active;
            }
            let data = [{
                    name: 'Passed time',
                    value: (date.getHours()-startHour) * 3600 +(date.getMinutes()-startMinutes)*60+date.getSeconds() ,
                    fill: active
                },
                {
                    name: 'Remaining time',
                    value: duration - ((date.getHours() - startHour) * 3600 + (date.getMinutes()-startMinutes)* 60 + date.getSeconds()),
                    fill: 'grey'
                },
            ];
            return (     
                 <ResponsiveContainer width="99%" aspect={3} maxHeight="100%">
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
            minWidth:"0"
        }
        let active = 'rgb(255, 221, 87)';
        if(this.props.config && this.props.config.layout && this.props.config.layout.active){
            active = this.props.config.layout.active;
        }
        let cardStyleActive = {
            maxHeight: "86vh",
            height: "100%",
                display: "inline-block",
                width: "100%",
                borderRadius: "1%",
                boxShadow: "",
                border: `solid ${active}`,
                boxShadow: "none",
        }
        let title  = "#363636";
        if(this.props.config.layout && this.props.config.layout.title){
            title = this.props.config.layout.title
        }
        let textStyle = {
            justifyContent:"center",
            color:title
        }
        let content ={
            width:"100%",
            height:"100%",
            minWidth:"0"
        }
        return (
        <div className="column">
           <div  className="card" style={this.props.activity.active?cardStyleActive:cardStyle}>
                <header className="card-content" style={{minWidth:0}}>
                    <p className="card-header-title" style={textStyle}>
                        {this.props.activity.title}
                    </p>
                </header>
                <div className="card-content" style={content}>
                    {this.renderChart()}
                </div>             
            </div>
        </div>
        )
    }
}