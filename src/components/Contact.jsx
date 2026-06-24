import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";


const ease = [0.22, 1, 0.36, 1];


const addressLines = [
  "No 3, Ground Floor, Olympia Mithila, Thirumazhisai,",
  "Tiruvallur, Tamil Nadu - 600124",
];


const mapsQuery = encodeURIComponent(
  "No 3, Ground Floor, Olympia Mithila, Thirumazhisai, Tiruvallur, Tamil Nadu 600124"
);


const mapsEmbedUrl =
  `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;



function Contact() {


  const [showSuccess, setShowSuccess] = useState(false);


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    message: ""

  });



  const handleSubmit = async (e) => {


    e.preventDefault();



    try {


      const response = await fetch("/api/send-email", {


        method: "POST",


        headers: {


          "Content-Type": "application/json"


        },


        body: JSON.stringify(formData)


      });



      const data = await response.json();



      if (data.success) {


        setShowSuccess(true);



        setFormData({

          name: "",
          email: "",
          phone: "",
          message: ""

        });


      }

      else {


        alert(
          "Something went wrong. Please try again."
        );


      }



    }

    catch (error) {


      alert(
        "Something went wrong. Please try again."
      );


    }


  };




  return (

    <>


      <section
        id="contact"
        className="section-pad gradient-warm relative overflow-hidden"
      >


        <div className="container-editorial">


          <motion.div

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.8, ease }}

            className="mb-16 lg:mb-20 xl:mb-24"

          >


            <p className="type-eyebrow text-gold mb-6">

              Begin Here

            </p>


            <h2 className="type-section text-navy">

              Book Your Session

            </h2>



            <p className="type-body text-navy/65 max-w-lg mt-8">

              Take the first step toward balance. Share your details and we'll
              craft a wellness experience tailored to you.

            </p>



          </motion.div>





          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-20 items-start">



            <motion.form


              onSubmit={handleSubmit}


              initial={{ opacity: 0, y: 36 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.8, ease }}

              className="space-y-6"


            >



              <input


                type="text"

                placeholder="Your Name"


                value={formData.name}


                onChange={(e) =>

                  setFormData({

                    ...formData,

                    name: e.target.value

                  })

                }


                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40"



              />





              <input


                type="email"

                placeholder="Email Address"


                value={formData.email}


                onChange={(e) =>

                  setFormData({

                    ...formData,

                    email: e.target.value

                  })

                }


                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40"



              />





              <input


                type="tel"

                placeholder="Phone Number"


                value={formData.phone}


                onChange={(e) =>

                  setFormData({

                    ...formData,

                    phone: e.target.value

                  })

                }


                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40"



              />





              <textarea


                rows="4"


                placeholder="Tell us about your wellness goals"


                value={formData.message}


                onChange={(e) =>

                  setFormData({

                    ...formData,

                    message: e.target.value

                  })

                }


                className="w-full px-6 py-5 type-body bg-transparent border-b border-navy/12 outline-none focus:border-gold/60 transition-colors text-navy placeholder:text-navy/40 resize-none"



              />






              <button


                type="submit"


                 className="w-full bg-navy text-white py-5 type-small font-medium tracking-widest uppercase hover:bg-navy-light transition-colors duration-500 mt-4 rounded-full cursor-pointer"



              >


                Send Enquiry


              </button>




            </motion.form>








            <div className="space-y-10 lg:space-y-12">



              <div className="space-y-8">


                <div className="flex gap-5">


                  <MapPin
                    size={22}
                    className="text-gold"
                  />


                  <address className="type-body text-navy not-italic">


                    {addressLines.map(line => (

                      <span key={line} className="block">

                        {line}

                      </span>

                    ))}



                  </address>


                </div>






                <div className="flex gap-5">


                  <Mail
                    size={22}
                    className="text-gold"
                  />


                  <a

                    href="mailto:contact@aatralyoga.com"

                    className="type-body text-navy"

                  >

                    contact@aatralyoga.com

                  </a>


                </div>







                <div className="flex gap-5">


                  <Phone

                    size={22}

                    className="text-gold"

                  />



                  <a

                    href="tel:+919876543210"

                    className="type-body text-navy"

                  >

                    +91 98765 43210

                  </a>


                </div>






                <a

                  href="https://wa.me/919876543210"

                  target="_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center gap-3 bg-green text-white px-8 py-4 rounded-full type-small uppercase tracking-widest"


                >


                  <MessageCircle size={18} />

                  WhatsApp


                </a>




              </div>








              <div

                className="overflow-hidden rounded-sm shadow-xl border border-navy/6"

              >


                <iframe


                  title="Aatral Yoga studio location"


                  src={mapsEmbedUrl}


                  className="w-full h-56 sm:h-64 lg:h-72 border-0"


                  loading="lazy"



                />


              </div>




            </div>



          </div>



        </div>


      </section>








      {/* SUCCESS POPUP */}


      <AnimatePresence>


        {showSuccess && (



          <motion.div


            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}


            className="fixed inset-0 z-[999] flex items-center justify-center bg-navy/60 backdrop-blur-sm"



          >



            <motion.div


              initial={{ scale: 0.9, y: 30 }}

              animate={{ scale: 1, y: 0 }}

              exit={{ scale: 0.9, y: 30 }}

              transition={{ duration: 0.4 }}


              className="bg-white rounded-3xl px-10 py-12 max-w-md mx-6 text-center shadow-2xl"



            >


              <div className="text-gold text-5xl mb-5">

                ✓

              </div>




              <h3 className="type-section text-navy mb-4">

                Thank You

              </h3>



              <p className="type-body text-navy/70">


                Your enquiry has been received.

                <br />

                Our Aatral Yoga team will contact you soon.



              </p>






              <button


                onClick={() => setShowSuccess(false)}


                className="mt-8 rounded-full bg-navy text-white px-8 py-3 type-small uppercase tracking-widest"



              >


                Continue


              </button>




            </motion.div>




          </motion.div>


        )}


      </AnimatePresence>



    </>

  );


}


export default Contact;