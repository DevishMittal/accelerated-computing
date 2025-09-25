import './SystemConfig.css'

const SystemConfig = () => {
  return (
    <div className='system-config' id='system-config'>
      <div className='config-container'>
        <div className='config-content'>
          {/* <h2>System Configurations</h2> */}
          <div className='config-details'>
            <div className='config-item'>
              <h3>Desktop PC Specifications</h3>
              <div className='spec-list'>
                <div className='spec-item'>
                  <span className='spec-label'>Model:</span>
                  <span className='spec-value'>HP Pro Tower 280 G9 PCI_E Desktop PC</span>
                </div>
                <div className='spec-item'>
                  <span className='spec-label'>Processor:</span>
                  <span className='spec-value'>13th Gen INTEL CORE i7</span>
                </div>
                <div className='spec-item'>
                  <span className='spec-label'>GPU:</span>
                  <span className='spec-value'>NVIDIA GeForce RTX 4060 (8 GB GPU Memory)</span>
                </div>
                <div className='spec-item'>
                  <span className='spec-label'>RAM:</span>
                  <span className='spec-value'>32GB</span>
                </div>
                <div className='spec-item'>
                  <span className='spec-label'>Storage:</span>
                  <span className='spec-value'>1TB SSD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemConfig