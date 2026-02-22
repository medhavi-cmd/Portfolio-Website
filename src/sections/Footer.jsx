import { Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-white/10 flex justify-between items-center flex-wrap gap-5">
      
      <div className="text-neutral-400 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        
        <div className="social-icon">
          <a
            href="https://github.com/medhavi-cmd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <Github className="text-white" size={20} />
          </a>
        </div>

        <div className="social-icon">
          <a href="mailto:medhavisingh290@gmail.com"
             className="flex items-center justify-center w-full h-full">
            <Mail className="text-white" size={20} />
          </a>
        </div>

        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/medhavi-singh-63812b337/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <Linkedin className="text-white" size={20} />
          </a>
        </div>

      </div>

      <p className="text-neutral-400">
        © {new Date().getFullYear()} Medhavi Singh. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;