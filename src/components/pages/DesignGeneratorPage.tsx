
import { useState } from 'react';
import { Upload, Download, Wand2, Image as ImageIcon } from 'lucide-react';

const DesignGeneratorPage = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [mainText, setMainText] = useState('');
  const [scriptText, setScriptText] = useState('');
  const [quote, setQuote] = useState('');
  const [quoteReference, setQuoteReference] = useState('');
  const [tagline, setTagline] = useState('');
  const [footerText, setFooterText] = useState('Choose Catech Stay Happy Always - 0793614592');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesign, setGeneratedDesign] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateDesign = async () => {
    if (!uploadedImage) return;

    setIsGenerating(true);

    setTimeout(() => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (ctx) {
        canvas.width = 1080;
        canvas.height = 1080;

        const img = new Image();
        img.onload = () => {
          // Soft grey background
          ctx.fillStyle = '#f3f3ff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Load and draw CATECH logo
          const logo = new Image();
          logo.onload = () => {
            // Draw CATECH logo at top center
            const logoWidth = 200;
            const logoHeight = (logo.height / logo.width) * logoWidth;
            ctx.drawImage(logo, (canvas.width - logoWidth) / 2, 20, logoWidth, logoHeight);

            // Calculate layout based on image aspect ratio
            const imgAspectRatio = img.width / img.height;
            const isPortrait = imgAspectRatio < 1;
            
            let imageSection, textSection;
            
            if (isPortrait) {
              // Portrait: Image takes left 45%, text takes right 55%
              imageSection = { x: 40, y: 140, width: canvas.width * 0.45, height: canvas.height - 300 };
              textSection = { x: canvas.width * 0.48, y: 140, width: canvas.width * 0.48, height: canvas.height - 300 };
            } else {
              // Landscape: Image takes left 60%, text takes right 40%
              imageSection = { x: 40, y: 140, width: canvas.width * 0.58, height: canvas.height - 300 };
              textSection = { x: canvas.width * 0.62, y: 140, width: canvas.width * 0.34, height: canvas.height - 300 };
            }

            // Draw image with proper aspect ratio (no compression)
            const maxImgWidth = imageSection.width;
            const maxImgHeight = imageSection.height;
            
            let imgDrawWidth, imgDrawHeight;
            if (imgAspectRatio > maxImgWidth / maxImgHeight) {
              imgDrawWidth = maxImgWidth;
              imgDrawHeight = maxImgWidth / imgAspectRatio;
            } else {
              imgDrawHeight = maxImgHeight;
              imgDrawWidth = maxImgHeight * imgAspectRatio;
            }

            const imgX = imageSection.x + (imageSection.width - imgDrawWidth) / 2;
            const imgY = imageSection.y + (imageSection.height - imgDrawHeight) / 2;

            // Gradient fade at bottom of image
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(imgX, imgY, imgDrawWidth, imgDrawHeight, 12);
            ctx.clip();
            ctx.drawImage(img, imgX, imgY, imgDrawWidth, imgDrawHeight);
            
            // Add gradient fade
            const gradient = ctx.createLinearGradient(0, imgY + imgDrawHeight - 80, 0, imgY + imgDrawHeight);
            gradient.addColorStop(0, 'rgba(243, 243, 255, 0)');
            gradient.addColorStop(1, 'rgba(243, 243, 255, 0.7)');
            ctx.fillStyle = gradient;
            ctx.fillRect(imgX, imgY, imgDrawWidth, imgDrawHeight);
            ctx.restore();

            // Text section content - Left aligned but centered in container
            let currentY = textSection.y + 40;
            const textWidth = textSection.width - 40;
            const textStartX = textSection.x + 20; // Left aligned with some padding

            // Tagline (left-aligned in text section)
            if (tagline) {
              ctx.fillStyle = '#ff9900';
              ctx.font = 'bold 28px Arial, sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText(tagline, textStartX, currentY);
              currentY += 50;
            }

            // Main text (left-aligned)
            if (mainText) {
              ctx.fillStyle = '#000000';
              const mainFontSize = Math.max(36, Math.min(64, 800 / mainText.length));
              ctx.font = `bold ${mainFontSize}px Arial, sans-serif`;
              
              const mainLines = wrapText(ctx, mainText, textWidth);
              mainLines.forEach(line => {
                ctx.fillText(line, textStartX, currentY);
                currentY += mainFontSize + 10;
              });
              currentY += 20;
            }

            // Script text (decorative overlay style, left-aligned)
            if (scriptText) {
              ctx.save();
              ctx.fillStyle = '#ff9900';
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 3;
              const scriptFontSize = Math.max(32, Math.min(56, 600 / scriptText.length));
              ctx.font = `italic bold ${scriptFontSize}px Georgia, serif`;
              
              const scriptLines = wrapText(ctx, scriptText, textWidth);
              scriptLines.forEach(line => {
                ctx.strokeText(line, textStartX, currentY);
                ctx.fillText(line, textStartX, currentY);
                currentY += scriptFontSize + 10;
              });
              ctx.restore();
              currentY += 30;
            }

            // Quote section (left-aligned)
            if (quote) {
              const quoteBoxHeight = Math.ceil(quote.length / 35) * 25 + 80;
              
              // Quote background
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(textStartX - 10, currentY - 20, textWidth + 20, quoteBoxHeight);
              ctx.strokeStyle = '#ff9900';
              ctx.lineWidth = 2;
              ctx.strokeRect(textStartX - 10, currentY - 20, textWidth + 20, quoteBoxHeight);

              // Quote text
              ctx.fillStyle = '#333333';
              ctx.font = 'italic 18px Arial, sans-serif';
              ctx.fillText('"', textStartX + 10, currentY + 10);
              
              const quoteLines = wrapText(ctx, quote, textWidth - 40);
              quoteLines.forEach(line => {
                ctx.fillText(line, textStartX + 25, currentY + 10);
                currentY += 25;
              });
              
              ctx.fillText('"', textStartX + textWidth - 20, currentY);
              
              // Quote reference
              if (quoteReference) {
                currentY += 15;
                ctx.fillStyle = '#ff9900';
                ctx.font = 'bold 16px Arial, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillRect(textStartX + textWidth/2 - 80, currentY, 160, 25);
                ctx.fillStyle = '#ffffff';
                ctx.fillText(`(${quoteReference})`, textStartX + textWidth/2, currentY + 17);
                ctx.textAlign = 'left';
              }
            }

            // Vertical watermark - Positioned on the right side
            ctx.save();
            ctx.translate(canvas.width - 40, canvas.height / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillStyle = 'rgba(255, 153, 0, 0.1)';
            ctx.font = 'bold 72px Arial, sans-serif';
            ctx.textAlign = 'center';
            const watermarkText = scriptText || mainText || 'CATECH';
            ctx.fillText(watermarkText.toUpperCase(), 0, 0);
            ctx.restore();

            // Footer banner
            const footerHeight = 80;
            const footerY = canvas.height - footerHeight;
            
            ctx.fillStyle = '#ff9900';
            ctx.fillRect(0, footerY, canvas.width, footerHeight);
            
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 24px Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(footerText, canvas.width / 2, footerY + 50);

            setGeneratedDesign(canvas.toDataURL('image/png', 1.0));
            setIsGenerating(false);
          };
          logo.src = '/lovable-uploads/a6a68b67-9026-42f1-a535-3e8057802d8c.png';
        };
        img.src = uploadedImage;
      }
    }, 3000);
  };

  // Helper function for text wrapping
  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      const metrics = ctx.measureText(testLine);

      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  };

  const downloadDesign = () => {
    if (generatedDesign) {
      const link = document.createElement('a');
      link.href = generatedDesign;
      link.download = 'catech-professional-poster.png';
      link.click();
    }
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto animate-page-peel-in bg-[#f3f3ff]">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Professional Poster Generator
        </h2>
        <p className="text-gray-600">Create stunning adaptive professional posters with CATECH branding</p>
      </div>

      {/* Upload section */}
      <div className="space-y-4">
        <div className="border-2 border-dashed border-[#ff9900]/40 rounded-xl p-6 text-center bg-white hover:border-[#ff9900] transition-all duration-300">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="flex flex-col items-center space-y-2">
              <Upload className="text-[#ff9900]" size={48} />
              <p className="text-gray-700 font-semibold">Upload Your Image</p>
              <p className="text-gray-500 text-sm">PNG, JPG - No compression, maintains aspect ratio</p>
            </div>
          </label>
        </div>

        {uploadedImage && (
          <div className="animate-fade-in">
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-full h-48 object-cover rounded-lg border-2 border-[#ff9900]/30 shadow-lg"
            />
          </div>
        )}

        {/* Input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Tagline (Left-aligned)</label>
            <input
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g., Stay Cool"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none text-black bg-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Main Text (Bold, Left-aligned)</label>
            <input
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
              placeholder="e.g., Happy"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none text-black bg-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Script Text (Decorative, Left-aligned)</label>
            <input
              value={scriptText}
              onChange={(e) => setScriptText(e.target.value)}
              placeholder="e.g., Easter"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none text-black bg-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Footer Text</label>
            <input
              value={footerText}
              onChange={(e) => setFooterText(e.target.value)}
              placeholder="Contact information"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none text-black bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Quote/Scripture (Left-aligned)</label>
            <textarea
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="e.g., He is not here, for He has risen, as He said..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none resize-none text-black bg-white"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Quote Reference</label>
            <input
              value={quoteReference}
              onChange={(e) => setQuoteReference(e.target.value)}
              placeholder="e.g., Matthew 28:6"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none text-black bg-white"
            />
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={generateDesign}
          disabled={!uploadedImage || isGenerating}
          className="w-full py-4 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Creating Professional Poster...</span>
            </>
          ) : (
            <>
              <Wand2 size={20} />
              <span>Generate Professional Poster</span>
            </>
          )}
        </button>
      </div>

      {/* Generated design */}
      {generatedDesign && (
        <div className="animate-scale-in space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <ImageIcon className="text-[#ff9900]" size={24} />
            Your Professional Poster
          </h3>
          <div className="relative bg-white p-4 rounded-lg">
            <img
              src={generatedDesign}
              alt="Generated Poster"
              className="w-full rounded-lg border-2 border-[#ff9900]/30 shadow-xl"
            />
            <div className="absolute top-6 right-6 bg-[#ff9900] text-white px-3 py-1 rounded text-sm font-bold">
              CATECH PROFESSIONAL
            </div>
          </div>
          <button
            onClick={downloadDesign}
            className="w-full py-4 bg-gradient-to-r from-[#017020] to-[#ff9900] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
          >
            <Download size={20} />
            <span>Download High-Quality Poster</span>
          </button>
        </div>
      )}

      {/* Reference showcase */}
      <div className="bg-white rounded-xl p-6 border border-[#ff9900]/20">
        <h4 className="text-lg font-bold text-[#017020] mb-4 text-center">Design Features</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">L</span>
            </div>
            <p className="text-gray-600">Left Aligned</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#017020] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">N</span>
            </div>
            <p className="text-gray-600">No Compression</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">Q</span>
            </div>
            <p className="text-gray-600">Quote Section</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">W</span>
            </div>
            <p className="text-gray-600">Right Watermark</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGeneratorPage;
