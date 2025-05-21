import React from 'react'

const InputCity = ( {city, onInputHandler, onSubmitHandler}) => {

    return(
        <div className="input">
            <input type="text" value={city} onChange={onInputHandler}   placeholder="City..."></input>
            <button className="input_btn" type="submit" onClick={onSubmitHandler}>
                Search
                </button>
            {/* Welcome to {city} */}
        </div>            
    )
};

export default InputCity;
