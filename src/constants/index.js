import {
  logo,
  banner,
  brochure,
  digital,
  banner1,
  brochure1,
  advert,
  jdlogo, adityalogo, angellogo, bahuranilogo , moduluslogo, prologo,
  Abanner, Bbanner,Jbanner,Mbanner,Pbanner
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
        title: "Clients",
        count: "Over 200+ satisfied clients",
      },
      {
        title: "Designs",
       count: "Over 1000+ designs delivered",
      },
      {
        title: "Affordable",
        count: "Made for all bussinesses, small or big",
      },
      {
        title: "Reliable",
        count: "Fast and quality assured by clients themselves",
      },
    ];

    const experiences = [
      {
        title: "Logos",
        icon: logo,
        iconBg: "#383E56",
        asset: logo,
      },
      {
        title: "Banners",
        icon: banner,
        iconBg: "#383E56",
        asset: banner1,
      },
      {
        title: "Brochures",
        icon: brochure,
        iconBg: "#383E56",
        asset: brochure1,
      },
      {
        title: "Advertisement Videos",
        icon: digital,
        iconBg: "#383E56",
        asset: advert,
      },
    ];

    const testimonials = [
      {
        testimonial:
          "As a startup we have tried many designers for our brand at last we found best match with Pixel Bytes, they have been with us for a while now.",
        name: "Amit Singhal",
        company: "Bahurani",
      },{
        testimonial:
          "I used to believe designers were expensive, but surprisingly good designers can be affordable.",
        name: "Magan Saini",
        company: "Aditya",
       
      },
      {
        testimonial:
          "I've never met a designer who understands ideas and vision of the client, untill I hired Pixel Bytes.",
        name: "Narendra Sharma",
       
        company: "Pro Create",
        
      },
      
    ];









    const projects = [
      {
        name: "Aditya Public School",
        description:
          "This client hired us to design their banners. This is for a local based institution very well famous in Alwar.",
        tags: [
          {
            name: "banners",
            color: "blue-text-gradient",
          }
        ],
        logo: adityalogo,
        image: Abanner,
        source_code_link: "/",
      },
      {
        name: "Angel's Garden Public School",
        description:
          "We designed and edited their advertisement videos.",
        tags: [
          {
            name: "advert",
            color: "blue-text-gradient",
          },
          {
            name: "promotional-videos",
            color: "green-text-gradient",
          },
         
        ],
        logo: angellogo,
        image: advert,
        source_code_link: "/",
      },
      {
        name: "Bahurani",
        description:
          "Bahurani is an startup brand which focuses on Indian spices and kitchen articles. We have been their main designers for 6 months and delivered 100s of banners, brochure, bill boards banners, etc.",
        tags: [
          {
            name: "banners",
            color: "blue-text-gradient",
          },
          {
            name: "brochures",
            color: "green-text-gradient",
          },
          {
            name: "promotional-videos",
            color: "pink-text-gradient",
          },
        ],
        logo: bahuranilogo,
        image: Bbanner,
        source_code_link: "/",
      },
      {
        name: "JD Furnitures",
        description:
          "We designed many banners for them, like their designs the banners were artistic as well.",
        tags: [
          {
            name: "banners",
            color: "blue-text-gradient",
          },
        ],
        logo: jdlogo,
        image: Jbanner,
        source_code_link: "/",
      },
      {
        name: "Pro Create",
        description:
          "A digital marketing firm, we designed their advertisement banners.",
        tags: [
          {
            name: "advertisement",
            color: "blue-text-gradient",
          },
          {
            name: "banners",
            color: "green-text-gradient",
          },
          
        ],
        logo: prologo,
        image: Pbanner,
        source_code_link: "/",
      },
      {
        name: "Modulus Academy",
        description:
          "Another well famous institute in Alwar. We made many promotional videos for them to advertise on their social media handles.",
        tags: [
          {
            name: "promotional-videos",
            color: "blue-text-gradient",
          },
          
        ],
        logo: moduluslogo,
        image: Mbanner,
        source_code_link: "/",
      },
    ];






    export {services , experiences, testimonials, projects};