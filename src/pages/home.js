export function Article(){
    return(
      <div class="content mr-5 ml-5 mb-6 pb-3 mt-6 pt-3 is-warning is-gapless">
        <div class="columns features is-centered">
            <div class="column is-5 is-warning">
                <div class="content has-text-justified">
                    <h2> <strong>This is Content Placeholder</strong> </h2>
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
                </div>
            </div>
            <div class="column is-3 is-justified is-warning">
                <figure class="image is-4by3">
                    <img src="/images/sample.jpg" alt="Sample" />
                </figure>
            </div>
        </div>
      </div>
    )
  }
  
  export function Profile(){
    return(
        <div class="columns features mb-6 pb-3 is-centered">
            <div class="column is-3 is-centered is-warning">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-9by16">
                            <img src="/images/profile/husni_closeup.png" alt="Husni Naufal Zuhdi" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <h4>Husni Naufal Zuhdi</h4>
                            <p>Site Reliability Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-3 is-centered">
                <div class="card is-warning">
                    <div class="card-image">
                        <figure class="image is-9by16">
                            <img src="/images/profile/fauzi_closeup.png" alt="Fauzi Wildan Anggoro" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <h4>Fauzi Wildan Anggoro</h4>
                            <p>Site Reliability Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export function Body() {
    return (
      <div class="content mr-5 ml-5 mb-6 pb-3 is-success has-text-justified">
        <div class="columns features is-centered">
            <div class="column is-8 is-warning">
                <div class="content has-text-justified">
                    <h2> <strong>Body</strong> </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent dapibus, turpis at sodales fringilla, lectus orci euismod nulla, ac convallis turpis arcu sed arcu.
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  }