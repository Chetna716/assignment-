import { useRef, useState } from 'react'
import './App.css'

function App() {
  const fileInputRef = useRef(null)
  const [images, setImages] = useState([])
  const [activeTab, setActiveTab] = useState('about')

  const handleAddImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    const urls = files.map((file) => ({ url: URL.createObjectURL(file), name: file.name }))
    setImages((prev) => [...prev, ...urls])
    e.target.value = ''
  }

  return (
    <div className="container">
      <div className="left-pane" />

      <div className="right-pane">
        
        <div className="card top-card">
          <div className="card-header">
            <button className="icon-btn" aria-label="info">?</button>
            <div className="tab-group">
              <div className="tabs" role="tablist" aria-label="Profile Tabs">
                <button
                  className={`tab ${activeTab === 'about' ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === 'about'}
                  onClick={() => setActiveTab('about')}
                >
                  About Me
                </button>
                <button
                  className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === 'experiences'}
                  onClick={() => setActiveTab('experiences')}
                >
                  Experiences
                </button>
                <button
                  className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === 'recommended'}
                  onClick={() => setActiveTab('recommended')}
                >
                  Recommended
                </button>
              </div>
            </div>
          </div>

          <div className="card-body scroll">
            {activeTab === 'about' && (
              <>
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                  working at this awesome company for 3 years now.
                </p>
                <p>
                  I was born and raised in Albany, NY & have been living in Santa
                  Carla for the past 10 years. My wife Tiffany and my 4 year old twin
                  daughters – Emma and Ella. Both of them are just starting school, so
                  my calendar is usually blocked between 9–10 AM. This is a...
                </p>
              </>
            )}
            {activeTab === 'experiences' && (
              <>
                <p>
                  Over the last 3 years, I’ve helped 200+ customers implement Sales Cloud,
                  Service Cloud, and custom integrations. My focus areas are pipeline health,
                  lead conversion, and automation.
                </p>
                <p>
                  Highlights include reducing manual tasks by 35% with Flow, and building
                  dashboards executives use daily.
                </p>
              </>
            )}
            {activeTab === 'recommended' && (
              <>
                <p>
                  I recommend exploring our Einstein features for predictive scoring and
                  automated insights. They pair well with your current marketing setup.
                </p>
                <p>
                  Also consider setting weekly goals in dashboards and enabling alerts for
                  key KPIs to stay ahead of trends.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="divider" />

        
        <div className="card gallery-card">
          <div className="card-header">
            <button className="icon-btn" aria-label="gallery info">?</button>
            <div className="gallery-actions">
              <div className="pill title">Gallery</div>
              <button className="pill cta" onClick={handleAddImageClick}>+ ADD IMAGE</button>
              <div className="nav">
                <button className="circle-btn prev" aria-label="prev"></button>
                <button className="circle-btn next" aria-label="next"></button>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={handleFilesSelected}
          />

          <div className="gallery-grid">
            {images.length === 0 ? (
              <>
                {[0, 1, 2].map((i) => (
                  <div className="thumb" key={i}>
                    <img src="/image.jpg" alt={`default-${i}`} />
                  </div>
                ))}
              </>
            ) : (
              images.map((img, idx) => (
                <div className="thumb" key={idx}>
                  <img src={img.url} alt={img.name || `image-${idx}`} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

