import './App.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className='page'>
      <section className='section-hero'>
        <div className='hero'>
          <div className='hero-text-box'>
            <h1>
              Welcome, 👋🏼
              <br />
              Myspace for <em> sharing </em> things I've been building
            </h1>
            <p className='hero-description'>
              Web developer located in the Bay Area, who is passionate about
              transforming ideas into reality through coding.
            </p>

            <div className='hero-description-other'>
              When I'm not working, I either walking my dog, eating mexican food
              with my gf, or experimenting with design systems.
            </div>

            <div className='skill-list'>
              <div className='skill' style={{ backgroundColor: 'red' }}>
                {/* <span>skill</span> */}
                <span>React</span>
              </div>
              <div className='skill' style={{ backgroundColor: 'white' }}>
                <span>skill</span>
                <span>React</span>
              </div>
              <div className='skill' style={{ backgroundColor: 'white' }}>
                <span>skill</span>
                <span>React</span>
              </div>
              <div className='skill' style={{ backgroundColor: 'white' }}>
                <span>skill</span>
                <span>React</span>
              </div>
              <div className='skill' style={{ backgroundColor: 'white' }}>
                <span>skill</span>
                <span>React</span>
              </div>
            </div>
            <a href='#cta' className='btn btn--full margin-right-sm'>
              Start eating well
            </a>

            <a href='#how' className='btn btn--outline'>
              Learn more &darr;
            </a>
          </div>
          <div className='hero-img-box'>
            <div className='image-gallery'>
              <img
                src='https://images.unsplash.com/photo-1661335996027-0a65af891c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661189626525-3d7ec5d3087c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661335996027-0a65af891c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661189626525-3d7ec5d3087c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661335996027-0a65af891c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661189626525-3d7ec5d3087c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661335996027-0a65af891c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661189626525-3d7ec5d3087c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
              <img
                src='https://images.unsplash.com/photo-1661335996027-0a65af891c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI5OTQwNDU&ixlib=rb-1.2.1&q=80&w=400'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>

      <section className='section-featured'>
        <div className='container'>
          <h2 className='heading-featured-in'>As featured in</h2>
          <div className='logos'>
            <img src='img/logos/techcrunch.png' alt='Techcrunch logo' />
            <img
              src='img/logos/business-insider.png'
              alt='Business Insider logo'
            />
            <img
              src='img/logos/the-new-york-times.png'
              alt='The New York Times logo'
            />
            <img src='img/logos/forbes.png' alt='Forbes logo' />
            <img src='img/logos/usa-today.png' alt='USA Today logo' />
          </div>
        </div>
      </section>

      <div className='container'>
        <h1>Title One</h1>
        <h2>Title Two</h2>
        <h3>Title Three</h3>
        <h4>Title Four</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab autem
          sequi sit at nisi eum velit accusantium quaerat perferendis itaque
          deleniti, distinctio tempora, dolorum animi, iste explicabo
          exercitationem.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <span>Lorem ipsum dolor sit.</span>
      </div>
    </main>
  );
}

export default App;
