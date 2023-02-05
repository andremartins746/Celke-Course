import "./App.css";

function App(props) {

  const Name = "André Martins Pereira"

  const Usuario = {
    idade: 20,
    profissao: "Desenvolvedor de Software"
  }

  const FromatarNome = (Name) => {
    return Name;
  };

  const formatarDadosUsuario = (usuario) => {
    return " tem, "+ usuario.idade + " anos, profissão " + usuario.profissao
  }

  return (
    <div>
      <h1>Colaborador {FromatarNome(Name)} {formatarDadosUsuario(Usuario)}</h1>
    </div>
  );
}

export default App;
