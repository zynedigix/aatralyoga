import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AbstractYogaShape } from "./Decorations";

import portrait1 from "../assets/gallery/testimonial-01.webp";
import portrait2 from "../assets/gallery/testimonial-02.webp";
import portrait3 from "../assets/gallery/testimonial-03.webp";

const ease = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote:
      "Aatral Yoga transformed how I approach each day. The sessions are deeply restorative — I leave feeling lighter, clearer, and more present than I have in years.",
    name: "Dr.Suganya,",
    role: "MBBS, DNB",
    image: portrait1,
  },
  {
    quote:
      "We brought Aatral into our office and the shift was immediate. Our team communicates better, handles stress with more grace, and genuinely looks forward to wellness days.",
    name: "Selva Kumar,",
    role: "Professional Photographer",
    image: portrait2,
  },
  {
    quote:
      "The instructors hold space with such warmth and precision. Every class feels like a personal retreat — thoughtful, unhurried, and profoundly grounding.",
    name: "SriLakshmi",
    role: "HomeMaker",
    image: portrait3,
  },
];


function Testimonials() {

  const [current, setCurrent] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );

    }, 5000);


    return () => clearInterval(timer);

  }, []);


  const item = testimonials[current];


  return (

    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-light-green relative overflow-hidden"
    >

      <AbstractYogaShape className="top-10 left-[-5%] text-green/5" />


      <div className="container-editorial relative z-10">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.8,
            ease
          }}

          className="mb-12 lg:mb-16"

        >

          <p className="type-eyebrow text-gold mb-4">
            Voices
          </p>


          <h2 className="type-section text-navy">
            Testimonials
          </h2>


        </motion.div>




        {/* Slider */}

        <div className="relative min-h-[420px] flex items-center">


        <AnimatePresence mode="wait">


        <motion.article

          key={item.name}

          initial={{
            opacity:0,
            x:80
          }}

          animate={{
            opacity:1,
            x:0
          }}

          exit={{
            opacity:0,
            x:-80
          }}

          transition={{
            duration:0.7,
            ease
          }}


          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full"


        >


          {/* Image */}

          <div className="lg:col-span-5">


            <div className="relative">


              <div className="absolute -inset-5 rounded-full border border-gold/20" />


              <img

                src={item.image}

                alt={item.name}

                className="
                w-64
                h-64
                md:w-80
                md:h-80
                lg:w-[360px]
                lg:h-[360px]
                object-cover
                rounded-full
                mx-auto
                "

              />


            </div>


          </div>




          {/* Content */}


          <div className="lg:col-span-7">


            <span className="
            font-display
            text-6xl
            lg:text-7xl
            text-gold/20
            leading-none
            ">

              "

            </span>


            <blockquote

              className="
              font-display
              text-xl
              md:text-2xl
              lg:text-[2rem]
              text-navy
              leading-relaxed
              italic
              -mt-4
              max-w-2xl
              "

            >

              {item.quote}


            </blockquote>




            <div className="mt-8">


              <p className="type-sub text-navy font-medium">

                {item.name}

              </p>


              <p className="type-body-sm text-navy/45 mt-2">

                {item.role}

              </p>


            </div>


          </div>


        </motion.article>


        </AnimatePresence>


        </div>




        {/* Dots */}

        <div className="flex justify-center gap-3 mt-8">


          {testimonials.map((_,index)=>(

            <button

              key={index}

              onClick={()=>setCurrent(index)}

              className={`
              w-3
              h-3
              rounded-full
              transition-all
              ${
                current===index
                ? "bg-gold w-8"
                :"bg-navy/20"
              }
              `}

            />

          ))}


        </div>



      </div>


    </section>

  );

}


export default Testimonials;