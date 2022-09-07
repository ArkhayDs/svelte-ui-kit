import Stats from './stats.svelte';

export default {
    title: 'Components/Stats',
    component: Stats,
    nameCels: {control: 'text'},
    statsNew: {control: 'number'},
    statsPrevious: {control: 'number'},
    typeStatsCels: {control: 'text'}
}

const Template = (args) => ({
    Component: Stats,
    props: args,
    on: {
        click: args.onClick,
    },
});



export const Total_user = Template.bind({});
Total_user.args = {
    nameCels: "Total user",
    statsNew: 230,
    statsPrevious: 97,
    typeStatsCels: ""

};
export const Order_completed = Template.bind({});
Order_completed.args = {
    nameCels: "Order completed",
    statsNew: 90,
    statsPrevious: 66,
    typeStatsCels: "%"

};