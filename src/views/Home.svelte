<style>
h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
}
p {
    font-size: 100px;
    margin-bottom: 15px;
}
</style>

<script>
import { navigate } from 'svelte-routing';
const applicationName = 'Football Quiz';
import { Button } from 'smelte';

const toGame = (route) => {
    navigate('/game', { replace: true });
};

const toScoreboard = (route) => {
    navigate('/scoreboard', { replace: true });
};

const toTrial = (route) => {
    navigate('/trial', { replace: true });
};
</script>

<div>
    <h1>Welcome to {applicationName}!</h1>
    <p>⚽️</p>
    <Button on:click="{toGame}">New Game</Button>
    <Button on:click="{toTrial}">Team Trial</Button>
    <Button on:click="{toScoreboard}">Scoreboard</Button>
</div>
