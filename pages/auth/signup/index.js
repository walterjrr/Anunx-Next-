import TemplateDefault from "../../../src/templates/Default";
import { Formik, validateYupSchema } from "formik";
import {
  Box,
  Container,
  Typography,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";

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
}));

import { initialValues, validationSchema } from "./formValues";

const Signup = () => {
  const classes = useStyles();
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
            onSubmit={(values) => {
              console.log("ok enviado", values);
            }}
          >
            {({ errors, touched, values, handleChange, handleSubmit }) => {
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

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Cadastrar
                  </Button>
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