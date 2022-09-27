import React from "react";

const DisplayContent = ({_url, html_url, login_url})=> {
    return(
        <div>
            <article>
            <img src={_url} alt={login_url}></img>
            <h4>{login_url}</h4>
            <a href={html_url}>View Data</a>
            </article>
        </div>
    )
}

export default DisplayContent;