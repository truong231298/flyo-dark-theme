import logo from "/images/logo.svg"
import images1 from "/images/illustration-intro.png"
import images2 from "/images/illustration-stay-productive.png"
import iconAcess from "/images/icon-access-anywhere.svg"
import iconfile from "/images/icon-any-file.svg"
import iconarrow from "/images/icon-arrow.svg"
import iconColla from "/images/icon-collaboration.svg"
import iconEmail from "/images/icon-email.svg"
import iconLocation from "/images/icon-location.svg"
import iconPhone from "/images/icon-phone.svg"
import iconSecurity from "/images/icon-security.svg"
import avatar1 from "/images/profile-1.jpg"
import avatar2 from "/images/profile-2.jpg"
import avatar3 from "/images/profile-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import React, { useState } from 'react';

export default function App() {
  // json part 1
  const datasPart1 = [
    { icon: iconAcess, name: "Access your files, anywhere", text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere." },
    { icon: iconSecurity, name: "Security you can trust", text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files." },
    { icon: iconColla, name: "Real-time collaboration", text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required." },
    { icon: iconfile, name: "Store any type of file", text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared." },

  ]
  // json part 3
  const datasPart3 = [
    { avatar: avatar1, name: "Satish Patel", sub: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." },
    { avatar: avatar2, name: "Bruce McKenzie", sub: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine." },
    { avatar: avatar3, name: "Iva Boyd", sub: "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you." },
  ]
  // validation email
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Validate email using a regular expression
    setIsValidEmail(/^\S+@\S+\.\S+$/.test(e.target.value));
  };

  return (
    <main className="min-h-screen">
      <section className="">
        {/* header */}
        <article className="heading flex flex-col gap-4 bg-DarkBlue1">
          {/* navbar */}
          <div className="flex justify-between items-center p-10">
            <img src={logo} alt="" />
            <span className="text-white">
              <a href="#" className="mx-4">Features</a>
              <a href="#" className="mx-4">Team</a>
              <a href="#" className="mx-4">Sign In</a>
            </span>
          </div>
          {/* content */}
          <div className="flex flex-col justify-center items-center gap-4 bg-bg-mobile sm:bg-bg-desktop bg-bottom bg-no-repeat bg-contain">
            <div>
              <img src={images1} alt="" />
            </div>
            <div className="max-w-xl flex flex-col gap-2 text-center">
              <h1 className="text-2xl font-semibold">All your files in one secure location, accessible anywhere.</h1>
              <p className="p-4">Fylo stores all your most important files in one secure location. Access them wherever
                you need, share and collaborate with friends family, and co-workers.</p>
              <span className="">
                <button className="w-48 py-2 bg-Blue rounded-full text-white font-medium">Get Started</button>
              </span>
            </div>

          </div>
        </article>
        {/* body */}
        <article className="body bg-DarkBlue2 flex flex-col gap-4">
          {/* part 1 */}
          <div className="flex flex-col sm:grid grid-cols-2 sm:p-20 sm:mx-24 mx-10 gap-8 mt-8 p-4 text-center">
            {datasPart1.map((data, index) => (
              <div key={index} className="flex flex-col gap-2 justify-center items-center">
                <img src={data.icon} alt="" />
                <h1>{data.name}</h1>
                <p className="p-4">{data.text}</p>
              </div>
            ))}

          </div>
          {/* part 2 */}
          <div className="flex flex-col sm:flex-row gap-4 p-8">
            <div>
              <img src={images2} alt="" />
            </div>
            <div className="flex flex-col gap-4 sm:mt-4">
              <h1 className="text-xl font-normal sm:w-48">Stay productive, wherever you are</h1>
              <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                storage needs.</p>
              <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email
                attachments required.</p>
              <a href="#" className="text-Cyan underline underline-offset-8 inline-flex gap-2 items-center">See how Fylo works <img src={iconarrow} alt="" /></a>
            </div>
          </div>
          {/* part 3 */}
          <div className="flex flex-col sm:flex-row gap-4 p-10 mx-10 bg-bg-quotes bg-no-repeat mb-8">
            {datasPart3.map((data, index) => (
              <div key={index} className="flex flex-col gap-2 bg-DarkBlue4 rounded-lg p-4">
                <p>{data.sub}</p>
                <span className="flex flex-row gap-1 items-center">
                  <img src={data.avatar} alt="" className="rounded-full w-8" />
                  <span className="flex flex-col">
                    <h1>{data.name}</h1>
                    <p>Founder & CEO, Huddle</p>
                  </span>
                </span>
              </div>
            ))}

          </div>
          {/* part 4: absolute */}
          <div className="flex justify-center items-center p-4 my-10">
            <div className="absolute max-w-xl flex flex-col gap-4 text-center bg-DarkBlue1 rounded-md p-4">
              <h1 className="text-xl font-normal">Get early access today</h1>
              <p className="text-sm">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.</p>
              <span className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <span>
                  <input type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder=" example@fylo.com" className="py-2 px-4 rounded-full" />
                  {!isValidEmail && <p className="text-red-500">Invalid email format</p>}
                </span>

                <span className="">
                  <button className="w-48 py-2 bg-Blue rounded-full text-white font-medium">Get Started</button>
                </span>
              </span>
            </div>
          </div>
        </article>
        {/* footer */}
        <article className="flex flex-col gap-4 bg-DarkBlue3 p-4 pt-10">
          <img src={logo} alt="" className="w-32 mt-10" />
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <span className="sm:w-96 flex flex-row gap-2">
                <img src={iconLocation} alt="" className="w-4 h-4" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem laborum esse laudantium maxime, nobis autem quasi praesentium ullam illo provident deserunt nesciunt consequuntur iure molestiae voluptatem incidunt veritatis corrupti!</p>
              </span>

            </div>
            <div className="flex flex-col gap-2">
              <span className="flex flex-row gap-2">
                <img src={iconPhone} alt="" className="w-4 h-4" />
                <p>+1-543-123-4567</p>
              </span>
              <span className="flex flex-row gap-2">
                <img src={iconEmail} alt="" className="w-4 h-4" />
                <p>example@fylo.com</p>
              </span>
            </div>
            <ul>
              {["About us", "jobs", "Press", "Blog"].map((link, index) => (
                <li key={index}><p>{link}</p></li>
              ))}
            </ul>
            <ul>
              {["contact us", "Terms", "Privacy"].map((link, index) => (
                <li><p>{link}</p></li>
              ))}
            </ul>
            <span className="flex flex-row gap-2">
              <FontAwesomeIcon icon={faFacebook} color="white" className="bg-transparent p-1 border-2 rounded-full" />
              <FontAwesomeIcon icon={faTwitter} color="white" className="bg-transparent p-1 border-2 rounded-full" />
              <FontAwesomeIcon icon={faInstagram} color="white" className="bg-transparent p-1 border-2 rounded-full" />
            </span>
          </div>

        </article>
      </section>
    </main>
  )
}