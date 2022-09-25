import React, {useState, useEffect} from 'react';
import Element from './element';

function ColorManage({rgb, weight, index, hexColor}){
    const [alert, setAlert] = useState(false);
    
    const bcg = rgb.join(',');
    const hex = Element(...rgb);
    const hexValue = `#${hexColor}`;

    useEffect(()=> {
        const timeout = setTimeout(()=>{
            setAlert(false);
        }, 5000)

        return ()=> clearTimeout(timeout)
    }, [alert])

    return(
        <div>
            <article 
           // className={`color ${index > 10 && 'color-light'}`}
            style = {{backgroundColor: `rgb(${bcg})`}}
            onClick = {()=>{
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}
            >

                <p>{weight} %</p>
                <p>{hexValue}</p>
                
                {alert && <p>copied to clipboard!</p>}
                </article>
        </div>
    )

}

export default ColorManage;