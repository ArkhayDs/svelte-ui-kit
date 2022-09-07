import Tabs from './tabs.svelte';

export default {
    title: 'Components/Tabs',
    component: Tabs,
    idInput1: { control: 'text' },
    labelInput1: { control: 'text' },

    idInput2: { control: 'text' },
    labelInput2: { control: 'text' },

    tabName: { control: 'text' },
    idTab: { control: 'text' },
};


const Template = ( args ) => ( {
    Component: Tabs,
    props: args,
    on: {
        click: args.onClick,
    },
} );

export const Name = Template.bind( {} );
Name.args         = {
    typeInput1: 'text',
    typeInput2: 'text',

};



