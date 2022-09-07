import Banner from './banner.svelte';

export default {
    title: 'Components/Banner',
    component: Banner,
    bannerText: {control: 'text'},
    buttonText: {control: 'text'},
    bannerCentered: {control: 'boolean'}
};

const Template = (args) => ({
    Component: Banner,
    props: args
});

export const ClassicTopBanner = Template.bind({});
ClassicTopBanner.args = {
    bannerText: 'Last Updates ! Découvrez notre nouvelle gamme de Bi-cylindres !',
    buttonText: 'Voir plus',
    bannerCentered: false
};

export const CenteredTopBanner = Template.bind({});
CenteredTopBanner.args = {
    bannerText: 'Découvrez le tout nouveau Ducati Streetfighter V4 SP !',
    buttonText: 'Voir plus',
    bannerCentered: true
};