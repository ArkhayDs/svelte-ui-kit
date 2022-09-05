import Input from './input.svelte';

export default {
    title: 'Components/Input',
    component: Input,
    idInput: {control: 'text'},
    labelInput: {control: 'text'},
    typeInput: {control: 'text'}
};

const Template = (args) => ({
    Component: Input,
    props: args,
    on: {
        click: args.onClick,
    },
});

export const Username = Template.bind({});
Username.args = {
    idInput: "Username",
    labelInput: 'Username',
    typeInput: 'text'
};

export const Password = Template.bind({});
Password.args = {
    idInput: "Password",
    labelInput: 'Password',
    typeInput: 'password'
};

export const Email = Template.bind({});
Email.args = {
    idInput: "Email",
    labelInput: 'Email',
    typeInput: 'email'
};