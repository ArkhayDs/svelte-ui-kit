import Switch from "./switch.svelte"

export default {
    title: 'Components/Switch',
    component: Switch,
    // color: {control: 'text'},
    idInput: {control: 'number'},
};

const Template = (args) => ({
    Component: Switch,
    props: args,
    on: {
        click: args.onClick,
    },
});


export const Check = Template.bind({});
Check.args = {
    
};