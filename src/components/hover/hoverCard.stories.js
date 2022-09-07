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

export const Username = Template.bind({});
Username.args = {
    image: 'https://www.smogon.com/forums/media/data/avatars/o/554/554045.jpg?1622568312',
    name: 'Joy boy',
    username: '@joyboy',
    widthFigure: 70,
    gap: 10,
}