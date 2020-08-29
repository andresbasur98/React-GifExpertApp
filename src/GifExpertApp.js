import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrig } from './components/GifGrig';


const GifExpertApp = (() => {

    // const categories = ['One punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () => {
    //     setCategories( [...categories,'Hunter'] )
    // }
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <button>Agregar</button>
            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrig 
                                key={category} 
                                categoria = {category}/>
                    })
                }
            </ol>
        </>
    )
})


export default GifExpertApp
