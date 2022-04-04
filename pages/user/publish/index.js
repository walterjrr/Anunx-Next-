
import { Formik } from 'formik';


import {
    Container,
    Typography,
    Box,
    Input,
    Select,
    MenuItem,
    Button,
    FormControl,
    InputLabel,
    InputAdornment,
    FormHelperText,
} from "@material-ui/core";



import TemplateDefault from "../../../src/templates/Default";
import useStyles from './styles';

import { initialValues, validateSchema } from './formValues';
import FileUpload from '../../../src/components/FileUpload';



const Publish = () => {
    const classes = useStyles();
    return (
        <TemplateDefault>
            <Container maxWidth='sm'>
                <Typography component='h1' variant='h2' align='center' color='primary'>
                    Publicar Anúncio
                </Typography>

                <Typography component='h5' variant='h5' align='center' color='primary'>
                    quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                onSubmit={(values) => {
                    console.log('ok, enviou o form', values)
                }}
            >
                {
                    
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => {

                        return (
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>

                                        
                                        <FormControl error={errors.title && touched.title} fullWidth>
                                            <InputLabel className={classes.InputLabel}>Titulo do Anúncio</InputLabel>
                                            
                                            <Input
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.title && touched.title ? errors.title : null}
                                            </FormHelperText>
                                        </FormControl>

                                        <br />
                                        <br />
                                        <FormControl error={errors.category && touched.category } fullWidth>
                                            <InputLabel className={classes.InputLabel}>Categoria</InputLabel>
                                            <Select
                                                name="category"
                                                value={values.category}
                                                fullWidth
                                                onChange={handleChange}
                                                
                                            >
                                                <MenuItem value=''>Selecione</MenuItem>
                                                <MenuItem value='Bebê e criança'>Bebê e criança</MenuItem>
                                                <MenuItem value='Agricultura'>Agricultura</MenuItem>
                                                <MenuItem value='Moda'>Moda</MenuItem>
                                                <MenuItem value='Carro, Moto e Barcos'>Carro, Moto e Barcos</MenuItem>
                                                <MenuItem value='Serviços'>Serviços</MenuItem>
                                                <MenuItem value='Lazer'>Lazer</MenuItem>
                                                <MenuItem value='Móveis, Casa e Jardim'>Móveis, Casa e Jardim</MenuItem>
                                                <MenuItem value='Imóveis'>Imóveis</MenuItem>
                                                <MenuItem value='Equipamentos e Ferramentas'>
                                                    Equipamentos e Ferramentas
                                                </MenuItem>
                                                <MenuItem value='Celulares e Tablets'>Celulares e Tablets</MenuItem>
                                                <MenuItem value='Esportes'>Esportes</MenuItem>
                                                <MenuItem value='Tecnologia'>Tecnologia</MenuItem>
                                                <MenuItem value='Emprego'>Emprego</MenuItem>
                                                <MenuItem value='Outros'>Outros</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                {errors.category && touched.category ? errors.category : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <FileUpload 
                                        files={values.files}
                                        errors={errors.files}
                                        touched={touched.files}
                                        setFieldValue={setFieldValue}
                                        />
                                    </Box>
                                </Container>

                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <FormControl error={errors.description && touched.description} fullWidth>
                                        <InputLabel className={classes.InputLabel}>Escreva os detalhes do que está vendendo</InputLabel>
                                            <Input name="description" multiline rows={6} variant='outlined' onChange={handleChange}/>
                                            <FormHelperText>
                                                {errors.description && touched.description? errors.description : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                    <FormControl error={errors.price && touched.price} fullWidth>
                                        <InputLabel className={classes.InputLabel}>Preço do que está vendendo</InputLabel>
                                            <Input name="price"variant='outlined'
                                            onChange={handleChange}
                                            startAdornment={
                                                <InputAdornment position='start'>R$</InputAdornment>
                                            }/>
                                            <FormHelperText>
                                                {errors.price && touched.price? errors.price : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box className={classes.box}>
                                        <Typography
                                            component='h6'
                                            variant='h6'
                                            color='textPrimary'
                                            gutterBottom
                                        >
                                            Dados de Contato
                                        </Typography>
                                        <FormControl error={errors.name && touched.name} fullWidth>
                                            <InputLabel className={classes.InputLabel}>Nome</InputLabel>
                                            
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name? errors.name : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br />
                                        <br />
                                        <FormControl error={errors.email && touched.email} fullWidth>
                                            <InputLabel className={classes.InputLabel}>E-mail</InputLabel>
                                            
                                            <Input
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br />
                                        <br />
                                        <FormControl error={errors.phone && touched.phone} fullWidth>
                                            <InputLabel className={classes.InputLabel}>Telefone</InputLabel>
                                            
                                            <Input
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.phone && touched.phone? errors.phone : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br />
                                        <br />
                                    </Box>
                                </Container>

                                <Container maxWidth='md' className={classes.boxContainer}>
                                    <Box textAlign='right'>
                                        <Button type="submit" variant='contained' color='primary'>
                                            Publicar Anúncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>

        </TemplateDefault>
    );
};
export default Publish;