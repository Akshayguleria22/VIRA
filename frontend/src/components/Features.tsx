import { Card, CardContent, CardHeader } from './ui/card';
import { Mic, Globe, Users, Shield, Zap, Headphones } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Mic,
      title: 'Advanced Voice Interface',
      description: 'State-of-the-art speech recognition with adaptive noise cancellation for crystal-clear communication in any environment.',
      benefits: ['Natural language processing', 'Background noise filtering', 'Multi-accent recognition', 'Real-time feedback'],
      size: 'large',
      gradient: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Globe,
      title: 'Global Language Support',
      description: 'Comprehensive multilingual capabilities serving diverse communities with cultural sensitivity.',
      benefits: ['50+ languages supported', 'Real-time translation', 'Cultural adaptations', 'Regional dialects'],
      size: 'medium',
      gradient: 'from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-100'
    },
    {
      icon: Users,
      title: 'Universal Accessibility',
      description: 'Inclusive design ensuring usability for all ages and abilities.',
      benefits: ['Screen reader compatible', 'Large text options', 'Voice guidance', 'Motor impairment support'],
      size: 'medium',
      gradient: 'from-purple-50 to-violet-50',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption and privacy-first architecture protecting sensitive conversations.',
      benefits: ['End-to-end encryption', 'Local processing', 'Zero data retention', 'GDPR compliant'],
      size: 'large',
      gradient: 'from-red-50 to-rose-50',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100'
    },
    {
      icon: Zap,
      title: 'Lightning Response',
      description: 'Sub-second processing delivers instant responses for seamless user experience.',
      benefits: ['<1s response time', 'Edge computing', 'Optimized algorithms', 'Queue management'],
      size: 'medium',
      gradient: 'from-yellow-50 to-orange-50',
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100'
    },
    {
      icon: Headphones,
      title: 'Always Available',
      description: '24/7 operation with intelligent monitoring and predictive maintenance.',
      benefits: ['Continuous uptime', 'Self-diagnostics', 'Remote monitoring', 'Proactive alerts'],
      size: 'medium',
      gradient: 'from-gray-50 to-slate-50',
      iconColor: 'text-gray-600',
      iconBg: 'bg-gray-100'
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-border/50 mb-6">
            <span className="text-primary font-semibold">Cutting-Edge Technology</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <br />
            <span className="text-primary">Every User</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with enterprise-grade technology to ensure reliable, accessible, and secure voice interactions 
            that work seamlessly in any public service environment.
          </p>
        </div>

        {/* Creative grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* First row - Large, Medium, Medium stacked */}
          <div className="lg:col-span-2">
            <FeatureCard feature={features[0]} />
          </div>
          <div className="space-y-6">
            <FeatureCard feature={features[1]} />
            <FeatureCard feature={features[2]} />
          </div>
          <div className="lg:row-span-2">
            <FeatureCard feature={features[3]} isLargeTall />
          </div>
          
          {/* Second row - Two medium cards */}
          <div className="lg:col-span-1">
            <FeatureCard feature={features[4]} />
          </div>
          <div className="lg:col-span-1">
            <FeatureCard feature={features[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, isLargeTall = false }: { feature: any; isLargeTall?: boolean }) {
  return (
    <Card className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-2 border-border/50 hover:border-primary/20 group ${isLargeTall ? 'h-full' : ''}`}>
      {/* Gradient background overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <CardHeader className={`pb-4 relative z-10 ${isLargeTall ? 'pb-6' : ''}`}>
        <div className="relative mb-4">
          <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
            <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
          </div>
          <div className={`absolute -inset-2 ${feature.iconBg} rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
        </div>
        <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors duration-300 ${isLargeTall ? 'text-2xl' : 'text-xl'}`}>
          {feature.title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        <p className={`text-muted-foreground leading-relaxed ${isLargeTall ? 'text-lg' : ''}`}>
          {feature.description}
        </p>
        
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-2">
            {feature.benefits.map((benefit: string, benefitIndex: number) => (
              <div key={benefitIndex} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}