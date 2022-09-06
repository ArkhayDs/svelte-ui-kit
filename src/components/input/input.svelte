<script>
    import './input.scss';
    import { createEventDispatcher } from 'svelte';
    /**
     * id of input /!\The value must be unique/!\
     */
    export let idInput = '1';
    /**
     * Label of input (Password, Email, Username...)
     */
    export let labelInput = 'Username';
    /**
     * For of input (password, email, text...)
     */
    export let typeInput = 'text';

    const dispatch = createEventDispatcher();

</script>

<div class="form">
    <input type={typeInput} id={idInput} class="form__input" autocomplete="off" placeholder=" ">
    <label for={idInput}  class="form__label">{labelInput}</label>
</div>