import React from "react";

export const eventDetails=[
    {imgURL:'/hackathon.svg',
    content:' Gear up for an electrifying coding showdown at Hackblitz, hosted by the dynamic Google Developer Students Club! Join fellow tech enthusiasts as you embark on a thrilling journey of innovation, collaboration, and problem-solving. With cutting-edge challenges and limitless creativity, Hackblitz is your platform to push boundaries and redefine whats possible in the world of technology. Get ready to code, innovate, and leave your mark on the digital landscape',
    linkTo:'/sponsors',
    eventName:'hackathon'
    },
    {imgURL:'/projectExhibition.svg',
    content:' Embark on a journey of inspiration and innovation at the Project Exhibition, brought to you by the Google Developer Students Club for schools and colleges! Witness the brilliance of young minds as they showcase their groundbreaking projects, spanning the realms of technology, creativity, and problem-solving. From AI marvels to cutting-edge apps, this exhibition is a testament to the boundless potential within our educational institutions. Join us in celebrating ingenuity and fostering a culture of innovation!',
    linkTo:'/projectExhibition',
    eventName:'informals'
    },
    {imgURL:'/UI.jpeg',
    content:'Dive into the captivating world of user interface and experience design with the UI/UX Workshop hosted by the Google Developer Students Club! Discover the art of crafting seamless digital experiences that delight users and elevate products to new heights. Through hands-on activities and expert guidance, unlock the secrets behind intuitive design principles and learn how to create visually stunning interfaces. Whether youre a seasoned designer or a curious beginner, this workshop promises to ignite your passion for UI/UX and equip you with invaluable skills for the future',
    linkTo:'/projectExhibition',
    eventName:'informals'
    },
    {imgURL:'/workshop2.svg',
    content:'Unleash your coding potential and master the art of web development with the Web Development Workshop by the Google Developer Students Club! Dive into the dynamic world of HTML, CSS, and JavaScript as we guide you through building responsive and interactive websites from scratch. Whether youre a beginner eager to learn the basics or an experienced developer seeking to refine your skills, this workshop offers a hands-on approach to crafting powerful web experiences',
    linkTo:'/projectExhibition',
    eventName:'informals'
    },
    {imgURL:'/informals.svg',
    content:' Get ready to challenge your intellect and have a blast at MindMaze, the ultimate informal event hosted by the Google Developer Students Club! Join us for an evening of brain-teasing puzzles, riddles, and trivia that will put your cognitive skills to the test. Whether youre a master problem-solver or just looking for some fun, MindMaze promises an engaging and interactive experience for all. Bring your friends, sharpen your wits, and let the games begin!',
    linkTo:'/projectExhibition',
    eventName:'informals'
    },
    {imgURL:'/speakerSession.svg',
    content:'Elevate your web development skills from the comfort of your screen with our Online Tech-Talk Session, proudly presented by the Google Developer Students Club! Join us for an insightful exploration into the latest trends, tools, and techniques shaping the world of web development. From frontend frameworks to backend magic, our expert speakers will unravel the secrets behind building stunning and efficient websites.',
    linkTo:'/projectExhibition',
    eventName:'informals'
    },
]
export const adjustedData = [
  { image: "/informals.svg", show: true },
    { image: "/hackathon.svg", show: true },
    { show: false },
    { image: "/projectExhibition.svg", show: true },
    { show: true },
    { image: "/speakerSession.svg", show: true },
    { show: false },
    { image: "/workshop2.svg", show: true },
    { image: "/UI.jpeg", show: true },
  ];

  export const sponsorData=[
    {name:"The Curry Nights",for:"as our fooding partner",location:"https://maps.app.goo.gl/UGBhW2pg5qESB6Ai8",imgURL:"/tcn.png"},
    {name:"Madras Opticals",for:"as our eyewear",location:"https://maps.app.goo.gl/2Xy6Z4pzYoVSkCj77",imgURL:"/madrasoptical.jpg"},
    {name:"The Standard gifts",for:"as our gifting partner",location:"https://maps.app.goo.gl/HkMUwLBFfePnuLoD8",imgURL:"/tsg.jpeg"},
    {name:"Gambhir DryCleaners",for:"as our sponsor",location:"https://maps.app.goo.gl/cDsN118estzaf78HA",imgURL:"/gambhir.png"},


  ]

export const eventNotice:Record<string, string>={
  hackathon:'/Hackblitz.pdf',
  informals:'/informals.svg'
}