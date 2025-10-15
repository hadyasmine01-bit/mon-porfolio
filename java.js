<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Developer Portfolio</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet">

  <!-- CSS -->
  <link rel="stylesheet" href="style.css" />

  <!-- JS -->
  <script defer src="script.js"></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <h2 class="logo">MyPortfolio</h2>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Home -->
  <section id="home" class="home">
    <div class="intro">
      <h1>Hi, I'm <span class="highlight">Your Name</span></h1>
      <p>Front-End Developer | JavaScript | HTML | CSS | PHP | Python | C++</p>
      <a href="#projects" class="btn">View My Work</a>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="about">
    <h2>About Me</h2>
    <img src="images/me-wall.jpg" alt="My photo" class="profile-pic">
    <p>
      Hi! I'm [Your Name], a passionate web developer and designer. I love creating
      beautiful, responsive websites and web apps that are both functional and
      user-friendly. I enjoy solving problems, learning new technologies, and
      turning ideas into reality through code. Besides coding, I also enjoy
      designing graphics and exploring my creative side through drawing and
      artwork. I'm always excited to collaborate on projects and bring new ideas
      to life!
    </p>
  </section>

  <!-- Skills -->
  <section id="skills" class="skills">
    <h2>My Skills</h2>
    <div class="skill-tags">
      <span>HTML</span> <span>CSS</span> <span>JavaScript</span> 
      <span>PHP</span> <span>C</span> <span>C++</span>
      <span>Python</span> <span>AJAX</span> <span>Bootstrap</span> 
      <span>XML</span>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="project-list">
      <div class="project">
        <h3>🛍️ E-Commerce Website</h3>
        <p>A mini online shop using HTML, CSS, Bootstrap, JS, and PHP with login, product pages, and cart.</p>
        <a href="#" class="btn">View Code</a>
      </div>

      <div class="project">
        <h3>💬 Live Chat App</h3>
        <p>Real-time chat using AJAX + PHP without reloading the page.</p>
        <a href="#" class="btn">View Code</a>
      </div>

      <div class="project">
        <h3>📊 Student Grade Manager</h3>
        <p>A C++ console program to calculate and store student grades using file handling.</p>
        <a href="#" class="btn">View Code</a>
      </div>

      <div class="project">
        <h3>🐍 Python Data Analyzer</h3>
        <p>Python script that analyzes datasets and displays results using graphs.</p>
        <a href="#" class="btn">View Code</a>
      </div>

      <div class="project">
        <h3>📱 Responsive Portfolio</h3>
        <p>This portfolio website using HTML, CSS, JS, and Bootstrap with girly pastel theme.</p>
        <a href="#" class="btn">View Code</a>
      </div>
    </div>
  </section>

  <!-- Gallery -->
  <section id="gallery" class="gallery">
    <h2>My Work & Achievements</h2>
    <p class="gallery-intro">
      Voilà un petit exemple de ma créativité ✨ – ci-dessous, quelques-uns de mes dessins et l’un de mes designs.
    </p>

    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="images/certificate-hackathon.jpg" alt="Certificate of Participation - Hackathon">
        <p>Certificate of Participation - Hackathon</p>
      </div>

      <div class="gallery-item">
        <img src="images/design-poster.jpg" alt="Advertising Design">
        <p>Advertising Design (Poster)</p>
      </div>

      <div class="gallery-item">
        <img src="images/wall-drawing.jpg" alt="Wall Drawing">
        <p>My Wall Drawing Artwork</p>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="contact">
    <h2>Contact</h2>
    <p>Feel free to reach out for collaborations or just a chat.</p>
    <p>📧 Email: <a href="mailto:youremail@gmail.com">youremail@gmail.com</a></p>
    <div class="socials">
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
    </div>
  </section>

  <footer>
    <p>© 2025 Your Name. All Rights Reserved.</p>
  </footer>

</body>
</html>