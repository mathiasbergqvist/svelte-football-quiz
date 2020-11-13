<style>
h2 {
    font-size: 2rem;
    font-weight: 400;
}
form {
    display: flex;
    flex-direction: column;
    margin: auto;
}
.players-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
}

.form-input {
    width: 30%;
    margin: 15px;
}
.manager-arena-input {
    width: 100%;
}
.manager-arena {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 350px;
}
.button-wrapper {
    width: 350px;
    margin: 0 auto;
}
</style>

<script>
import { gameOngoing, round, score } from '../../store';
import { correctTeamScore, isCorrectSpelling } from './helpers';
import { TextField, Button } from 'smelte';
import { goto } from '@sveltech/routify';

export let team;
export let noOfTeams;
export let isTrial = false;

let answerManager = '';
let answerArena = '';
let answerPlayers = [];
let correctionMode = false;

const handleSubmit = (e) => {
    e.preventDefault();
    if (correctionMode) {
        if (isTrial) {
            $goto('/trial');
        } else {
            startNextRound();
        }
    } else {
        correctScore();
    }
};

const correctScore = () => {
    const teamScore = correctTeamScore(answerManager, answerArena, answerPlayers, team);

    if (!isTrial) {
        // Update score and round
        score.update((value) => value + teamScore);
    }

    //Toggle correction mode
    correctionMode = true;
};

const startNextRound = () => {
    round.update((value) => value + 1);

    //Re-set all states
    answerManager = '';
    answerArena = '';
    answerPlayers = [];
    correctionMode = false;

    // Game over?
    if ($round === noOfTeams) {
        gameOngoing.update((value) => false);
    }
};

const getInputStyling = (shouldStyle, value, player) => {
    if (!shouldStyle) {
        return '';
    }

    if (value !== null && player !== null && isCorrectSpelling(value, player)) {
        return 'border: 4px solid #64dd17; background: #76ff03';
    }

    return 'border: 4px solid #bf360c; background: #d84315;';
};
</script>

{#if team !== undefined}
    <h2>{team.name}</h2>
    <form on:submit="{handleSubmit}" autocomplete="off">
        <div class="manager-arena">
            <div class="manager-arena-input">
                <TextField
                    label="Manager"
                    autocomplete="off"
                    bind:value="{answerManager}"
                    disabled="{correctionMode}"
                />
                {#if correctionMode}
                    <div style="{getInputStyling(correctionMode, answerManager, team.manager)}">
                        {team.manager}
                    </div>
                {/if}
            </div>
            <div class="manager-arena-input">
                <TextField
                    label="Arena"
                    autocomplete="off"
                    bind:value="{answerArena}"
                    disabled="{correctionMode}"
                />
                {#if correctionMode}
                    <div style="{getInputStyling(correctionMode, answerManager, team.manager)}">
                        {team.arena}
                    </div>
                {/if}
            </div>
        </div>
        <div class="players-container">
            {#each team.players as player, i}
                <div class="form-input">
                    <label for="{`player-${i}`}">{player.number}
                        <span>{player.county}</span>
                        {player.position}</label>
                    <TextField
                        class="form-input"
                        label="Player"
                        autocomplete="off"
                        bind:value="{answerPlayers[i]}"
                        disabled="{correctionMode}"
                    />
                    {#if correctionMode}
                        <div
                            style="{getInputStyling(correctionMode, answerPlayers[i], player.name)}"
                        >
                            {player.name}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
        {#if correctionMode && !isTrial}
            <div class="button-wrapper">
                <Button type="Submit">Next round</Button>
            </div>
        {:else if correctionMode && isTrial}
            <div class="button-wrapper">
                <Button type="Submit">End trial</Button>
            </div>
        {:else}
            <div class="button-wrapper">
                <Button type="Submit">Submit answers</Button>
            </div>
        {/if}
    </form>
{/if}
