<script>
    import Marqee2 from "./Marqee2.svelte";
</script>

<div class="sponser-container">
    <div class="sponser_intro">
        Sponsers
    </div>
    <div class="sponser_cards">
        <Marqee2/>
    </div>
    
</div>

<style>
    .sponser-container {
        display: flex;
        flex-direction: column;
        /* row-gap: 30px; */
    }

    .sponser_intro {
        font-family: 'league-spartan', sans-serif;
        font-weight: bold;
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
    
</style>