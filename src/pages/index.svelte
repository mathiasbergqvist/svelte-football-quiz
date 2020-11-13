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
const applicationName = 'Football Quiz';
import { Button } from 'smelte';
import { goto } from '@sveltech/routify';
</script>

<div>
    <h1>Welcome to {applicationName}!</h1>
    <p>⚽️</p>
    <Button on:click="{$goto('game')}">New Game</Button>
    <Button on:click="{$goto('trial')}">Team Trial</Button>
    <Button on:click="{$goto('scoreboard')}">Scoreboard</Button>
</div>
