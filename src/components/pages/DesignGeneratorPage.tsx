
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
    
    // Simulate design generation
    setTimeout(() => {
      // Create a canvas with the uploaded image and text overlay
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        canvas.width = 800;
        canvas.height = 600;
        
        // Create a simple design with image and text
        const img = new Image();
        img.onload = () => {
          // Draw background
          ctx.fillStyle = '#f8f9fa';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw uploaded image
          ctx.drawImage(img, 50, 50, 300, 200);
          
          // Add text
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 48px Arial';
          ctx.fillText(designText, 50, 300);
          
          // Add Catech branding
          ctx.fillStyle = '#ff9900';
          ctx.font = 'bold 24px Arial';
          ctx.fillText('CATECH SOLUTIONS', 50, 500);
          ctx.fillText('Graphics & Design', 50, 530);
          ctx.fillText('Contact: info@catech.co.ke', 50, 560);
          
          // Add watermark
          ctx.globalAlpha = 0.3;
          ctx.fillStyle = '#017020';
          ctx.font = 'bold 72px Arial';
          ctx.fillText('CATECH', 400, 400);
          
          setGeneratedDesign(canvas.toDataURL());
          setIsGenerating(false);
        };
        img.src = uploadedImage;
      }
    }, 2000);
  };

  const downloadDesign = () => {
    if (generatedDesign) {
      const link = document.createElement('a');
      link.href = generatedDesign;
      link.download = 'catech-design.png';
      link.click();
    }
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          AI Design Generator
        </h2>
        <p className="text-gray-600">Upload an image and add text to create stunning designs</p>
      </div>

      {/* Upload section */}
      <div className="space-y-4">
        <div className="border-2 border-dashed border-[#ff9900]/40 rounded-xl p-6 text-center bg-gradient-to-br from-[#ff9900]/5 to-[#017020]/5">
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
              className="w-full h-48 object-cover rounded-lg border-2 border-[#ff9900]/30"
            />
          </div>
        )}

        {/* Text input */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Design Text</label>
          <textarea
            value={designText}
            onChange={(e) => setDesignText(e.target.value)}
            placeholder="Enter text for your design..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#ff9900] focus:outline-none resize-none"
            rows={3}
          />
        </div>

        {/* Generate button */}
        <button
          onClick={generateDesign}
          disabled={!uploadedImage || !designText || isGenerating}
          className="w-full py-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Generating Design...</span>
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
        <div className="animate-fade-in space-y-4">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <ImageIcon className="text-[#ff9900]" size={24} />
            Generated Design
          </h3>
          <img
            src={generatedDesign}
            alt="Generated Design"
            className="w-full rounded-lg border-2 border-[#ff9900]/30 shadow-lg"
          />
          <button
            onClick={downloadDesign}
            className="w-full py-3 bg-gradient-to-r from-[#017020] to-[#ff9900] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download Design</span>
          </button>
        </div>
      )}

      {/* Watermark info */}
      <div className="text-center p-4 bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 rounded-lg border border-[#ff9900]/20">
        <p className="text-sm text-gray-600">
          All generated designs include Catech Solutions branding and contact information
        </p>
      </div>
    </div>
  );
};

export default DesignGeneratorPage;
