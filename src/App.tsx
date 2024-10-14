import React, { useEffect, useState } from 'react';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiSecurityCameraBold } from "react-icons/pi";
function App() {

  const words = [
    
    "Somos seguridad", 
    
    "Instalación de cámaras eficaz", 
    
    "Somos tu solución",
    
    "Sistemas de seguridad de alto rendimiento", 
  
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % words.length); // Cicla entre las palabras
    }, 4000);

    return () => clearInterval(interval);
  }, []);


    // Variantes para la animación de entrada y salida
    const variants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    };
  const letters = Array.from("Confía tu seguridad en nosotros")

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Añade un retraso progresivo
      },
    }),
  };

  const title = Array.from("IO SECURITY")

  const titleAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5, // Añade un retraso progresivo
      },
    }),
  };

  return (
    <main className="main">

        <div className="description">

        <AnimatePresence mode="wait">
        <motion.p
          key={words[index]} // Cambia la clave a la palabra actual para activar la animación
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>

          {/* <div>

            <a

              
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              
            target="_blank"

              
            rel="noopener noreferrer"

            >

              By
              <img
                src="/vercel.svg"
                alt="Vercel Logo"
                className="vercelLogo"
                width={100}
                height={24}
              />
            </a>
          </div> */}
        </div>
  
        <div className="center">

          <h1 className='title'>

            {title.map((letter, index) => (

              <motion.span

                key={index}

                custom={index}

                variants={titleAnimation}

                initial="hidden"

                animate="visible"

              >

                {letter}

              </motion.span>

            ))}

          </h1>

          <div className='subtitle'>

          {letters.map((letter, index) => (

            <motion.span

              style={{ fontFamily: "'Silkscreen', sans-serif" }}

              key={index}

              custom={index}

              variants={letterAnimation}

              initial="hidden"

              animate="visible"

            >

              {letter}

            </motion.span>

          ))}

          </div>

        </div>
  
        <div className="grid">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <h2 style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
            <FaWhatsapp /> Whatsapp  <span>-&gt;</span> 
            </h2>
            <p>Pincha aquí para contactarnos directamente.</p>
          </a>
  
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
             <FaInstagram />Instagram <span>-&gt;</span>
            </h2>
            <p>Visita nuestras redes sociales.</p>
          </a>
  
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
              <FaMapMarkerAlt /> Ubicaciones <span>-&gt;</span>
            </h2>
            <p>Conoce nuestras sedes.</p>
          </a>
  
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5, }}>
            <PiSecurityCameraBold /> Servicios <span>-&gt;</span>
            </h2>
            <p>
              Descubre todo lo que te podemos ofrecer.
            </p>
          </a>
        </div>

        <div style={{pointerEvents: 'none'}} className="noiseBorder">

            <div className="noise"></div>
          
        </div>

        <div style={{pointerEvents: 'none'}} className="noiseBorder inverted">

          <div className="noise"></div>

        </div>
          
    </main>
  );
}

export default App;
