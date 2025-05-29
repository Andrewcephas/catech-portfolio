
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
        canvas.width = 1200;
        canvas.height = 1200;
        
        const img = new Image();
        img.onload = () => {
          // Professional gradient background similar to reference
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#ffffff');
          gradient.addColorStop(0.3, '#f8f9fa');
          gradient.addColorStop(0.7, '#e9ecef');
          gradient.addColorStop(1, '#dee2e6');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Catech Logo area (top)
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 36px Arial, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText('CATECH', 50, 60);
          
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 20px Arial, sans-serif';
          ctx.fillText('SOLUTIONS - GRAPHICS', 50, 85);
          
          // Decorative elements around logo
          ctx.strokeStyle = '#ff9900';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(300, 50, 25, 0, Math.PI * 2);
          ctx.stroke();
          
          // Main content area
          const imgWidth = 500;
          const imgHeight = 600;
          const imgX = 600;
          const imgY = 200;
          
          // Image with professional frame
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(imgX - 10, imgY - 10, imgWidth + 20, imgHeight + 20);
          ctx.strokeStyle = '#017020';
          ctx.lineWidth = 4;
          ctx.strokeRect(imgX - 10, imgY - 10, imgWidth + 20, imgHeight + 20);
          
          // Draw uploaded image
          ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
          
          // Main text styling (left side)
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 72px Arial, sans-serif';
          ctx.textAlign = 'left';
          const lines = designText.split(' ');
          let yPos = 300;
          
          lines.forEach((line, index) => {
            if (index === 0) {
              ctx.fillStyle = '#ff9900';
            } else {
              ctx.fillStyle = '#000000';
            }
            ctx.fillText(line, 50, yPos);
            yPos += 80;
          });
          
          // Subtitle if provided
          if (subText) {
            ctx.fillStyle = '#ff9900';
            ctx.font = 'italic 36px Arial, sans-serif';
            ctx.fillText(subText, 50, yPos + 20);
            yPos += 60;
          }
          
          // Professional quote area
          ctx.fillStyle = '#000000';
          ctx.font = '24px Arial, sans-serif';
          ctx.fillText('"Professional designs that', 50, yPos + 50);
          ctx.fillText('speak your brand language"', 50, yPos + 80);
          
          // Orange accent bar
          ctx.fillStyle = '#ff9900';
          ctx.fillRect(50, yPos + 100, 400, 8);
          
          // Catech branding section (bottom)
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 48px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('CATECH', canvas.width / 2, 950);
          
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 28px Arial, sans-serif';
          ctx.fillText('SOLUTIONS', canvas.width / 2, 985);
          
          // Contact information
          ctx.fillStyle = '#000000';
          ctx.font = '22px Arial, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText('📧 info@catech.co.ke', 50, 1050);
          ctx.fillText('📞 +254 700 123 456', 350, 1050);
          ctx.fillText('🌐 www.catech.co.ke', 650, 1050);
          
          // Professional watermark
          ctx.globalAlpha = 0.1;
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 150px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate(-Math.PI / 6);
          ctx.fillText('CATECH', 0, 0);
          ctx.restore();
          
          // QR code placeholder (bottom right)
          ctx.globalAlpha = 1;
          ctx.fillStyle = '#000000';
          ctx.fillRect(950, 1000, 120, 120);
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 14px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('SCAN FOR', 1010, 1145);
          ctx.fillText('PORTFOLIO', 1010, 1165);
          
          // Professional border
          ctx.strokeStyle = '#ff9900';
          ctx.lineWidth = 8;
          ctx.strokeRect(0, 0, canvas.width, canvas.height);
          
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
      link.download = 'catech-professional-design.png';
      link.click();
    }
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto animate-slide-up">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Professional Design Generator
        </h2>
        <p className="text-gray-600">Create stunning professional designs with Catech branding</p>
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
              style={{ color: '#000000' }}
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
              style={{ color: '#000000' }}
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
              <span>Creating Professional Design...</span>
            </>
          ) : (
            <>
              <Wand2 size={20} />
              <span>Generate Professional Design</span>
            </>
          )}
        </button>
      </div>

      {/* Generated design */}
      {generatedDesign && (
        <div className="animate-scale-in space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <ImageIcon className="text-[#ff9900]" size={24} />
            Your Professional Design
          </h3>
          <div className="relative">
            <img
              src={generatedDesign}
              alt="Generated Design"
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
            <span>Download High-Quality Design</span>
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
