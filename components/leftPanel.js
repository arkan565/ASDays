import React from 'react';
import 'bulma/css/bulma.css';
import HoursPanel from './hoursPanel'
import ActivitiesGrid from './activitiesGrid'
export default class LeftPanel  extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="columns">
            <div className="column is-narrow">
                    <HoursPanel></HoursPanel>
            </div>
             <div id="activities" 
                            className="column">
                        <ActivitiesGrid activities={this.props.activities?this.props.activities:""}></ActivitiesGrid>    
            </div>
            < /div>
        )
    }
}