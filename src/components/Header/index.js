import { Container, Grid, Typography } from '@material-ui/core';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.header}>
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" className={styles.header_title}>Calcule o seu IMC</Typography>
                        <Typography>
                            O IMC é o indice de massa corporal,
                            e é utilizado para saber se o peso está de acordo com a altura.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src="https://s3-sa-east-1.amazonaws.com/imc.sejadev.com/medic.png" alt="Médico e paciente"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
