import * as yup from 'yup';

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],
}

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

export {
    initialValues,
    validateSchema,
}
