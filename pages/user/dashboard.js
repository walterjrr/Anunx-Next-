import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TemplateDefault from "../../src/templates/Default";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  buttonAdd: {
    margin: "30px auto",
    display: "block",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth='sm' className={classes.container}>
        <Typography variant='h2' component='h1' align='center'>
          Meus Anúncios
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.buttonAdd}
        >
          Publicar Novo Anúncio
        </Button>
      </Container>
    </TemplateDefault>
  );
}
