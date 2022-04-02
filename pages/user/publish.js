import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Formik } from 'formik';
import * as yup from 'yup';

import {
    Container,
    Typography,
    Box,
    Input,
    Select,
    MenuItem,
    Button,
    IconButton,
    FormControl,
    InputLabel,
    InputAdornment,
    FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteForever } from "@material-ui/icons";


import TemplateDefault from "../../src/templates/Default";


const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage: {},
    container: {
        padding: theme.spacing(8, 0, 6),
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },
    boxContainer: {
        paddingBottom: theme.spacing(3),
    },
    thumbsContainer: {
        display: "flex",
        marginTop: 15,
        flexWrap: 'wrap',
    },
    dropzone: {
        width: 200,
        height: 150,
        backgroundColor: theme.palette.background.default,
        border: "2px dashed black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        padding: 10,
        margin: "0 15px 15px 0",
    },
    InputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main,
    },
    thumb: {
        position: "relative",
        width: 200,
        height: 150,
        backgroundSize: "cover",
        margin: '0 15px 15px 0',
        backgroundPosition: "center center",


        "& $mainImage": {
            backgroundColor: "blue",
            padding: "6px 10px",
            position: "absolute",
            bottom: 0,
            left: 0,
        },

        "&:hover": {
            "& $mask": {
                display: "flex",
            },
        },

        "& $mask": {
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
            height: "100%",
            width: "100%",
        },

    },
}));

const validateSchema = yup.object().shape({
    title: yup.string().min(6, 'Escreva um titulo maior')
        .max(100, 'Titulo muito grande')
        .required('Campo Obrigatório'),
    category: yup.string().required('Campo Obrigatório'),
    description: yup.string().min(50, 'Escreva um descrição maior')
        .required('Campo Obrigatório'),
    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email('Digite um email valido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),
    files: yup.array().min(1, 'Envie pelo menos 1 foto!').required('Campo obrigatório')

});

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
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price: '',
                    email: '',
                    name: '',
                    phone: '',
                    files: [],
                }}
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

                        const { getRootProps, getInputProps } = useDropzone({
                            accept: 'image/*',
                            onDrop: (acceptedFile) => {
                                const newFiles = acceptedFile.map(file => {
                                    return Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })
                                })
                    
                                setFieldValue('files',[
                                    ...values.files,
                                    ...newFiles,
                                ])
                            }
                        })
                    
                        const handleRemoveFile = fileName => {
                            const newFileState = values.files.filter(file => file.name !== fileName)
                            setFieldValue('files',newFileState)
                        }

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
                                        <Typography component='h6' variant='h6' color={errors.files && touched.files? 'error' : 'textPrimary'}>
                                            Imagens
                                        </Typography>
                                        <Typography component='div' variant='body2' color={errors.files && touched.files? 'error' : 'textPrimary'}>
                                            A primeira imagem é a foto princial do seu anúncio
                                        </Typography>

                                        {
                                            errors.files && touched.files
                                            ?<Typography variant="h2" color="error" gutterBottom> {errors.files}</Typography>
                                            : null
                                        }

                                        <Box className={classes.thumbsContainer}>
                                            <Box className={classes.dropzone} {...getRootProps()}>
                                                <input name='files' {...getInputProps()} />
                                                <Typography variant='body2' color={errors.files && touched.files? 'error' : 'textPrimary'}>
                                                    Clique para adicionar ou arraste a imagem para aqui.
                                                </Typography>
                                            </Box>
                                            {
                                                values.files.map((file, index) => (
                                                    <Box
                                                        key={file.name}
                                                        className={classes.thumb}
                                                        style={{
                                                            backgroundImage: `url(${file.preview})`,
                                                        }}
                                                    >
                                                        {
                                                            index === 0
                                                                ? <Box className={classes.mainImage}>
                                                                    <Typography variant='body2' color='secondary'>
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                                : null
                                                        }

                                                        <Box className={classes.mask}>
                                                            <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize='large' />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }

                                        </Box>
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