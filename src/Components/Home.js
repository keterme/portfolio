import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../Styles/main.css';

const SplitText = ({ copy, role }) => {
  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <span aria-label={copy} role={role}>
      {copy.split('').map((char, index) => {
        const style = { animationDelay: `${0.5 + index / 10}s` };
        return (
          <span aria-hidden="true" key={index} style={style}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

const Home = () => {
  const carouselItems = [
    {
      key: '1',
      text: "Hey! I'm a",
      texttwo: '<Developer/>',
      image: '../../site/assets/setup.jpg',
    },
    {
      key: '2',
      text: "Visualize as",
      texttwo: '<Analyst/>',
      image: '../../site/assets/backlit.webp',
    },
    {
      key: '3',
      text: "CI/CD in",
      texttwo: '<DevOps/>',
      image: '../../site/assets/owl.jpg',
    },
  ];

  return (
    <div className='home'>
      <main>
        <AliceCarousel
          autoPlay
          infinite
          disableButtonsControls
          autoPlayInterval={3500}
          autoPlayDirection='ltr'
        >
          {carouselItems.map((item) => (
            <div key={item.key} className='carousel-item'>
              <img alt={item.text} src={item.image} />
              <motion.div
                className='carousel-text'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1>
                  <SplitText copy={item.text} role='heading' />
                </h1>
                <h2>
                  <SplitText copy={item.texttwo} role='heading' />
                </h2>
              </motion.div>
              <motion.div
                className='resume-text'
                initial={{x: '200vw'}}
                animate={{x: 0}}
                transition={{type: 'spring', delay: '1', stiffness: 70}}
              >
                <button className='btn'>
                  <a href='https://myelvisresume.tiiny.site/' target='blank'>Resume</a>
                </button>
              </motion.div>
            </div>
          ))}
        </AliceCarousel>
      </main>
    </div>
  );
};

export default Home;
