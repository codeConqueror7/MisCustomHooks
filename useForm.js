import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

        const { email, password, username } = formState;

        const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

        const onResetForm = () => {
            setFormState({
                email: '',
                password: '',
                username: '',
            });
            console.log(formState)
        }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
