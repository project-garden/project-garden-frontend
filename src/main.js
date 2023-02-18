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
            Login
          </a>
          <a href="/" className="navbar-item">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  )
}

export function Profile(){
  return(
    <div>
      <section>
        <h2>Project Contributors</h2>
          <img src='/images/fauzi_closeup.png' alt="Fauzi Wildan Anngoro" />
        </section>
        <section>
          <img src='/images/husni_closeup.png' alt="Husni Naufal Zuhdi" />
      </section>
    </div>
  );
}

export function Article(){
  return(
    <div>
      <section>
        <h2>
          This is Content Placeholder
        </h2>
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
      </section>
    </div>
  )
}

export function Body() {
  return (
    <div>
      <h2>
        Body
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent dapibus, turpis at sodales fringilla, lectus orci euismod nulla, ac convallis turpis arcu sed arcu.
      </p>
    </div>
  )
}

export function Footer() {
  return (
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
  )
}

export function App() {
  return (
          <div className="App">
            <section>
              {/* Render Naviagtion Bar */}
              <NavigationBar/>
            </section>

            <main>
              {/* Render Article */}
              <section>
                <Article/>
              </section>

              {/* Render Profile*/}
              <section>
                <Profile/>
              </section>

              <section>
                <Body/>
              </section>
            </main>

            <section>
              <Footer/>
            </section>
          </div>
  );
}