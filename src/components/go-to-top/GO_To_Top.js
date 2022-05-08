import React, {useState,useEffect} from 'react';
import './GO_To_Top.scss';

function GoToTop(){
    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = ()=>{
        if (window.pageYOffset > 300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleVisible)
        return () => {
            window.removeEventListener('scroll',handleVisible);
        };
    }, []);

    const goToTop = () => {
      window.scrollTo({
          top:0,
          behavior:'smooth'
      });
    }
    return (
        <div
            className='to-top'
            onClick={goToTop}
        >
            {
                isVisible&&<i className='fas fa-arrow-circle-up'></i>
            }
        </div>
    );
}

export default GoToTop;