<script>
    export let image = 'https://via.placeholder.com/200x200?text=One Piece';
    export let alt = '';
    export let name = 'John Michael';
    export let username = '@johmichel';
    export let widthFigure = 90;
    // export let topCard = 10;

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

        <div class="card-area" class:is-hidden={ !isHover } style="top:{widthFigure}px">
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
        transition: .1s opacity ease-in;
        
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

