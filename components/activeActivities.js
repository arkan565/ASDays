import React from 'react';
import ActiveActivitiesCard from './activeActivitiesCard';
import 'bulma/css/bulma.css';
export default class ActiveActivities extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="columns">        
                    {this.props.active.map((activeActivity,index)=>{
                        return <ActiveActivitiesCard config={this.props.config} key={index} activity={activeActivity}/>
                    })}               
                </div>
                <div className="columns">
                    {this.props.next.map((activeActivity,index)=>{
                        return <ActiveActivitiesCard config={this.props.config} key={index} activity={activeActivity}/>
                    })}
                </div>
            </div>
        )   
    }
}