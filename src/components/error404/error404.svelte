<script>
    export let image = '';
    export let alt = '';
    export let title = '';
    export let align = '';
    export let link = '';
    export let is404visible = true;
    export let isImageVisible = true;

    let imageBG = image;

    if (((align == 'right') || (align == 'left')) || !isImageVisible) {
        imageBG = ''
    }

</script>
<div class="{ align == 'right' ? 'align-right' : '' } { align == 'left' ? 'align-left' : '' } container" style="background-image: url('{imageBG}');">
    <div class="contain-content">
        {#if is404visible}
            <p class="error">404</p>    
        {/if}
        <h1>
            {title}
        </h1>
        <a href={link} class="contain-button">
            <button>
                Go back home
            </button>
        </a>
    </div>
    {#if (isImageVisible && (align === 'right')) || (isImageVisible && (align === 'left'))}
    <div class="contain-image">
        <figure>
            <img src={image} alt={alt}>
        </figure>
    </div>
    {/if}
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
    }

    .align-left {
        flex-direction: row-reverse;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-size: cover;
        overflow: hidden;
    }

    .contain-content {
        width: 50%;
        text-align: center;
    }

    .contain-image {
        width: 50%;
        height: 100%;
    }

    .error {
        font-size: 20px;
        color: #1F1B38;
    }

    h1 {
        font-size: 38px;
        color: #1F1B38;
        padding-bottom: 20px;
    }

    button {
        min-width: 50%;
        height: 50px;
        font-weight: 700;
        transition-duration: 300ms;
        border-radius: 7px;
        background: #E7C576;
        border: none;
        color: #1F1B38;
    }

    button:hover {
        background: #C56116;
        color: #ffffff;
        cursor: pointer;
    }

    figure {
        width: 100%;
        height: 100%;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        .contain-image {
            display: none;
        }

        .contain-content {
            width: 100%;
        }
    }
</style>

