import React from 'react';
import './collection-item.styles.scss';

export const CollectionItem = ({ name, imageUrl, price }) => (
    <div className="collection-item">
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="image" />

        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>

    </div>
)