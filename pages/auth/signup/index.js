import axios from 'axios';
import { Formik } from "formik";
import {useRouter } from 'next/router'
import {
  Box,
  Container,
  Typography,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
  CircularProgress,
} from "@material-ui/core";

import TemplateDefault from "../../../src/templates/Default";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 30,
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  formControl: {
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loading: {
    display: 'block',
    margin: '10px auto',
  },
}));

import { initialValues, validationSchema } from "./formValues";
import useToasty from "../../../src/contexts/Toasty";

const Signup = () => {
  const classes = useStyles();
  const router = useRouter()
  const { setToasty } = useToasty()

  const handleFormSubmit = async values => {
    const response = await axios.post('/api/users', values)

    console.log(response)

    if (response.data.sucess) {
      setToasty({
        open: true,
        severity: 'sucess',
        text: 'Cadastro realizado com sucesso!'
      })

      router.push('/auth/signin')
    }
  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Crie sua conta
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="textPrimary"
        >
          E anuncie para todo o Brasil
        </Typography>
      </Container>

      <Container>
        <Box className={classes.box}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ errors, touched, values, handleChange, handleSubmit, isSubmitting, }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <FormControl
                    fullWidth
                    error={errors.name && touched.name}
                    className={classes.formControl}
                  >
                    <InputLabel>Name</InputLabel>
                    <Input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.name && touched.name ? errors.name : null}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    fullWidth
                    error={errors.email && touched.email}
                    className={classes.formControl}
                  >
                    <InputLabel>Email</InputLabel>
                    <Input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.email && touched.email ? errors.email : null}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    fullWidth
                    error={errors.password && touched.password}
                    className={classes.formControl}
                  >
                    <InputLabel>Senha</InputLabel>
                    <Input
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.password && touched.password
                        ? errors.password
                        : null}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    fullWidth
                    error={errors.passwordConf && touched.passwordConf}
                    className={classes.formControl}
                  >
                    <InputLabel>Confimação de senha</InputLabel>
                    <Input
                      name="passwordConf"
                      type="password"
                      value={values.passwordConf}
                      onChange={handleChange}
                    />
                    <FormHelperText>
                      {errors.passwordConf && touched.passwordConf
                        ? errors.passwordConf
                        : null}
                    </FormHelperText>
                  </FormControl>

                  {
                    isSubmitting
                      ? (
                        <CircularProgress className={classes.loading}/>
                      ) : (<Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Cadastrar
                      </Button>
                      )
                  }
                </form>
              );
            }}
          </Formik>
        </Box>
      </Container>
    </TemplateDefault>
  );
};

export default Signup;