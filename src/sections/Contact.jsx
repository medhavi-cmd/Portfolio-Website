import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="c-space my-20" id="contact">
      <h3 className="text-heading">Contact Me</h3>

      <div className="relative flex items-center justify-center flex-col pt-10">
        <div className="contact-container bg-black-200 rounded-2xl p-10 border border-black-300 w-full max-w-xl text-center">
          <h3 className="headtext">Let's Talk</h3>
          <p className="text-lg text-neutral-400 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>

          <div className="mt-8 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3 text-neutral-300">
              <Mail className="w-6 h-6 text-neutral-400" />
              <a href="mailto:medhavisingh290@gmail.com" className="hover:text-white transition-colors">
                medhavisingh290@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-neutral-300">
              <MapPin className="w-6 h-6 text-neutral-400" />
              <span>Gurgaon, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

