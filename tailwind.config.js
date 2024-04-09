/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
          primary : "rgba(var(--primary))" ,
          secondary :"rgba(var(--secondary))" ,
          third : "rgba(var(--third))" ,
          forth:"rgba(var(--forth))",
          textColor:"rgba(var(--text-color))" 
        },
      borderRadius :{
        '50p':'50%',
        'img' : '55% 45% 55% 45%',
        'imgAnim' : '45% 55% 45% 55%'
      },
      keyframes: {
        imgKeyframeAnimation: {                         
          '50%': { 
            transform: 'translateY(10px) scale(105%)',
            borderRadius : '45% 55% 45% 55%' 
          },        
        }
      },
      animation: {
        imgAnimation: 'imgKeyframeAnimation 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

