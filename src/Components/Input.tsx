
import React from 'react'

type InputProps = {
    value:string;
    handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

// const Input = (props:InputProps) => {
  const Input = ({value,handleChange}:InputProps) => {
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    // }
  return (
    <div>
    {/* <input type='text' value={props.value} onChange={/*props.handleChange*//*handleChange}/> */}
    <input type='text' value={value} onChange={handleChange}/>
    </div>
  )
}

export default Input
