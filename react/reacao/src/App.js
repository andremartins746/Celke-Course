import "./App.css";

function App(props) {

  const Name = "André Martins Pereira"

  const FromatarNome = (Name) => {
    return Name;
  };

  return (
    <div>
      <h1>Olà. {FromatarNome(Name)}</h1>
    </div>
  );
}

export default App;
