import Accordion from './accordion.svelte';

export default {
    title: 'Components/Accordion',
    component: Accordion
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
    faqList :  [
        {title : "How to pay ?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
        {title : "Why us ?", content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
        {title : "20 or nothing?", content: "Yes."},
        {title : "Who some we ?", content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
    ]
};