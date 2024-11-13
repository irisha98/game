const input = document.querySelector('#guess');
const button = document.querySelector('#btn');

const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        play();
    }
})

button.addEventListener('click', play);
function play(){
    const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 20){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Введите число от 1 до 20',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Нужно ввести число',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    else if (userNumber < answer){
        Swal.fire('Попробуй число повыше',
        'Компьютер побеждает!')
    }
    else if (userNumber > answer){
        Swal.fire('Попробуй число пониже',
        'Компьютер побеждает!')
    }
    else{
        Swal.fire({
        title: 'ПОБЕДА',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
    }
}

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });