import React from 'react'


import StarRating from 'react-native-star-rating';
export const Star = (props) => {
  return (<StarRating disabled={false} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} maxStars={5} rating={props.rating} selectedStar={(rating) => this.onStarRatingPress(rating)} fullStarColor={'blue'} starSize={12} />);
};
