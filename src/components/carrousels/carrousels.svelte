<script>
    import './carrousel.scss';
    import CarrouselsCard from './carrouselsCard.svelte'
    import {createEventDispatcher} from 'svelte';

    /**
     * List slider infos of Bo
     */
    export let TabelList = [{image: "", title: "", description: ""}];


    const dispatch = createEventDispatcher();

    let idCarrouselActive = 0
    let idCarrouselLeft1 = ""
    let idCarrouselLeft2 = ""
    let idCarrouselRight1 = 1
    let idCarrouselRight2 = 2


    const CarrouselLeft = () => {

        if (idCarrouselActive > 0) {
            idCarrouselActive--
            idCarrouselLeft1 = idCarrouselActive - 1
            idCarrouselLeft2 = idCarrouselActive - 2
            idCarrouselRight1 = idCarrouselActive + 1
            idCarrouselRight2 = idCarrouselActive + 2
        }
    }
    const CarrouselRight = () => {
        if (idCarrouselActive < TabelList.length - 1) {
            idCarrouselActive++
            idCarrouselLeft1 = idCarrouselActive - 1
            idCarrouselLeft2 = idCarrouselActive - 2
            idCarrouselRight1 = idCarrouselActive + 1
            idCarrouselRight2 = idCarrouselActive + 2
        }
    }

    const ifAtcive = (i) => {
        switch (i) {
            case idCarrouselActive:
                return "active"
            case idCarrouselRight1:
                return "active-right1"
            case idCarrouselRight2:
                return "active-right2"
            case idCarrouselLeft1:
                return "active-left1"
            case idCarrouselLeft2:
                return "active-left2"
            default:
                return "active-over"
        }
    }

</script>


<div class="carrousel__container">
    <div class="carrousel__container-flex">
        {#each TabelList as {image, title, description}, i}
            {#if i === idCarrouselActive}
                <CarrouselsCard id={i} classActive="active" image={image} title={title} description={description}/>
            {:else if i === idCarrouselRight1}
                <CarrouselsCard id={i} classActive="active-right1" image={image} title={title}
                                description={description}/>
            {:else if i === idCarrouselRight2}
                <CarrouselsCard id={i} classActive="active-right2" image={image} title={title}
                                description={description}/>
            {:else if i === idCarrouselLeft1}
                <CarrouselsCard id={i} classActive="active-left1" image={image} title={title}
                                description={description}/>
            {:else if i === idCarrouselLeft2}
                <CarrouselsCard id={i} classActive="active-left2" image={image} title={title}
                                description={description}/>
            {:else}
                <CarrouselsCard id={i} classActive="active-over" image={image} title={title} description={description}/>
            {/if}
        {/each}
    </div>
    <div class="carrousel__direction">
        <img on:click={CarrouselLeft}
             class="carrousel__direction-arrow {idCarrouselActive > 0 ? '':'carrousel__direction-arrow-no' }"
             src="./src/assets/CarrouselLeft.svg">
        <img on:click={CarrouselRight}
             class="carrousel__direction-arrow {idCarrouselActive < TabelList.length - 1 ? '' : 'carrousel__direction-arrow-no'}"
             src="./src/assets/CarrouselRight.svg">
    </div>
</div>