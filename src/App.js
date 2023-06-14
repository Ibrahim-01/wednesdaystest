import React,{Component} from 'react'
import Userinput from "./Components/Userinput"
import Useroutput from "./Components/Useroutput"
 
class App extends Component{


  state = {userName: "Mubarak"}


  usernameChangedHandler = (e) =>{
    this.setState({username: e.target.value })}

    render()
  {


    return (
      <>
          <Userinput  changename={this.usernameChangedHandler}   />
          <Useroutput userName= {this.state.userName}  />
    
      </>
    )
  }
}


export default App