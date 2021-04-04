import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

export function filterByMaxLoad(filterVal, data) {
    if (filterVal) {
        return data.filter(item => {
            if (filterVal.minMaxLoad === "" && filterVal.maxMaxLoad === "") {
                return true;
            } else if (filterVal.minMaxLoad === "") {
                return item.max_load <= filterVal.maxMaxLoad;
            } else if (filterVal.maxMaxLoad === "") {
                return item.max_load >= filterVal.minMaxLoad; 
            } else {
                return item.max_load >= filterVal.minMaxLoad && item.max_load <= filterVal.maxMaxLoad;
            }
        });
    }
    return data;
}

export class MaxLoadFilter extends Component {
    constructor(props) {
        super(props);
        this.onChangeMaxMaxLoad = this.onChangeMaxMaxLoad.bind(this);
        this.onChangeMinMaxLoad = this.onChangeMinMaxLoad.bind(this);
        this.filter = this.filter.bind(this);
        this.state = {
            minMaxLoad: "",
            maxMaxLoad: ""
        };
    }

    onChangeMinMaxLoad(e) {
        this.setState({
            minMaxLoad: e.target.value
        })
        this.filter(e.target.value, this.state.maxMaxLoad);
    }

    onChangeMaxMaxLoad(e) {
        this.setState({
            maxMaxLoad: e.target.value
        })
        this.filter(this.state.maxMaxLoad, e.target.value);
    }

    filter(min, max) {
        this.props.onFilter({minMaxLoad: min, maxMaxLoad: max});
    }

    render() {
        return (
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <Row> 
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.minMaxLoad} onChange={this.onChangeMinMaxLoad} placeholder="Min MaxLoad"></input></Col>
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.maxMaxLoad} onChange={this.onChangeMaxMaxLoad} placeholder="Max MaxLoad"></input></Col>
            </Row>
        </div>
        );
    }
}