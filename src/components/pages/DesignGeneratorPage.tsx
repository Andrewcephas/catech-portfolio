
import { useState } from 'react';
import { Upload, Download, Wand2, Image as ImageIcon } from 'lucide-react';

const DesignGeneratorPage = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [designText, setDesignText] = useState('');
  const [subText, setSubText] = useState('');
  const [quote, setQuote] = useState('');
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
    if (!uploadedImage || !designText) return;

    setIsGenerating(true);

    setTimeout(() => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (ctx) {
        canvas.width = 1080;
        canvas.height = 1080;

        const img = new Image();
        img.onload = () => {
          // White background
          ctx.fillStyle = '#f3f3ff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Orange accent stripes at top and bottom
          ctx.fillStyle = '#ff9900';
          ctx.fillRect(0, 0, canvas.width, 15);
          ctx.fillRect(0, canvas.height - 15, canvas.width, 15);

          // Logo section at top
          const logoY = 60;
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 48px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('CATECH', canvas.width / 2, logoY);

          ctx.fillStyle = '#017020';
          ctx.font = 'bold 24px Arial, sans-serif';
          ctx.fillText('SOLUTIONS', canvas.width / 2, logoY + 35);

          // Dynamic layout based on image aspect ratio
          const imgAspectRatio = img.width / img.height;
          let leftSectionWidth, rightSectionWidth, imgSize, imgX, imgY;

          if (imgAspectRatio > 1) {
            // Landscape image - give more space to image
            leftSectionWidth = canvas.width * 0.65;
            rightSectionWidth = canvas.width * 0.35;
          } else {
            // Portrait image - balanced layout
            leftSectionWidth = canvas.width * 0.5;
            rightSectionWidth = canvas.width * 0.5;
          }

          // Image section (left side) - no compression, maintain aspect ratio
          const maxImgWidth = leftSectionWidth - 80;
          const maxImgHeight = 600;

          if (imgAspectRatio > maxImgWidth / maxImgHeight) {
            // Image is wider - fit by width
            imgSize = { width: maxImgWidth, height: maxImgWidth / imgAspectRatio };
          } else {
            // Image is taller - fit by height
            imgSize = { width: maxImgHeight * imgAspectRatio, height: maxImgHeight };
          }

          imgX = (leftSectionWidth - imgSize.width) / 2;
          imgY = logoY + 80;

          // Draw image with no compression - just clipping if needed
          ctx.save();
          ctx.beginPath();
          ctx.roundRect(imgX, imgY, imgSize.width, imgSize.height, 15);
          ctx.clip();

          // Calculate image positioning to center it
          const drawWidth = imgSize.width;
          const drawHeight = imgSize.height;
          const sourceAspect = img.width / img.height;
          const targetAspect = drawWidth / drawHeight;

          let sourceX = 0, sourceY = 0, sourceWidth = img.width, sourceHeight = img.height;

          if (sourceAspect > targetAspect) {
            // Source is wider - crop sides
            sourceWidth = img.height * targetAspect;
            sourceX = (img.width - sourceWidth) / 2;
          } else {
            // Source is taller - crop top/bottom
            sourceHeight = img.width / targetAspect;
            sourceY = (img.height - sourceHeight) / 2;
          }

          ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, imgX, imgY, drawWidth, drawHeight);
          ctx.restore();

          // Right section content
          const rightSectionX = leftSectionWidth + 20;
          const contentWidth = rightSectionWidth - 40;

          // Dynamic text sizing based on content length
          let currentY = logoY + 100;

          // Main text - adaptive font size
          const words = designText.split(' ');
          let mainFontSize = Math.max(36, Math.min(72, 800 / designText.length));

          ctx.fillStyle = '#ff9900';
          ctx.font = `bold ${mainFontSize}px Arial, sans-serif`;
          ctx.textAlign = 'left';

          // Word wrapping for main text
          words.forEach((word, index) => {
            const wordWidth = ctx.measureText(word).width;
            if (wordWidth > contentWidth) {
              // Word too long, reduce font size
              mainFontSize = Math.max(24, mainFontSize * 0.8);
              ctx.font = `bold ${mainFontSize}px Arial, sans-serif`;
            }

            if (index === 0) {
              ctx.fillStyle = '#ff9900';
            } else {
              ctx.fillStyle = '#017020';
            }

            // Simple word wrapping
            const lines = wrapText(ctx, word, contentWidth);
            lines.forEach(line => {
              ctx.fillText(line, rightSectionX, currentY);
              currentY += mainFontSize + 10;
            });
          });

          // Subtitle
          if (subText) {
            currentY += 20;
            const subFontSize = Math.max(18, Math.min(32, 400 / subText.length));
            ctx.fillStyle = '#666666';
            ctx.font = `italic ${subFontSize}px Arial, sans-serif`;

            const subLines = wrapText(ctx, subText, contentWidth);
            subLines.forEach(line => {
              ctx.fillText(line, rightSectionX, currentY);
              currentY += subFontSize + 8;
            });
          }

          // Quote section
          if (quote) {
            currentY += 30;
            const quoteFontSize = Math.max(16, Math.min(24, 300 / quote.length));

            // Quote background
            const quoteHeight = Math.ceil(quote.length / 40) * (quoteFontSize + 8) + 40;
            ctx.fillStyle = '#ff9900';
            ctx.fillRect(rightSectionX - 10, currentY - 20, contentWidth + 20, quoteHeight);

            // Quote text
            ctx.fillStyle = '#ffffff';
            ctx.font = `italic ${quoteFontSize}px Arial, sans-serif`;
            ctx.fillText('"', rightSectionX, currentY + 10);

            const quoteLines = wrapText(ctx, quote, contentWidth - 40);
            quoteLines.forEach(line => {
              ctx.fillText(line, rightSectionX + 20, currentY + 10);
              currentY += quoteFontSize + 8;
            });

            ctx.fillText('"', rightSectionX + contentWidth - 20, currentY);
          }

          // Footer section
          const footerHeight = 120;
          const footerY = canvas.height - footerHeight;

          // Footer background
          ctx.fillStyle = '#017020';
          ctx.fillRect(0, footerY, canvas.width, footerHeight);

          // Orange accent line
          ctx.fillStyle = '#ff9900';
          ctx.fillRect(0, footerY, canvas.width, 4);

          // Footer content
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 20px Arial, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText('📧 info@catech.co.ke', 40, footerY + 35);
          ctx.fillText('📞 +254 700 123 456', 40, footerY + 60);
          ctx.fillText('🌐 www.catech.co.ke', 40, footerY + 85);

          // Right side of footer
          ctx.textAlign = 'right';
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 28px Arial, sans-serif';
          ctx.fillText('PROFESSIONAL', canvas.width - 40, footerY + 40);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 18px Arial, sans-serif';
          ctx.fillText('Design Solutions', canvas.width - 40, footerY + 65);
          ctx.fillText('Creative Excellence', canvas.width - 40, footerY + 85);

          setGeneratedDesign(canvas.toDataURL('image/png', 1.0));
          setIsGenerating(false);
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
        <p className="text-gray-600">Create stunning adaptive professional posters with Catech branding</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Main Text *</label>
            <textarea
              value={designText}
              onChange={(e) => setDesignText(e.target.value)}
              placeholder="e.g., Stay Cool Summer"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none resize-none text-black bg-white"
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Subtitle</label>
            <textarea
              value={subText}
              onChange={(e) => setSubText(e.target.value)}
              placeholder="e.g., Happy Easter 2025"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none resize-none text-black bg-white"
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Inspiring Quote</label>
            <textarea
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="e.g., Success is not final, failure is not fatal"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none resize-none text-black bg-white"
              rows={2}
            />
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={generateDesign}
          disabled={!uploadedImage || !designText || isGenerating}
          className="w-full py-4 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Creating Adaptive Professional Poster...</span>
            </>
          ) : (
            <>
              <Wand2 size={20} />
              <span>Generate Adaptive Professional Poster</span>
            </>
          )}
        </button>
      </div>

      {/* Generated design */}
      {generatedDesign && (
        <div className="animate-scale-in space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <ImageIcon className="text-[#ff9900]" size={24} />
            Your Adaptive Professional Poster
          </h3>
          <div className="relative bg-white p-4 rounded-lg">
            <img
              src={generatedDesign}
              alt="Generated Poster"
              className="w-full rounded-lg border-2 border-[#ff9900]/30 shadow-xl"
            />
            <div className="absolute top-6 right-6 bg-[#ff9900] text-white px-3 py-1 rounded text-sm font-bold">
              CATECH ADAPTIVE
            </div>
          </div>
          <button
            onClick={downloadDesign}
            className="w-full py-4 bg-gradient-to-r from-[#017020] to-[#ff9900] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
          >
            <Download size={20} />
            <span>Download High-Quality Adaptive Poster</span>
          </button>
        </div>
      )}

      {/* Features showcase */}
      <div className="bg-white rounded-xl p-6 border border-[#ff9900]/20">
        <h4 className="text-lg font-bold text-[#017020] mb-4 text-center">Adaptive Design Features</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">A</span>
            </div>
            <p className="text-gray-600">Adaptive Text</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#017020] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">R</span>
            </div>
            <p className="text-gray-600">Responsive Layout</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">N</span>
            </div>
            <p className="text-gray-600">No Compression</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">Q</span>
            </div>
            <p className="text-gray-600">Quote Section</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGeneratorPage;
