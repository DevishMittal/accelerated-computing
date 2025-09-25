import './HonorsProgram.css'

const HonorsProgram = () => {
  return (
    <div className='honors-program' id='honors-program'>
      <div className='honors-container'>
        <div className='program-header'>
          <h2>B.Tech. Honors in Computer Science</h2>
          <h3>Specialization in GPU-Accelerated Computing</h3>
          <p className='program-subtitle'>Department of Computing Technologies • School of Computing</p>
        </div>

        <div className='program-content'>
          {/* Program Overview */}
          <div className='section-card'>
            <h4>Program Overview</h4>
            <div className='overview-points'>
              <p>• Covers essential technical skills for accelerated high performance computing</p>
              <p>• Focuses on parallel algorithms design and GPU computing for high performance</p>
              <p>• Utilizes shared and distributed computing platforms (OpenMP, MPI)</p>
              <p>• Emphasizes specialized hardware: GPUs, TPUs, FPGAs</p>
              <p>• Incorporates HPC applications with parallel data analytics and AI/ML</p>
            </div>
          </div>

          {/* Core Curriculum */}
          <div className='section-card'>
            <h4>Core Curriculum (18 Credits)</h4>
            <div className='curriculum-grid'>
              <div className='foundation-courses'>
                <h5>Foundation Courses</h5>
                <div className='course-item'>
                  <span>Advanced High-Performance Computing</span>
                  <span className='credits'>3 Credits</span>
                </div>
                <div className='course-item'>
                  <span>Parallel Programming with OpenMP and MPI</span>
                  <span className='credits'>4 Credits</span>
                </div>
                <div className='course-item'>
                  <span>Accelerated Computing with CUDA Using Python</span>
                  <span className='credits'>3 Credits</span>
                </div>
              </div>
              <div className='elective-courses'>
                <h5>Elective Courses (Choose 3 for 8 Credits)</h5>
                <div className='elective-list'>
                  <span>• Advanced Computer Architecture</span>
                  <span>• GPU Computing</span>
                  <span>• Accelerated Deep Learning</span>
                  <span>• Concurrent Programming with GPUs</span>
                  <span>• Applied Accelerated AI</span>
                  <span>• NVIDIA GPU&apos;s Accelerated Computing</span>
                  <span>• Sparse Intensive GPU Computing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Outcomes & Expertise */}
          <div className='dual-section'>
            <div className='section-card half-width'>
              <h4>Learning Outcomes</h4>
              <ul>
                <li>Understand parallel processing approaches in HPC and GPU computing</li>
                <li>Design applications on GPU platforms for real-time projects</li>
                <li>Apply GPU concepts for data preprocessing and AI/ML</li>
                <li>Implement parallel data processing using OpenMP and MPI</li>
                <li>Evaluate GPU performance using CUDA and OpenACC</li>
              </ul>
            </div>
            <div className='section-card half-width'>
              <h4>Key Expertise Areas</h4>
              <ul>
                <li>CUDA performance optimization and debugging</li>
                <li>Algorithm parallelization for HPC applications</li>
                <li>Frameworks: cuBLAS, cuDNN</li>
                <li>Cloud-based CPU/GPU architecture design</li>
                <li>High-bandwidth interconnects and scalable storage</li>
              </ul>
            </div>
          </div>

          {/* Faculty & Current Statistics */}
          <div className='dual-section'>
            <div className='section-card half-width'>
              <h4>Faculty Expertise</h4>
              <div className='faculty-item'>
                <div className='faculty-name'>Dr. R. Kavitha</div>
                <div className='faculty-expertise'>HPC, Linux, Parallel Computing</div>
              </div>
              <div className='faculty-item'>
                <div className='faculty-name'>Dr. S. Nagadevi</div>
                <div className='faculty-expertise'>GPU Computing, GPU Architectures</div>
              </div>
            </div>
            <div className='section-card half-width'>
              <h4>Current Enrollment Statistics</h4>
              <div className='stats-grid'>
                <div className='stat-item'>
                  <span className='stat-subject'>High Performance Computing</span>
                  <span className='stat-count'>118 Students</span>
                </div>
                <div className='stat-item'>
                  <span className='stat-subject'>GPU Computing</span>
                  <span className='stat-count'>135 Students</span>
                </div>
                <div className='stat-item'>
                  <span className='stat-subject'>GPU Powered Computing</span>
                  <span className='stat-count'>99 Students</span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className='section-card'>
            <h4>Career Opportunities</h4>
            <div className='recruiters-grid'>
              <div className='company-role'>
                <strong>NVIDIA</strong> - GPU Software Development Engineer
              </div>
              <div className='company-role'>
                <strong>Intel Corporation</strong> - GPU Software Developer
              </div>
              <div className='company-role'>
                <strong>Qualcomm</strong> - Staff HPC Software Developer
              </div>
              <div className='company-role'>
                <strong>KLA</strong> - Cloud Engineer (HPC)
              </div>
              <div className='company-role'>
                <strong>Jupiter AI Labs</strong> - AI/ML Engineer
              </div>
              <div className='company-role'>
                <strong>Uplers</strong> - GPU Data Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HonorsProgram