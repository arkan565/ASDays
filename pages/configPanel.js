import React from 'react';
'next/link'
import 'bulma/css/bulma.css';
import fetch from 'isomorphic-unfetch';
export default class Config extends React.Component {
    static async getInitialProps() { //choose beetween production host or development host
        let res = await fetch(`http://localhost:3000/config`);
        const config = await res.json();
        return {
            config
        }
    }
    constructor(props) {
        super(props);
        this.format=this.props.config.format;
        this.form={
            startTime:this.props.config.startTime,
            finishTime:this.props.config.finishTime
        }
        this.message=[];
        this.changeStartHourValue = this.changeStartHourValue.bind(this);
        this.changeFinishHourValue = this.changeFinishHourValue.bind(this);
        this.save=this.save.bind(this);
    }
    
    changeStartHourValue(event){
        if(this.format=="24"){
           this.form.startTime.value=event.target.value;
            if(this.form.startTime.value>=12){
                this.form.startTime.midTime="pm";
                this.form.startTime.startHour=`${parseInt(this.form.startTime.value)-12}`;
            }else{
                this.form.startTime.midTime = "am";
                this.form.startTime.startHour = `${this.form.startTime.value}`;
            }
        }else{
            if(event.target.value=="am" || event.target.value=="pm"){
                this.form.startTime.midTime = event.target.value;
            }else{
                this.form.startTime.startHour=event.target.value;
            }
            if(this.form.startTime.midTime=="am"){
                this.form.startTime.value =`${this.form.startTime.startHour}`;
            }else{
                this.form.startTime.value = `${parseInt(this.form.startTime.startHour)+12}`;
            }
        }
        this.setState({ date: new Date() });
    }
    changeFinishHourValue(event){
        if (this.format == "24") {
            this.form.finishTime.value = event.target.value;
            if (this.form.finishTime.value >= 12) {
                this.form.finishTime.midTime = "pm";
                this.form.finishTime.finishHour = `${parseInt(this.form.finishTime.value) - 12}`;
            } else {
                this.form.finishTime.midTime = "am";
                this.form.finishTime.finishHour = `${this.form.finishTime.value}`;
            }
        } else {
            if (event.target.value == "am" || event.target.value == "pm") {
                this.form.finishTime.midTime = event.target.value;
            } else {
                this.form.finishTime.finishHour = event.target.value;
            }
            if (this.form.finishTime.midTime == "am") {
                this.form.finishTime.value = `${this.form.finishTime.finishHour}`;
            } else {
                this.form.finishTime.value = `${parseInt(this.form.finishTime.finishHour)+12}`;
            }
        }
        this.setState({date:new Date()});
    }
    renderStartForm(){
        if(this.format=="24"){
            return (    
                <div style={{ display: "inline-block" }}>
                Start hour: <input className="input" type="number" min="0" max="24" value={this.form.startTime.value} onChange={this.changeStartHourValue} />
                </div>
            )
        }else{
            return(
                <div style={{ display: "inline-block" }}>
                    Start hour:<br/>
                    <div  style={{ display: "inline-block" }}>
                        <input className="input" value={this.form.startTime.startHour} type="number" min="0" max="11" onChange={this.changeStartHourValue} />
                    </div>
                    <div className="select">
                        <select value={this.form.startTime.midTime} onChange={this.changeStartHourValue}>
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
            )
        }
    }
    save(){
         fetch(`http://localhost:3000/config`, {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                format: this.format,
                startTime:this.form.startTime,
                finishTime:this.form.finishTime                
             })
         }).then(res => {
             res.json().then(
                 res => {
                     this.message.splice(0, 0, res.message);
                     this.setState({
                         date: new Date()
                     })
                     setTimeout(() => {
                         this.message.pop();
                         this.setState({
                             date: new Date()
                         })
                     }, 2000)
                 }
             )
         })
    }
    renderFinishForm(){
         if(this.format=="24"){
            return (
                <div style={{ display: "inline-block" }}>
                Finish hour: <input className="input" type="number" min="0" max="24" value={this.form.finishTime.value} onChange={this.changeFinishHourValue} />
                </div>
            )
        }else{
            return(
                <div style={{ display: "inline-block" }}>
                    Finish Hour:<br/>
                    <div  style={{ display: "inline-block" }}>
                        <input className="input" value={this.form.finishTime.finishHour} type="number" min="0" max="11" onChange={this.changeFinishHourValue} />
                    </div>
                    <div className="select">
                        <select value={this.form.finishTime.midTime}  onChange={this.changeFinishHourValue}>
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
            )
        }
    }
    render() {
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
                format:<br/>
                <div className="select">
                    <select value={this.format} onChange={(e)=>{this.format=e.target.value;this.setState({date:new Date()})}}>
                        <option value="12">12 hours</option>
                        <option value="24">24 hours</option>
                    </select>
                </div>
                <br/>
                {this.renderStartForm()}<br/>
                {this.renderFinishForm()}<br/><br/>
                <a className="button is-success" onClick={this.save}>Save</a>
            </div>

        )
    }
}