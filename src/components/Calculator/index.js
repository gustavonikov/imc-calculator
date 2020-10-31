import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

import styles from './Calculator.module.scss';

export default function Calculator() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState();

    function handleCalculateIMC() {
        const heightInMeters = height/100
        const imcCalculated = weight/(heightInMeters**2)
        setImc(imcCalculated.toFixed((2)))
    }

    function handleIMCClassification() {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc < 24.9) return 'Peso normal';
        if (imc < 29.9) return 'Sobrepeso';
        if (imc < 34.9) return 'Obesidade grau 1';
        if (imc < 39.9) return 'Obesidade grau 2';
        if (imc > 49.9) return 'Obesidade grau 3';
    }

    return (
        <div className={styles.calculator}>
            <Container maxWidth="xs">
                <Typography variant="h4">Calculadora</Typography>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <TextField label="Altura em cm" fullWidth type="number" value={height} onChange={(ev) => setHeight(ev.target.value)} />
                    </Grid>
                    <Grid item>
                        <TextField label="Peso em kg" fullWidth type="number" value={weight} onChange={(ev) => setWeight(ev.target.value)} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={handleCalculateIMC} onKeyPress={handleCalculateIMC} >Calcular</Button>
                    </Grid>
                    { 
                        imc && 
                        <Grid item>
                            <Typography>O seu IMC é : {imc} kg/m² - {handleIMCClassification()}</Typography>
                        </Grid>
                    }
                </Grid>
            </Container>
        </div>
    );
}
