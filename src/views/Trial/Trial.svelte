<style>
section {
    width: 1200px;
    margin: 0 auto;
}
</style>

<script>
import { onMount } from 'svelte';
import { navigate } from 'svelte-routing';
import { List } from 'smelte';
import { getAuthHeaders } from '../../auth';

let teams = [];

onMount(async () => {
    // Load temas from DB
    const res = await fetch(`${API_ENDPOINT}/teams`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    teams = await res.json();
});

const startTrial = (id) => {
    navigate(`/trial/${id}`, { replace: true });
};
</script>

<section>
    <h1>Team trial</h1>
    <List items="{teams}">
        <li slot="item" let:item="{team}">
            <div
                class="cursor-pointer p-4 border-alert-50 border my-2 border-solid"
                on:click="{(e) => startTrial(team.id)}"
            >
                {team.name}
            </div>
        </li>
    </List>
</section>
