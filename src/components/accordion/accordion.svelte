<script>
    import './accordion.scss'
    import {createEventDispatcher} from 'svelte';

    /**
     *  title of an paragraphe
     */
    export let faqList = [{title: "", content: ""}];


    let contentDisplayId = null;
    const clickTitle = (i) => {
        if (contentDisplayId === i) {
            contentDisplayId = null;
            return;
        }
        contentDisplayId = i;

        const dispatch = createEventDispatcher();
    };
</script>

<div class="container">
    <div class="container_faq">
        {#each faqList as {title, content}, i}
            <div class="container_faq_title" on:click={() => {clickTitle(i)}}>
                <h1>{title}</h1>
            </div>
            <div class="container_faq_content {contentDisplayId === i ? 'schow' : ''}">
                <p>{content}</p>
            </div>
        {/each}
    </div>
</div>
