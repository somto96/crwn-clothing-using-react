import React from 'react';

import './menu-item.styles.scss'

export const Menuitem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`} >
        <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className="background-image"/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
      
    </div>
)
