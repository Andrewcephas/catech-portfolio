
import { useState } from 'react';
import { Upload, Download, Wand2, Image as ImageIcon } from 'lucide-react';

const DesignGeneratorPage = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [designText, setDesignText] = useState('');
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
    
    // Create a functional design generator
    setTimeout(() => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        canvas.width = 1000;
        canvas.height = 800;
        
        const img = new Image();
        img.onload = () => {
          // Background gradient
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#ffffff');
          gradient.addColorStop(1, '#f8f9fa');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw uploaded image with styling
          const imgWidth = 400;
          const imgHeight = 300;
          const imgX = 50;
          const imgY = 100;
          
          // Image border
          ctx.fillStyle = '#ff9900';
          ctx.fillRect(imgX - 5, imgY - 5, imgWidth + 10, imgHeight + 10);
          
          // Draw image
          ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
          
          // Main text styling
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 48px Arial, sans-serif';
          ctx.fillText(designText, 50, 480);
          
          // Decorative elements
          ctx.fillStyle = '#ff9900';
          ctx.fillRect(50, 500, 300, 4);
          
          // Catech branding section
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 36px Arial, sans-serif';
          ctx.fillText('CATECH SOLUTIONS', 50, 580);
          
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 24px Arial, sans-serif';
          ctx.fillText('Graphics & Design Studio', 50, 610);
          
          ctx.fillStyle = '#017020';
          ctx.font = '20px Arial, sans-serif';
          ctx.fillText('📧 info@catech.co.ke', 50, 650);
          ctx.fillText('📞 +254 700 123 456', 50, 680);
          ctx.fillText('🌐 www.catech.co.ke', 50, 710);
          
          // Logo area (placeholder)
          ctx.fillStyle = '#ff9900';
          ctx.fillRect(600, 450, 300, 200);
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 48px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('CATECH', 750, 530);
          ctx.font = 'bold 24px Arial, sans-serif';
          ctx.fillText('LOGO', 750, 560);
          
          // Watermark
          ctx.globalAlpha = 0.1;
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 120px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('CATECH', canvas.width / 2, canvas.height / 2);
          
          // QR code placeholder
          ctx.globalAlpha = 1;
          ctx.fillStyle = '#000000';
          ctx.fillRect(800, 600, 100, 100);
          ctx.fillStyle = '#ffffff';
          ctx.font = '12px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('QR CODE', 850, 655);
          
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
          AI Design Generator
        </h2>
        <p className="text-gray-600">Upload an image and add text to create professional designs</p>
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
              <p className="text-gray-700 font-semibold">Click to upload an image</p>
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

        {/* Text input with black text */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Design Text</label>
          <textarea
            value={designText}
            onChange={(e) => setDesignText(e.target.value)}
            placeholder="Enter text for your design..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none resize-none text-black bg-white"
            rows={3}
            style={{ color: '#000000' }}
          />
        </div>

        {/* Generate button */}
        <button
          onClick={generateDesign}
          disabled={!uploadedImage || !designText || isGenerating}
          className="w-full py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Generating Professional Design...</span>
            </>
          ) : (
            <>
              <Wand2 size={20} />
              <span>Generate Design</span>
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
          <img
            src={generatedDesign}
            alt="Generated Design"
            className="w-full rounded-lg border-2 border-[#ff9900]/30 shadow-xl"
          />
          <button
            onClick={downloadDesign}
            className="w-full py-3 bg-gradient-to-r from-[#017020] to-[#ff9900] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
          >
            <Download size={20} />
            <span>Download High-Quality Design</span>
          </button>
        </div>
      )}

      {/* Features info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 rounded-lg border border-[#ff9900]/20">
          <h4 className="font-semibold text-[#017020] mb-2">What's Included:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Professional branding</li>
            <li>• Contact information</li>
            <li>• High-resolution output</li>
            <li>• QR code integration</li>
          </ul>
        </div>
        <div className="p-4 bg-gradient-to-r from-[#017020]/10 to-[#ff9900]/10 rounded-lg border border-[#017020]/20">
          <h4 className="font-semibold text-[#ff9900] mb-2">Catech Solutions:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Graphics & Design</li>
            <li>• Professional layouts</li>
            <li>• Brand consistency</li>
            <li>• Digital marketing ready</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesignGeneratorPage;
