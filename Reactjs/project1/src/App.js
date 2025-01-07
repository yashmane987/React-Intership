import './App.css';
import './new.css';

function App() {
  return (
    <div className="hero">
    <nav>
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="skills">Skills</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="contact">Contact Us</a></li>
        </ul>
    </nav>

    <div class="info">
        <h1>I'm <span>Yash</span></h1>
        <p>This is my official portfolio website to showcase my all works related to web development and UI design
        </p>
        <a href="download">Download CV</a>
    </div>                 
</div>

  );
}

export default App;
