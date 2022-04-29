import React, {useState} from 'react';
import Cronometro from '../components/cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { ITarefas } from '../types/tarefa';
import style from './style.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefas>()

  function selecionaTarefa(tarefaSlecionada: ITarefas) {
    setSelecionado(tarefaSlecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSlecionada.id
    })))
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      })  
      )
    }
  }

  return (
    <div className={style.AppStyle}>
     <Form setTarefas={setTarefas}/>
     <List
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
     <Cronometro
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
