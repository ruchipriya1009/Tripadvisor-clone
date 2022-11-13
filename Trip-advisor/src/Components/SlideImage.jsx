import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import { FaCircle } from 'react-icons/fa';
import '../Styles/Slide.css'
const SlideImage = ({onClick}) => {
    const data=[
        {   id:1,
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=300&h=300&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73"
        },
        { id:2,
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=300&h=300&s=1"
        }, 
        {   id:3,
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=300&h=300&s=1"
        },
        { id:4,
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=300&h=300&s=1"
        },
        {   id:5,
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/ac/kolkata-calcutta.jpg?w=300&h=300&s=1"
        },
        { id:6,
          img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/00/d5/bf/visit-india-tours-sightseeing.jpg?w=300&h=300&s=1"
        }
    ]
  return (
    <div>
         <Splide className='splidemain'  options={{perPage:4,gap:"3rem",drag:"free"}}>
   {data.map((e)=>(
<SplideSlide>
    <div key={e.id} onClick={onClick} className="slide">
        <img src={e.img} alt="" />
    </div>
</SplideSlide>
))}
   </Splide>
    </div>
  )
}

export default SlideImage