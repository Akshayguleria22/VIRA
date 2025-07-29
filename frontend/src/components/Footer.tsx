import { Mic, Mail, Phone, MapPin, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-foreground to-foreground/90 text-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info - spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight">VoiceKiosk</span>
                <div className="text-sm text-background/70 -mt-1">Smart Assistant Platform</div>
              </div>
            </div>
            
            <p className="text-background/80 text-lg leading-relaxed">
              Revolutionizing public service interactions with touchless, voice-enabled technology. 
              Making services safer, more accessible, and efficient for everyone.
            </p>
            
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-12 h-12 bg-background/10 hover:bg-background/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Social className="w-5 h-5 text-background/70 hover:text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xl font-bold text-background">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Use Cases', 'Features', 'Documentation', 'Support', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-background/70 hover:text-background transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - spans 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xl font-bold text-background">Get in Touch</h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'akshayguleria700@gmail.com', href: 'mailto:akshayguleria700@gmail.com' },
                { icon: Phone, text: '+91 9654868917', href: 'tel:+91 9654868917' },
                { icon: MapPin, text: 'Mohali, Punjab', href: '#' },
              ].map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-4 text-background/70 hover:text-background transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center group-hover:bg-background/20 transition-colors duration-200">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter - spans 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xl font-bold text-background">Stay Updated</h4>
            <p className="text-background/80 leading-relaxed">
              Get the latest updates on VoiceKiosk features, deployments, and industry insights.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-12 pr-32 rounded-xl"
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-lg"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-background/60 text-sm">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Hackathon Credit */}
        <div className="bg-background/5 rounded-2xl p-6 mb-12 border border-background/10">
          <div className="text-center space-y-2">
            <h5 className="font-semibold text-background">🏆 Hackathon Project</h5>
            <p className="text-background/70">
              VoiceKiosk was developed as part of a public service innovation hackathon, 
              demonstrating the potential of voice technology in improving accessibility and efficiency.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-background/70">
            © 2025 VoiceKiosk. All rights reserved. Built with ❤️ for accessible public services.
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility', 'GDPR Compliance'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
