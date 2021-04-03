import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import EditBackpack from './edit-item/edit-backpack.component';

const columns = [
    {dataField: "name", text: "Name"},
    {dataField: "material", text: "Material"},
    {dataField: "frame", text: "Frame"},
    {dataField: "hipbelt", text: "Hipbelt"},
    {dataField: "volume", text: "Volume"},
    {dataField: "price", text: "Price"},
    {dataField: "weight", text: "Weight", formatter: (cell, row) => (
        <div>
            <label>{row.weight}{row.weight_units}</label>
        </div>
    )},
    {dataField: "href", text: "Link", formatter: (cell, row) => (
        <div>
          <a href={row.href}> Link </a>
        </div>
    )},
    {dataField: "df1", text: "", formatter: (cell, row) => (
        <div>
            <EditBackpack data={row}/>
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