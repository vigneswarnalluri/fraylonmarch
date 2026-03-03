import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import './App.css';

// Loading Fallback Component
const PageLoading = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.98, 1, 0.98] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.2em', color: '#0f172a' }}
    >
      FRAYLON
    </motion.div>
  </div>
);

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Careers = lazy(() => import('./pages/Careers'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Leadership = lazy(() => import('./pages/Leadership'));
const NewsMedia = lazy(() => import('./pages/NewsMedia'));
const Partners = lazy(() => import('./pages/Partners'));
const Solutions = lazy(() => import('./pages/Solutions'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const CookieSettings = lazy(() => import('./pages/CookieSettings'));


// Lazy Loaded Service Pages
const WordpressPage = lazy(() => import('./pages/services/WordpressPage'));
const WebflowPage = lazy(() => import('./pages/services/WebflowPage'));
const SoftwareDevPage = lazy(() => import('./pages/services/SoftwareDevPage'));
const WixPage = lazy(() => import('./pages/services/WixPage'));
const ShopifyPage = lazy(() => import('./pages/services/ShopifyPage'));
const MagentoPage = lazy(() => import('./pages/services/MagentoPage'));
const BubblePage = lazy(() => import('./pages/services/BubblePage'));
const FramerPage = lazy(() => import('./pages/services/FramerPage'));
const DoraPage = lazy(() => import('./pages/services/DoraPage'));
const StudioAiPage = lazy(() => import('./pages/services/StudioAiPage'));
const DigitalTransformationPage = lazy(() => import('./pages/services/DigitalTransformationPage'));
const StaffAugmentationPage = lazy(() => import('./pages/services/StaffAugmentationPage'));
const TechConsultingPage = lazy(() => import('./pages/services/TechConsultingPage'));
const MaintenancePage = lazy(() => import('./pages/services/MaintenancePage'));
const WebAppDevPage = lazy(() => import('./pages/services/WebAppDevPage'));
const CustomCmsPage = lazy(() => import('./pages/services/CustomCmsPage'));
const PortalsPage = lazy(() => import('./pages/services/PortalsPage'));
const EcommercePage = lazy(() => import('./pages/services/EcommercePage'));
const AiIntegrationPage = lazy(() => import('./pages/services/AiIntegrationPage'));
const AiAgentsPage = lazy(() => import('./pages/services/AiAgentsPage'));
const NlpPage = lazy(() => import('./pages/services/NlpPage'));
const UiUxPage = lazy(() => import('./pages/services/UiUxPage'));
const BrandingPage = lazy(() => import('./pages/services/BrandingPage'));
const GraphicDesignPage = lazy(() => import('./pages/services/GraphicDesignPage'));
const NativeAppPage = lazy(() => import('./pages/services/NativeAppPage'));
const HybridAppPage = lazy(() => import('./pages/services/HybridAppPage'));
const InboundMarketingPage = lazy(() => import('./pages/services/InboundMarketingPage'));
const SeoPage = lazy(() => import('./pages/services/SeoPage'));
const SocialMediaPage = lazy(() => import('./pages/services/SocialMediaPage'));
const MvpPage = lazy(() => import('./pages/services/MvpPage'));
const PrototypingPage = lazy(() => import('./pages/services/PrototypingPage'));

function App() {
  const location = useLocation();

  // Dynamic Page Title Management (SEO Loophole Fix)
  useEffect(() => {
    const routeTitles: Record<string, string> = {
      '/': 'Fraylon Technologies | Engineering the Future',
      '/about': 'About Us | Fraylon Technologies',
      '/insights': 'Insights & Thought Leadership | Fraylon',
      '/careers': 'Careers | Join the Fraylon Team',
      '/contact': 'Contact Us | Get a Quote | Fraylon',
      '/leadership': 'Leadership Team | Fraylon Technologies',
      '/partners': 'Strategic Partners | Fraylon Ecosystem',
      '/news': 'News & Press | Fraylon Updates',
      '/solutions': 'Enterprise Solutions | Consulting | Fraylon',
      '/industries': 'Industry Expertise | Fraylon Technologies',
      '/projects': 'Our Work | Case Studies | Fraylon',
      '/privacy-policy': 'Privacy Policy | Fraylon Technologies',
      '/terms-of-use': 'Terms of Use | Fraylon Technologies',
      '/sitemap': 'Sitemap | Fraylon Technologies',
      '/cookie-settings': 'Cookie Settings | Fraylon Technologies'
    };

    // Handle dynamic routes
    let title = routeTitles[location.pathname] || 'Fraylon Technologies';

    if (location.pathname.startsWith('/services/')) {
      const service = location.pathname.split('/').pop()?.replace('-', ' ');
      title = `${service?.toUpperCase()} Services | Fraylon`;
    } else if (location.pathname.startsWith('/solutions/')) {
      const sol = location.pathname.split('/').pop()?.toUpperCase();
      title = `${sol} Solution | Fraylon Technologies`;
    } else if (location.pathname.startsWith('/ind/')) {
      const ind = location.pathname.split('/').pop()?.toUpperCase();
      title = `${ind} Industry | Fraylon Technologies`;
    }

    document.title = title;
  }, [location]);

  return (
    <>
      <SmoothScroll />
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Suspense fallback={<PageLoading />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:id" element={<InsightDetail />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/news" element={<NewsMedia />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/:type" element={<Solutions />} />
                <Route path="/services/wordpress" element={<WordpressPage />} />
                <Route path="/services/webflow" element={<WebflowPage />} />
                <Route path="/services/software-dev" element={<SoftwareDevPage />} />
                <Route path="/services/wix" element={<WixPage />} />
                <Route path="/services/shopify" element={<ShopifyPage />} />
                <Route path="/services/magento" element={<MagentoPage />} />
                <Route path="/services/bubble" element={<BubblePage />} />
                <Route path="/services/framer" element={<FramerPage />} />
                <Route path="/services/dora" element={<DoraPage />} />
                <Route path="/services/studio-ai" element={<StudioAiPage />} />
                <Route path="/services/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/services/staff-augmentation" element={<StaffAugmentationPage />} />
                <Route path="/services/tech-consulting" element={<TechConsultingPage />} />
                <Route path="/services/maintenance" element={<MaintenancePage />} />
                <Route path="/services/web-app-dev" element={<WebAppDevPage />} />
                <Route path="/services/custom-cms" element={<CustomCmsPage />} />
                <Route path="/services/portals" element={<PortalsPage />} />
                <Route path="/services/ecommerce" element={<EcommercePage />} />
                <Route path="/services/ai-integration" element={<AiIntegrationPage />} />
                <Route path="/services/ai-agents" element={<AiAgentsPage />} />
                <Route path="/services/nlp" element={<NlpPage />} />
                <Route path="/services/ui-ux" element={<UiUxPage />} />
                <Route path="/services/branding" element={<BrandingPage />} />
                <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
                <Route path="/services/native-app" element={<NativeAppPage />} />
                <Route path="/services/hybrid-app" element={<HybridAppPage />} />
                <Route path="/services/inbound-marketing" element={<InboundMarketingPage />} />
                <Route path="/services/seo" element={<SeoPage />} />
                <Route path="/services/social-media" element={<SocialMediaPage />} />
                <Route path="/services/mvp-development" element={<MvpPage />} />
                <Route path="/services/prototyping" element={<PrototypingPage />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/work/:id" element={<ProjectDetail />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/ind/:type" element={<Industries />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/cookie-settings" element={<CookieSettings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}

export default App;
