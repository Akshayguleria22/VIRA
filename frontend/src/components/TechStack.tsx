import { Card, CardContent, CardHeader } from './ui/card';
import { Brain, Cloud, Lock, Cpu, Database, Smartphone, ArrowRight, Mic } from 'lucide-react';

export function TechStack() {
  const techCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced neural networks powering natural language understanding',
      technologies: ['Deep Learning Models', 'Natural Language Processing', 'Voice Recognition Neural Networks', 'Intent Classification AI'],
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, reliable cloud architecture with global reach',
      technologies: ['Multi-Cloud Deployment', 'Auto-Scaling Systems', 'Global Load Balancing', 'Edge Computing'],
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Lock,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with privacy-first design principles',
      technologies: ['End-to-End Encryption', 'Zero Trust Architecture', 'Data Anonymization', 'Compliance Frameworks'],
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50'
    }
  ];

  const architecture = [
    { 
      component: 'Voice Capture', 
      description: 'High-fidelity microphone arrays with advanced noise cancellation',
      icon: Mic,
      color: 'bg-blue-500'
    },
    { 
      component: 'Speech Processing', 
      description: 'Real-time speech-to-text with 99.5% accuracy',
      icon: Cpu,
      color: 'bg-purple-500'
    },
    { 
      component: 'Intent Analysis', 
      description: 'AI-powered understanding of user requests and context',
      icon: Brain,
      color: 'bg-green-500'
    },
    { 
      component: 'Response Engine', 
      description: 'Intelligent response generation with personalization',
      icon: Database,
      color: 'bg-orange-500'
    },
    { 
      component: 'Voice Synthesis', 
      description: 'Natural text-to-speech with emotional intelligence',
      icon: Smartphone,
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-secondary/30"></div>
      <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-32 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-border/50 mb-6">
            <span className="text-primary font-semibold">Technology Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built on Modern
            <br />
            <span className="text-primary">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our robust, scalable architecture ensures reliability, security, and performance 
            for mission-critical public service environments.
          </p>
        </div>

        {/* Tech Categories - Creative overlapping layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {techCategories.map((category, index) => (
            <div key={index} className={`${index === 1 ? 'lg:mt-12' : ''} group`}>
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/20">
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-br ${category.gradient} rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* System Architecture Flow */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              System Architecture Flow
            </h3>
            <p className="text-lg text-muted-foreground">
              From voice input to intelligent response in milliseconds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {architecture.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground text-lg">{step.component}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {index < architecture.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="flex items-center">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                      <ArrowRight className="w-4 h-4 text-primary ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Performance stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt;1s</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">99.5%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}