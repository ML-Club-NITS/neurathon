<script lang="ts">
    let teamRegistered = false;
</script>
<div>
    {#if teamRegistered}
        <div>
            Register
        </div>
    {:else}
        <div></div>
    {/if}
</div>