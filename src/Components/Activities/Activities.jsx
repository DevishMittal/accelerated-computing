import { useState } from 'react'
import './Activities.css'

// Import Guest Lecture images
import guestLecture1 from '../../assets/guest lecture/Screenshot 2025-09-25 221424.png'
import guestLecture2 from '../../assets/guest lecture/Screenshot 2025-09-25 221428.png'
import guestLecture3 from '../../assets/guest lecture/Screenshot 2025-09-25 221436.png'

// Import Industry Elective images
import industryElective1 from '../../assets/industyElective/Screenshot 2025-09-25 221140.png'
import industryElective2 from '../../assets/industyElective/Screenshot 2025-09-25 221144.png'

// Import Poster Fest images
import posterFest1 from '../../assets/posterFest/Screenshot 2025-09-25 221232.png'
import posterFest2 from '../../assets/posterFest/Screenshot 2025-09-25 221248.png'
import posterFest3 from '../../assets/posterFest/Screenshot 2025-09-25 221304.png'

// Import Technical Talk images
import technicalTalk1 from '../../assets/techinalTalk/Screenshot 2025-09-25 221410.png'
import technicalTalk2 from '../../assets/techinalTalk/Screenshot 2025-09-25 221418.png'

const Activities = () => {
  const [activeTab, setActiveTab] = useState('posterFest')

  const posterProjects = [
    "Performance analysis of Matrix Multiplication Using GPU",
    "Reinforcement Learning in GPU Accelerated Industrial control Hardware",
    "Red Eye Removal System",
    "Dynamic MPI-Based Chunked LCS Computation for Massive DNA Sequence Alignment",
    "Star Classification Using CNN with the GPU Accelerators",
    "Edge Detection using Sobel Operator",
    "Statistical analysis on GPU",
    "Performance Evaluation on GPU Kernels Using Analytical Model and Machine Learning Techniques",
    "GreenSortML: ML Based energy Aware Sorting Framework for GPUs",
    "RAG-Based Multimodal Q&A System with Context-Aware Responses",
    "Digit Classification CPU vs GPU Benchmarking Using CNN, MLP and LeNet",
    "Benchmarking GPU accelerated 2D FDTD Simulation for Electromagnetic Propagation: A Comparative Study",
    "OpenCV and CUDA for Image Processing",
    "Quantifying GPU Compute performance: A systematic Comparison of WSL2 and Native Windows Environments"
  ]

  const technicalTalkActivities = [
    "Dr. B. Amutha received Certificate of Appreciation for acting as Resource Person in the online webinar on AI with Python organized by School of AIML in Sapthagiri NPS University on 5th May 2025.",
    "Dr. B. Amutha acted as Resource Person for One Week Faculty Development Programme on \"Information Technology and Law Teaching\" from 16th to 22nd June 2025 Organised by Chennai Dr. Ambedkar Government Law College, Pudupakkam.",
    "Dr. B. Amutha acted as Resource Person in AICTE-ATAL online FDP on Empowering Society: Leveraging Advanced Communication Technologies for a Connected and Resilient Future"
  ]

  const activities = {
    posterFest: {
      title: 'GPU Poster Fest-1.0',
      subtitle: 'Industry Supported Elective Course Outcomes',
      images: [posterFest1, posterFest2, posterFest3],
      content: (
        <div className="projects-list">
          <h4>Featured Projects</h4>
          <div className="projects-grid">
            {posterProjects.map((project, index) => (
              <div key={index} className="project-item">
                <span className="project-number">{index + 1}</span>
                <span className="project-title">{project}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    industryElective: {
      title: 'Industry Supported Elective Course',
      subtitle: 'Professional Development & Skill Enhancement',
      images: [industryElective1, industryElective2],
      content: (
        <div className="elective-content">
          <p>Our Industry Supported Elective Courses bridge the gap between academic learning and industry requirements, providing students with hands-on experience in cutting-edge technologies.</p>
          <div className="features">
            <div className="feature-item">✓ Industry-relevant curriculum design</div>
            <div className="feature-item">✓ Expert faculty and guest lecturers</div>
            <div className="feature-item">✓ Practical project-based learning</div>
            <div className="feature-item">✓ Real-world problem solving</div>
          </div>
        </div>
      )
    },
    technicalTalk: {
      title: 'Technical Talks & Resource Contributions',
      subtitle: 'Faculty Expertise & Community Engagement',
      images: [technicalTalk1, technicalTalk2],
      content: (
        <div className="technical-talks">
          <h4>Recent Activities</h4>
          <div className="talks-list">
            {technicalTalkActivities.map((activity, index) => (
              <div key={index} className="talk-item">
                <div className="talk-bullet">•</div>
                <div className="talk-content">{activity}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    guestLecture: {
      title: 'Guest Lectures & Seminars',
      subtitle: 'Knowledge Sharing & Industry Insights',
      images: [guestLecture1, guestLecture2, guestLecture3],
      content: (
        <div className="guest-lecture-content">
          <p>Our guest lecture series brings industry experts and renowned academicians to share their knowledge and experiences with our students.</p>
          <div className="benefits">
            <div className="benefit-item">
              <h5>Industry Exposure</h5>
              <p>Direct interaction with industry professionals</p>
            </div>
            <div className="benefit-item">
              <h5>Latest Trends</h5>
              <p>Insights into emerging technologies and market trends</p>
            </div>
            <div className="benefit-item">
              <h5>Networking</h5>
              <p>Building connections with industry leaders</p>
            </div>
            <div className="benefit-item">
              <h5>Career Guidance</h5>
              <p>Professional development and career opportunities</p>
            </div>
          </div>
        </div>
      )
    }
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    const maxIndex = activities[activeTab].images.length - 1
    setCurrentImageIndex(currentImageIndex === maxIndex ? 0 : currentImageIndex + 1)
  }

  const prevImage = () => {
    const maxIndex = activities[activeTab].images.length - 1
    setCurrentImageIndex(currentImageIndex === 0 ? maxIndex : currentImageIndex - 1)
  }

  return (
    <div className='activities' id='activities'>
      <div className='activities-container'>
        <div className='activities-header'>
          <h2>Department Activities</h2>
          <p>Showcasing our academic excellence and industry engagement</p>
        </div>

        <div className='activities-tabs'>
          {Object.keys(activities).map((key) => (
            <button
              key={key}
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(key)
                setCurrentImageIndex(0)
              }}
            >
              {activities[key].title.split(' ')[0]} {activities[key].title.includes('GPU') ? 'Poster Fest' : activities[key].title.includes('Industry') ? 'Elective' : activities[key].title.includes('Technical') ? 'Talks' : 'Lectures'}
            </button>
          ))}
        </div>

        <div className='activity-content'>
          <div className='activity-header'>
            <h3>{activities[activeTab].title}</h3>
            <p className='activity-subtitle'>{activities[activeTab].subtitle}</p>
          </div>

          <div className='activity-body'>
            <div className='activity-images'>
              <div className='image-carousel'>
                <button className='carousel-btn prev' onClick={prevImage}>‹</button>
                <img
                  src={activities[activeTab].images[currentImageIndex]}
                  alt={`${activities[activeTab].title} ${currentImageIndex + 1}`}
                  className='activity-image'
                />
                <button className='carousel-btn next' onClick={nextImage}>›</button>
              </div>
              <div className='image-indicators'>
                {activities[activeTab].images.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className='activity-details'>
              {activities[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities