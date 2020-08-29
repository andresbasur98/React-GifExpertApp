import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

//Custom hook

export const useFetchGifs = ( categoria ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGifs(categoria) //Lo estamos importando de los helpers lo hacemos así para que quede más limpio el componente
            .then( imgs => setstate({
                data: imgs,
                loading: false
            }));
    },[categoria]) // useEffect cargara otra vez la data cuando cambie la [categoria]

    return state; // { data:[], loading: true };

}