<script>
import { onMount } from 'svelte';
import Team from '../../components/Team/Team.svelte';
export let id;

let team = null;

onMount(async () => {
    // Load temas from DB
    const res = await fetch(`${API_ENDPOINT}/teams/${id}`);
    team = await res.json();
});
</script>

{#if team !== null}
    <Team team="{team}" noOfTeams="{1}" isTrial />
{:else}
    <h3>Loading team...</h3>
{/if}
