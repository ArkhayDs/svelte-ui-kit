import Slider from './slider.svelte';

export default {
    title: 'Components/Slider',
    component: Slider
}

const Template = (args) => ({
    Component: Slider,
    props: args,
    on: {
        click: args.onClick,
    },
});

export const Moto = Template.bind({});
Moto.args = {
    TabelList: [
        {images:{image1:"https://images-ext-1.discordapp.net/external/gQpcJiAtZwFeMqAFdUS6ZBT2E1Qo6cZxcjX-PrgrRlg/https/www.lamotoclassic.com/media/cache/classic_gallery/media/gallery/3355/YAMAHA_VMAX__28D1350.jpg",image2:"https://lezebre.lu/images/detailed/18/30952-yamaha.png", image3:"https://images-ext-2.discordapp.net/external/5h7ojMCV2S6cUh2FQy0S36gsmsU51R2Kt_f0lsNePP4/https/images.caradisiac.com/images/2/8/6/2/192862/S0-yamaha-vmax-le-mythe-en-calendrier-695067.jpg?width=1007&height=671"}, title:"Yamaha V-max", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {images:{image1:"https://images-ext-1.discordapp.net/external/LoNp7uOcp8VvKg2KDx4LQHlRaZX6gvFIYUYCBnBETH8/http/www.lerepairedesmotards.com/img/actu/2022/suzuki-gsxr-1000-avenir_hd.jpg?width=1007&height=671",image2:"https://images-ext-1.discordapp.net/external/97MvLHHaO0T6pqMV9y69-VzD0X8wuGQlDs8d93DoeWY/https/www.pngmart.com/files/10/Suzuki-Logo-PNG-Image.png", image3:"https://images-ext-2.discordapp.net/external/msjELb7FCpDaMndOp4RMV0MbpwRVui_zQPa82H4n7MQ/https/www.motoplanete.com/suzuki/zoom-700px/Suzuki-GSX-R-1000-R-phantom-edition-2021-700px.webp"}, title:"Suzuki GSXR1000", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {images:{image1:"https://images-ext-2.discordapp.net/external/MocZEhSaZoaW4TdlRG-FArJ_w_LPZNwsT1d5udfm0zI/https/images.triumphmotorcycles.co.uk/media-library/images/motorcycles/modern-classics/my23%2520colours/speed%2520twin%2520900/my23%2520speed%2520twin%2520900%2520-%2520studio%2520details/speed-twin-900-multi-small-470x588.jpg",image2:"https://images-ext-1.discordapp.net/external/nvGCj84cmxpkbATJdf8eBaUjB2vhceKzomll64Ym1WE/https/logos-world.net/wp-content/uploads/2020/11/Triumph-Emblem.png?width=1193&height=671", image3:"https://images-ext-1.discordapp.net/external/8tHdhqVKRKTA0zmEzIkDtBpDEOSJJr1Rr3SPmuPVMYY/https/images.triumphmotorcycles.co.uk/media-library/images/motorcycles/modern-classics/my23%2520colours/speed%2520twin%2520900/my23%2520speed%2520twin%2520900%2520-%2520studio%2520details/speed-twin-900-hero-1366x768.jpg?width=1193&height=671"}, title:"Triumph speed twin 900", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    ]

};