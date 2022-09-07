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

export const Image = Template.bind({});
Image.args = {
    image: 'https://www.floride-moto.com/wp-content/uploads/2021/08/floride-moto-accueil-00003.jpeg',
    title: 'Page introuvable',
    link: 'https://google.com',
}

Image.parameters = {
    docs: {
      description: {
        story: 'Some story',
      },
    },
  };