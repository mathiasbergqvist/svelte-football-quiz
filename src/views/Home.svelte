<script>
  import { navigate } from "svelte-routing";
  const applicationName = "Football Quiz";


  const toGame = (route) => {
    navigate('/game', { replace: true });
  }

  const toScoreboard = (route) => {
    navigate('/scoreboard', { replace: true });
  }
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<div>
  <h1>Welcome to {applicationName}!</h1>
  <button on:click={toGame}>New Game</button>
  <button on:click={toScoreboard}>Scoreboard</button>
</div>
