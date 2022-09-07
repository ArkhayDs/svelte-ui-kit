<script>
    import './carrousel.scss';
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
    let classActive


    const CarrouselLeft = () => {
        if (idCarrouselActive > 0) {
            idCarrouselActive--
            idCarrouselLeft1 = idCarrouselActive - 1
            idCarrouselLeft2 = idCarrouselActive - 2
            idCarrouselRight1 = idCarrouselActive + 1
            idCarrouselRight2 = idCarrouselActive + 2
            ifAtciveSwitch()
        }
    }
    const CarrouselRight = () => {
        if (idCarrouselActive < TabelList.length - 1) {
            idCarrouselActive++
            idCarrouselLeft1 = idCarrouselActive - 1
            idCarrouselLeft2 = idCarrouselActive - 2
            idCarrouselRight1 = idCarrouselActive + 1
            idCarrouselRight2 = idCarrouselActive + 2
            ifAtciveSwitch()
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
    const ifAtciveSwitch = () => {
        TabelList.forEach((card, index) => {
            let cardById = document.getElementById("carrousel__card-" + index);
            let cardClass = cardById.classList
            console.log(cardClass)

            switch (index) {
                case idCarrouselActive:
                    cardClass.remove(cardClass[1])
                    cardClass.add("active")
                    break
                case idCarrouselRight1:
                    cardClass.remove(cardClass[1])
                    cardClass.add("active-right1")
                    break
                case idCarrouselRight2:
                    cardClass.remove(cardClass[1])
                    cardClass.add("active-right2")
                    break
                case idCarrouselLeft1:
                    cardClass.remove(cardClass[1])
                    cardClass.add("active-left1")

                    break
                case idCarrouselLeft2:
                    cardClass.remove(cardClass[1])
                    cardClass.add("active-left2")
                    break
                default:
                    cardClass.remove(cardClass[1])
                    cardClass.add("active-over")
                    break
            }
        })

    }




</script>


<div class="carrousel__container">
    <div class="carrousel__container-flex">
        {#each TabelList as {image, title, description}, i}
            <div  id="carrousel__card-{i}" class="carrousel__card {ifAtcive(i)} ">
                <div class="carrousel__card-image">
                    <img src="{image}">
                </div>
                <div class="carrousel__card-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
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