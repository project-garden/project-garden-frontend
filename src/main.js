import logo1 from './1.png'
import logo2 from './2.png'

export function Profile(){
  return(
    <div>
    <section>
    <h1>Our Lead Project</h1>
    <img
      src={logo1}
      alt="kang apicii"
    />
    </section>
    <section>
    <img
      src={logo2}
      alt="kang apicii"
    />
    </section>
    </div>
  );
}

export function Article(){
  return(
    <div>
      <section>
        <h2>
          this is Content
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus, turpis at sodales fringilla, lectus orci euismod nulla, ac convallis turpis arcu sed arcu. Fusce lobortis libero id elit egestas, non volutpat ex blandit. Nunc maximus vulputate quam, vel feugiat odio fringilla ut. Integer magna ipsum, ornare eget maximus consectetur, sollicitudin sit amet magna. Nam fermentum luctus risus, placerat condimentum arcu tristique in. Fusce ac nulla a orci ullamcorper laoreet eu ac augue. Suspendisse vitae magna velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce egestas, nunc vel interdum sollicitudin, urna lorem dignissim libero, ut egestas ligula lacus eu est. Integer hendrerit nec eros ut pellentesque. Praesent vehicula, mauris sit amet dictum condimentum, sapien purus aliquet quam, ac lobortis lectus tellus non nisi. 
        </p>
      </section>
    </div>
  )
}
