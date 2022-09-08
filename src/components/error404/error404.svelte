<script>
    import "./error404.scss"

    export let image = '';
    export let alt = '';
    export let title = '';
    /**
     * Right or Left
     */
    export let align = '';
    export let link = '';
    export let is404visible = true;
    export let isImageVisible = true;

    let imageBG = image;

    if (((align == 'right') || (align == 'left')) || !isImageVisible) {
        imageBG = ''
    }

</script>

<div class="{ align == 'right' ? 'align-right' : '' } { align == 'left' ? 'align-left' : '' }  error404__contain" style="background-image: url('{imageBG}');">
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

