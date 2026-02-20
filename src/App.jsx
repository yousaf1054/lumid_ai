import React, { useState } from 'react'
import Header from './components/Header'
import CatMascot from './components/CatMascot'
import ChatInput from './components/ChatInput'
import MoodTracker from './components/MoodTracker'

function App() {
  const [message, setMessage] = useState('')
  const [moodValue, setMoodValue] = useState(30)
  const [reason, setReason] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const handleTagSelect = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen bg-lumid-gradient flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center md:px-4 py-4 md:py-6 relative">
        
        {/* Chat Input Section with Cat Mascot behind */}
        <div 
          className="mb-[48px] md:mb-10 w-[394px] md:w-[993px] max-w-[calc(100%-36px)]"
          style={{ 
            position: 'relative', 
            marginTop: '180px' 
          }}
        >
          {/* Cat Mascot - Positioned strictly behind the chat box */}
          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center" style={{ top: '-280px', zIndex: 0, width: '100%', pointerEvents: 'none' }}>
            <CatMascot />
          </div>

          <div className="relative z-10 w-full">
            <ChatInput 
              value={message}
              onChange={setMessage}
            />
          </div>
        </div>
        
        {/* Mood Tracker Card */}
        <div className="w-[394px] md:w-[394px] max-w-[calc(100%-36px)]">
          <MoodTracker 
            moodValue={moodValue}
            onMoodChange={setMoodValue}
            reason={reason}
            onReasonChange={setReason}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />
        </div>
      </main>
    </div>
  )
}

export default App
