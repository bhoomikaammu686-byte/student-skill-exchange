import { useState } from "react";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      skill: "Web Development",
      level: "Intermediate",
      teaches: "HTML, CSS, JavaScript, React",
      wants: "Python",
    },
    {
      id: 2,
      name: "Priya Kumar",
      skill: "Graphic Design",
      level: "Advanced",
      teaches: "Photoshop, Canva, UI Design",
      wants: "Web Development",
    },
    {
      id: 3,
      name: "Arjun Singh",
      skill: "Python Programming",
      level: "Intermediate",
      teaches: "Python, Django, Data Analysis",
      wants: "Graphic Design",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    skill: "",
    level: "Beginner",
    teaches: "",
    wants: "",
  });

  const addSkill = (e) => {
    e.preventDefault();

    if (!form.name || !form.skill || !form.teaches || !form.wants) {
      alert("Please fill all fields");
      return;
    }

    setSkills([
      ...skills,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      name: "",
      skill: "",
      level: "Beginner",
      teaches: "",
      wants: "",
    });

    setShowForm(false);
  };

  const filteredSkills = skills.filter(
    (item) =>
      item.skill.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.teaches.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          🎓 Skill<span>Exchange</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <button onClick={() => setShowForm(true)}>
            + Add Skill
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Learn. Share. <span>Grow Together.</span>
          </h1>

          <p>
            Connect with fellow students, exchange skills, and
            learn something new from your peers.
          </p>

          <button
            className="hero-btn"
            onClick={() => setShowForm(true)}
          >
            Start Skill Exchange
          </button>
        </div>

        <div className="hero-card">
          <div className="circle">🤝</div>
          <h2>Knowledge Sharing</h2>
          <p>
            Students teaching students through collaborative
            skill exchange.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="search-section">
        <h2>Find a Skill</h2>

        <input
          type="text"
          placeholder="Search by skill, student or technology..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <div className="section-title">
          <h2>Available Skills</h2>
          <p>Discover students who can help you learn.</p>
        </div>

        <div className="skill-grid">
          {filteredSkills.length === 0 ? (
            <div className="no-result">
              No skills found.
            </div>
          ) : (
            filteredSkills.map((student) => (
              <div className="skill-card" key={student.id}>

                <div className="profile">
                  <div className="avatar">
                    {student.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{student.name}</h3>
                    <span className="level">
                      {student.level}
                    </span>
                  </div>
                </div>

                <h2>{student.skill}</h2>

                <p>
                  <strong>Can Teach:</strong>
                  <br />
                  {student.teaches}
                </p>

                <p>
                  <strong>Wants to Learn:</strong>
                  <br />
                  {student.wants}
                </p>

                <button
                  className="connect-btn"
                  onClick={() =>
                    alert(
                      `Skill exchange request sent to ${student.name}!`
                    )
                  }
                >
                  Connect
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>How Skill Exchange Works</h2>

        <div className="feature-grid">

          <div className="feature">
            <div>🔍</div>
            <h3>Find Skills</h3>
            <p>
              Search for students who have the skills you want
              to learn.
            </p>
          </div>

          <div className="feature">
            <div>🤝</div>
            <h3>Connect</h3>
            <p>
              Connect with students and discuss skill exchange
              opportunities.
            </p>
          </div>

          <div className="feature">
            <div>📚</div>
            <h3>Learn & Teach</h3>
            <p>
              Exchange your knowledge and improve your skills
              together.
            </p>
          </div>

          <div className="feature">
            <div>⭐</div>
            <h3>Build Reputation</h3>
            <p>
              Build your profile by helping other students.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <h2>About Student Skill Exchange</h2>

        <p>
          Student Skill Exchange is a collaborative platform
          where students can share their knowledge and learn
          new skills from other students. Instead of traditional
          paid courses, students can exchange their knowledge
          based on mutual interests.
        </p>

        <div className="stats">
          <div>
            <h2>{skills.length}+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2>20+</h2>
            <p>Skills</p>
          </div>

          <div>
            <h2>100+</h2>
            <p>Exchanges</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <h3>🎓 SkillExchange</h3>
        <p>
          Learn from others. Share your knowledge. Grow together.
        </p>
        <p>© 2026 Student Skill Exchange Platform</p>
      </footer>

      {/* ADD SKILL MODAL */}
      {showForm && (
        <div className="modal">
          <div className="modal-box">

            <button
              className="close"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2>Add Your Skill</h2>

            <form onSubmit={addSkill}>

              <input
                type="text"
                placeholder="Student Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Skill Name"
                value={form.skill}
                onChange={(e) =>
                  setForm({
                    ...form,
                    skill: e.target.value,
                  })
                }
              />

              <select
                value={form.level}
                onChange={(e) =>
                  setForm({
                    ...form,
                    level: e.target.value,
                  })
                }
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <input
                type="text"
                placeholder="Skills you can teach"
                value={form.teaches}
                onChange={(e) =>
                  setForm({
                    ...form,
                    teaches: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Skill you want to learn"
                value={form.wants}
                onChange={(e) =>
                  setForm({
                    ...form,
                    wants: e.target.value,
                  })
                }
              />

              <button type="submit" className="submit-btn">
                Add Skill
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;