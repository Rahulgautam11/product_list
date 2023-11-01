import React from 'react'
import './style.scss'

const FormInput = ({ type, placeholder, label, className, onChange, name, value }) => {
    return (
        <div className={`form_input_container ${className}`}>
            <label className='label_input'>{label}</label>
            <input className='form_input'
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                value={value}
            />

        </div>
    )
}

export default FormInput