

// type PersonsList = {
//     names:{
//         first:string,
//         last:string
//     }[]
// }

type Name = {
    first: string,
    last: string
}

type PersonsList = {
    names: Name[]
}


const PersonList = (props: PersonsList) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <>
                        <h2 key={name.first}>{name.first}</h2>
                        <h2 key={name.last}>{name.last}</h2>
                    </>
                )
            }
            )}
        </div>
    )
}

export default PersonList
