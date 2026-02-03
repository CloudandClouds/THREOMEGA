import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  Target,
  Twitter,
  Youtube,
} from 'lucide-react'

const CallToActionAndFooter = () => {
  const styles = {
    primary: '#1297E4',
    secondary: '#0F238C',
    silver: '#C0C0C0',
    gold: '#EAE136',
    text: '#2D2D2D',
    background: '#FFFFFF',
    lightBg: '#F8F9FA',
    red: '#C41E3A',
    darkBg: '#2D2D2D',
    darkerBg: '#1A1A1A',
  }

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Order Now', href: '#' },
    { name: 'Subscription', href: '#' },
  ]

  const resources = [
    { name: 'FOCUS Trial', href: '#' },
    { name: 'Patient Guides', href: '#' },
    { name: 'Clinical Portal', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Research Lib', href: '#' },
  ]

  const support = [
    { name: 'FAQ', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Prescription', href: '#' },
    { name: 'Feedback', href: '#' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms Service', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', color: '#1877F2' },
    { icon: Instagram, href: '#', color: '#E4405F' },
    { icon: Twitter, href: '#', color: '#1DA1F2' },
    { icon: Linkedin, href: '#', color: '#0A66C2' },
    { icon: Youtube, href: '#', color: '#FF0000' },
  ]

  const certifications = [
    {
      name: 'ISO',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/ISO_Logo_%28Red_square%29.svg/1200px-ISO_Logo_%28Red_square%29.svg.png',
    },
    { name: 'GMP', image: 'https://via.placeholder.com/60x40/FFD700/000000?text=GMP' },
    { name: 'FDA', image: 'https://via.placeholder.com/60x40/0066CC/FFFFFF?text=FDA' },
  ]

  const paymentMethods = [
    { name: 'Visa', image: 'https://via.placeholder.com/60x40/1A1F71/FFFFFF?text=VISA' },
    { name: 'MasterCard', image: 'https://via.placeholder.com/60x40/EB001B/FFFFFF?text=MC' },
    { name: 'PayPal', image: 'https://via.placeholder.com/60x40/003087/FFFFFF?text=PayPal' },
    { name: 'UPI', image: 'https://via.placeholder.com/60x40/097939/FFFFFF?text=UPI' },
  ]

  return (
    <div>
      {/* Call to Action Section */}
      <div style={{ backgroundColor: styles.red, padding: '64px 0' }}>
        <div style={{ marginLeft: '4%', marginRight: '4%' }}>
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center border-4"
                style={{ borderColor: styles.background }}
              >
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-white mb-4">READY TO PROTECT YOUR HEART?</h2>

            {/* Subtitle */}
            <p className="text-lg italic text-white mb-8" style={{ opacity: 0.9 }}>
              "Join 2,500+ Hemodialysis Patients Taking Control of Their Cardiovascular Health"
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="text-center">
                <p className="text-xs text-white mb-2 font-semibold">FOR PATIENTS</p>
                <button
                  className="px-8 py-3 font-bold rounded-full transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: styles.background,
                    color: styles.text,
                  }}
                >
                  ORDER NOW
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-white mb-2 font-semibold">FOR DOCTORS</p>
                <button
                  className="px-8 py-3 font-bold rounded-full transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: styles.background,
                    color: styles.text,
                  }}
                >
                  GET SAMPLES
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-white mb-2 font-semibold">FOR CENTERS</p>
                <button
                  className="px-8 py-3 font-bold rounded-full transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: styles.background,
                    color: styles.text,
                  }}
                >
                  PARTNER
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-center text-white">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">24/7hr Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center text-white">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 7502505xxx xxxx xxxx</span>
              </div>
              <div className="flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">WhatsApp: +91-XXXX-XXXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div style={{ backgroundColor: styles.darkBg, padding: '64px 0 0 0' }}>
        <div style={{ marginLeft: '4%', marginRight: '4%' }}>
          {/* Brand Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">
              <span className="text-white">THREOMEGA™</span>
              <span style={{ color: styles.gold }}> by PONOGCN</span>
            </h3>
            <p className="text-sm italic text-white" style={{ opacity: 0.6 }}>
              Advancing Nephrology Care Through Innovation
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">QUICK LINKS</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-white text-sm hover:opacity-70 transition-opacity"
                      style={{ opacity: 0.8 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">RESOURCES</h4>
              <ul className="space-y-2">
                {resources.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-white text-sm hover:opacity-70 transition-opacity"
                      style={{ opacity: 0.8 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">SUPPORT</h4>
              <ul className="space-y-2">
                {support.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-white text-sm hover:opacity-70 transition-opacity"
                      style={{ opacity: 0.8 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">LEGAL</h4>
              <ul className="space-y-2">
                {legal.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-white text-sm hover:opacity-70 transition-opacity"
                      style={{ opacity: 0.8 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">CONNECT</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-8 h-8 rounded flex items-center justify-center transition-opacity hover:opacity-80"
                      style={{ backgroundColor: social.color }}
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Section */}

          {/* Bottom Bar */}
          <div className="border-t py-6 text-center" style={{ borderColor: styles.red }}>
            <p className="text-white text-xs mb-2" style={{ opacity: 0.6 }}>
              © 2025 Ponogcn™. All rights reserved
            </p>
            <p className="text-white text-xs mb-2" style={{ opacity: 0.5 }}>
              DISCLAIMER: This product is not intended to diagnose, treat, cure, or prevent any
              disease. Consult your healthcare provider before use. Results may vary.
            </p>
            <p className="text-white text-xs italic" style={{ opacity: 0.5 }}>
              *Evidence Informed Care. Patient-Centered Results.*
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToActionAndFooter
