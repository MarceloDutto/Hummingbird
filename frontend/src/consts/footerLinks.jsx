import InstagramIcon from "../components/Social/InstagramIcon.jsx";
import LinkedinIcon from "../components/Social/LinkedinIcon.jsx";
import YoutubeIcon from "../components/Social/YoutubeIcon.jsx";
import WebIcon from "../components/Social/WebIcon.jsx";
import GitHubIcon from "../components/Social/GithubIcon.jsx";

export const FOOTERLINKS = [

    {
        url: 'https://www.marcelodutto.com',
        text: 'Web Page',
        icon: <WebIcon />,
        id: 'footer-link-web'
    },
    {
        url: 'https://github.com/MarceloDutto',
        text: 'Github',
        icon: <GitHubIcon />,
        id: 'footer-link-fb'
    },
    {
        url: 'https://www.linkedin.com/in/marcelodutto/',
        text: 'Linkedin',
        icon: <LinkedinIcon />,
        id: 'footer-link-in'
    },
    {
        url: 'https://www.instagram.com/marce_dutto',
        text: 'Instagram',
        icon: <InstagramIcon />,
        id: 'footer-link-ig'
    },
    {
        url: 'https://www.youtube.com/@marcelodutto2059',
        text: 'Youtube',
        icon: <YoutubeIcon />,
        id: 'footer-link-yt'
    },
]