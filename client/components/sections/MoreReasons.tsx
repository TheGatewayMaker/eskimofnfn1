import {
  Wifi,
  Smartphone,
  Zap,
  AlertCircle,
  TrendingUp,
  Globe,
  Lock,
  Settings,
} from "lucide-react";

export const MoreReasons = () => {
  const reasons = [
    {
      icon: Wifi,
      title: "Personal hotspot",
      description: "Share your data with unlimited devices.",
    },
    {
      icon: Smartphone,
      title: "New phone? No problem",
      description: "Transfer your eSIM anytime to a new device.",
    },
    {
      icon: Zap,
      title: "Tier-1 carrier access",
      description:
        "Eskimo connects you to the fastest, most reliable networks.",
    },
    {
      icon: AlertCircle,
      title: "No daily caps, no throttling",
      description: "Enjoy full-speed data on fixed plans.",
    },
    {
      icon: TrendingUp,
      title: "Activates only when you land",
      description: "Your data validity starts only when you activate.",
    },
    {
      icon: Globe,
      title: "13 languages supported",
      description: "Our app supports 13 languages, with more on the way.",
    },
    {
      icon: Lock,
      title: "Keep your mobile number",
      description:
        "Call and text as usual using apps like WhatsApp, WeChat, KakaoTalk, Line.",
    },
    {
      icon: Settings,
      title: "Direct installation",
      description: "Install eSIM directly from our app.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-16 scroll-fade-in">
          <img
            src="https://i.ibb.co/d4z3607G/eskimologo.png"
            alt="Eskimo Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            More reasons to love Eskimo eSIM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-fade-in">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="text-center p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
