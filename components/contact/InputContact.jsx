import styled from 'styled-components'
import { useField } from 'formik'

const MyInput = styled.input`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
    margin-top: 20px;
`
const ErrorMessage = styled.p`
    color: #f00;
`

const InputContact = ({...props}) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <MyInput {...field} {...props}/>
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
        </div>
    )
}


export default InputContact