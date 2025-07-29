import { Card, CardContent, CardHeader } from './ui/card';
import { Building2, Heart, FileText, ArrowRight } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: Building2,
      title: 'Banking Services',
      description: 'Empower customers with secure voice-guided banking interactions, from balance inquiries to transaction assistance.',
      features: ['Balance & Transaction Inquiry', 'Account Information Access', 'Form Completion Guidance', 'Service Hours & Locations'],
      stats: '40% faster service',
      gradient: 'from-blue-50 to-blue-100/50',
      iconBg: 'bg-blue-500',
      position: 'lg:mt-0'
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Streamline patient interactions with multilingual voice support for appointments, directions, and medical information.',
      features: ['Appointment Scheduling', 'Department Navigation', 'Multilingual Patient Support', 'Insurance Information'],
      stats: '60% reduced wait times',
      gradient: 'from-red-50 to-red-100/50',
      iconBg: 'bg-red-500',
      position: 'lg:mt-12'
    },
    {
      icon: FileText,
      title: 'Government Offices',
      description: 'Provide citizens instant access to public service information, queue management, and document guidance.',
      features: ['FAQ & Information Access', 'Token Queue Management', 'Document Requirements', 'Service Applications'],
      stats: '70% improvement in satisfaction',
      gradient: 'from-green-50 to-green-100/50',
      iconBg: 'bg-green-500',
      position: 'lg:mt-6'
    }
  ];

  return (
    <section id="use-cases" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-border/50 mb-6">
            <span className="text-primary font-semibold">Real-World Applications</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Public Services
            <br />
            <span className="text-primary">Across Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VoiceKiosk adapts seamlessly to various environments, making public services more accessible, 
            efficient, and user-friendly for everyone, regardless of age or technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => (
            <div key={index} className={`${useCase.position} group`}>
              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/20">
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-6 relative z-10">
                  {/* Icon with floating effect */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${useCase.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute -inset-2 ${useCase.iconBg} rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <div className="inline-flex px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {useCase.stats}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground">Key Capabilities:</h5>
                    <div className="grid grid-cols-1 gap-3">
                      {useCase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Learn more link */}
                  <div className="pt-4">
                    <button className="flex items-center text-primary hover:text-primary/80 transition-colors duration-200 group/link">
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}