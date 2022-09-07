export default {
    title: 'Components/Switch',
    component: Switch,
    idInput: {control: 'text'},
    typeInput: {control: 'checkbox'}
};

const Template = (args) => ({
    Component: Switch,
    props: args,
    on: {
        click: args.onClick,
    },
});