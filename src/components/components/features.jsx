import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Zap, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    title: "Modern Design",
    description: "Clean and modern interface built with the latest web technologies",
    icon: Layers
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed and exceptional user experience",
    icon: Zap
  },
  {
    title: "Secure",
    description: "Built with security best practices and data protection in mind",
    icon: Shield
  },
  {
    title: "Responsive",
    description: "Looks great on all devices, from mobile to desktop",
    icon: Smartphone
  }
]

export default function Features() {
  return (
    (<section id="features" className="py-16 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

