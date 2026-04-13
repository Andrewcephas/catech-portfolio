
import { useState, useRef } from 'react';
import { Wand2, Download, RefreshCw, Upload } from 'lucide-react';
import html2canvas from 'html2canvas';

const DesignGeneratorPage = () => {
  const [mainTitle, setMainTitle] = useState('HAPPY');
  const [scriptTitle, setScriptTitle] = useState('NEW WEEK');
  const [quote, setQuote] = useState('Wishing You a Joyful and Productive Week');
  const [reference, setReference] = useState('- From Catech Solutions and Graphics.');
  const [userImage, setUserImage] = useState('/lovable-uploads/andrew green.png'); // Default image
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
      { main: 'HAPPY', script: 'NEW WEEK', quote: 'Wishing You a Joyful and Productive Week', ref: '- From Catech Solutions and Graphics.' },
      { main: 'MERRY', script: 'CHRISTMAS', quote: 'For unto you is born this day a Saviour.', ref: 'Luke 2:11' },
      { main: 'HAPPY', script: 'NEW YEAR', quote: 'Behold, I make all things new.', ref: 'Revelation 21:5' },
      { main: 'GOOD', script: 'FRIDAY', quote: 'It is finished.', ref: 'John 19:30' }
    ];

    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setMainTitle(randomTheme.main);
    setScriptTitle(randomTheme.script);
    setQuote(randomTheme.quote);
    setReference(randomTheme.ref);
  };

  const downloadPoster = async () => {
    if (!posterRef.current) return;

    const withWatermark = window.confirm("Do you want to download with watermark?\n\nClick OK for watermark (free)\nClick Cancel for no watermark (paid)");

    if (!withWatermark) {
      alert("To download without watermark, please pay to CATECH account 0793614592 and contact us for the watermark-free version.");
      return;
    }

    setIsDownloading(true);

    try {
      const posterElement = posterRef.current;
      const canvas = await html2canvas(posterElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        allowTaint: false,
        foreignObjectRendering: true,
        logging: false,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.querySelector('[data-poster-ref="true"]') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.width = '400px';
            clonedElement.style.height = '600px';
            clonedElement.style.transform = 'none';
            clonedElement.style.position = 'relative';
          }
        }
      });

      const link = document.createElement('a');
      link.download = `${mainTitle}-${scriptTitle}-poster-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
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
        <h2 className="text-2xl md:text-3xl font-bold text-brand-orange mb-2">
          Catech Auto Poster Generator
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">Create beautiful custom posters with ease</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Controls Panel */}
        <div className="space-y-3 md:space-y-4 animate-slide-up">
          <div className="bg-card p-4 md:p-6 rounded-xl border border-border shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 flex items-center gap-2">
              <Wand2 className="text-[var(--brand-orange)]" size={20} />
              Poster Controls
            </h3>

            <div className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1 md:mb-2">Main Title</label>
                  <input
                    type="text"
                    value={mainTitle}
                    onChange={(e) => setMainTitle(e.target.value)}
                    className="w-full p-2 md:p-3 border border-border rounded-lg focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm md:text-base bg-background text-foreground"
                    placeholder="Main title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1 md:mb-2">Script Title</label>
                  <input
                    type="text"
                    value={scriptTitle}
                    onChange={(e) => setScriptTitle(e.target.value)}
                    className="w-full p-2 md:p-3 border border-border rounded-lg focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm md:text-base bg-background text-foreground"
                    placeholder="Script title..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1 md:mb-2">Main Message</label>
                <textarea
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  rows={2}
                  className="w-full p-2 md:p-3 border border-border rounded-lg focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent resize-none text-sm md:text-base bg-background text-foreground"
                  placeholder="Enter your main message..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1 md:mb-2">Attribution/Reference</label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="w-full p-2 md:p-3 border border-border rounded-lg focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm md:text-base bg-background text-foreground"
                  placeholder="Attribution or reference..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1 md:mb-2">Upload Image</label>
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
                    className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-secondary text-secondary-foreground border border-border rounded-lg cursor-pointer hover:bg-secondary/80 transition-colors text-sm md:text-base"
                  >
                    <Upload size={16} />
                    <span>Choose Image</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-3">
                <button
                  onClick={generateRandomPoster}
                  className="flex items-center justify-center space-x-2 px-3 md:px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green-hover transition-all duration-200 text-sm md:text-base transform hover:scale-105"
                >
                  <RefreshCw size={16} />
                  <span>Random Theme</span>
                </button>
                <button
                  onClick={downloadPoster}
                  disabled={isDownloading}
                  className="flex items-center justify-center space-x-2 px-3 md:px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange-hover transition-all duration-200 text-sm md:text-base disabled:opacity-50 transform hover:scale-105"
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
          <div className="bg-card p-3 md:p-6 rounded-xl border border-border shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Live Preview</h3>

            <div
              ref={posterRef}
              data-poster-ref="true"
              className="bg-white rounded-lg overflow-hidden mx-auto shadow-xl border border-gray-300 flex flex-col"
              style={{
                width: '400px',
                height: '600px',
                maxWidth: '100%',
              }}
            >
              {/* Title Section */}
              <div className="pt-8 text-center px-8">
                <h1
                  className="font-black text-5xl leading-none"
                  style={{ fontFamily: 'Arial Black, sans-serif', color: '#1f5f3f', fontWeight: '900' }}
                >
                  {mainTitle}
                </h1>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="relative">
                    <h1
                      className="font-black text-5xl leading-none"
                      style={{ fontFamily: 'Arial Black, sans-serif', color: '#ff9900', fontWeight: '900' }}
                    >
                      {scriptTitle.split(' ')[0]}
                    </h1>
                    <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#ff9900]"></div>
                  </div>
                  <h1
                    className="font-black text-5xl leading-none"
                    style={{ fontFamily: 'Arial Black, sans-serif', color: '#1f5f3f', fontWeight: '900' }}
                  >
                    {scriptTitle.split(' ').slice(1).join(' ')}
                  </h1>
                </div>
              </div>

              {/* Main Image Section */}
              <div className="my-4 px-8">
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <img
                    loading="lazy"
                    src={userImage}
                    alt="Main"
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              </div>

              <div className="flex-grow" />

              {/* Footer Area */}
              <div className="px-8 pb-4">
                {/* Message Section */}
                <div className="text-center pb-4">
                  <p
                    className="font-bold text-lg leading-tight mb-2"
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      color: '#1f5f3f'
                    }}
                  >
                    {quote}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      color: '#1f5f3f'
                    }}
                  >
                    {reference}
                  </p>
                </div>

                {/* Logo Section */}
                <div className="flex items-center justify-center">
                  <div className="flex-grow h-1 bg-[#ff9900]"></div>
                  <img
                    src="/lovable-uploads/logo catech.png"
                    alt="Catech Logo"
                    className="h-16 w-auto object-contain mx-4 flex-shrink-0"
                    crossOrigin="anonymous"
                  />
                  <div className="flex-grow h-1 bg-[#1f5f3f]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGeneratorPage;
