import React from 'react'

const CatMascot = () => {
  return (
    <div className="flex flex-col items-center relative w-full h-full cat-float">
      {/* Message Speech Bubble - using actual image, hidden on mobile */}
      <div 
        className="absolute z-10 hidden md:block"
        style={{ 
          width: '150px', 
          height: '100px',
          transform: 'rotate(8deg)',
          top: '75px', 
          right: '50%',
          marginRight: '-120px' // Right next to cat ear
        }}
      >
        <img 
          src="/message.png" 
          alt="Speech bubble"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Cat Image - Using cat.png */}
      <div 
        className="relative z-0"
        style={{ 
          width: '200px', 
          height: '300px',
          top: '100px'
        }}
      >
        <img 
          src="/cat.png" 
          alt="Lumid AI Cat Mascot"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
    </div>
  )
}

export default CatMascot
