import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

export function filterByVolume(filterVal, data) {
    if (filterVal) {
        return data.filter(item => {
            if (filterVal.minVolume === "" && filterVal.maxVolume === "") {
                return true;
            } else if (filterVal.minVolume === "") {
                return item.volume <= filterVal.maxVolume;
            } else if (filterVal.maxVolume === "") {
                return item.volume >= filterVal.minVolume; 
            } else {
                return item.volume >= filterVal.minVolume && item.volume <= filterVal.maxVolume;
            }
        });
    }
    return data;
}

export class VolumeFilter extends Component {
    constructor(props) {
        super(props);
        this.onChangeMaxVolume = this.onChangeMaxVolume.bind(this);
        this.onChangeMinVolume = this.onChangeMinVolume.bind(this);
        this.filter = this.filter.bind(this);
        this.state = {
            minVolume: "",
            maxVolume: ""
        };
    }

    onChangeMinVolume(e) {
        this.setState({
            minVolume: e.target.value
        })
        this.filter(e.target.value, this.state.maxVolume);
    }

    onChangeMaxVolume(e) {
        this.setState({
            maxVolume: e.target.value
        })
        this.filter(this.state.maxVolume, e.target.value);
    }

    filter(min, max) {
        this.props.onFilter({minVolume: min, maxVolume: max});
    }

    render() {
        return (
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <Row> 
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.minVolume} onChange={this.onChangeMinVolume} placeholder="Min Volume"></input></Col>
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.maxVolume} onChange={this.onChangeMaxVolume} placeholder="Max Volume"></input></Col>
            </Row>
        </div>
        );
    }
}