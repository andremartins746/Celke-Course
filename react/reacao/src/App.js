import "./App.css";
import React from "react"

function App(props) {

  return (
    <div>
      <h1>Olá <Welcome name="André"></Welcome></h1>
    </div>
  );
}

// function Welcome(props){
//   return (
//     <>
//         <span>{props.name}</span>
//     </>
//   )
// }


class Welcome extends React.Component{
  render() {
    return <span>{this.props.name}</span>
  }
}
export default App;
