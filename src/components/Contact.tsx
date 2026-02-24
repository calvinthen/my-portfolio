import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const currentForm = formRef.current;

        if (currentForm === null) {
        setLoading(false);
        return;
    }

    emailjs
          .sendForm(
            "service_wt66nwb",    
            "template_nrb5ibr",   
            currentForm, 
            {
              publicKey: "mz8a17Ox1E3h88xFO",
            }
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you for contacting me :)");
              currentForm.reset();
            },
            (error) => {
              setLoading(false);
              console.error(error);
              alert("Something went wrong. Please try again.");
            }
          );
      };
      
  return (
    <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Get In <span className="text-blue-500"> Touch</span>
                </h2>

                <p className="text-gray-400 mb-12">
                   I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            

                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                            Your Email
                        </label>
                        <input 
                        type="email" 
                        id="email"
                        name="from_email"
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                        placeholder="example@gmail.com"
                        />

                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                            Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                          placeholder="Hi, i'd like to contact you..."
                        >

                        </textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300">
                       {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;