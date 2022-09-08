<script>
    import './hoverCard.scss'

    export let image = '';
    export let alt = '';
    export let name = '';
    export let username = '';
    export let widthFigure = 90;
    export let gap = 15;

    let topCard = widthFigure + gap;

    let isHover = false;

    const toggleHover = () => {
        isHover = !isHover;
    }

</script>

<div class="hoverCard__container">
    <div class="contain-hover">
        <figure class="profil-pic" on:mouseenter={ toggleHover } on:mouseleave={ toggleHover } style="width:{widthFigure}px">
            <img class:outline-yellow={ isHover } src={ image } alt={ alt }>
        </figure>

        <div class="card-area" class:is-hidden={ !isHover } style="top:{topCard}px">
            <div class="content-placeholder">
                <figure style="width:{widthFigure}px">
                    <img src={ image } alt={ alt }>
                </figure>
                <p class="name"><b>
                    { name }
                    </b>
                </p>
                <p class="username">
                    { username }
                </p>
                <p class="content">
                    SHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHISHI
                    <slot />
                </p>
            </div>
        </div>

    </div>
</div>

