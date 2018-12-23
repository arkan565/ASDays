import React from 'react';
import { SketchPicker } from 'react-color';
export default class ColorPicker extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <SketchPicker color={this.props.color} onChange={this.props.handleChange}/>
            </div>
        )
    }
}