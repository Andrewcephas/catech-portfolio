
import { useState } from 'react';
import { Calendar, User, ArrowRight, Globe, Palette, Lightbulb } from 'lucide-react';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Why Your Business Needs a Professional Website in 2025",
      excerpt: "In today's digital-first world, a website isn't just nice to have—it's essential for business survival and growth.",
      content: `In 2025, having a professional website is no longer optional for businesses—it's a fundamental requirement for success. Here's why:

**24/7 Accessibility**: Your website works around the clock, providing customers with information, services, and support even when your physical location is closed.

**Credibility and Trust**: 75% of consumers judge a company's credibility based on its website design. A professional website builds trust and establishes your business as legitimate and reliable.

**Global Reach**: A website breaks down geographical barriers, allowing you to reach customers worldwide and expand your market beyond local boundaries.

**Cost-Effective Marketing**: Compared to traditional advertising, a website provides long-term value and can generate leads at a fraction of the cost of print or broadcast media.

**Customer Insights**: Modern websites provide valuable analytics about customer behavior, preferences, and demographics, helping you make informed business decisions.

**Competitive Advantage**: While some businesses still lack an online presence, having a well-designed website sets you apart from competitors and positions you as forward-thinking.

**E-commerce Opportunities**: Even service-based businesses can benefit from online booking systems, payment processing, and digital service delivery.

At Catech Solutions, we create websites that not only look professional but also drive results. Contact us to transform your online presence.`,
      author: "Catech Team",
      date: "2025-01-15",
      category: "Web Development",
      icon: Globe,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How Graphic Design Elevates Your Business Brand",
      excerpt: "Great design isn't just about looking good—it's about communicating your brand's values and connecting with your audience on an emotional level.",
      content: `Graphic design is the silent ambassador of your brand. Every visual element tells a story about your business, and here's how professional design elevates your brand:

**First Impressions Matter**: You have 7 seconds to make a first impression. Professional graphic design ensures those crucial seconds work in your favor, creating instant brand recognition and trust.

**Brand Consistency**: Consistent visual elements across all platforms—from business cards to social media—create a cohesive brand experience that customers remember and trust.

**Emotional Connection**: Colors, typography, and imagery evoke emotions. Strategic design choices can make customers feel confident, excited, or comfortable with your brand.

**Communication Clarity**: Good design simplifies complex information, making your message clear and accessible to your target audience.

**Competitive Differentiation**: In crowded markets, distinctive design helps your business stand out and be memorable among competitors.

**Professional Credibility**: High-quality design signals that you're a serious, established business that pays attention to details.

**Marketing Effectiveness**: Well-designed marketing materials have higher engagement rates and conversion rates than generic designs.

**Brand Value**: Strong visual branding can increase business value by up to 20%, making your company more attractive to investors and customers.

Our design team at Catech understands the psychology of visual communication. We create designs that don't just look beautiful—they work strategically to grow your business.`,
      author: "Design Team",
      date: "2025-01-10",
      category: "Graphic Design",
      icon: Palette,
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Why Choose Creativity Over Generic Solutions",
      excerpt: "In a world of templates and cookie-cutter solutions, creativity is your competitive advantage. Here's why custom creative solutions matter.",
      content: `In an age of templates and automated solutions, creativity has become the ultimate differentiator. Here's why choosing creative, custom solutions over generic ones is crucial for your business:

**Unique Brand Identity**: Generic solutions make you look like everyone else. Creative approaches ensure your brand stands out with a unique personality that resonates with your specific audience.

**Problem-Solving Innovation**: Creative thinking leads to innovative solutions that generic templates simply can't provide. We solve your unique business challenges with tailored approaches.

**Authentic Storytelling**: Your business has a unique story. Creative solutions help tell that story authentically, rather than forcing your narrative into a pre-made mold.

**Flexibility and Scalability**: Custom creative solutions grow with your business. Unlike rigid templates, creative designs can evolve and adapt to your changing needs.

**Higher Engagement**: Original, creative content consistently outperforms generic content in engagement metrics, conversions, and customer retention.

**Brand Loyalty**: Customers connect more deeply with brands that demonstrate creativity and originality, leading to stronger loyalty and word-of-mouth marketing.

**Future-Proofing**: Creative solutions are built to last and adapt, while generic solutions quickly become outdated and commonplace.

**ROI Excellence**: While creative solutions may require more investment upfront, they deliver superior long-term returns through better performance and longevity.

**Cultural Relevance**: Creative approaches can be tailored to your specific market, culture, and audience, something generic solutions cannot achieve.

At Catech Solutions, we believe every business deserves a creative approach that reflects its unique value proposition. Don't settle for generic—choose creativity that drives results.`,
      author: "Creative Director",
      date: "2025-01-05",
      category: "Business Strategy",
      icon: Lightbulb,
      readTime: "6 min read"
    }
  ];

  const handleReadMore = (postId: number) => {
    setSelectedPost(selectedPost === postId ? null : postId);
  };

  return (
    <div className="h-full space-y-6 overflow-y-auto animate-page-peel-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Business Growth Blog
        </h2>
        <p className="text-gray-600">Insights on web development, design, and business growth strategies</p>
      </div>

      {/* Blog Posts */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
            {/* Post Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff9900] to-[#017020] rounded-lg flex items-center justify-center">
                    <post.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <span className="inline-block bg-[#ff9900]/10 text-[#ff9900] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#017020] transition-colors cursor-pointer">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleReadMore(post.id)}
                  className="flex items-center space-x-2 text-[#017020] hover:text-[#ff9900] transition-colors font-medium"
                >
                  <span>{selectedPost === post.id ? 'Show Less' : 'Read More'}</span>
                  <ArrowRight size={16} className={`transition-transform ${selectedPost === post.id ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>

            {/* Expandable Content */}
            {selectedPost === post.id && (
              <div className="p-6 bg-gray-50 animate-fade-in">
                <div className="prose prose-gray max-w-none">
                  {post.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h4 key={index} className="font-bold text-[#017020] mt-4 mb-2">
                          {paragraph.slice(2, -2)}
                        </h4>
                      );
                    }
                    return paragraph.trim() && (
                      <p key={index} className="mb-3 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-4 rounded-lg">
                    <h5 className="font-bold text-[#017020] mb-2">Ready to Get Started?</h5>
                    <p className="text-gray-700 mb-3">
                      Contact Catech Solutions today to discuss how we can help transform your business with creative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm">
                      <span className="text-[#ff9900] font-medium">📧 info@catech.co.ke</span>
                      <span className="text-[#017020] font-medium">📞 +254 700 123 456</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#ff9900] to-[#017020] rounded-xl p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
        <p className="mb-4">Subscribe to our newsletter for the latest insights on business growth and design trends.</p>
        <button className="bg-white text-[#017020] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
