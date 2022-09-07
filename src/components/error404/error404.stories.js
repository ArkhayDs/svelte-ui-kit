import Error404 from './error404.svelte';

export default {
    title: 'Components/Error404',
    component: Error404,
};

const Template = (args) => ({
    Component: Error404,
    props: args,
    on: {
        click: args.onClick,
    },
});

export const username = Template.bind({});
// username.args = {
//     username: 'MOIIII',
//     widthFigure: 100
// }