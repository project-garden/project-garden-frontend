import {Article, Profile, Body} from './pages/home'

export function NavigationBar() {
  return (
    <nav class="navbar is-light" role="navigation" aria-label="main-navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img src="/logo.png" alt="Project Garden Logo"/>
        </a>

        <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="projectGardenNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="projectGardenNavbar" class="navbar-menu">
        <div class="navbar-start">
          <a href="/" class="navbar-item has-dropdown is-hoverable">
            <a href="/" class="navbar-link">
              Articles
            </a>
            <div class="navbar-dropdown">
              <hr class="navbar-divider" />
              <a href="/" class="navbar-item">
                <strong>📖 Knowledges</strong>
              </a>
              <hr class="navbar-divider" />
              <a href="/" class="navbar-item">
                📖 Books
              </a>
              <a href="/" class="navbar-item">
                📃 Papers
              </a>
              <a href="/" class="navbar-item">
                👩🏻‍🔬 Experts
              </a>
              <hr class="navbar-divider" />
              <a href="/" class="navbar-item">
                <strong>🌿 Activities</strong>
              </a>
              <hr class="navbar-divider" />
            </div>
          </a>
          <a href="/" class="navbar-item">
            About Us
          </a>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="/" class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a href="/" class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
      <footer class="section is-warning">
        <div class="container">
          <div class="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
            <div class="mr-auto mb-2">
              <a class="is-inline-block" href="/">
                <img class="image" src="/logo.png" alt="" width="96px" />
              </a>
            </div>
            <div>
              <ul class="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
                <li class="mr-4"><a class="button is-white" href="/">Community</a></li>
                <li class="mr-4"><a class="button is-white" href="/">Places</a></li>
                <li class="mr-4"><a class="button is-white" href="/">Subscription</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pt-8"></div>
        <div class="container">
          <div class="is-flex-tablet is-justify-content-between is-align-items-center">
            <div class="py-2 is-hidden-tablet"></div>
            <div class="ml-auto">
              <a class="mr-4 is-inline-block icon" href="/">
                <img src="/images/social/linkedin.png" alt="" /></a>
              <a class="mr-4 is-inline-block icon" href="/">
                <img src="../images/social/instagram.png" alt="" /></a>
              <a class="mr-4 is-inline-block icon" href="/">
                <img src="../images/social/youtube.png" alt="" /></a>
            </div>
          </div>
        </div>
      </footer>
  )
}

// Setup the home first
export function App() {
  return (
          <div class="App has-text-centered">
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