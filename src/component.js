
const Comp = ({a, b}) => {
    console.log(b)
    return(
        <div>
            {a.map((c, d) =>{
                return(
                    <button type="button"
                        key = {d}
                        onClick = {() => {
                            b(c)
            
                        }}
                    >{c}</button>
                )
            })}
        </div>
    )
}

export default Comp