import React from 'react';
import Particles from 'react-particles-js';
import sakura from '../../assets/img/sakura.png';

const ParticlesComponents = () => {
  return (
    <Particles
      className="background"
      params={{
        particles: {
          number: {
            value: 58,
            density: {
              enable: true,
              value_area: 561.194221302933,
            },
          },
          color: {
            value: '#ffa8d3',
          },
          shape: {
            type: 'image',
            stroke: {
              width: 4,
              color: '#000000',
            },
            polygon: {
              nb_sides: 4,
            },
            image: {
              src: sakura,
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.08818766334760375,
            random: true,
            anim: {
              enable: false,
              speed: 1.2181158184520178,
              opacity_min: 0.12993235396821523,
              sync: false,
            },
          },
          size: {
            value: 8.017060304327615,
            random: true,
            anim: {
              enable: true,
              speed: 4.872463273808071,
              size_min: 4.060386061506725,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 320.6824121731046,
            color: '#000000',
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 8.017060304327615,
            direction: 'bottom-left',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 641.3648243462092,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse',
            },
            onclick: {
              enable: false,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 89.32849335314796,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesComponents;
