import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mic, Shield, Users, ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-muted/30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Takes 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-border/50">
              <Shield className="w-5 h-5 mr-3 text-primary" />
              <span className="text-foreground font-medium">Touchless • Safe • Accessible</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-none">
                Talk,{' '}
                <span className="relative">
                  Don't Touch
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full -rotate-1"></div>
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl text-foreground/80 font-medium">
                  VoiceKiosk for Safer Public Spaces
                </p>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Revolutionary touchless smart assistant transforming interactions in banks, hospitals, 
                  and government offices. Making public services accessible, safe, and intuitive for everyone.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4 h-auto group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Try Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-lg px-8 py-4 h-auto group backdrop-blur-sm"
              >
                Request Access
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">All Age Groups</div>
                  <div className="text-sm text-muted-foreground">Designed for everyone</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Privacy First</div>
                  <div className="text-sm text-muted-foreground">End-to-end secure</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Multilingual</div>
                  <div className="text-sm text-muted-foreground">50+ languages</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual - Takes 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main illustration card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mx-auto max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-2xl flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=500&fit=crop&crop=center"
                    alt="Person using voice-enabled kiosk in modern office setting"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Floating voice indicator */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-5 shadow-2xl animate-float">
                  <div className="relative">
                    <Mic className="w-8 h-8 text-white" />
                    <div className="absolute -inset-4 bg-accent/30 rounded-2xl animate-pulse"></div>
                  </div>
                </div>
                
                {/* Speech bubbles */}
                <div className="absolute -left-8 top-1/3 bg-primary text-white p-4 rounded-2xl shadow-xl max-w-48 transform -rotate-6">
                  <p className="font-medium">"Check my account balance"</p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                    <div className="w-0 h-0 border-l-8 border-l-primary border-y-6 border-y-transparent"></div>
                  </div>
                </div>
                
                <div className="absolute -right-8 bottom-1/3 bg-white text-foreground p-4 rounded-2xl shadow-xl max-w-48 transform rotate-6 border border-border/20">
                  <p className="font-medium">"Your balance is $2,850.42"</p>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
                    <div className="w-0 h-0 border-r-8 border-r-white border-y-6 border-y-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 right-16 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-0 w-3 h-3 bg-accent/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}