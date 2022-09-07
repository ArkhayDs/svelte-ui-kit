<script>

    import './modale.stories.js';
    import './modale.scss';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    export let title         = 'Nonumes solet molestie nec duo urbanitas ';
    export let content       = 'Nonumes solet molestie nec duo urbanitas solet molestie nec duo urbanitas solet molestie nec export let title   ';
    export let contentModale = 'Nonumes solet molestie nec duo urbanitas solet molestie nec duo urbanitas solet molestie nec duo urbanitas solet molestie nec duo urbanitas ';
    export let titleModale   = 'Nonumes solet molestie nec duo urbanitas ';
    export let idInput1      = 1;
    export let typeInput1    = 'email';
    export let idInput2      = 2;
    export let typeInput2    = 'texte';
    let displayModalToogle   = false;
    const displayModal       = () => {
        displayModalToogle = true;

    };
    const displayNoneModal       = () => {
        displayModalToogle = false;

    };

    const handleOnSubmitForm = () => {


    };
</script>


    <div class="cta {displayModalToogle ? '' : 'displayBlock'}">
        <div class="cta_first_block ">
            <h1 class="cta_first_block_title">{title}</h1>
        </div>
        <div class="cta_second_block ">
            <p class="cta_second_block_content">{content}</p>
            <button class="cta_second_block_button" on:click={displayModal}> Send</button>
        </div>
    </div>



    <div class="modale {displayModalToogle ? 'displayBlock' : ''}">
        <button class="close" on:click={displayNoneModal}>X</button>
        <div class="modale_first_block">
            <h1 class="modale_first_block_title">{titleModale}</h1>
            <h4 class="modale_first_block_sous_title">{contentModale}</h4>
        </div>
        <form class="modale_seconde_block " on:submit={handleOnSubmitForm}>
            <label for="{idInput1}">Email</label>
            <input
                    id={idInput1}
                    class="form_input_email"
                    type={typeInput1}
            />
            <label for="{idInput2}">Commentaire</label>
            <input
                    id={idInput2}
                    class="form_input_commentaires"
                    type={typeInput2}
            />
            <input class="form_input_submit" type="submit" value="save"/>


        </form>

    </div>

