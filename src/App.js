import logo from './logo.svg';
import './App.css';
import {Profile} from './main.js'
import { Article } from './main.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        <li>Article</li>
        <li>About Us</li>
        <li>More</li>
      </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
      <section>
        <Article/>
      </section>

{/* menampilkan fungsi profile, import dari berkas bio.js */}
      <section>
      <Profile/>
      </section>

      <section>
        <h2>
          Contribute
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus, turpis at sodales fringilla, lectus orci euismod nulla, ac convallis turpis arcu sed arcu. Fusce lobortis libero id elit egestas, non volutpat ex blandit. Nunc maximus vulputate quam, vel feugiat odio fringilla ut. Integer magna ipsum, ornare eget maximus consectetur, sollicitudin sit amet magna. Nam fermentum luctus risus, placerat condimentum arcu tristique in. Fusce ac nulla a orci ullamcorper laoreet eu ac augue. Suspendisse vitae magna velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce egestas, nunc vel interdum sollicitudin, urna lorem dignissim libero, ut egestas ligula lacus eu est. Integer hendrerit nec eros ut pellentesque. Praesent vehicula, mauris sit amet dictum condimentum, sapien purus aliquet quam, ac lobortis lectus tellus non nisi. 
        </p>
      </section>
      </main>

      <footer>
        <ul>
          <li>Community</li>
          <li>Places</li>
          <li>Subscriptions</li>
          <li>
          Follow Us
            <li>Youtube</li>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;