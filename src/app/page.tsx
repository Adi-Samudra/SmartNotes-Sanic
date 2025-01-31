'use client';
import Image from "next/image";
import Quotes from "../components/quotesbox";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Switch } from "@/components/ui/switch"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  // const Testimonial1=["The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.","Sarah Johnson","TechSavvv Solutions"];
  const Testimonial1 = ["The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.", "Sarah Johnson", "TechSavvv Solutions"];
  const features1 = [
    { image: '/Path.png', text: 'Real-time collaboration' },
    { image: '/Path.png', text: 'AI-powered organization' },
    { image: '/Path.png', text: 'Customizable templates' },
    { image: '/Path.png', text: '5GB cloud storage' },
    { image: '/Path.png', text: 'Basic integrations' },
  ];

  const features2 = [
    { image: '/Path.png', text: 'Everything in the Individual Plan' },
    { image: '/Path.png', text: 'Unlimited cloud storage' },
    { image: '/Path.png', text: 'Advanced integrations' },
    { image: '/Path.png', text: 'Team management and permissions' },
    { image: '/Path.png', text: 'Shared templates and note libraries' },
  ];

  const features3 = [
    { image: '/Path.png', text: 'Everything in the Team Plan' },
    { image: '/Path.png', text: 'Dedicated account manager' },
    { image: '/Path.png', text: 'Enterprise-grade security' },
    { image: '/Path.png', text: 'Customized onboarding' },
    { image: '/Path.png', text: 'Advanced analytics' },
  ];

  useEffect(() => {
    // Set initial hidden states for all divs
    gsap.set('.bento-div', { autoAlpha: 0, x: 0, y: 0 });
    gsap.set('.bento-div', { autoAlpha: 0, x: 0, y: 0 }); // Default position
    gsap.set('.div1', { x: -100, autoAlpha: 0 }); // Off-screen left for div 1
    gsap.set('.div2', { x: 100, autoAlpha: 0 }); // Off-screen right for div 2
    gsap.set('.div3, .div4, .div5, .div6', { y: 100, autoAlpha: 0 });

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.bento-grid', // The section where the animation should trigger
        start: '+=1100', // Trigger animation when the top of the section is 80% from the top of the viewport
        end: '25%', // Optionally you can adjust how long the animation should last
        scrub: 1, // Optional: You can enable smooth scrubbing (for better interaction)
        markers: false, // Optional: Set to true to see the start and end markers for debugging
        once: true, // Optional: Only trigger the animation once
        
      },
    });

    tl.to('.div1', {
      duration: 1,
      x: -0, // Slide from left
      autoAlpha: 1,
      ease: 'power3.out',
    })
      .to('.div2', {
        duration: 1,
        x: 0, // Slide from right
        autoAlpha: 1,
        ease: 'power3.out',
      }, '<') // Start at the same time as div1 animation
      .to('.div3', {
        duration: 1,
        y: -0, // Slide from bottom
        autoAlpha: 1,
        ease: 'power3.out',
      }, '+=0.1')
      .to('.div6', {
        duration: 1,
        y: -0, // Slide from bottom
        autoAlpha: 1,
        ease: 'power3.out',
      }, '<') // Slight delay before div3 appears
      .to('.div4', {
        duration: 1,
        y: -0, // Slide from bottom
        autoAlpha: 1,
        ease: 'power3.out',
      }, '<') // Slight delay before div4 appears
      .to('.div5', {
        duration: 1,
        y: -0, // Slide from bottom
        autoAlpha: 1,
        ease: 'power3.out',
      }, '<'); // Slight delay before div5 appears
    // Slight delay before div6 appears
  }, []);





  return (
    <div className="h-fit mx-auto px-4 xs:px-0 sm:px-6 lg:px-8 bg-black sm:bg-black lg:bg-black border-t-2 border-[#017373]">
      <div className="flex w-full h-fit justify-between">
        <div className="lg:py-32 lg:px-32 md:px-14 md:py-20 sm:px-10 sm:py-14 xs:px-2 xs:py-6 w-full lg:w-3/5 h-fit text-white ">
          <h1 className="text-6xl xs:text-2xl font-text font-bold"><span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text">Intelligent</span> cloud-based
            <span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text "> note-taking </span> and collaboration tool</h1>
          <p className="font-text py-1">Experience the power of smart note-taking and transform the way you work today.</p>
          <div className="flex w-fit h-fit gap-1 bg-white my-14 xs:my-4 rounded-md">
            <input className=" sm:w-[221px] xs:w-[60px] text-black m-2 px-2 text-md font-text ">
            </input>
            <div className="flex-shrink-1">
              <button className="justify-self-end flex items-center gap-2 m-1 py-1 px-4 bg-gradient-to-tr text-black font-semibold font-text from-[#017373] to-[#AAD9D1] rounded-lg">
                Sign up
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2">
                  <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#333333" />
                  <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#333333" />
                  <path d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z" fill="#333333" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="my-16 mx-32 xs:my-4 xs:mx-8 flex-shrink-0 hidden xl:block">
          <Image src={"/AbstractShapes.png"} width={363} height={483} alt="HeroSection" layout="intrinsic"></Image>
        </div>
      </div>

      <div className="h-fit w-full justify-self-center overflow-clip">
        <Image src={"/Logos.png"} width={1440} height={200} alt="Logos" layout="responsive"/>
      </div>
      <div className="flex w-full h-fit shrink-1 justify-center">
        <Quotes prop={Testimonial1} />
      </div>
      <div className="flex-cols px-32 xs:px-4 sm:px-8 md:px-12 justify-items-center">
        <div className="px-16 xs:px-8 text-white">
          <h1 className="font-text font-semibold xl:text-7xl lg:text-7xl md:text-5xl sm:text-5xl xs:text-3xl text-center">Discover the Power of <span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text">SmartNotes</span></h1>
          <p className="text-center text-wrap mx-96 lg:mx-40 md:mx-42 sm:mx-4 xs:mx-4 text-[#BABABA] my-7 xs:my-2 xs:text-sm">SmartNotes is packed with innovative features designed to revolutionize the way you take notes, collaborate with others and stay organized</p>
        </div>

        <div className="px-8 md:px-12 lg:px-18 grid lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-4 sm:grid-cols-1 sm:grid-rows-4 gap-7 md:gap-4 sm:gap-2 py-24 xs:py-6 xs:px-14 w-full h-fit text-white">
          <div className="bento-div div1 lg:col-span-2 sm:col-span-1 md:col-span-1 border-[#017373] border-2 border-dotted  rounded-xl w-fit lg:h-full p-4  min-w-1/8">
            <Image src={"/thumb-up-fill.png"} width={32} height={32} alt="NoteTaking" className="m-5 xs:m-2" />
            <h1 className="font-text text-2xl font-semibold m-5 xs:m-3">Cross-Platform Accessibilty</h1>
            <p className="m-5 xs:m-3 font-text text-[#BABABA] text-wrap">Whether you are on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.</p>
          </div>
          <div className="bento-div div2 lg:col-span-2 sm:col-span-1 border-[#017373] border-2 border-dotted  rounded-xl w-fit lg:h-full  min-w-1/8">
            <Image src={"/global-fill.png"} width={32} height={32} alt="NoteTaking" className="m-5 xs:m-3" />
            <h1 className="font-text text-2xl font-semibold m-5 xs:m-3">Customizable Templates</h1>
            <p className="m-5 xs:m-3 font-text text-[#BABABA] text-wrap">Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.</p>
          </div>
          <div className="bento-div div3 col-span-1 md:col-span-2 lg:col-span-1 row-span-1 border-[#017373] border-2 border-dotted  rounded-xl w-fit lg:h-full  min-w-1/8">
            <Image src={"/flag-2-fill.png"} width={32} height={32} alt="NoteTaking" className="m-5 xs:m-3" />
            <h1 className="font-text text-2xl font-semibold m-5 xs:m-3">Secure Cloud Storage</h1>
            <p className="m-5 xs:m-3 font-text text-[#BABABA] text-wrap">Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.</p>
          </div>
          <div className="bento-div div4 col-span-1 row-span-1 border-[#017373] border-2 border-dotted  rounded-xl w-fit lg:h-full  min-w-1/8">
            <Image src={"/Layer_1.png"} width={32} height={32} alt="NoteTaking" className="m-5 xs:m-3" />
            <h1 className="font-text text-2xl font-semibold m-5 xs:m-3">Real-Time Collaboration</h1>
            <p className="m-5 xs:m-3 font-text text-[#BABABA] text-wrap">
              Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.</p>
          </div>
          <div className="bento-div div5 col-span-1 row-span-1 border-[#017373] border-2 border-dotted  rounded-xl w-fit lg:h-full  min-w-1/8">
            <Image src={"/hashtag.png"} width={32} height={32} alt="NoteTaking" className="m-5 xs:m-3" />
            <h1 className="font-text text-2xl font-semibold m-5 xs:m-3">AI-Powered Organization</h1>
            <p className="m-5 xs:m-3 font-text text-[#BABABA] text-wrap">
              Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.</p>
          </div>
          <div className="bento-div div6 col-span-1 md:col-span-2 lg:col-span-1 row-span-1 border-[#017373] border-2 border-dotted  rounded-xl w-fit lg:h-full  min-w-1/8">
            <Image src={"/git-branch-fill.png"} width={32} height={32} alt="NoteTaking" className="m-5 xs:m-3" />
            <h1 className="font-text text-2xl font-semibold m-5 xs:m-3">Integrations</h1>
            <p className="m-5 xs:m-3 font-text text-[#BABABA] text-wrap" >
              Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.</p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-fit shrink-1 justify-center">
        <Quotes prop={Testimonial1} />
      </div>
      <div className=" flex justify-center w-full h-fit py-16 my-8 px-32 sm:px-12 md:px-16 xs:px-6 xs:py-4">
        <Image src={"/VIdeo.png"} width={1110} height={652} alt="VidePchr" className="rounded-xl" />
      </div>
      <div className="flex w-full h-fit shrink-1 justify-center">
        <Quotes prop={Testimonial1} />
      </div>


      <div className="flex flex-col w-full h-fit justify-center py-4 text-white">
        <div className="text-center px-4 sm:px-8 lg:px-16">
          <h1 className="font-text font-bold text-4xl sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text">
              Pricing
            </span> & Plans
          </h1>
          <p className="font-text font-normal text-[#737373] px-4 sm:px-12 lg:px-24 mx-auto max-w-4xl text-wrap text-base sm:text-lg lg:text-xl">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>
          <div className="flex justify-center gap-4 py-12 xs:py-8">
            <p className="font-text">Monthly</p>
            <Switch />
            <p className="font-text">Yearly</p>
            <p className="bg-gradient-to-r from-[#017373] to-[#AAD9D1] rounded-full px-2 font-text text-black font-semibold">
              Save 25%
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full h-fit justify-evenly py-6 px-24 xs:px-12 md:gap-8">
          <div className="border-[#017373] border-2 rounded-xl w-full h-full p-4 bg-white shrink-0 xs:">
            <div className="flex gap-3 py-3 mx-5 items-center">
              <Image
                src={"/thumb-up-fill.png"}
                width={35}
                height={25}
                alt="Basic"
                className="shrink-0"
              />
              <p className="font-text bg-gradient-to-tr from-[#017373] to-[#5f9e94] text-transparent bg-clip-text text-xl sm:text-2xl font-medium">
                Individual Plan
              </p>
            </div>
            <h1 className="font-text text-4xl sm:text-5xl lg:text-6xl text-black font-bold py-3 mx-5">
              $9.99<span className="text-lg sm:text-xl">/ month</span>
            </h1>
            {features1.map((feature, index) => (
              <div
                key={index}
                className="feature-item flex gap-3 py-2 justify-start mx-4 xs:ms-2 items-center"
              >
                <Image
                  src={feature.image}
                  width={27}
                  height={27}
                  alt="Checkmark"
                  className="shrink-0"
                />
                <p className="text-black font-text text-sm sm:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
            <div className="py-4 my-6 xs:my-3">
              <div className="flex gap-2 mx-5 xs:mx-14 justify-center items-center rounded-md px-10 xs:px-4 border-[#017373] border-2">
                <button className="text-black font-text my-4">Start Free Trial</button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-2"
                >
                  <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#017373" />
                  <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#017373" />
                  <path
                    d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z"
                    fill="#017373"
                  />
                </svg>
              </div>
              <p className="text-gray-500 font-text text-sm text-center py-1">
                * No Credit Card Required
              </p>
            </div>
          </div>
          <div className="border-[#017373] border-2 rounded-xl w-full h-full p-4 bg-black shrink-0">
            <div className="flex gap-3 py-3 mx-5 items-center">
              <Image
                src={"/thumb-up-fill.png"}
                width={35}
                height={25}
                alt="Basic"
                className="shrink-0"
              />
              <p className="font-text bg-gradient-to-tr from-[#017373] to-[#5f9e94] text-transparent bg-clip-text text-xl sm:text-2xl font-medium">
                Team Plan
              </p>
            </div>
            <h1 className="font-text text-4xl sm:text-5xl lg:text-6xl text-white font-bold py-3 mx-5">
              $19.99<span className="text-lg sm:text-xl">/ month</span>
            </h1>
            {features2.map((feature, index) => (
              <div
                key={index}
                className="feature-item flex gap-3 py-2 justify-start mx-4 items-center"
              >
                <Image
                  src={feature.image}
                  width={27}
                  height={27}
                  alt="Checkmark"
                  className="shrink-0"
                />
                <p className="text-[#737373] font-text text-sm sm:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
            <div className="py-4 my-6">
              <div className="flex gap-2 mx-5 justify-center items-center rounded-md px-10 bg-gradient-to-r from-[#017373] to-[#AAD9D1]">
                <button className="text-black font-text my-4">Start Free Trial</button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#017373"
                  fillOpacity={0}
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-2 bg-gradient-to-tr from-[#017373] to-[#AAD9D1]"
                >
                  <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#333333" />
                  <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#333333" fillOpacity={1} />
                  <path
                    d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z"
                    fill="#333333" fillOpacity={1}
                  />
                </svg>
              </div>
              <p className="text-gray-500 font-text text-sm text-center py-1">
                * No Credit Card Required
              </p>
            </div>
          </div>
          <div className="border-[#017373] border-2 rounded-xl w-full h-full p-4 bg-white shrink-0">
            <div className="flex gap-3 py-3 mx-5 items-center">
              <Image
                src={"/thumb-up-fill.png"}
                width={35}
                height={25}
                alt="Basic"
                className="shrink-0"
              />
              <p className="font-text bg-gradient-to-tr from-[#017373] to-[#5f9e94] text-transparent bg-clip-text text-xl sm:text-2xl font-medium">
                Enterprise Plan
              </p>
            </div>
            <h1 className="font-text text-4xl sm:text-5xl lg:text-6xl text-black font-bold py-3 mx-5">
              Custom
            </h1>
            {features3.map((feature, index) => (
              <div
                key={index}
                className="feature-item flex gap-3 py-2 justify-start mx-4 items-center"
              >
                <Image
                  src={feature.image}
                  width={27}
                  height={27}
                  alt="Checkmark"
                  className="shrink-0"
                />
                <p className="text-black font-text text-sm sm:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
            <div className="py-4 my-6">
              <div className="flex gap-2 mx-5 justify-center items-center rounded-md px-10 border-[#017373] border-2">
                <button className="text-black font-text my-4">Contact Support </button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-2"
                >
                  <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#017373" />
                  <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#017373" />
                  <path
                    d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z"
                    fill="#017373"
                  />
                </svg>
              </div>
              <p className="text-gray-500 font-text text-sm text-center py-1">
                * No Credit Card Required
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-fit shrink-1 justify-center py-6">
        <Quotes prop={Testimonial1} />
      </div>
      <div className="flex flex-col w-full h-fit justify-center py-10 xs:py-4 text-white">
        <div className="text-center px-4 sm:px-8 lg:px-16">
          <h1 className="font-text font-bold text-xl sm:text-3xl lg:text-5xl">
            Frequently Asked
            <span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text"> Questions
            </span>
          </h1>
          <p className="font-text text-[#737373] pt-6 xs:pt-3 px-4 sm:px-2 xs:px-0 lg:px-8 mx-auto max-w-4xl text-base sm:text-md lg:text-lg">
            We have compiled a list of the most frequently asked questions about SmartNotes to help you get the information you need. If you have any other questions, feel free to reach out to our support team.
          </p>
        </div>
        <div className="w-full h-fit sm:px-8 md:px-16 lg:px-32 flex flex-col justify-center py-16 mx-auto xs:px-4 xs:py-4">
          <Accordion type="multiple">
            <AccordionItem value="1">
              <AccordionTrigger>What is SmartNotes?</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum Dolor Sit Amet
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>How do i get started with SmartNotes?</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum Dolor Sit Amet
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>What are the key features of SmartNotes?</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum Dolor Sit Amet
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="4">
              <AccordionTrigger>How much does SmartNotes cost?</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum Dolor Sit Amet
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="5">
              <AccordionTrigger>What is the purpose of SmartNotes?</AccordionTrigger>
              <AccordionContent>
                Lorem Ipsum Dolor Sit Amet
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="px-24">
        <div className="flex w-full h-fit justify-between">
          <div className="lg:py-34 lg:px-24 md:px-8 md:py-20 sm:px-2 sm:py-10 xs:py-6 xs:px-2 w-full lg:w-3/5 h-fit overflow-auto text-white ">
            <h1 className="text-6xl xs:text-3xl font-text font-bold leading-tight"> Unlock the Full Potential of <span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text">SmartNotes</span></h1>
            <p className="font-text py-1 leading-tight">Ready to streamline your workflow and boost your productivity? Start your free trial of SmartNotes today and experience the power of smart note-taking.</p>
                <button className=" flex items-center gap-2 m-1 py-2 my-8 xs:my-4 px-12 xs:px-6  bg-gradient-to-tr text-black font-semibold font-text from-[#017373] to-[#AAD9D1] rounded-lg">
                  Sign up for Free
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2">
                    <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#333333" />
                    <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#333333" />
                    <path d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z" fill="#333333" />
                  </svg>
                </button>
          </div>
          <div className="my-20 mx-32 flex-shrink-0 hidden xl:block">
            <Image src={"/CTAshapes.png"} width={375} height={375} alt="HeroSection"></Image>
          </div>
        </div>
      </div>

    </div>
  );
}