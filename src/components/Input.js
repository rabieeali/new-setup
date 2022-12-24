import React from 'react'

const Input = ({ label, htmlFor, id, type = "text" }) => {
    return (
        <>
            <label htmlFor={htmlFor}>{label}</label>
            <input id={id} type={type} />
        </>
    )
}

export default Input