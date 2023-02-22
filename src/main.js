export function NavigationBar() {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main-navigation">
      <a href="/" className="navbar-brand">
        Project Garden
      </a>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Articles
          </a>
          <a href="/" className="navbar-item">
            About Us
          </a>
          <a href="/" className="navbar-item">
            More
          </a>
          <a href="/" className="navbar-item">
            <button class="button is-primary">
              Login
            </button>
          </a>
          <a href="/" className="navbar-item">
            <button class="button">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export function Article(){
  return(
    <div class="content">
        <h2> This is Content Placeholder </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent dapibus, turpis at sodales fringilla, lectus orci euismod nulla, ac convallis turpis arcu sed arcu.
        </p>
        <p>
          Fusce lobortis libero id elit egestas, non volutpat ex blandit.
          Nunc maximus vulputate quam, vel feugiat odio fringilla ut.
          Integer magna ipsum, ornare eget maximus consectetur, sollicitudin sit amet magna. Nam fermentum luctus risus, placerat condimentum arcu tristique in.
          Fusce ac nulla a orci ullamcorper laoreet eu ac augue. Suspendisse vitae magna velit.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce egestas, nunc vel interdum sollicitudin, urna lorem dignissim libero, ut egestas ligula lacus eu est.
          Integer hendrerit nec eros ut pellentesque. Praesent vehicula, mauris sit amet dictum condimentum, sapien purus aliquet quam, ac lobortis lectus tellus non nisi. 
        </p>
    </div>
  )
}

export function Profile(){
  return(
    <div>
        <h2>Project Contributors</h2>
        <div class="columns">
          <div class="column">
            <figure class="image">
              <img src='/images/fauzi_closeup.png' alt="Fauzi Wildan Anngoro" />
              <figcaption>Fauzi Wildan Anngoro</figcaption>
            </figure>
          </div>
          <div class="column">
            <figure class="image">
              <img src='/images/husni_closeup.png' alt="Husni Naufal Zuhdi" />
              <figcaption>Husni Naufal Zuhdi</figcaption>
            </figure>
          </div>
        </div>
    </div>
  );
}

export function Body() {
  return (
    <div class="content">
      <h2>
        Body
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
      </p>
    </div>
  )
}

export function Footer() {
  return (
    <footer class="footer">
      <div class="columns">
        <div class="column is-one-third">Project Garden</div>
        <div class="column">Community</div>
        <div class="column">Places</div>
        <div class="column">Subscriptions</div>
        <div class="column">
            Follow Us
            <div class="box">Instagram</div>
            <div class="box">Youtube</div>
            <div class="box">LinkedIn</div>
        </div>
    </div>
    </footer>
  )
}

export function App() {
  return (
          <div className="App">
            <section>
              <NavigationBar/>
            </section>

            <section>
              <Article/>
            </section>

            <section>
              <Profile/>
            </section>

            <section>
              <Body/>
            </section>

            <section>
              <Footer/>
            </section>
          </div>
  );
}