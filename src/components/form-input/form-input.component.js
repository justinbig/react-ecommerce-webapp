
import React from "react";



import "./form-input.styles.scss";

const FormInPut = ({handleChange,label,...otherProps}) => {
    
    return (
        <div className="group">
            <input  className="form-input" onChange={handleChange} {...otherProps}/>
            {label ? (
                <label className={`${otherProps.value.length ? "shrink" : "" } form-input-label`} >
                    {label}
                </label>
            ) : null}
            {console.log(otherProps)}
        </div>
    )
}

export default FormInPut;