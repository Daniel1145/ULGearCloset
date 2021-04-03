import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [
    {dataField: "name", text: "Name"},
    {dataField: "material", text: "Material"},
    {dataField: "frame", text: "Frame"},
    {dataField: "hipbelt", text: "Hipbelt"},
    {dataField: "volume", text: "Volume"},
    {dataField: "price", text: "Price"},
    {dataField: "weight", text: "Weight"},
    {dataField: "weight_units", text: "Weight Units"},
    {dataField: "href", text: "Link", formatter: (cell, row) => (
        <div>
          <a href={row.href}> Link </a>
        </div>
      )}
]

export default class BackpacksList extends Component {

    constructor(props) {
        super(props);
        this.state = {backpacks: []};
    }

    componentDidMount() {
        axios.get('http://10.0.0.202:4000/backpacks')
            .then(res => {
                this.setState({
                    backpacks: res.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <p>Backpacks List</p>
                <BootstrapTable keyField='name' data={ this.state.backpacks } columns={ columns } defaultSorted= { [{dataField: 'name', order: 'desc'}] }/>
            </div>
        )
    }
}