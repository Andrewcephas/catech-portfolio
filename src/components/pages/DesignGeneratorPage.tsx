
import { useState } from 'react';
import { Upload, Download, Wand2, Image as ImageIcon } from 'lucide-react';

const DesignGeneratorPage = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [designText, setDesignText] = useState('');
  const [subText, setSubText] = useState('');
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
          // Professional gradient background
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#1a1a1a');
          gradient.addColorStop(0.5, '#2d2d2d');
          gradient.addColorStop(1, '#1a1a1a');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Main image area with gradient mask (no rectangle border)
          const imgSize = 600;
          const imgX = (canvas.width - imgSize) / 2;
          const imgY = 150;
          
          // Create circular clipping path for image
          ctx.save();
          ctx.beginPath();
          ctx.arc(imgX + imgSize/2, imgY + imgSize/2, imgSize/2, 0, Math.PI * 2);
          ctx.clip();
          
          // Draw image
          ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
          
          // Add gradient overlay to image
          const imgGradient = ctx.createRadialGradient(
            imgX + imgSize/2, imgY + imgSize/2, 0,
            imgX + imgSize/2, imgY + imgSize/2, imgSize/2
          );
          imgGradient.addColorStop(0, 'rgba(0,0,0,0)');
          imgGradient.addColorStop(0.7, 'rgba(0,0,0,0.2)');
          imgGradient.addColorStop(1, 'rgba(0,0,0,0.8)');
          ctx.fillStyle = imgGradient;
          ctx.fillRect(imgX, imgY, imgSize, imgSize);
          
          ctx.restore();
          
          // CATECH LOGO - Center top
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 48px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('CATECH', canvas.width / 2, 80);
          
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 24px Arial, sans-serif';
          ctx.fillText('SOLUTIONS', canvas.width / 2, 110);
          
          // Main text below image
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 72px Arial, sans-serif';
          ctx.textAlign = 'center';
          
          const words = designText.split(' ');
          let yPos = imgY + imgSize + 80;
          
          words.forEach((word, index) => {
            if (index === 0) {
              ctx.fillStyle = '#ff9900';
              ctx.font = 'bold 84px Arial, sans-serif';
            } else {
              ctx.fillStyle = '#ffffff';
              ctx.font = 'bold 72px Arial, sans-serif';
            }
            ctx.fillText(word, canvas.width / 2, yPos);
            yPos += 80;
          });
          
          // Subtitle
          if (subText) {
            ctx.fillStyle = '#cccccc';
            ctx.font = 'italic 36px Arial, sans-serif';
            ctx.fillText(subText, canvas.width / 2, yPos + 20);
            yPos += 60;
          }
          
          // Footer background rectangle
          const footerHeight = 120;
          const footerY = canvas.height - footerHeight;
          
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, footerY, canvas.width, footerHeight);
          
          // Orange accent line
          ctx.fillStyle = '#ff9900';
          ctx.fillRect(0, footerY, canvas.width, 4);
          
          // Footer content
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 24px Arial, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText('📧 info@catech.co.ke', 50, footerY + 35);
          ctx.fillText('📞 +254 700 123 456', 50, footerY + 65);
          ctx.fillText('🌐 www.catech.co.ke', 50, footerY + 95);
          
          // Right side footer
          ctx.textAlign = 'right';
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 32px Arial, sans-serif';
          ctx.fillText('GRAPHICS', canvas.width - 50, footerY + 40);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 20px Arial, sans-serif';
          ctx.fillText('Professional Design Solutions', canvas.width - 50, footerY + 70);
          
          // Watermark - subtle
          ctx.globalAlpha = 0.05;
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 120px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate(-Math.PI / 12);
          ctx.fillText('CATECH', 0, 0);
          ctx.restore();
          ctx.globalAlpha = 1;
          
          // QR code placeholder
          const qrSize = 80;
          const qrX = canvas.width - qrSize - 20;
          const qrY = 20;
          
          ctx.fillStyle = '#000000';
          ctx.fillRect(qrX, qrY, qrSize, qrSize);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 10px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('SCAN FOR', qrX + qrSize/2, qrY + qrSize + 15);
          ctx.fillText('PORTFOLIO', qrX + qrSize/2, qrY + qrSize + 28);
          
          setGeneratedDesign(canvas.toDataURL('image/png', 1.0));
          setIsGenerating(false);
        };
        img.src = uploadedImage;
      }
    }, 3000);
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
    <div className="h-full space-y-6 overflow-y-auto animate-slide-up">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Professional Poster Generator
        </h2>
        <p className="text-gray-600">Create stunning professional posters with Catech branding</p>
      </div>

      {/* Upload section */}
      <div className="space-y-4">
        <div className="border-2 border-dashed border-[#ff9900]/40 rounded-xl p-6 text-center bg-gradient-to-br from-[#ff9900]/5 to-[#017020]/5 hover:border-[#ff9900] transition-all duration-300">
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
              <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
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
            <label className="block text-gray-700 font-semibold">Main Text</label>
            <textarea
              value={designText}
              onChange={(e) => setDesignText(e.target.value)}
              placeholder="e.g., Stay Cool"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none resize-none text-black bg-white"
              rows={2}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Subtitle (Optional)</label>
            <textarea
              value={subText}
              onChange={(e) => setSubText(e.target.value)}
              placeholder="e.g., Happy Easter"
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
          <div className="relative">
            <img
              src={generatedDesign}
              alt="Generated Poster"
              className="w-full rounded-lg border-2 border-[#ff9900]/30 shadow-xl"
            />
            <div className="absolute top-2 right-2 bg-[#ff9900] text-white px-2 py-1 rounded text-sm font-bold">
              CATECH BRANDED
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

      {/* Features showcase */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
        <h4 className="text-lg font-bold text-[#017020] mb-4 text-center">Professional Features Included</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff9900] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">C</span>
            </div>
            <p className="text-gray-600">Catech Logo</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#017020] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">W</span>
            </div>
            <p className="text-gray-600">Watermark</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">Q</span>
            </div>
            <p className="text-gray-600">QR Code</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">H</span>
            </div>
            <p className="text-gray-600">HD Quality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGeneratorPage;
