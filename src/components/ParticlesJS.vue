<template>
  <div id='particles-js'></div>
</template>

<script>
export default {
  name: 'ParticlesJS',
  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 545,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': '#fff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.43,
            'random': true,
            'anim': {
              'enable': false,
              'speed': (Math.random() * (21) ) + 4,
              'opacity_min': 0.2,
              'sync': false
            }
          },
          'size': {
            'value': 7.8,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': false,
            'distance': 500,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 2
          },
          'move': {
            'enable': true,
            'speed': 6,
            'direction': 'bottom',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': false,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'repulse'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 680,
              'line_linked': {
                'opacity': 0.1
              }
            },
            'bubble': {
              'distance': 400,
              'size': 160,
              'duration': 2.3,
              'opacity': 1,
              'speed': 3
            },
            'repulse': {
              'distance': 100,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }

}
</script>

<style>
#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  z-index: 0;
  overflow: hidden;
  background: cornflowerblue;
}
</style>
