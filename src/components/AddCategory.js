import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitamos que haga el refresh al hacer el submit

        if( inputValue.trim().length > 0){
            setCategories( cats => [ inputValue,...cats ]);
            setInputValue('');
            
        }

    }
    
    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                 />
        </form>
        
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}