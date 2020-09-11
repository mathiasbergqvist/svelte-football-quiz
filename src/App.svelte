<script>
  import { Route, Router, Link } from "svelte-routing";
  import Home from "./views/Home.svelte";
  import Game from "./views/Game.svelte";
  import Scoreboard from "./views/Scoreboard.svelte";

  export let url = "";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Router {url}>
  <main>
    <nav>
      <Link to="/">Home</Link>
      <Link to="game">New Game</Link>
      <Link to="scoreboard">Scoreboard</Link>
    </nav>
    <div>
      <Route path="game" component={Game} />
      <Route path="scoreboard" component={Scoreboard} />
      <Route path="/">
        <Home />
      </Route>
    </div>
  </main>
</Router>
