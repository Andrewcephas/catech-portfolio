
import { useState, useRef } from 'react';
import { Wand2, Download, RefreshCw, Upload } from 'lucide-react';
import html2canvas from 'html2canvas';

const DesignGeneratorPage = () => {
  const [tagline, setTagline] = useState('Stay Cool');
  const [mainTitle, setMainTitle] = useState('Happy');
  const [scriptTitle, setScriptTitle] = useState('Easter');
  const [quote, setQuote] = useState('He is not here; he has risen! Remember how he told you, while he was still with you in Galilee.');
  const [reference, setReference] = useState('Matthew 28:6');
  const [footerText, setFooterText] = useState('CATECH SOLUTIONS | ngumbaucephas2@gmail.com | +254 793 614 592');
  const [userImage, setUserImage] = useState('/lovable-uploads/f04b0568-f72c-43fd-8e57-133cc4af1de6.png');
  const [isDownloading, setIsDownloading] = useState(false);
  const posterRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateRandomPoster = () => {
    const themes = [
      { tagline: 'Stay Cool', main: 'Happy', script: 'Easter', quote: 'He is not here; he has risen!', ref: 'Matthew 28:6' },
      { tagline: 'Be Blessed', main: 'Merry', script: 'Christmas', quote: 'For unto you is born this day a Saviour.', ref: 'Luke 2:11' },
      { tagline: 'Stay Strong', main: 'New', script: 'Year', quote: 'Behold, I make all things new.', ref: 'Revelation 21:5' },
      { tagline: 'Be Thankful', main: 'Good', script: 'Friday', quote: 'It is finished.', ref: 'John 19:30' }
    ];
    
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setTagline(randomTheme.tagline);
    setMainTitle(randomTheme.main);
    setScriptTitle(randomTheme.script);
    setQuote(randomTheme.quote);
    setReference(randomTheme.ref);
  };

  const downloadPoster = async () => {
    if (!posterRef.current) return;
    
    setIsDownloading(true);
    try {
      // Create a temporary clone for download to avoid affecting the preview
      const originalElement = posterRef.current;
      const clonedElement = originalElement.cloneNode(true) as HTMLElement;
      
      // Remove any animations and motion effects from the clone
      const removeAnimations = (element: HTMLElement) => {
        element.style.animation = 'none';
        element.style.transition = 'none';
        element.style.transform = 'none';
        const children = element.children;
        for (let i = 0; i < children.length; i++) {
          removeAnimations(children[i] as HTMLElement);
        }
      };
      
      removeAnimations(clonedElement);
      
      // Temporarily add clone to DOM for rendering
      clonedElement.style.position = 'absolute';
      clonedElement.style.left = '-9999px';
      clonedElement.style.top = '0';
      document.body.appendChild(clonedElement);
      
      // Wait for fonts and images to load
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const canvas = await html2canvas(clonedElement, {
        scale: 4, // Higher scale for better quality
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#f8f9fa',
        width: 400,
        height: 533,
        scrollX: 0,
        scrollY: 0,
        logging: false,
        removeContainer: true,
        foreignObjectRendering: false,
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          // Ensure all styles are properly applied
          const clonedPoster = clonedDoc.querySelector('[data-poster-ref]') as HTMLElement;
          if (clonedPoster) {
            clonedPoster.style.width = '400px';
            clonedPoster.style.height = '533px';
            clonedPoster.style.transform = 'none';
            clonedPoster.style.animation = 'none';
          }
        }
      });
      
      // Remove clone from DOM
      document.body.removeChild(clonedElement);
      
      // Create download link
      const link = document.createElement('a');
      link.download = `${mainTitle}-${scriptTitle}-poster-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error downloading poster:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="h-full space-y-4 md:space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          AI Poster Generator
        </h2>
        <p className="text-gray-600 text-sm md:text-base">Create beautiful custom posters with ease</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Controls Panel */}
        <div className="space-y-3 md:space-y-4 animate-slide-up">
          <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <Wand2 className="text-[#ff9900]" size={20} />
              Poster Controls
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9900] focus:border-transparent text-sm md:text-base"
                  placeholder="Enter tagline..."
                />
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Main Title</label>
                  <input
                    type="text"
                    value={mainTitle}
                    onChange={(e) => setMainTitle(e.target.value)}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9900] focus:border-transparent text-sm md:text-base"
                    placeholder="Main title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Script Title</label>
                  <input
                    type="text"
                    value={scriptTitle}
                    onChange={(e) => setScriptTitle(e.target.value)}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9900] focus:border-transparent text-sm md:text-base"
                    placeholder="Script title..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Quote/Scripture</label>
                <textarea
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  rows={3}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9900] focus:border-transparent resize-none text-sm md:text-base"
                  placeholder="Enter your quote or scripture..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Reference</label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9900] focus:border-transparent text-sm md:text-base"
                  placeholder="Quote reference..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Footer Text</label>
                <textarea
                  value={footerText}
                  onChange={(e) => setFooterText(e.target.value)}
                  rows={2}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9900] focus:border-transparent resize-none text-sm md:text-base"
                  placeholder="Footer branding and contact info..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">Upload Image</label>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors text-sm md:text-base"
                  >
                    <Upload size={16} />
                    <span>Choose Image</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-3">
                <button
                  onClick={generateRandomPoster}
                  className="flex items-center justify-center space-x-2 px-3 md:px-4 py-2 bg-[#017020] text-white rounded-lg hover:bg-[#014a1a] transition-colors text-sm md:text-base"
                >
                  <RefreshCw size={16} />
                  <span>Random Theme</span>
                </button>
                <button 
                  onClick={downloadPoster}
                  disabled={isDownloading}
                  className="flex items-center justify-center space-x-2 px-3 md:px-4 py-2 bg-[#ff9900] text-white rounded-lg hover:bg-[#e6870a] transition-colors text-sm md:text-base disabled:opacity-50"
                >
                  <Download size={16} />
                  <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="animate-scale-in">
          <div className="bg-white p-3 md:p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Live Preview</h3>
            
            {/* Poster Preview - Fixed dimensions for consistent download */}
            <div 
              ref={posterRef}
              data-poster-ref="true"
              className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mx-auto"
              style={{ 
                width: '400px',
                height: '533px',
                maxWidth: '100%'
              }}
            >
              {/* Company Logo - Top Center */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                <img 
                  src="/lovable-uploads/a6a68b67-9026-42f1-a535-3e8057802d8c.png" 
                  alt="CATECH Logo" 
                  className="h-10 w-auto"
                  crossOrigin="anonymous"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>

              {/* Tagline - Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[#ff9900] font-bold text-base" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  {tagline}
                </span>
              </div>

              {/* Main Content Area - Centered between logo and footer */}
              <div className="absolute" style={{ top: '80px', left: '16px', right: '16px', bottom: '60px' }}>
                <div className="flex h-full">
                  {/* Left Side - Text Content */}
                  <div className="w-1/2 pr-4 flex flex-col justify-center">
                    {/* Main Title */}
                    <div className="mb-4">
                      <h1 className="text-black font-bold text-2xl leading-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                        {mainTitle}
                      </h1>
                      <h1 
                        className="text-[#ff9900] font-bold text-2xl mt-1 leading-tight" 
                        style={{ 
                          fontFamily: 'Brush Script MT, cursive',
                          textShadow: '1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white'
                        }}
                      >
                        {scriptTitle}
                      </h1>
                    </div>

                    {/* Quote Text - Better wrapping */}
                    <div className="mb-4">
                      <p className="text-gray-800 text-sm leading-relaxed" style={{ 
                        wordWrap: 'break-word', 
                        hyphens: 'auto',
                        lineHeight: '1.4'
                      }}>
                        {quote}
                      </p>
                    </div>

                    {/* Reference */}
                    <div>
                      <span className="bg-[#ff9900] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {reference}
                      </span>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="w-1/2 pl-4 flex justify-center items-center">
                    <div className="relative" style={{ width: '140px', height: '200px' }}>
                      <img
                        src={userImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-lg"
                        crossOrigin="anonymous"
                        style={{
                          imageRendering: 'crisp-edges',
                          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Watermark - Right Side */}
              <div 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 opacity-10 z-0"
                style={{ transformOrigin: 'center' }}
              >
                <span className="text-gray-400 font-bold text-lg whitespace-nowrap">
                  {mainTitle} {scriptTitle}
                </span>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#ff9900] text-white text-center py-2">
                <p className="text-xs font-medium px-2" style={{ 
                  wordWrap: 'break-word', 
                  lineHeight: '1.2',
                  whiteSpace: 'normal'
                }}>
                  {footerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGeneratorPage;
