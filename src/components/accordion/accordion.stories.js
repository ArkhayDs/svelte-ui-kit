import Accordion from './accordion.svelte';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    faqTile: {control: 'text'},
    faqContent: {control: 'text'},
};

const Template = (args) => ({
    Component: Accordion,
    props: args,
    on: {
        click: args.onClick,
    },
});

export const Title = Template.bind({});
Title.args = {
    idInput: "Title",
    labelInput: 'Title',
    typeInput: 'text'
};

export const Content = Template.bind({});
Content.args = {
    idInput: "Content",
    labelInput: 'Content',
    typeInput: 'text'
};