import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For static hosting, you can integrate with services like Formspree, EmailJS, or Netlify Forms
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[#2c4c6e] mb-4 tracking-wide">CONTACT</h1>
          <div className="w-16 h-[1px] bg-[#ddd] mx-auto mb-6"></div>
          <p className="text-[#666] text-sm">Corporate Finance & Advisory, International Trade & Development</p>
          <p className="text-[#666] text-sm">Est. 1989</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Office Addresses */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#2c4c6e] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Beijing Office
              </h3>
              <div className="text-[#666] space-y-1 text-sm">
                <p>Level 23, China World Tower B</p>
                <p>1 Jianguomenwai Avenue</p>
                <p>Chaoyang District</p>
                <p>Beijing 100004</p>
                <p>PR China</p>
                <div className="flex items-center gap-2 mt-3 text-[#2c4c6e]">
                  <Phone className="w-4 h-4" />
                  <span>+86 10 8509 8527</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2c4c6e] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Hong Kong Office
              </h3>
              <div className="text-[#666] space-y-1 text-sm">
                <p>12/F, Ruttonjee House, Ruttonjee Centre</p>
                <p>11 Duddell Street, Central</p>
                <p>Hong Kong</p>
                <div className="flex items-center gap-2 mt-3 text-[#2c4c6e]">
                  <Phone className="w-4 h-4" />
                  <span>+852 8193 0255</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-[#2c4c6e] mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </h3>
              <div className="space-y-2">
                <a href="mailto:corporate@gcp-international.com" className="block text-[#666] hover:text-[#2c4c6e] transition-colors text-sm">
                  corporate@gcp-international.com
                </a>
                <a href="mailto:corporate@gcpartners.asia" className="block text-[#666] hover:text-[#2c4c6e] transition-colors text-sm">
                  corporate@gcpartners.asia
                </a>
              </div>
            </div>

            <div>
              <a 
                href="https://www.linkedin.com/company/90473127" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#2c4c6e] hover:text-[#1a3a54] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-light text-[#2c4c6e] mb-6">Send us a message</h3>
            
            {submitted && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
                Thank you for your message. We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#555] mb-2">
                  Your Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#555] mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#555] mb-2">
                  Subject *
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Inquiry about services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#555] mb-2">
                  Your Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="How can we help you?"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#2c4c6e] hover:bg-[#1a3a54] text-white"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;