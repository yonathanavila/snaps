import styled from 'styled-components';

const FormNotRegisteredYet = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,.1);
    padding: 100px;
`;

const FormLabel = styled.label`
    font-family: sans-serif;
    letter-spacing: 6px;
    text-transform: uppercase;
    font-size: .8em;
    color: #FFF;
`;

const FormInputTypeText = styled.input`
    display: inline-block;
    border: none;
    text-align: left;
    box-shadow: 3px 2px rgba(121, 83, 210,.3 );
    padding: 10px;
    width: 350px;
    margin: 10px 0;
    background: transparent;
    color: #FFF;
`;

const FormInputTypeSubmit = styled.button`
    background: transparent;
    color: #FFF;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 20px 0;
    padding: 10px 30px;
    border: 2px solid #FFF;
`;


export const NotRegistered = () => {
    return <>
        <FormNotRegisteredYet >
            <FormLabel htmlFor={'first-name'}>FIRST NAME</FormLabel><br></br >
            <FormInputTypeText /><br></br >
            <FormLabel htmlFor={'last-name'}>LAST NAME</FormLabel><br></br >
            <FormInputTypeText /><br></br >
            <FormLabel htmlFor={'email'}>EMAIL</FormLabel><br></br >
            <FormInputTypeText /><br></br >
            <FormInputTypeSubmit>SUBMIT</FormInputTypeSubmit>
        </FormNotRegisteredYet >
    </>
}