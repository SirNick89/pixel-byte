import {
  logo,
  banner,
  brochure,
  digital
} from '../assets'

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }];

    const services = [
      {
        title: "Logo",
        icon: logo,
      },
      {
        title: "Banners",
        icon: banner,
      },
      {
        title: "Brochures",
        icon: brochure,
      },
      {
        title: "Promotional Videos",
        icon: digital,
      },
    ];

    const experiences = [
      {
        title: "HTML",
        company_name: "logo",
        icon: logo,
        iconBg: "#383E56",
        date: "Dec 2022",
        asset: logo,
      },
      {
        title: "CSS",
        company_name: "logo",
        icon: logo,
        iconBg: "#E6DEDD",
        date: "Jan 2023",
        asset: logo,
      },
      {
        title: "JavaScript",
        company_name: "logo",
        icon: logo,
        iconBg: "#383E56",
        date: "Jan 2023 - Feb 2023",
        asset: logo,
      },
      {
        title: "ReactJS",
        company_name: "logo",
        icon: logo,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        asset: logo,
      },
    ];

    export {services , experiences};