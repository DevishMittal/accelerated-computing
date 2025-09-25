import { useState } from 'react'
import './FacultyDevelopment.css'

const FacultyDevelopment = () => {
  const [activeSection, setActiveSection] = useState('upskilling')

  const nptelCompleted = [
    {
      name: "Dr. D. Malathi",
      courses: ["Introduction to Machine Learning"]
    },
    {
      name: "Dr. B. Amutha", 
      courses: ["Introduction to Machine Learning", "Introduction to Large Language Models"]
    },
    {
      name: "Dr. K. R. Jansi",
      courses: ["Applied Accelerated Artificial Intelligence", "GPU Architectures and Programming", "Practical High-Performance Computing"]
    },
    {
      name: "Dr. R. Vidhya",
      courses: ["GPU Architectures and Programming"]
    },
    {
      name: "Dr. S. Nagadevi",
      courses: ["Introduction to Parallel Programming with OpenMP and MPI", "Applied Accelerated Artificial Intelligence", "GPU Architectures and Programming", "Practical High-Performance Computing"]
    },
    {
      name: "Dr. S. Jagadeesan",
      courses: ["GPU Architectures and Programming"]
    },
    {
      name: "Dr. S. P. Kanmani",
      courses: ["Practical High-Performance Computing"]
    }
  ]

  const certifications = [
    {
      name: "Dr. B. Amutha",
      certs: ["Building LLM applications with Prompt Engineering"]
    },
    {
      name: "Dr. R. Kavitha",
      certs: ["Linux and Container Technologies", "Parallel Programming with CUDA", "Cloud Computing"]
    },
    {
      name: "Dr. M. Revathi",
      certs: ["Linux and Container Technologies", "Introduction to Transformer-Based Natural Language Processing-NVIDIA"]
    },
    {
      name: "Dr. A. Arulmurugan",
      certs: ["Linux and Container Technologies"]
    }
  ]

  const currentCourses = [
    {
      name: "Dr. R. Vidhya",
      courses: ["Applied Accelerated Artificial Intelligence"]
    },
    {
      name: "Dr. S. P. Kanmani",
      courses: ["Multi-core Computer Architecture"]
    },
    {
      name: "Dr. Ajantha Lakshmanan",
      courses: ["Multi-core Computer Architecture"]
    },
    {
      name: "Dr. S. Nagadevi",
      courses: ["Quantum Computing"]
    },
    {
      name: "Dr. K. R. Jansi",
      courses: ["Multi-core Computer Architecture", "Cloud Computing", "Quantum Computing"]
    }
  ]

  const eventsOrganized = [
    {
      title: "AI Intensified Scientific Accelerated Computing (AIISAC)",
      duration: "5-days FDP",
      date: "23rd – 29th September 2024",
      organizers: ["Dr. Deeban Chakravarthy (Convener)", "Dr. B. Amutha (Co-Convener)", "Dr. R. Jeya (Co-Convener)", "Dr. D. Malathi (Co-convener)"],
      description: "Focus on Interdisciplinary Applications"
    },
    {
      title: "High Performance Computing using AWS Services",
      duration: "6-days Skill Development Program", 
      date: "16th to 21st December, 2024",
      organizers: ["Department Faculty"],
      description: "Hands-on Workshop for Programmers"
    },
    {
      title: "GPU Poster Fest-1.0",
      duration: "One Day Event",
      date: "2024",
      organizers: ["Dr. R. Vidhya (Convener)", "Dr. S. Nagadevi (Convener)"],
      description: "Showcase of innovative GPU-based research projects by students. Expert Member: Dr. B. Thanasekhar, Anna University. 40+ student teams participated."
    }
  ]

  const publications = [
    {
      authors: "Kushagra Chauhan, R. Vidhya and S. Nagadevi",
      title: "Design of Hardware Accelerated Co-Processor for Neural Inference Computations",
      conference: "ICRDICCT April 2025 Conference",
      year: "2025"
    },
    {
      authors: "Narayanan, V., Kavitha, R., Srikanth, R.",
      title: "Performance Evaluation of Brahmagupta-Bhaskara Equation Based Algorithm Using OpenMP",
      conference: "Springer - Lecture Notes on Data Engineering and Communications Technologies",
      year: "2022"
    },
    {
      authors: "Nagadevi, S., Vidhya, R., Abirami, G.",
      title: "Multi-core-Aware VM Placement Algorithms Using Constraint Programming in Cloud Environment",
      conference: "Springer - Lecture Notes in Electrical Engineering",
      year: "2024"
    },
    {
      authors: "Batoul Aljaddouh, D Malathi",
      title: "Enhancing boundary accuracy in semantic segmentation of chest x-ray images using gaussian process regression",
      conference: "Biomedical Physics and Engineering Express",
      year: "2025"
    }
  ]

  const sections = {
    upskilling: {
      title: 'Faculty Upskilling',
      content: (
        <div className="upskilling-content">
          <div className="subsection">
            <h4>NPTEL Courses Completed</h4>
            <div className="faculty-grid">
              {nptelCompleted.map((faculty, index) => (
                <div key={index} className="faculty-card">
                  <h5>{faculty.name}</h5>
                  <ul>
                    {faculty.courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="subsection">
            <h4>Professional Certifications</h4>
            <div className="certifications-grid">
              {certifications.map((faculty, index) => (
                <div key={index} className="cert-card">
                  <h5>{faculty.name}</h5>
                  <ul>
                    {faculty.certs.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="subsection">
            <h4>Current Semester NPTEL Courses</h4>
            <div className="current-courses">
              {currentCourses.map((faculty, index) => (
                <div key={index} className="current-course-item">
                  <span className="faculty-name">{faculty.name}</span>
                  <span className="course-list">{faculty.courses.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    events: {
      title: 'Events & Workshops',
      content: (
        <div className="events-content">
          <h4>Events Organized</h4>
          <div className="events-list">
            {eventsOrganized.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-header">
                  <h5>{event.title}</h5>
                  <span className="event-duration">{event.duration}</span>
                </div>
                <div className="event-date">{event.date}</div>
                <div className="event-organizers">
                  <strong>Organizers:</strong> {event.organizers.join(", ")}
                </div>
                <div className="event-description">{event.description}</div>
              </div>
            ))}
          </div>

          <h4>Faculty Development Programs Attended</h4>
          <div className="fdp-list">
            <div className="fdp-item">
              <strong>Dr. D. Malathi</strong> - 7-Days FDP on &ldquo;Statistical Data Analysis using SPSS&rdquo; (10th - 16th March 2025)
            </div>
            <div className="fdp-item">
              <strong>Dr. S. Nagadevi</strong> - AICTE ATAL FDP on &ldquo;High Performance Computing for Data Intensive and Complex AI Applications&rdquo; (02/12/2024 to 07/12/2024)
            </div>
            <div className="fdp-item">
              <strong>Dr. D. Malathi</strong> - Capacity Building Workshop: &ldquo;Empower, Educate and Ensure&rdquo; (26th April 2025)
            </div>
          </div>
        </div>
      )
    },
    research: {
      title: 'Research & Publications',
      content: (
        <div className="research-content">
          <div className="subsection">
            <h4>Recent Publications</h4>
            <div className="publications-list">
              {publications.map((pub, index) => (
                <div key={index} className="publication-item">
                  <div className="pub-authors">{pub.authors}</div>
                  <div className="pub-title">{pub.title}</div>
                  <div className="pub-venue">{pub.conference} ({pub.year})</div>
                </div>
              ))}
            </div>
          </div>

          <div className="subsection">
            <h4>Ongoing Projects</h4>
            <div className="project-item">
              <h5>Lift Automation in University Building</h5>
              <p>Crowdsourcing of Signals – Floor Navigator with hour-wise, day-wise, and month-wise people utilization analysis through observable cameras with floor navigation system.</p>
            </div>
          </div>

          <div className="subsection">
            <h4>Proposals Submitted</h4>
            <div className="proposal-item">
              <h5>Generation of Geographical Based Green Database (GDB)</h5>
              <p>Using MongoDB under HARIT scheme - Unnat Bharat Abhiyan (Project Number: U-0473/TN/ARI/ESRM/1Lakh/4)</p>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='faculty-development' id='faculty-development'>
      <div className='development-container'>
        <div className='development-header'>
          <h2>Faculty Development & Research</h2>
          <p>Continuous learning, professional growth, and research excellence</p>
        </div>

        <div className='development-tabs'>
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              className={`dev-tab-button ${activeSection === key ? 'active' : ''}`}
              onClick={() => setActiveSection(key)}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        <div className='development-content'>
          <div className='section-header'>
            <h3>{sections[activeSection].title}</h3>
          </div>
          <div className='section-body'>
            {sections[activeSection].content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyDevelopment