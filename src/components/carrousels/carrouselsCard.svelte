<script>
    import './carrousel.scss';

    export let id = "";
    export let classActive = "";
    export let image = "";
    export let title = "";
    export let description = "";
</script>

<div  id="carrousel__card-{id}" class="carrousel__card {classActive} ">
    <div class="carrousel__card-image">
        <img src="{image}">
    </div>
    <div class="carrousel__card-text">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>