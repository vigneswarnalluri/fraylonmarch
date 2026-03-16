import ramTejaImg from '../assets/images/alex-fraylon.jpg';
import vigneswarImg from '../assets/images/vigneswar-nalluri.jpg';

export interface Leader {
    id: string;
    slug: string;
    name: string;
    role: string;
    image: string;
    shortBio: string;
    fullBio: string[];
    linkedIn?: string;
    contact?: string;
    tag?: string;
    location?: string;
}

export const executiveCouncil: Leader[] = [
    {
        id: "ceo",
        slug: "ch-ram-teja",
        name: "Ram Teja Chalamalapalli",
        role: "Chief Executive Officer",
        image: ramTejaImg,
        tag: "EXECUTIVE COUNCIL",
        location: "Global HQ",
        shortBio: "Leading Fraylon’s global network of 100,000+ professionals across 140 countries, Ram is dedicated to defining the future of digital equity and architectural excellence.",
        fullBio: [
            "As the Global Chairman and Chief Executive Officer of Fraylon, Ram leads an integrated Network Leadership Team which brings together thousands of people across a network of firms in 140 countries and territories.",
            "Ram has spent over two decades advising Fortune 500 boards on large-scale digital transformation, risk management, and the ethical deployment of artificial intelligence. Under his leadership, Fraylon has consistently ranked as a top-tier global MNC for research and development.",
            "He is a frequent speaker at global economic forums, advocating for the 'Deep Roots, High Reach' philosophy which emphasizes that industrial scale must be balanced with foundational human values.",
            "Prior to becoming CEO, Ram served as the Head of Global Strategy, where he successfully navigated the organization through the complexities of the 2024 digital reshuffling, resulting in a 40% growth in planetary market share."
        ],
        linkedIn: "https://linkedin.com",
        contact: "ram.teja@fraylon.global"
    },
    {
        id: "cto",
        slug: "vigneswar-nalluri",
        name: "Vigneswar Nalluri",
        role: "Chief Technology Officer",
        image: vigneswarImg,
        tag: "EXECUTIVE COUNCIL",
        location: "Tech Center of Excellence",
        shortBio: "Architecting the world’s most resilient enterprise systems, Vigneswar oversees Fraylon’s multi-billion dollar R&D roadmap with a focus on human-centric AI.",
        fullBio: [
            "Vigneswar serves as the Chief Technology Officer at Fraylon, where he is responsible for the overall technical vision and security architecture of the global firm. He oversees a specialized team of over 5,000 AI researchers and cloud engineers.",
            "His expertise lies in high-frequency autonomous systems and secure edge-computing. Vigneswar has pioneered 'Fraylon Core', a proprietary engine that now powers critical infrastructure for three of the world’s largest logistics networks.",
            "He is committed to 'Transparent Innovation,' ensuring that Fraylon's technological breakthroughs are accessible, sustainable, and rigorously tested for the highest standards of safety and performance.",
            "Vigneswar holds multiple patents in neural-symbolic computing and is an active contributor to the Global Standards on Decentralized Infrastructure."
        ],
        linkedIn: "https://linkedin.com",
        contact: "vigneswar.n@fraylon.global"
    }
];

export const globalLeadership: Leader[] = [
    {
        id: "president",
        slug: "lavanya-bojja",
        name: "Lavanya Bojja",
        role: "President, Global Markets",
        tag: "GLOBAL OPERATIONS",
        location: "EMEA & Americas",
        shortBio: "Specializing in institutional scale and market diversification, Lavanya ensures Fraylon’s divisions operate at the peak of global performance.",
        fullBio: [
            "Lavanya serves as the President of Global Markets, where she is responsible for Fraylon's operational P&L across the EMEA and Americas regions. She manages a portfolio of over 200 high-impact enterprise accounts.",
            "With a background in international economics and crisis management, she is instrumental in Fraylon's ability to maintain continuity and growth in highly volatile geopolitical environments.",
            "She currently chairs the Fraylon Diversity Board, focusing on building high-performance cross-cultural teams that reflect the diversity of the global markets Fraylon serves."
        ],
        image: "",
        linkedIn: "https://linkedin.com"
    },
    {
        id: "co-president",
        slug: "mahitha-bathula",
        name: "Mahitha Bathula",
        role: "President, Strategic Alliances",
        tag: "GLOBAL OPERATIONS",
        location: "Asia-Pacific & Middle East",
        shortBio: "A master of cross-border integration, Mahitha spearheads Fraylon’s joint ventures and strategic institutional partnerships.",
        fullBio: [
            "As the President of Strategic Alliances, Mahitha oversees Fraylon’s expansion into the Asia-Pacific and Middle Eastern tech ecosystems. She has successfully brokered over 15 major joint ventures in the past three years.",
            "Her focus is on 'Collaborative Disruption,' working with local governments and sovereign funds to build future-ready digital foundations through Fraylon's specialized infrastructure.",
            "Mahitha is recognized globally for her expertise in public-private partnerships (PPP) and has been named one of the 'Top 50 Innovators' in the APAC region for her work on digital inclusivity."
        ],
        image: "",
        linkedIn: "https://linkedin.com"
    },
    {
        id: "coo",
        slug: "yuvaraj-dudukuru",
        name: "Yuvaraj Dudukuru",
        role: "Chief Operating Officer",
        tag: "GLOBAL OPERATIONS",
        location: "Supply Chain & Delivery",
        shortBio: "Managing the world's most complex digital supply chains, Yuvaraj ensures every Fraylon solution is delivered with surgical precision.",
        fullBio: [
            "Yuvaraj is the Chief Operating Officer, responsible for the global delivery engine that powers Fraylon's multi-million dollar projects. He oversees the logistics of Fraylon’s 24/7 support and deployment centers worldwide.",
            "He pioneered the 'Agile MNC' framework, allowing a global organization like Fraylon to maintain the speed of a startup while delivering the stability required for enterprise-scale operations.",
            "Under his stewardship, Fraylon has achieved the highest certification standards in global delivery reliability and information security."
        ],
        image: "",
        linkedIn: "https://linkedin.com"
    },
    {
        id: "cmo",
        slug: "nikhil-balaji-nandhagiri",
        name: "Nikhil Balaji Nandhagiri",
        role: "Chief Communications Officer",
        tag: "GLOBAL OPERATIONS",
        location: "Brand & Public Relations",
        shortBio: "Nikhil crafts the global Fraylon story, ensuring our mission of architectural excellence resonates across every language and culture.",
        fullBio: [
            "Nikhil leads Fraylon’s global brand architecture and public relations. He is the principal architect of the Fraylon 'Neural Network' brand campaign, which reached over 1 billion people worldwide.",
            "His expertise is in reputation management and high-impact digital storytelling, ensuring that Fraylon's complex technical achievements are translated into meaningful human experiences.",
            "Nikhil serves on the board of the Global Digital Council, focusing on the future of corporate transparency and brand ethics in the age of generative media."
        ],
        image: "/nikhil_balaji.jpg",
        linkedIn: "https://linkedin.com"
    }
];

export const allLeaders = [...executiveCouncil, ...globalLeadership];
