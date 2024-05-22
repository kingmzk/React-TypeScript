type ListProps<T> = {
    items: T[]  //string[] | number[]
    onClick : (value : T, index : number) => void  //(value : string | number, index : number) => void
}

const List = <T extends {}> ({items,onClick} : ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {
        items.map((item:any,index) => {
            return(
                <div key={index} onClick={() => onClick(item,index)}>
                    {item}
                    {index}
                    </div>
            )
        })
      }
    </div>
  )
}

export default List
