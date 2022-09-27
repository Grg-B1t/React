
const DisplayMenu = ({item}) => {
    return(
        <div>
            {item.map((a) => {
               const {id, type, item_name, price} = a
                return(
                    <div>
                        <article key={id}></article>
                        <h4>{type}</h4>
                        <p>{item_name} : {price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayMenu