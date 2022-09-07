<script>
    export let image = 'https://via.placeholder.com/200x200?text=One Piece';
    export let alt = '';
    export let title = 'Page introuvable';
    export let align = '';
    export let link = '';
    export let is404visible = true;
    export let isImageVisible = true;
    
</script>

<div class="{ align == 'right' ? 'align-right' : '' } { align == 'left' ? 'align-left' : '' } container">

    {#if isImageVisible && align == 'right' || 'left'}
    <div class="contain-content">
        {#if is404visible}
        <p class="error">Error 404</p>    
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
    <div class="contain-image">
        <figure>
            <img src={image} alt={alt}>
        </figure>
    </div>
    {/if}

    
    
</div>


<style>

    .align-right, .align-left {
        display: flex;
    }

    .align-left {
        flex-direction: row-reverse;
    }

    .container {
        width: 100vw;
        height: 100vh;
        
    }

    img {
        width: 100%;
    }
</style>

