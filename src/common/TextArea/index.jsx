import React from 'react'
import './style.scss'

const TextArea = ({ rows, placeholder, onChange, name, value, label, className }) => {
    return (
        <div className={`form_TextArea_container ${className}`}>
            <label className='label_input'>{label}</label>
            <textarea className='form_input'
                rows={rows}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                value={value}
            />

        </div>
    )
}

export default TextArea