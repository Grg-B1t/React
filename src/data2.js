import {useState, useEffect} from 'react';
import Pagination from './data3';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'
export const UseFetch = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
   
    useEffect(()=>{
        const getContent = async () => {
            const res = await fetch(url)
            const data = await res.json()
            
            console.log(data)

            setData(Pagination(data))
            setLoading(false)
            console.log(setLoading)
        }

        getContent()

    }, [])


    


    console.log(loading)
    return {loading, data}
}


