import React from 'react';

import './form-input.styles.scss'

export const FormInput = ({ label, handleChange, ...otherFormProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherFormProps} />
        {
            label ? (
                <label className={`${otherFormProps.value.length ? 'shrink' : ""} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
)