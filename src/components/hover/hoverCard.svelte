<script>
    export let image = 'https://www.smogon.com/forums/media/data/avatars/o/554/554045.jpg?1622568312';
    export let alt = '';
    export let name = 'Joy boy';
    export let username = '@joyboy';
    export let widthFigure = 90;
    export let gap = 10;

    let topCard = widthFigure + gap;

    let isHover = false;

    const toggleHover = () => {
        isHover = !isHover;
    }


</script>

<div class="container">
    <div class="contain-hover">
        <figure class="profil-pic" on:mouseenter={ toggleHover } on:mouseleave={ toggleHover } style="width:{widthFigure}px">
            <img src={ image } alt={ alt }>
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum ratione animi voluptatibus id eum consectetur optio quidem fugit, modi, ad, necessitatibus maxime voluptates tenetur accusantium sint voluptatum deleniti quibusdam!
                    <slot />
                </p>
            </div>
        </div>

    </div>
</div>


<style>

    .is-hidden {
        opacity: 0;
    }

    .container {
        width: 100vw;
        height: 50vh;
        
    }

    .contain-hover {
        position: relative;
        display: flex;
        justify-content: center;
        margin: auto;
    }


    .card-area {
        position: absolute;
        width: 300px;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 3px 3px 8px rgba(31, 27, 56, 0.33);
        transition: .1s opacity ease-in ;
        
    }

    p {
        padding-top: 10px;
    }

    .username {
        padding-top: 5px;
        color: grey;
    }

    figure {
        overflow: hidden;
    }

    img {
        width: 100%;
        border-radius: 50%;
    }
</style>

