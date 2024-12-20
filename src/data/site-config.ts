// Add URL type
type Url = `${'http' | 'https'}://${string}` | `/${string}`;

// Add specific icon type for better type safety
type IconName = `mdi:${string}`; // Assuming you're using Material Design Icons

export type Image = {
    src: Url;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: Url;
    icon?: IconName;
    enabled?: boolean;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

// Add constants for pagination
const DEFAULT_ITEMS_PER_PAGE = 5;

// Add supported social media platforms
export const SUPPORTED_SOCIALS = ['github', 'linkedin', 'lastfm', 'spotify'] as const;
type SocialPlatform = (typeof SUPPORTED_SOCIALS)[number];

// Add validation helper
const isSocialPlatform = (platform: string): platform is SocialPlatform => SUPPORTED_SOCIALS.includes(platform as SocialPlatform);

/**
 * Main site configuration type
 * @property logo - Site logo image
 * @property title - Main site title
 * @property subtitle - Optional site subtitle
 * ...
 */
export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Javier Peralta Muñoz',
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Javier Peralta Muñoz - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/',
            enabled: true
        },
        {
            text: 'Photos',
            href: '/gallery',
            enabled: true
        },
        {
            text: 'Blog',
            href: '/blog',
            enabled: false
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/javissimo',
            icon: 'mdi:github'
        },
        {
            text: 'Last.fm',
            href: 'https://last.fm/user/javissimo',
            icon: 'mdi:lastfm'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/javier-serrano-garc%C3%ADa-940412194/',
            icon: 'mdi:linkedin'
        },
        {
            text: 'Spotify',
            href: 'https://open.spotify.com/user/javissimo',
            icon: 'mdi:spotify'
        }
    ],
    hero: {
        title: '',
        text: '¡Hola! Me llamo Javi. Llevo unos cuantos años trabajando como desarrollador.',
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Javier Peralta Muñoz Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: DEFAULT_ITEMS_PER_PAGE,
    projectsPerPage: DEFAULT_ITEMS_PER_PAGE
};

// Add validation
const validateConfig = (config: SiteConfig): void => {
    config.socialLinks?.forEach((link) => {
        const platform = link.icon?.replace('mdi:', '');
        if (platform && !isSocialPlatform(platform)) {
            console.warn(`Warning: Unsupported social platform "${platform}"`);
        }
    });
};

validateConfig(siteConfig);

export default siteConfig;
