const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h2>
                    Get In <span className="text-blue-500"> Touch</span>
                </h2>

                <p>
                   I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            

                <form action="">
                    <div>
                        <label htmlFor="">
                            Your Email
                        </label>
                        <input 
                        type="text" 
                        />

                    </div>

                    <div>
                        <label htmlFor="">
                            Message
                        </label>
                        <textarea name="" id="">

                        </textarea>
                    </div>

                    <button>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;