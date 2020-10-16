<script>
import { onMount } from 'svelte';
import { navigate } from 'svelte-routing';
let teams = [];

onMount(async () => {
    // Load temas from DB
    const res = await fetch(`${API_ENDPOINT}/teams`);
    teams = await res.json();
});

const startTrial = (id) => {
    navigate(`/trial/${id}`, { replace: true });
};
</script>

<h1>Team trial</h1>
{#each teams as team}
    <div><button on:click="{(e) => startTrial(team.id)}"> {team.name} </button></div>
{:else}
    <h3>Loading teams...</h3>
{/each}
