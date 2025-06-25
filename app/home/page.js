"use client"
// pages/index.jsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  BarChart,
  Users,
  Shield,
  Layers,
  Star,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedAIChat from '@/components/AnimatedAIChat';
// import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce errors.',
    icon: <Zap className="size-5" />,
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with real-time data visualization and reporting.',
    icon: <BarChart className="size-5" />,
  },
  {
    title: 'Team Collaboration',
    description: 'Work together seamlessly with integrated communication tools.',
    icon: <Users className="size-5" />,
  },
  {
    title: 'Enterprise Security',
    description: 'Keep your data safe with end-to-end encryption and compliance features.',
    icon: <Shield className="size-5" />,
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools through our extensive API ecosystem.',
    icon: <Layers className="size-5" />,
  },
  {
    title: '24/7 Support',
    description: 'Get help whenever you need it with our dedicated support team.',
    icon: <Star className="size-5" />,
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden text-white bg-[#07080A]">
      {/* SPLINE BACKGROUND SECTION */}
      <div className="relative w-full h-screen">
        {/* <Spline
          scene="https://prod.spline.design/lq9VhNcDjdCW-zwT/scene.splinecode"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        /> */}

        {/* Navbar and Chat UI */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="absolute bottom-30 p-4 w-full flex justify-center z-30 mb-24">
            <AnimatedAIChat />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="w-full py-20 md:py-15 flex justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <Badge className="rounded-full px-8 py-3 text-md font-medium" variant="secondary">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[800px] text-gray-400 md:text-lg">
              Our comprehensive platform provides all the tools you need to streamline your workflow, boost productivity, and achieve your goals.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <Card className="text-white h-full overflow-hidden border-[#272727] bg-[#070707] backdrop-blur transition-all hover:shadow-md">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full py-20 md:py-32 bg-[#07080A] relative overflow-hidden flex justify-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-white text-black">
              Products
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Our Innovative Solutions
            </h2>
            <p className="max-w-[800px] text-gray-400 md:text-lg">
              Explore our cutting-edge products designed to empower your business.
            </p>
          </motion.div>

<div className="mx-auto max-w-5xl">
  <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
    {[
      {
        title: 'API',
        subtitle: 'Smart Surveillance',
        features: ['AI-powered detection', 'Low latency video analytics', 'Cloud/Edge compatible'],
        cta: 'Learn More',
      },
      {
        title: 'DOCS',
        subtitle: 'Enterprise Assistant',
        features: ['Custom-trained chatbots', 'Multi-language NLP', 'Seamless integrations'],
        cta: 'Learn More',
        popular: true,
      },
      {
        title: 'ViV AI',
        subtitle: 'Predictive Security',
        features: ['Threat detection AI', 'Behavior analytics', 'Automated response'],
        cta: 'Learn More',
      },
    ].map((product, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        <Card
          className={`relative overflow-hidden h-full border border-white/20 shadow-md'
          } bg-[#0B0B0D] transition duration-300 hover:scale-[1.01]`}
        >
          <CardContent className="p-6 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white">{product.title}</h3>
            <p className="text-lg font-medium text-gray-300 mt-1">{product.subtitle}</p>
            <ul className="space-y-3 my-6 flex-grow">
              {product.features.map((feature, j) => (
                <li key={j} className="flex items-center">
                  <Check className="mr-2 size-4 text-blue-500" />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full mt-auto rounded-full bg-gradient-to-r from-white to-white cursor-pointer text-black hover:opacity-90 transition`}
            >
              {product.cta}
            </Button>
            
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</div>

        </div>
      </section>

      {/* Pricing Section */}
              <section
                id="pricing"
                className="w-full py-20 md:py-20 bg-[#07080A] relative overflow-hidden flex justify-center"
              >
                <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

                <div className="container px-4 md:px-6 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                  >
                    <Badge className="rounded-full px-4 py-1.5 text-sm font-medium bg-white text-black">
                      Pricing
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                      Simple, Transparent Pricing
                    </h2>
                    <p className="max-w-[800px] text-gray-400 md:text-lg">
                      Choose the plan that's right for your business. All plans
                      include a 14-day free trial.
                    </p>
                  </motion.div>

                  <div className="mx-auto max-w-5xl">
                    <Tabs defaultValue="monthly" className="w-full">
                      <div className="flex justify-center mb-8">
                        <TabsList className="rounded-full p-1 bg-gray-800">
                          <TabsTrigger
                            value="monthly"
                            className="rounded-full px-6 cursor-pointer text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                          >
                            Monthly
                          </TabsTrigger>
                          <TabsTrigger
                            value="annually"
                            className="rounded-full px-6 cursor-pointer text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                          >
                            Annually (Save 20%)
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      <TabsContent value="monthly">
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                          {[
                            {
                              name: "Starter",
                              price: "$29",
                              description:
                                "Perfect for small teams and startups.",
                              features: [
                                "Up to 5 team members",
                                "Basic analytics",
                                "5GB storage",
                                "Email support",
                              ],
                              cta: "Start Free Trial",
                            },
                            {
                              name: "Professional",
                              price: "$79",
                              description: "Ideal for growing businesses.",
                              features: [
                                "Up to 20 team members",
                                "Advanced analytics",
                                "25GB storage",
                                "Priority email support",
                                "API access",
                              ],
                              cta: "Start Free Trial",
                              popular: true,
                            },
                            {
                              name: "Enterprise",
                              price: "$199",
                              description:
                                "For large organizations with complex needs.",
                              features: [
                                "Unlimited team members",
                                "Custom analytics",
                                "Unlimited storage",
                                "24/7 phone & email support",
                                "Advanced API access",
                                "Custom integrations",
                              ],
                              cta: "Contact Sales",
                            },
                          ].map((plan, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                              <Card
                                className={`relative overflow-hidden h-full ${
                                  plan.popular
                                    ? "border-gray-700 shadow-lg"
                                    : "border-gray-700 shadow-md"
                                } bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur`}
                              >
                                <CardContent className="p-6 flex flex-col h-full">
                                  <h3 className="text-2xl font-bold text-white">
                                    {plan.name}
                                  </h3>
                                  <div className="flex items-baseline mt-4">
                                    <span className="text-4xl font-bold text-white">
                                      {plan.price}
                                    </span>
                                    <span className="text-gray-400 ml-1">
                                      /month
                                    </span>
                                  </div>
                                  <p className="text-gray-400 mt-2">
                                    {plan.description}
                                  </p>
                                  <ul className="space-y-3 my-6 flex-grow">
                                    {plan.features.map((feature, j) => (
                                      <li key={j} className="flex items-center">
                                        <Check className="mr-2 size-4 text-blue-500" />
                                        <span className="text-gray-300">
                                          {feature}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                  <Button
                                    className={`w-full mt-auto rounded-full cursor-pointer ${
                                      plan.popular
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "bg-gray-700 hover:bg-gray-600"
                                    } text-white`}
                                    variant={
                                      plan.popular ? "default" : "outline"
                                    }
                                  >
                                    {plan.cta}
                                  </Button>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="annually">
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                          {[
                            {
                              name: "Starter",
                              price: "$23",
                              description:
                                "Perfect for small teams and startups.",
                              features: [
                                "Up to 5 team members",
                                "Basic analytics",
                                "5GB storage",
                                "Email support",
                              ],
                              cta: "Start Free Trial",
                            },
                            {
                              name: "Professional",
                              price: "$63",
                              description: "Ideal for growing businesses.",
                              features: [
                                "Up to 20 team members",
                                "Advanced analytics",
                                "25GB storage",
                                "Priority email support",
                                "API access",
                              ],
                              cta: "Start Free Trial",
                              popular: true,
                            },
                            {
                              name: "Enterprise",
                              price: "$159",
                              description:
                                "For large organizations with complex needs.",
                              features: [
                                "Unlimited team members",
                                "Custom analytics",
                                "Unlimited storage",
                                "24/7 phone & email support",
                                "Advanced API access",
                                "Custom integrations",
                              ],
                              cta: "Contact Sales",
                            },
                          ].map((plan, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                              <Card
                                className={`relative overflow-hidden h-full ${
                                  plan.popular
                                    ? "border-gray-700 shadow-lg"
                                    : "border-gray-700 shadow-md"
                                } bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur`}
                              >
                                <CardContent className="p-6 flex flex-col h-full">
                                  <h3 className="text-2xl font-bold text-white">
                                    {plan.name}
                                  </h3>
                                  <div className="flex items-baseline mt-4">
                                    <span className="text-4xl font-bold text-white">
                                      {plan.price}
                                    </span>
                                    <span className="text-gray-400 ml-1">
                                      /month
                                    </span>
                                  </div>
                                  <p className="text-gray-400 mt-2">
                                    {plan.description}
                                  </p>
                                  <ul className="space-y-3 my-6 flex-grow">
                                    {plan.features.map((feature, j) => (
                                      <li key={j} className="flex items-center">
                                        <Check className="mr-2 size-4 text-blue-500" />
                                        <span className="text-gray-300">
                                          {feature}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                  <Button
                                    className={`w-full mt-auto rounded-full ${
                                      plan.popular
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "bg-gray-700 hover:bg-gray-600"
                                    } text-white`}
                                    variant={
                                      plan.popular ? "default" : "outline"
                                    }
                                  >
                                    {plan.cta}
                                  </Button>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </section>
    </div>
  );
}