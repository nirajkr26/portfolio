import { useState } from "react";

const Contact = () => {
 const [formData, setFormData] = useState({
     name: '',
     email: '',
     subject: '',
     message: '',
     botcheck: false
   });
   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
   const [statusMessage, setStatusMessage] = useState('');
   const [isStatusVisible, setIsStatusVisible] = useState(false);
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     const { name, value, type } = e.target;
     if (type === 'checkbox') {
       const checkbox = e.target as HTMLInputElement;
       setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
     } else {
       setFormData(prev => ({ ...prev, [name]: value }));
     }
   };
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setStatus('loading');
     setIsStatusVisible(true);
     setStatusMessage('Sending your message...');
 
     try {
       const response = await fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         },
         body: JSON.stringify({
           access_key: 'cdc36413-b2ec-461d-97cd-095f484042e3',
           ...formData
         })
       });
 
       const result = await response.json();
       if (result.success) {
         setStatus('success');
         setStatusMessage("Thanks for reaching out! I'll get back to you soon.");
         setFormData({ name: '', email: '', subject: '', message: '', botcheck: false });
 
         // Smooth fade out after 3 seconds
         setTimeout(() => {
           setIsStatusVisible(false);
           // Complete cleanup after transition finishes
           setTimeout(() => {
             setStatus('idle');
             setStatusMessage('');
           }, 500);
         }, 3000);
       } else {
         setStatus('error');
         setStatusMessage(result.message || 'Something went wrong. Please try again.');
 
         // Smooth fade out after 3 seconds
         setTimeout(() => {
           setIsStatusVisible(false);
           setTimeout(() => {
             setStatus('idle');
             setStatusMessage('');
           }, 500);
         }, 3000);
       }
     } catch (error) {
       console.error('Form submission error:', error);
       setStatus('error');
       setStatusMessage('Oops! There was a network error. Please check your connection.');
     }
   };
 
    return (
    <section id="contact" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              LET'S WORK<br />
              <span className="text-gray-700">TOGETHER</span>
            </h2>

            <div className="relative max-w-xl">
              {/* Floating particles */}
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>

              {/* Pulsing glow orbs - now static */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-green-500 rounded-full blur-[200px] pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-green-400 rounded-full blur-[100px] pointer-events-none"></div>

              {/* Animated gradient border card */}
              <div className="contact-card-wrapper">
                {/* Decorative Tilted Frames */}
                <div className="contact-frame frame-tilt-1"></div>
                <div className="contact-frame frame-tilt-2"></div>
                <div className="contact-frame frame-tilt-3"></div>

                <div className="relative bg-gray-950/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 overflow-hidden">
                  {/* Static decorative rings */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-green-500/20 rounded-full pointer-events-none"></div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-dashed border-green-500/30 rounded-full pointer-events-none"></div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-green-500/15 to-transparent rounded-tr-full pointer-events-none"></div>

                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-green-500/80 focus:outline-none focus:border-green-500/50 focus:bg-green-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your Email"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-green-500/80 focus:outline-none focus:border-green-500/50 focus:bg-green-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Subject"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-green-500/80 focus:outline-none focus:border-green-500/50 focus:bg-green-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500"
                      />
                    </div>
                    <div className="group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Message..."
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-green-500/80 focus:outline-none focus:border-green-500/50 focus:bg-green-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500 resize-none"
                      ></textarea>
                    </div>

                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: 'none' }}
                      checked={formData.botcheck}
                      onChange={handleChange}
                    />

                    {status !== 'idle' && (
                      <div className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-500 transform ${isStatusVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                        } ${status === 'error' ? 'bg-red-500/10 text-red-400' :
                          status === 'success' ? 'bg-yellow-600/10 text-yellow-500' :
                            'bg-green-500/10 text-green-400'
                        }`}>
                        {statusMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group relative w-full overflow-hidden bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:bg-green-500 hover:shadow-[0_8px_30px_rgba(249,115,22,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase text-xs">
                        Send Message
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Contact