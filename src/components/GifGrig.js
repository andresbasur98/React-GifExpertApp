import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrig = ({categoria}) => {
    // const [images, setimages] = useState([])
    const { data:images, loading } = useFetchGifs(categoria);
    // useEffect( () => {
    //     getGifs(categoria) //Lo estamos importando de los helpers lo hacemos así para que quede más limpio el componente
    //         .then( imgs => setimages(imgs));
    // },[categoria]) // useEffect cargara otra vez la data cuando cambie la [categoria]



    // getGifs();

    return (
        <>
        <h3>{categoria}</h3>

        {loading && <p>Loading</p> }
        <div className="card-grid">
                {
                    images.map( img => 
                       <GifGridItem
                        key={img.id} 
                        { ...img} //Spred para mandarle todas las propiedades
                        />
                    )
                }
        </div>
        </>
    )
}
