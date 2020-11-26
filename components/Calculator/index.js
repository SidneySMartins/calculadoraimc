import { Container, Grid, Typography, TextField, Button, } from "@material-ui/core";
import { useState } from 'react'

import styles from "./Calculator.module.scss";

function Calculator() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setImc] = useState(0)

  const calculateImc =() =>{
    const alturaM = altura /100
    setImc((peso/(alturaM*alturaM)).toFixed(2))
  }

  function verifyImc(){
    if(imc <18.5){
      return "Abaixo do Peso"
    }else if( imc < 24.9){
      return "Peso Normal"
    }else if( imc < 29.9){
      return "Sobrepeso Normal"
    }else if( imc < 34.9){
      return "Obesidade Grau 1"
    }else if( imc < 39.9){
      return "Obesidade Grau 2"
    } else{
      return "Obesidade Grau 1"
    }
  }

  return (
    <div className={styles.calculator}>
      <Container maxWidth="xs">
        <Typography variant="h3">Calculadora</Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item> { /* primeira forma de usar o evento) */ }
            <TextField label="Altura em cm" variant="filled" fullWidth type="number" value={altura} onChange={({target}) => setAltura(target.value)}/>
          </Grid>
          <Grid item>{ /* segunda forma de usar o evento) */ }
            <TextField label="Peso em Kg" variant="filled" fullWidth type="number" value={peso} onChange={({target}) => setPeso(target.value)}/>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth onClick={() => calculateImc()}>Calcular</Button>
          </Grid>
          {
            imc && 
            <Grid item>
            <Typography>O seu IMC é: {imc} kg/mc = {verifyImc()}</Typography>
          </Grid>
          }
        </Grid>
      </Container>
    </div>
  );
}

export default Calculator;
