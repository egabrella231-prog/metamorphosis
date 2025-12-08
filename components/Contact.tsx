import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, Phone, Facebook, MessageCircle, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'Web Design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/mjknbbdk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          service: 'Web Design',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
            setErrorMessage(data.errors.map((err: any) => err.message).join(", "));
        } else {
            setErrorMessage("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (error) {
      setErrorMessage("Oops! There was a problem connecting to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Metamorphose?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Get in touch with us today to discuss how we can transform your digital presence. 
              We are ready to build your website, automate your workflow, or create your AI workforce.
            </p>

            <div className="space-y-6">
              <a href="tel:+264813879841" className="flex items-center p-4 bg-gray-900 rounded-2xl shadow-sm hover:shadow-md hover:bg-gray-800 transition-all border border-gray-800">
                <div className="bg-orange-900/20 p-3 rounded-full text-meta-orange mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="text-lg font-semibold text-white">+264 81 387 9841</p>
                </div>
              </a>

              <a href="mailto:egabrella231@gmail.com" className="flex items-center p-4 bg-gray-900 rounded-2xl shadow-sm hover:shadow-md hover:bg-gray-800 transition-all border border-gray-800">
                <div className="bg-orange-900/20 p-3 rounded-full text-meta-orange mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="text-lg font-semibold text-white">egabrella231@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/264813879841" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-[#25D366] rounded-2xl shadow-sm hover:shadow-md hover:bg-[#20bd5a] transition-colors group">
                <div className="bg-white/20 p-3 rounded-full text-white mr-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-green-50">WhatsApp</p>
                  <p className="text-lg font-semibold text-white">Chat on WhatsApp</p>
                </div>
              </a>

              <a href="https://www.facebook.com/metamorphosis.167777/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-[#1877F2] rounded-2xl shadow-sm hover:shadow-md hover:bg-[#166fe5] transition-colors group">
                <div className="bg-white/20 p-3 rounded-full text-white mr-4">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-50">Facebook</p>
                  <p className="text-lg font-semibold text-white">Follow Metamorphosis</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-meta-orange focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-meta-orange focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-meta-orange focus:border-transparent outline-none transition-all"
                  disabled={isSubmitting}
                >
                  <option>Web Design</option>
                  <option>Automation Workflow</option>
                  <option>Agents Creation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-meta-orange focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {errorMessage && (
                <div className="flex items-center text-red-400 bg-red-900/20 p-3 rounded-lg text-sm border border-red-900/30">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              <Button 
                type="submit" 
                fullWidth 
                disabled={isSubmitting || submitted} 
                className={submitted ? "bg-green-600 hover:bg-green-700 border-transparent" : ""}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin mr-2 w-5 h-5" />
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center">
                    <CheckCircle2 className="mr-2 w-5 h-5" />
                    Message Sent!
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};