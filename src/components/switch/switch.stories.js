import Switch from "./switch.svelte"

export default {
    title: 'Components/Switch',
    component: Switch,
    colorInButton: {control: 'text'}
};

const Template = (args) => ({
    Component: Switch,
    props: args,
    on: {
        click: args.onClick,
    },
});


export const SwitchButton = Template.bind({});
SwitchButton.args = {
};