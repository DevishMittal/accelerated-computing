import { useState } from 'react'
import './FuturePlans.css'

const FuturePlans = () => {
  const [activeSection, setActiveSection] = useState('pipeline')

  const pipelineActivities = [
    {
      title: "Academic Collaborations",
      items: ["Collaboration with IITM, IIITDM, NVIDIA"]
    },
    {
      title: "Research Publications",
      items: [
        "Papers Submitted to Supercomputing Conference",
        "GPU-Accelerated Deep 3D CNNs for Modeling Memory-Related Brain Activity Using Multi-Voxel Pattern Analysis on fMRI Data",
        "DNA Pattern Matching Using HPC Techniques", 
        "A Survey of Memory Optimization Techniques for Large Language Model Inference on GPUs"
      ]
    },
    {
      title: "Industry Engagement",
      items: ["Industrial visit to CDAC-Bangalore"]
    },
    {
      title: "Specialized Programs",
      items: ["10 credit course - GPU specialization - IITM, Kameshwararao Anupindi - Winter & Summer School Program"]
    }
  ]

  const challenges = [
    {
      icon: "🎓",
      title: "Faculty Development",
      description: "Requirement for advanced training programs/workshops to upskill faculty"
    },
    {
      icon: "🖥️",
      title: "Infrastructure Needs", 
      description: "Need for lab equipment and high-performance computing resources to support practical learning and student projects"
    },
    {
      icon: "📄",
      title: "Publication Support",
      description: "Publication support for the students projects"
    }
  ]

  const semesterPlans = [
    {
      title: "UPGRADE ELECTIVE SUBJECTS SYLLABUS",
      subtitle: "ACCORDING TO INDUSTRY STANDARDS",
      color: "#ff6b6b"
    },
    {
      title: "INVITING INDUSTRY PARTNERS",
      subtitle: "FOR THE GUEST LECTURES", 
      color: "#4ecdc4"
    },
    {
      title: "IDENTIFYING DOMAIN RELATED",
      subtitle: "INDUSTRY PROJECTS FOR THE STUDENTS",
      color: "#45b7d1"
    },
    {
      title: "ARRANGING BOOTCAMPS",
      subtitle: "AND WORKSHOPS",
      color: "#96ceb4"
    },
    {
      title: "MOTIVATING STUDENTS",
      subtitle: "TO PUBLISH A POSTER/PAPER IN NATIONAL LEVEL FEST",
      color: "#ffeaa7"
    },
    {
      title: "COLLABORATING WITH NVIDIA",
      subtitle: "THROUGH THEIR DLI PROGRAMS",
      color: "#a29bfe"
    },
    {
      title: "A* CONFERENCES",
      subtitle: "TARGETING TOP-TIER RESEARCH VENUES",
      color: "#fd79a8"
    },
    {
      title: '"GPU COMPUTING CLUB"',
      subtitle: "TO PROMOTE COLLABORATIVE LEARNING AND MENTORING",
      color: "#00cec9"
    }
  ]

  const sections = {
    pipeline: {
      title: 'Activities in Pipeline',
      content: (
        <div className="pipeline-content">
          <div className="pipeline-grid">
            {pipelineActivities.map((category, index) => (
              <div key={index} className="pipeline-category">
                <h4>{category.title}</h4>
                <div className="activity-list">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="activity-item">
                      <span className="activity-bullet">●</span>
                      <span className="activity-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    challenges: {
      title: 'Gap Analysis & Challenges',
      content: (
        <div className="challenges-content">
          <div className="challenges-grid">
            {challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-icon">{challenge.icon}</div>
                <h4>{challenge.title}</h4>
                <p>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    plans: {
      title: 'Current Semester Plans',
      content: (
        <div className="plans-content">
          <div className="plans-grid">
            {semesterPlans.map((plan, index) => (
              <div 
                key={index} 
                className="plan-card"
                style={{
                  background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}10)`,
                  borderColor: plan.color
                }}
              >
                <div 
                  className="plan-header"
                  style={{ color: plan.color }}
                >
                  {plan.title}
                </div>
                <div className="plan-subtitle">
                  {plan.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }

  return (
    <div className='future-plans' id='future-plans'>
      <div className='plans-container'>
        <div className='plans-header'>
          <h2>Future Plans & Strategic Roadmap</h2>
          <p>Driving innovation through strategic planning and continuous improvement</p>
        </div>

        <div className='plans-tabs'>
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              className={`plans-tab-button ${activeSection === key ? 'active' : ''}`}
              onClick={() => setActiveSection(key)}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        <div className='plans-content'>
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

export default FuturePlans