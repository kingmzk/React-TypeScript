
import './App.css'
import Button from './Components/Button'
import Greet from './Components/Greet'
import Heading from './Components/Heading'
import Input from './Components/Input'
import Oscar from './Components/Oscar'
import Person from './Components/Person'
import PersonList from './Components/PersonList'
import Status from './Components/Status'

function App() {

  const personName = {
    first:'Zakria',
    last:'khan'
  }

  const nameList = [
    {
      first:'Super',
      last:'man'
    },
    {
      first:'Spider',
      last:'man'
    },
    {
      first:'Bat',
      last:'man'
    },
  ]


  return (
    <>
      <div>
        <Greet name="Zakria" messageCount={20} isLoggedIn={true} />
        <Person name={personName}/>
        <PersonList names={nameList}/>
        <Status status='success'/>
        <Heading>Heading</Heading>
        <Oscar >
          <Heading>Oscar goes to Leonardo di caprio</Heading>
        </Oscar>
        <Greet name="Zakria"  isLoggedIn={true} />
        <Button handleClick={(event,id) => {console.log('Button Clicked',event,id)}} />
        <Input value='' handleChange={(event) => console.log(event.target.value)}/>
      </div>
    </>
  )
}

export default App