import HoverCard from './hoverCard.svelte';

export default {
    title: 'Components/HoverCard',
    component: HoverCard,
};

const Template = (args) => ({
    Component: HoverCard,
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