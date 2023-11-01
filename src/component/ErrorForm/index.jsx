import React from 'react';
import './style.scss'

const FormError = ({ error, value }) => {
    return (
        <>
            {
                error &&
                <div className="error_container">
                    <p>{value}</p>
                </div>
            }

        </>
    )
}

export default FormError