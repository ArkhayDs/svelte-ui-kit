<script>
    import './slider.scss';
    import {createEventDispatcher} from 'svelte';

    /**
     * List slider infos of Bo
     */

    
    export let TabelList = [{images: {image1: "", image2: "", image3: ""}, title: "", description: ""}]

    const dispatch = createEventDispatcher();
</script>
<div class="slider__container">
    <div class="slider__grid-container">
        <div class="slider__items text">
            {#each TabelList as {images, title, description}, i}
                <div class="slider-item item-text">
                    <p>Model {i + 1}</p>
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <a>More <img src="./src/assets/CarrouselRight.svg"> </a>
                </div>
            {/each}
        </div>
        <div class="slider__items image1">
            {#each TabelList as {images, title, description}, i}
                <div class="slider-item item-img" style={"background-image: url(" + images.image1 + ")"}></div>
            {/each}
        </div>
        <div class="slider__items image2">
            {#each TabelList as {images, title, description}, i}
                <div class="slider-item item-img" style={"background-image: url(" + images.image2 + "); background-size: contain;"}></div>

            {/each}
        </div>
        <div class="slider__items Image3">
            {#each TabelList as {images, title, description}, i}
                <div class="slider-item item-img" style={"background-image: url(" + images.image3 + ")"}></div>
            {/each}
        </div>
    </div>
</div>