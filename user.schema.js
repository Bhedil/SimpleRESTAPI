import * as Yup from 'yup'

const minLength = {
    name: 2,
    city: 1,
    country: 2
};

const maxLength = {
    name: 20,
    city: 30,
    country: 30,
    email: 100
}

export const getUser = {
    schema: {
        params: {
             yupSchema: Yup.object().shape({
                id: Yup.number().required(),
            }),
        }
    },
}

export const addUser  = {
    schema: {
        body: {
             yupSchema: Yup.object().shape({
                name: Yup.string().min(minLength.name).max(maxLength.name).required(),
                email: Yup.string().email().max(maxLength.email),
                city: Yup.string().min(minLength.city).max(maxLength.city),
                country: Yup.string().min(minLength.country).max(maxLength.country),
            }),
        }
    },
};

export const updateUser = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
               id: Yup.number().required(),
           }),
       },
        body: {
             yupSchema: Yup.object().shape({
                name: Yup.string().min(minLength.name).max(maxLength.name).required(),
                email: Yup.string().email().max(maxLength.email),
                city: Yup.string().min(minLength.city).max(maxLength.city),
                country: Yup.string().min(minLength.country).max(maxLength.country),
            }),
        }
    },
}

export const deleteUser = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
               id: Yup.number().required(),
           }),
       },
    },
}