import React from 'react';
'next/link'
import 'bulma/css/bulma.css';
import fetch from 'isomorphic-unfetch';
import ColorPicker from '../components/ColorPicker';
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
        this.format = this.props.config.format;
        this.form = {
            startTime:this.props.config.startTime,
            finishTime:this.props.config.finishTime
        }
        this.layout = this.props.config.layout;
        if(!this.layout){
            this.layout = {
                
            }
        }
        this.message = [];  
        this.changeStartHourValue = this.changeStartHourValue.bind(this);
        this.changeFinishHourValue = this.changeFinishHourValue.bind(this);
        this.save = this.save.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.changeText = this.changeText.bind(this);
        this.changeTableBorder = this.changeTableBorder.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
        this.changeActiveActivity = this.changeActiveActivity.bind(this);
        this.changeTitles=this.changeTitles.bind(this);
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
                finishTime:this.form.finishTime,
                layout:this.layout            
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
    changeBackground(color,event){
        this.layout.background = color.hex;
    }
    changeText(color,event){
        this.layout.text = color.hex;
    }
    changeTableBorder(color,event){
        this.layout.tableBorder = color.hex;
    }
    changeActivity(color,event){
        this.layout.activity = color.hex;
    }
    changeActiveActivity(color,event){
        this.layout.activeActivity = color.hex;
    }
    changeTitles(color,event){
        this.layout.title = color.hex;
    }
    default(){
        this.layout.background = "#fff";
        this.layout.text = "#4a4a4a";
        this.layout.tableBorder = "#DADADA";
        this.layout.activity = "#DCEDC8";
        this.layout.active = "#ffdd57";
        this.layout.title = "#363636";
        this.setState({
            date: new Date()
        })
    }
    render() {
        return(
            <div className="container">
                <title>Config Panel</title>
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
                <div className="columns">
                    <ColorPicker className="column" title={"Background"} color={this.layout.background?this.layout.background:"#fff"} handleChange={this.changeBackground} />
                    <ColorPicker className="column" title={"Text Color"} color={this.layout.text?this.layout.text:"#4a4a4a"} handleChange={this.changeText} />
                    <ColorPicker className="column" title={"Titles"} color={this.layout.title?this.layout.title:"#363636"} handleChange={this.changeTitles} />                   
                    <ColorPicker className="column" title={"Table Border"} color={this.layout.tableBorder?this.layout.tableBorder:"#DADADA"} handleChange={this.changeTableBorder} />
                    <ColorPicker className="column" title={"Activity Color"} color={this.layout.activity?this.layout.activity:"#DCEDC8"} handleChange={this.changeActivity} />
                    <ColorPicker className="column" title={"Activity Active Color"} color={this.layout.active?this.layout.active:"#ffdd57"} handleChange={this.changeActiveActivity} />
                </div>
                <a className="button" onClick={this.default.bind(this)}>Default Colors</a><br/><br/>
                <a className="button is-success" onClick={this.save}>Save</a>
                <br/>
                <br/>
            </div>

        )
    }
}