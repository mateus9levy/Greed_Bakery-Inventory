import { useState } from 'react';
import JobBox from './components/jobBox';
import { Button, Grid } from '@mui/material';
import scheduleTasks from './Scripts/scheduleTaks';

function App() {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [Sjob, setSJob] = useState([]);
  const [scheduledTasks,setScheduledTaks] = useState([]);

  const addJobs = () => {
    let arr = Sjob;

    const job = {
      name: name,
      start: start,
      end: end,
    }


    const nomeValido = /^[A-Za-z\s,-]+$/.test(job.name);

    const horarioValido = /^([01]\d|2[0-3]):([0-5]\d)$/.test(job.start) && /^([01]\d|2[0-3]):([0-5]\d)$/.test(job.end);



    if (nomeValido && horarioValido) {
      setEnd('');
      setName("");
      setStart("");
      arr.push(job);
      setSJob(arr);

    } else {
      alert(`insira corretamente as entradas`)
    }


  }

  const handleScheduleTaks = (task) =>{
    setScheduledTaks(task)
  } 

  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleStart = (event) => {
    setStart(event.target.value);
  }
  const handleEnd = (event) => {
    setEnd(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <h3>Nome da tarefa:</h3>
        <input type='text' value={name} onChange={handleName} ></input>
      </div>
      <div>
        <h3>Início:</h3>
        <input type='time' value={start} onChange={handleStart} ></input>
      </div>
      <div>
        <h3>Final:</h3>
        <input type='time' value={end} onChange={handleEnd} ></input>
      </div>
      <div style={{ marginTop: "12px" }}>
        <Button  sx={{
          marginTop:"12px", 
         backgroundColor:"aliceblue", 
         marginRight:"12px"}}

        onClick={(() => {

          addJobs()

        })}>
          Adicionar tarefa
        </Button>



       
      </div>

      <Button 
      sx={{marginTop:'12px', backgroundColor: "red", color:"black"}}
      onClick={()=>{
        setSJob([])
      }}
      >Limpar tarefas</Button>

      <Grid item alignContent={'center'} marginY={-35} marginX={45}>
        <Grid item sm={6} marginTop={6}>
          <h2>Tarefas:</h2>
          {Sjob.map((item) => <JobBox job={item} />)}

        </Grid>

        <Button
         sx={{marginTop:"12px", 
         backgroundColor:"aliceblue", 
         marginRight:"12px"}} 
         color='primary'
         onClick={(()=>{
           if(Sjob.length == 0){  
            alert("Adicione pelo menos uma tarefa")
           }else{
            const result = scheduleTasks(Sjob);
            handleScheduleTaks(result);
          }
         
         })}
         >Agendar tarefas
         </Button> 

      </Grid >
     
      <Grid item alignContent={'center'} marginY={-41.3} marginX={110}>
          
          <h2>Tarefas Agendadas:</h2>
          {scheduledTasks.map((item) => <JobBox job={item} />)}
      </Grid>
    </div>

  );
}

export default App;
