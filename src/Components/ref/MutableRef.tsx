import { useRef, useEffect } from "react";

const MutableRef = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    },[])

  return (
    <div>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default MutableRef
