'use strict';

function About() {
    return <div>
        <h1>Welcome to the About Page!</h1>
        <p>We're really glad you made it here today.</p>
        <p>Bored here and ready to go back to the homepage? <br/>
            <a href='/'>Take ME AWAY!!</a>
        </p>
    </div>
}

ReactDOM.render(<About />, document.querySelector('#about'));
