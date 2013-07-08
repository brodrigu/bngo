<section id="welcome">
    <header id="header">
        <h1>BingoWithCoWorkers</h1>
    </header>

    <section>
        <p>Join a nearby Game</p>
        <ul>
            {{#each controller}}
            <li>{{#linkTo joinGame activeClass="selected"}}{{title}}{{/linkTo}}: {{participants}}</li>
            {{/each}}
        <ul>
    </section>

    <footer id="footer">
        {{#linkTo newGame activeClass="selected"}}Start New Game{{/linkTo}}
    </footer>
</section>

<footer id="info">
    <p>Made by some cool dudes.</p>
</footer>