<script>
    import './tabs.scss';

    export let containerFormMessage               =
                   'Vulputate vis condimentum netus comprehensam. Pretium massa meliore vivamus suscipit mus.lorem';
    export let containerFormMessageChangePassword = 'Vulputate vis condimentum netus comprehensam.';
    export let idInput1                           = 1;
    export let labelInput1                        = 'Name';
    export let typeInput1                         = 'text';
    export let idInput2                           = 2;
    export let labelInput2                        = 'Username';
    export let typeInput2                         = 'text';
    export let idTab1                             = 3;
    export let tabName1                           = 'Account';
    export let idTab2                             = 4;
    export let tabName2                           = 'Password';

    export let idInput4 = 4;
    export let idInput5 = 5;


    export let labelInput4 = 'current password';
    export let labelInput5 = 'change current password';

    export let typeInput4 = 'password';
    export let typeInput5 = 'password';


    let activeClass = true;


    const handleOnSubmitChangeProfile  = () => {
        console.log( 'changement profile ' );
        // call Axios

        alert( 'votre changement à été sauvegardé' );
    };
    const handleOnSubmitChangePassword = () => {
        console.log( 'votre changement à été sauvegardé ' );
        // call axios
    };


</script>

<div class="container">
    <div class="container_tab">
        <button id={idTab1} class="btnFirst {activeClass ? 'colorButton ' : ''}"
                on:click={() => {activeClass = true}}>{tabName1} </button>
        <button id={idTab2} class="btnFirst {activeClass ? '' : 'colorButton'}"
                on:click={() => {activeClass = false}}>{tabName2}</button>
    </div>

    {#if activeClass === true}
        <div class="container_form   ">
            <p class="container_form_message">{containerFormMessage}</p>
            <div class="form" on:submit={handleOnSubmitChangeProfile}>
                <label for="{idInput1}">Name</label>
                <input
                        id={idInput1}
                        class="form_input_name"
                        type={typeInput1}
                />
                <label for="{idInput2}">Username</label>
                <input
                        id={idInput2}
                        class="form_input_username"
                        type={typeInput2}
                />
                <input class="form_submit" type="submit" value="save"/>
            </div>
        </div>
    {/if}
    {#if activeClass === false}
        <div class="container_form ">
            <p class="container_form_message">{containerFormMessageChangePassword}</p>
            <div class="form" on:submit={handleOnSubmitChangePassword}>
                <label for="{idInput4}">Current Password</label>
                <input
                        id={idInput4}
                        class="form_input_current_password"
                        type={typeInput4}
                        minlength="8" maxlength="12" required
                />
                <label for="{idInput4}">New Password</label>
                <input
                        id={idInput5}
                        class="form_input_new_password"
                        type={typeInput5}
                        minlength="8" maxlength="12" required
                />

                <input class="form_submit" type="submit" value="save"/>
            </div>
        </div>
    {/if}

</div>
