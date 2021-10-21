'use strict';

function Homepage() {
  return <div>
      <h1> Hello, User, Welcome!</h1>
      <a href='/cards'>Look at some cards!</a> <br/>
      <img src="/static/img/balloonicorn.jpg"></img>

  </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
