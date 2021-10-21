'use strict';

function Homepage() {
  return <div>
      <h1> Hello, User, Welcome!</h1>
      <a href='/cards'>Look at some cards!</a> <br/>
      <img src="/static/img/balloonicorn.jpg"></img>
      <p>Bored here and ready to learn more about us... <br/> 
        <a href='/about'>About Page, wowza!</a>
      </p>

  </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
