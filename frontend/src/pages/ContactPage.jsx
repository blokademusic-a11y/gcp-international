import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will contact you soon.');
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-light text-slate-800 mb-6 text-center tracking-wide">CONTACT</h1>
        <div className="w-16 h-[1px] bg-slate-300 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-light text-slate-800">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-slate-600 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">Office Address</h3>
                  <p className="text-slate-600 text-sm">
                    International Finance Centre<br />
                    Sydney, Australia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-slate-600 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">Email</h3>
                  <p className="text-slate-600 text-sm">info@gcpinternational.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-slate-600 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">Phone</h3>
                  <p className="text-slate-600 text-sm">+61 2 9000 0000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <Input 
                  type="text" 
                  placeholder="Your name" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="How can we help you?" 
                  rows={6} 
                  required 
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;