<script>
    import './Pricing.scss';
    import {createEventDispatcher} from "svelte";

    /**
     * Label of cardTitle (Product Title...)
     */
    export let cardTitle = 'Item';
    /**
     * Label of imgSrc (Image path...)
     */
    export let imgSrc = '';
    /**
     * Label of imageStory (Additionnal product description...)
     */
    export let imageStory = '';
    /**
     * Label of attributs (Product Attributs...)
     */
    export let attributs = [];
    /**
     * Label of price (Product Price...)
     */
    export let price = 0;
    /**
     * Label of buttonDesc (Button Description...)
     */
    export let buttonDesc = 'Buy !';
    /**
     * Label of buttonDesc (Button Description...)
     */
    export let buttonInfo = 'About';


    const dispatch = createEventDispatcher();

</script>

<div class="productCard">
    <h3 class="cardTitle">{cardTitle}</h3>
    <div class="imgContainer">
        <img class="productImg" src={imgSrc}/>
        <p class="productStory">{imageStory}</p>
    </div>
    <div class="cardDescription">
        {#each attributs as attribut}
            <p>{attribut}</p>
        {/each}
    </div>
    <p class="cardPrice">À partir de {price}€</p>
    <div class="buttons">
        <button class="buttonProduct">{buttonDesc}</button>
        <button class="buttonInfo">{buttonInfo}</button>
    </div>
</div>