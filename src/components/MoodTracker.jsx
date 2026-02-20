import React from 'react'

const MoodTracker = ({ 
  moodValue, 
  onMoodChange, 
  reason, 
  onReasonChange, 
  selectedTags, 
  onTagSelect 
}) => {
  const tags = [
    { name: 'Procrastination', bg: '#FFECEC', border: '#FFB3B3', text: '#C96A6A' },
    { name: 'Social issues', bg: '#FFF0FA', border: '#F5A3D3', text: '#B44B8B' },
    { name: 'Relationship issues', bg: '#EEF6FF', border: '#A9CFFF', text: '#4C79B8' },
    { name: 'Anxiety', bg: '#FFF6E9', border: '#FFD199', text: '#C38A3D' },
    { name: 'Procrastination', bg: '#FFECEC', border: '#FFB3B3', text: '#C96A6A' },
    { name: 'Anxiety', bg: '#FFF6E9', border: '#FFD199', text: '#C38A3D' },
    { name: 'Social issues', bg: '#FFF0FA', border: '#F5A3D3', text: '#B44B8B' }
  ]

  // Get emoji based on mood value
  const getMoodEmoji = () => {
    if (moodValue <= 30) return '😢'
    if (moodValue <= 70) return '🙂'
    return '😄'
  }

  // Handle tag click - put tag name in text input
  const handleTagClick = (tagName) => {
    onReasonChange(tagName)
    onTagSelect(tagName)
  }

  return (
    <div 
      className="relative w-full"
      style={{ 
        minHeight: '311px',
        borderRadius: '18px',
        border: '1px solid rgba(230,230,230,0.5)',
        background: 'linear-gradient(to right, #FFFFFF 0%, #E8F8EE 50%, #D2F0DC 100%)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0px 10px 28px rgba(0,0,0,0.06)',
        padding: '20px 16px 16px'
      }}
    >
      {/* Love Icon - positioned at top right, rotated */}
      <img 
        src="love_icone.png" 
        alt="Love" 
        className="absolute object-contain"
        style={{ 
          width: '65px', 
          height: '65px',
          top: '0px',
          right: '16px',
          transform: 'rotate(-10.86deg)'
        }} 
      />
      
      {/* Header */}
      <div style={{ marginBottom: '14px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 500, color: '#6A6A6A' }}>
          How Was Your Day, Today ?
        </h2>
      </div>
      
      {/* Mood Labels */}
      <div className="flex justify-between" style={{ fontSize: '12px', color: '#9A9A9A', marginBottom: '8px' }}>
        <span>Sad</span>
        <span>Well</span>
        <span>Very Happy</span>
      </div>
      
      {/* Mood Slider Section */}
      <div 
        className="relative"
        style={{ 
          width: '100%',
          height: '36px',
          marginBottom: '20px'
        }}
      >
        {/* Slider Track Container */}
        <div 
          className="relative flex items-center"
          style={{ 
            width: '100%',
            height: '24px', 
            marginTop: '6px',
            borderRadius: '56px',
            border: '1px dashed #D4C78A',
            backgroundColor: '#F0F0F0'
          }}
        >
          {/* Yellow filled section with dashed border */}
          <div 
            className="absolute left-0 top-0 bottom-0 transition-all duration-300 ease-in-out"
            style={{ 
              width: `${moodValue}%`,
              backgroundColor: moodValue > 0 ? '#F8EFC4' : 'transparent',
              borderRadius: '56px',
              border: moodValue > 0 ? '1px dashed #D4C78A' : 'none'
            }}
          />
          
          {/* Emoji Thumb */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out pointer-events-none"
            style={{ 
              left: `calc(${moodValue}% - 18px)`,
              width: '36px',
              height: '36px',
              backgroundColor: '#FFD966',
              border: '2px solid #FFFFFF',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
              zIndex: 10
            }}
          >
            <span style={{ fontSize: '20px' }}>{getMoodEmoji()}</span>
          </div>
        </div>
        
        {/* Hidden range input for interaction */}
        <input
          type="range"
          min="0"
          max="100"
          value={moodValue}
          onChange={(e) => onMoodChange(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-pointer"
          style={{ width: '100%', height: '36px', top: '0px', zIndex: 20 }}
        />
      </div>
      
      {/* Reason Heading */}
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#5A5A5A' }}>
          What was the Reason to be ?
        </h3>
      </div>

      {/* Text Input with Send Button - mood tracker chat box */}
      <div 
        className="flex items-center"
        style={{ 
          width: '100%', 
          height: '40px',
          borderRadius: '29px',
          border: '1px solid #E6E6E6',
          backgroundColor: '#FFFFFF',
          gap: '10px',
          padding: '4px 4px 4px 12px',
          marginBottom: '14px'
        }}
      >
        <input
          type="text"
          value={reason}
          onChange={(e) => onReasonChange(e.target.value)}
          placeholder="Ask Lovable to create a landing"
          className="flex-1 outline-none transition-all duration-300"
          style={{ 
            backgroundColor: 'transparent',
            fontSize: '12px',
            color: '#6A6A6A'
          }}
        />
        {/* Send Button */}
        <img 
          src="Frame 1618871925.svg" 
          alt="Send"
          className="cursor-pointer hover:scale-105 transition-transform"
          style={{ width: '32px', height: '32px' }}
        />
      </div>
      
      {/* Reason Tags (Chips) - mood tracker buttons container */}
      <div 
        className="flex flex-wrap"
        style={{
          width: '100%',
          gap: '6px',
          opacity: 0.52
        }}
      >
        {tags.map((tag, index) => (
          <button
            key={`${tag.name}-${index}`}
            onClick={() => handleTagClick(tag.name)}
            className="px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-105"
            style={{
              fontSize: '12px',
              backgroundColor: tag.bg,
              border: `1.5px solid ${tag.border}`,
              color: tag.text
            }}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MoodTracker
