import Modale from './modale.svelte';

export default {
    title: 'Components/Modale',
    component: Modale,
    //nameCels: {control: 'text'},
    //statsNew: {control: 'number'},
    //statsPrevious: {control: 'number'},
    //typeStatsCels: {control: 'text'}
};

const Template = ( args ) => ( {
    Component: Modale,
    props: args,
    on: {
        click: args.onClick,
    },
} );


export const Cta_button_for_modale = Template.bind( {} );

