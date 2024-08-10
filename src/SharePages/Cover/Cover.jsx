import React from 'react';
import { Parallax, Background } from 'react-parallax';
const Cover = ({ img, title }) => {
    return (
       <div>
       <Parallax
        blur={{ min: -10 , max: 10 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-100}
    >
      
      
      
       <div className="hero h-[700px] " >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="md:w-[700px] sm:[400px] sm:p-8  md:p-16  bg-opacity-10 border-4">
                            <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>


                </Parallax>
           
              
          
      
       </div>

    );
};

export default Cover;