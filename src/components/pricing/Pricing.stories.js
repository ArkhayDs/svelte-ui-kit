import Pricing from './Pricing.svelte';

export default {
    title: 'Components/Pricing',
    component: Pricing,
    cardTitle: {control: 'text'},
    imgSrc: {control: 'text'},
    imageStory: {control: 'text'},
    attributs: {control: 'text'},
    price: {control: 'number'},
    buttonDesc: {control: 'text'},
    buttonInfo: {control: 'text'}
};

const Template = (args) => ({
    Component: Pricing,
    props: args
});

export const newPrice = Template.bind({});
newPrice.args = {
    cardTitle: 'Ducati StreetFighter V4S',
    imgSrc: '../../../public/sv4s-sp.jpg',
    imageStory: 'Le nouveau Streetfighter V4 SP est le roadster le plus riche en adrénaline qui soit sorti des chaînes de production de Borgo Panigale.',
    attributs: ['Puissance : 208 CV', 'Couple : 123 Nm', 'Poids à Sec : 177 Kg'],
    price: 33590,
    buttonDesc: 'Configurez-le',
    buttonInfo: 'Découvrez-le'
};
