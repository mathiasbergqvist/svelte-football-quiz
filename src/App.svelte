<style>
:global(body) {
    background: #ede7f6;
    transition: background-color 0.3s;
}
main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}
</style>

<script>
import { Route, Router } from 'svelte-routing';
import Game from './views/Game/Game.svelte';
import Home from './views/Home.svelte';
import Scoreboard from './views/Scoreboard.svelte';
import TeamTrial from './views/TeamTrial/TeamTrial.svelte';
import Trial from './views/Trial/Trial.svelte';

export let url = '';
</script>

<Router url="{url}">
    <main>
        <div>
            <Route path="game" component="{Game}" />
            <Route path="scoreboard" component="{Scoreboard}" />
            <Route path="trial/:id" let:params>
                <TeamTrial id="{params.id}" />
            </Route>
            <Route path="trial" component="{Trial}" />
            <Route path="/">
                <Home />
            </Route>
        </div>
    </main>
</Router>
