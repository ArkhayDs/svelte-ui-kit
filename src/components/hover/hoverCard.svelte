<script>
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

<div class="container">
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


<style>

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }


    * {
        font-family: "Convergence", sans-serif;
        font-size: 15px;
    }

    .is-hidden {
        opacity: 0;
    }

    .container {
        width: 100%;
        height: 50vh;
        background-color: #F5F3FF;
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
        background-color: white;
        border-radius: 5px;
        box-shadow: 3px 3px 8px rgba(31, 27, 56, 0.33);
        transition: .1s opacity ease-in ;
        
    }

    p {
        padding-top: 5px;
    }

    .content {
        padding-top: 15px;
        overflow-wrap: break-word;
    }

    .username {
        color: grey;
    }

    img {
        width: 100%;
        border-radius: 50%;
    }

    .outline-yellow {
        outline: solid 2px #E7C576;
    }

</style>

