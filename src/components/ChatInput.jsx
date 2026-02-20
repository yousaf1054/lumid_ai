import React from 'react'

const ChatInput = ({ value, onChange }) => {
  return (
    <div 
      className="bg-white p-5 md:p-6"
      style={{
        height: '152px',
        borderRadius: '29px',
        border: '1px solid #E6E6E6',
        boxShadow: '0px 4px 16px rgba(0,0,0,0.06)'
      }}
    >
      {/* Text Input */}
      <div className="mb-6">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ask Lovable to create a landing page for my a..."
          className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 text-base"
        />
      </div>
      
      {/* Bottom Controls */}
      <div className="flex items-center justify-between">
        {/* Understand My Emotion Button - styled like reference */}
        <button 
          className="h-[44px] px-5 rounded-[22px] text-sm font-medium border bg-white transition-all duration-200 hover:shadow-md flex items-center justify-center"
          style={{
            borderColor: '#9DDCFF',
            color: '#5AA9E6',
            boxShadow: '0px 4px 12px rgba(90, 169, 230, 0.15)'
          }}
        >
          Understand My Emotion
        </button>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Voice Button - using actual SVG from design */}
          <img 
            src="/Frame 1618871919.svg" 
            alt="Voice"
            className="w-[44px] h-[44px] cursor-pointer hover:opacity-80 transition-opacity"
          />
          
          {/* Send Button - using actual SVG from design */}
          <img 
            src="/Frame 1618871925.svg" 
            alt="Send"
            className="w-[44px] h-[44px] cursor-pointer hover:scale-105 transition-transform"
            style={{
              borderRadius: '67.31px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ChatInput
