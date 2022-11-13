import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaCircle } from 'react-icons/fa';
import '../Styles/Slide.css'
export const Slide = ({onClick}) => {
    const data=[
        {   id:1,
            name:"Women on Adventure",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/11/e5/caption.jpg?w=300&h=300&s=1",
            rate:"from $701 per adult",
            rating:2
            ,review:10
        },
        { id:2,
            name:"Women on Adventure",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6e/54/db/caption.jpg?w=300&h=300&s=1",
            rate:"from $201 per adult",
            rating:4
            ,review:13
        }, {   id:3,
            name:"Women on Adventure",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ce/fb/37/caption.jpg?w=300&h=300&s=1",
            rate:"from $501 per adult",
            rating:5
            ,review:14
        },
        { id:4,
            name:"Women on Adventure",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/26/7f/46/caption.jpg?w=300&h=300&s=1",
            rate:"from $201 per adult",
            rating:4
            ,review:123
        }, {   id:5,
            name:"Women on Adventure",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8d/10/56/caption.jpg?w=300&h=300&s=1",
            rate:"from $801 per adult",
            rating:5
            ,review:19
        },
        { id:6,
            name:"Women on Adventure",
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d1/3e/53/caption.jpg?w=300&h=300&s=1",
            rate:"from $301 per adult",
            rating:4
            ,review:11
        }
    ]
    
  return (
   <>
      <Splide className='splidemain'  options={{perPage:4,gap:"3rem",drag:"free"}}>
   {data.map((e)=>(
<SplideSlide>
    <div key={e.id} onClick={onClick} className="slide">
        <img src={e.img} alt="" />
        <p>{e.name}</p> 
    <div className='rating'>
        <FaCircle/>
        <FaCircle/>
        <FaCircle/>
        <FaCircle/>
        <FaCircle/>
      <p style={{color:"grey",fontWeight:400,paddingLeft:"10px"}}>{e.review}</p>
    </div>
        <p>{e.rate}</p>
    </div>
</SplideSlide>
))}
   </Splide>
 
   
   </>
  )
}
