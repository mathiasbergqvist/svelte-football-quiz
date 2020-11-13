<style>
section {
    width: 800px;
    margin: 0 auto;
}
li {
    margin-bottom: 15px;
}
</style>

<script>
import { onMount } from 'svelte';
import { List } from 'smelte';
import { getAuthHeaders } from '../../auth';
import { goto } from '@sveltech/routify';
import { Button } from 'smelte';

let teams = [];

onMount(async () => {
    // Load temas from DB
    const res = await fetch(`${API_ENDPOINT}/teams`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    teams = await res.json();
});

const startTrial = (teamId) => {
    $goto(`/trial/:id`, { id: teamId });
};
</script>

<section>
    <h1>Team trial</h1>
    <List items="{teams}">
        <li slot="item" let:item="{team}">
            <Button on:click="{(e) => startTrial(team.id)}" block>{team.name}</Button>
        </li>
    </List>
</section>
