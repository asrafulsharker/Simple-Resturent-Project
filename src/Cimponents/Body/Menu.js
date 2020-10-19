import React, { Component, component } from 'react';

import DISHES from '../../Data/dishes.js';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

onDishSelect = dish =>{
    console.log(dish);
    this.setState({ selectedDish: dish });
}

    render(){
        const menu = this.state.dishes.map(item=>{
            return(
                <MenuItem
                 dish={item} 
                 key={item.id}
                 DishSelect={()=>this.onDishSelect(item)}
                 />
            );
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
        dishDetail = <DishDetail dish={this.state.selectedDish} />
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}

                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>

                </div>
            </div>
        )
    }
}

export default Menu;