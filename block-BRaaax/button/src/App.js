import logo from './logo.svg';
import './App.css';
import Button from './button';
import {buttonSizes,buttonTypes} from './buttonInfo'

function App() {
  return (
    <>
      <Button label="Click Me!"/>
      <Button label="Click Me!" type={buttonTypes.secondary} size={buttonSizes.large}/>
      <Button label="Click Me!"  type={buttonTypes.tertiary} size={buttonSizes.medium}/>
      <Button label="Click Me!" onClickHandler={()=>{alert('You clicked me!!')}}/>
    </>
  );
}

export default App;
  