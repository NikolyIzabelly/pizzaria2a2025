import {useState} from 'react'

function App(){

      const [nome, setNome] = useState('Ronaldo');
      const Formulario = () => {
      return (
        <>

        <h4>Formulario de Inscrição</h4>
    <input className="Nome"
          name = "nome"
          placeholder="Digite seu nome..."
          onChange={(e)=>setNome(e.target.value)}
        type="text" />
        <button onClick={()=>{alert(nome)}}>
        CLIQUE AQUI 
        </button>
  </              > 
  )
}

export default App