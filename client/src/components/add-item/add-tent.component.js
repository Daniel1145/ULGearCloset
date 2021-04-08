import React, {Component} from 'react';

import AddItem from './add-item.component';
import {EmptySelect} from '../helpers';
import TentForm from '../item-forms/tent-form.component';

export default class AddTent extends Component {
    constructor(props) {
        super(props);

        this.onChangeWall = this.onChangeWall.bind(this);
        this.onChangeMaterial = this.onChangeMaterial.bind(this);
        this.onChangeMinStakes = this.onChangeMinStakes.bind(this);
        this.onChangeMaxStakes = this.onChangeMaxStakes.bind(this);
        this.onChangeFloorLength = this.onChangeFloorLength.bind(this);
        this.onChangeFloorArea = this.onChangeFloorArea.bind(this);
        this.onChangeStanding = this.onChangeStanding.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            wall: EmptySelect,
            material: "",
            stakes: {min: 0, max: 0},
            length: 0,
            floor_area: 0,
            freestanding: EmptySelect
        }
    }

    onChangeWall(val) {
        this.setState({
            wall: val
        });
    }

    onChangeMaterial(e) {
        this.setState({
            material: e.target.value
        });
    }

    onChangeMinStakes(e) {
        this.setState({
            stakes: {min: e.target.value, max: this.state.stakes.max}
        });
    }

    onChangeMaxStakes(e) {
        this.setState({
            stakes: {min: this.state.stakes.min, max: e.target.value}
        });
    }

    onChangeFloorLength(e) {
        this.setState({
            length: e.target.value
        });
    }

    onChangeFloorArea(e) {
        this.setState({
            floor_area: e.target.value
        });
    }

    onChangeStanding(val) {
        this.setState({
            freestanding: val
        });
    }

    onSubmit(e) {
        this.setState({
            wall: EmptySelect,
            material: "",
            stakes: {min: 0, max: 0},
            length: 0,
            floor_area: 0,
            freestanding: EmptySelect
        })
    }

    formatState() {
        return {
            wall: this.state.wall,
            material: this.state.material,
            stakes: this.state.stakes,
            length: this.state.length,
            floor_area: this.state.floor_area,
            freestanding: this.state.free_standing
        }
    }

    render() {
        return (
            <AddItem type="Shelter" childState={this.formatState()} onSubmit={this.onSubmit}>
                <TentForm state={this.state} onChangeWall={this.onChangeWall} onChangeMaterial={this.onChangeMaterial} onChangeMinStakes={this.onChangeMinStakes} onChangeMaxStakes={this.onChangeMaxStakes} 
                onChangeFloorLength={this.onChangeFloorLength} onChangeFloorArea={this.onChangeFloorArea} onChangeStanding={this.onChangeStanding}></TentForm>
            </AddItem>
        )
    }
}