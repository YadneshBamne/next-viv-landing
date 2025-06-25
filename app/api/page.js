"use client";
import { useState } from "react";
import {
  Code,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Play,
  Copy,
  Check,
  BookOpen,
  Users,
  Sparkles,
  Database,
  Cloud,
  Lock,
  Cpu,
  BarChart3,
  MessageSquare,
  Image,
  FileText,
  Mic,
  Eye,
  ChevronRight,
  Star,
  Github,
  ExternalLink,
} from "lucide-react";

export default function VIVAPIPage() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`import { VIV } from 'viv-api';

const viv = new VIV({
  apiKey: process.env.VIV_API_KEY
});

const response = await viv.chat.completions.create({
  model: "viv-4",
  messages: [
    { role: "user", content: "Hello, VIV!" }
  ]
});`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const codeExamples = {
    chat: `import { VIV } from 'viv-api';

const viv = new VIV({
  apiKey: process.env.VIV_API_KEY
});

const completion = await viv.chat.completions.create({
  model: "viv-4",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Write a haiku about programming" }
  ],
  temperature: 0.7
});

console.log(completion.choices[0].message.content);`,

    image: `import { VIV } from 'viv-api';

const viv = new VIV({
  apiKey: process.env.VIV_API_KEY
});

const image = await viv.images.generate({
  prompt: "A serene landscape with mountains and a lake",
  size: "1024x1024",
  quality: "hd"
});

console.log(image.data[0].url);`,

    audio: `import { VIV } from 'viv-api';

const viv = new VIV({
  apiKey: process.env.VIV_API_KEY
});

const transcription = await viv.audio.transcriptions.create({
  file: fs.createReadStream("audio.mp3"),
  model: "whisper-1"
});

console.log(transcription.text);`,
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-gray-900">
      {/* Navigation */}
      {/* <nav className="sticky top-0 bg-[#07080A] backdrop-blur-xl border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">VIV</span>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  API
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Documentation
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Pricing
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Examples
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 font-medium">
                Sign in
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="py-20 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#121416] text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Introducing VIV-4 • Our most capable model yet</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Build AI into your
              <span className="bg-[#C4CFDF] bg-clip-text text-transparent">
                {" "}
                applications
              </span>
            </h1>

            <p className="text-xl text-white/45 mb-10 leading-relaxed max-w-3xl mx-auto">
              Access VIV's powerful AI models through our developer-friendly
              API. From natural language to code generation, images, and audio
              processing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black cursor-pointer px-8 py-3 rounded-lg transition-colors font-medium flex items-center space-x-2">
                <span>Start building</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-3 rounded-lg hover:text-black cursor-pointer hover:bg-gray-50 transition-colors font-medium flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>View demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-16 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Get started in minutes
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our API is designed to be simple and intuitive. Install our SDK
                and make your first API call in just a few lines of code.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">
                    RESTful API with SDKs for Python, Node.js, and more
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">
                    Comprehensive documentation and examples
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">24/7 developer support</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span className="text-sm">
                    {copiedCode ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>

              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{`import { VIV } from 'viv-api';

const viv = new VIV({
  apiKey: process.env.VIV_API_KEY
});

const response = await viv.chat.completions.create({
  model: "viv-4",
  messages: [
    { role: "user", content: "Hello, VIV!" }
  ]
});

console.log(response.choices[0].message.content);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful models for every use case
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our family of state-of-the-art models, each optimized
              for different tasks and performance requirements.
            </p>
          </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* VIV-4 */}
  <div className="bg-[#101214] rounded-2xl p-8 border border-[#1f2a37] relative overflow-hidden">
    <div className="absolute top-4 right-4">
      <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
        Most Capable
      </span>
    </div>
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
      <Cpu className="w-6 h-6 text-black" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">VIV-4</h3>
    <p className="text-gray-400 mb-6">
      Our most advanced model with superior reasoning, coding, and creative capabilities.
    </p>
    <div className="space-y-3 mb-6">
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">128K context window</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">Multimodal capabilities</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">Function calling</span>
      </div>
    </div>
    <button className="w-full cursor-pointer bg-white text-black py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
      Try VIV-4
    </button>
  </div>

  {/* VIV-3.5 */}
  <div className="bg-[#121416] rounded-2xl p-8 border border-[#1f2a37]">
    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-6">
      <Zap className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">VIV-3.5</h3>
    <p className="text-gray-400 mb-6">
      Fast and efficient model perfect for most conversational and text generation tasks.
    </p>
    <div className="space-y-3 mb-6">
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">32K context window</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">Cost-effective</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">Low latency</span>
      </div>
    </div>
    <button className="w-full cursor-pointer bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium">
      Try VIV-3.5
    </button>
  </div>

  {/* VIV-Mini */}
  <div className="bg-[#0f1a0f] rounded-2xl p-8 border border-green-900 relative overflow-hidden">
    <div className="absolute top-4 right-4">
      <span className="bg-green-900 text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
        Most Affordable
      </span>
    </div>
    <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-6">
      <MessageSquare className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">VIV-Mini</h3>
    <p className="text-gray-400 mb-6">
      Lightweight model optimized for simple tasks and high-volume applications.
    </p>
    <div className="space-y-3 mb-6">
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">8K context window</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">Ultra-fast responses</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check className="w-4 h-4 text-green-400" />
        <span className="text-sm text-gray-300">Lowest cost</span>
      </div>
    </div>
    <button className="w-full cursor-pointer bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
      Try VIV-Mini
    </button>
  </div>
</div>

        </div>
      </section>

      {/* Interactive Code Examples */}
      <section className="py-20 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore our capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From text generation to image creation and audio processing, see
              what you can build with VIV.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 rounded-xl p-2 shadow-sm max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex cursor-pointer items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "chat"
                  ? "bg-blue-100 text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat</span>
            </button>
            <button
              onClick={() => setActiveTab("image")}
              className={`flex cursor-pointer items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "image"
                  ? "bg-blue-100 text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Images</span>
            </button>
            <button
              onClick={() => setActiveTab("audio")}
              className={`flex cursor-pointer items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "audio"
                  ? "bg-blue-100 text-black"
                  : "text-white hover:text-white/80"
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>Audio</span>
            </button>
          </div>

          {/* Code Display */}
          <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy</span>
              </button>
            </div>

            <pre className="text-gray-300 text-sm overflow-x-auto leading-relaxed">
              <code>{codeExamples[activeTab]}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for developers
            </h2>
            <p className="text-xl text-white/45 max-w-3xl mx-auto">
              Everything you need to integrate AI into your applications with
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Enterprise Security
              </h3>
              <p className="text-white/45">
                SOC 2 compliant with enterprise-grade security and privacy
                controls.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-white/45">
                Optimized infrastructure for sub-second response times globally.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Global Scale
              </h3>
              <p className="text-white/45">
                99.9% uptime SLA with multi-region deployment and failover.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Rich Documentation
              </h3>
              <p className="text-white/45">
                Comprehensive guides, tutorials, and examples to get you
                started.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Expert Support
              </h3>
              <p className="text-white/45">
                Direct access to our team of AI engineers and researchers.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Developer Tools
              </h3>
              <p className="text-white/45">
                SDKs, CLI tools, and integrations for your favorite platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-white/45 max-w-3xl mx-auto">
              Pay only for what you use. No hidden fees, no minimum commitments.
            </p>
          </div>

          <div className=" rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  $0.01
                </div>
                <div className="text-white mb-4">per 1K tokens</div>
                <div className="text-sm text-white">VIV-Mini</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  $0.05
                </div>
                <div className="text-white mb-4">per 1K tokens</div>
                <div className="text-sm text-white">VIV-3.5</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  $0.10
                </div>
                <div className="text-white mb-4">per 1K tokens</div>
                <div className="text-sm text-white">VIV-4</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black cursor-pointer transition-colors font-medium">
                View full pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to start building?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers using VIV to power their applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2 cursor-pointer">
              <span>Get API key</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border cursor-pointer border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Read docs</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
