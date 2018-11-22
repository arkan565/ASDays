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
            <div className="columns is-gapless is-mobile">
                <div className="column is-one-fifth">
                        <HoursPanel config={this.props.config}></HoursPanel>
                </div>
                <div id="activities" className="column is-four-fifths">
                            <ActivitiesGrid config={this.props.config} activities={this.props.activities?this.props.activities:""}></ActivitiesGrid>    
                </div>
                
            </div>
        )
    }
}