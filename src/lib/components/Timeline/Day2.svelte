<script lang="ts">
    import day2Data from "$lib/data/day2.json";
</script>

<div class="container flex flex-col items-center justify-center gap-4 h-[250px] lg:flex-row">
    {#each day2Data.eventDay2 as event}
        <div class="info-container">
            <div class="title-container text-left">   
                <h2>
                    <span class="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                        {event.title}
                    </span>
                </h2>
            </div>
            <div class="para-container">
                <p class="para">
                    {event.description}
                </p>
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 250px;
    }

    @media (min-width: 1024px) {
        .container {
            flex-direction: row;
        }
    }

    .info-container {
        padding: 1rem;
        border: 1px solid #141313;
        border-radius: 8px;
        background-color: #000000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .para {
        max-width: 90%;
        text-align: left;
        margin: 0.5rem 0;
        color: #4a4a4a;
    }
</style>
