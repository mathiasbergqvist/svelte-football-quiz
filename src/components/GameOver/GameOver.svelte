<style>
span {
    font-weight: bold;
}
</style>

<script>
import { score, round } from '../../store';
import { getAuthHeaders } from '../../auth';
import { goto } from '@sveltech/routify';

let playerName = '';

const clearGameBoard = () => {
    // Update score and round
    score.update((value) => 0);
    round.update((value) => 0);
};

const submitScore = () => {
    const scoreBoardEntry = {
        name: playerName,
        score: $score,
    };

    // Post results to DB
    fetch(`${API_ENDPOINT}/scores`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        headers: getAuthHeaders(),
        body: JSON.stringify(scoreBoardEntry),
    })
        .then((res) => {
            clearGameBoard();
            $goto('scoreboard');
        })
        .catch((e) => {
            clearGameBoard();
            console.error('Error', e);
        });
};

const navigateHome = () => {
    clearGameBoard();
    $goto('index');
};
</script>

<h1>Game Over</h1>
<p>Final score: <span>{$score}</span></p>
<label for="player-name">Enter your name</label>
<input type="text" name="player-name" bind:value="{playerName}" />
<button on:click="{submitScore}" disabled="{playerName.length < 3}">Submit score</button>
<button on:click="{navigateHome}">Back to home screen</button>
