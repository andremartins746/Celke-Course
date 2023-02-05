import "./App.css";
import React from "react"
import Header from "./components/Header/index"
import Article from "./components/articles/index"
import Menu from "./components/Menu/index"
import Aside from "./components/Aside/index"

function App(props) {

  return (
    <div>
      <h1>site </h1>
      <Header/>
      <Article></Article>
      <Menu></Menu>
      <Aside></Aside>
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


// class Welcome extends React.Component{
//   render() {
//     return <span>{this.props.name}</span>
//   }
// }
export default App;
