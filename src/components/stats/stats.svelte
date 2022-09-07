<script>
    import './stats.scss';
    import {createEventDispatcher} from 'svelte';

    /**
     * Name of celulle
     */
    export let nameCels = "Total user";
    /**
     * New stats import of BO
     */
    export let statsNew = 100;
    /**
     * Old stats import of BO
     */
    export let statsPrevious = 1;
    /**
     * Type of stats (nofing / Kg / % ...)
     */
    export let typeStatsCels = "";

    const dispatch = createEventDispatcher();

    const claculProgression = (statsNew, statsPrevious) => {
        let pourcentage = 100 * (statsNew - statsPrevious) / statsPrevious
        return pourcentage.toFixed(2)
    }
    let pourcentageProgress = claculProgression(statsNew, statsPrevious)


    //On set les 3 valeurs à incrémenté
    let numNew = 0;
    let numOld = 0;
    let numGain = 0;

    function animateValue(start, New, Old, Gain, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            //on met a jour les valeurs
            numNew = Math.floor(progress * (New - start) + start);
            numOld = Math.floor(progress * (Old - start) + start);
            numGain = Math.floor(progress * (Gain - start) + start);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    //on lance l'incrémentation
    animateValue(0, statsNew, statsPrevious, pourcentageProgress, 1000);
</script>


<div class="stats__cels-container">
    <p class="name__cels">{nameCels}</p>
    <div class="stats__cels">
        <p class="statsNew__cels">{numNew + typeStatsCels}</p>
        <p class="statsPrevious__cels">for {numOld + typeStatsCels}</p>
        <div class='statsProgress__cels {pourcentageProgress >=0 ? "progressPositive": "progressNegative"}'>
            <img src='./src/assets/{pourcentageProgress >=0 ? "ArrowPosi": "ArrowNega"}.svg'>
            <div id="statsGain__cels">{numGain}%</div>
        </div>
    </div>
</div>