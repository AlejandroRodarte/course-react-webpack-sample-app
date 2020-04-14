import React from 'react';

import classes from './PizzaImage.css';

import pizzaImage from '../../assets/pizza.jpg';

const PizzaImage = () => (
    <div className={ classes.PizzaImage }>
        <img src={ pizzaImage } />
    </div>
);

export default PizzaImage;
