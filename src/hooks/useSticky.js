import { useEffect, useState, useRef } from "react";

function useSticky() {
    const [isSticky, setSticky] = useState(false);
    const element = useRef(null)

    const handleScroll = () => {
        //element.current.getBoundingClientRect().top
        if (element.current) {
            //console.log(window.scrollY, element.current.getBoundingClientRect())
            if (!isSticky)
            {
                if (window.scrollY > 80)
                setSticky(true)
            }
            // window.scrollY > element.current.getBoundingClientRect().top
            //     ? setSticky(true)
            //     : setSticky(false);
        }

    }

    // This function handle the scroll performance issue
    const debounce = (func, wait = 20, immediate = true) => {
        let timeOut;
        return () => {
            let context = this,
                args = arguments;
            const later = () => {
                timeOut = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeOut;
            clearTimeout(timeOut);
            timeOut = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };


    useEffect(() => {
        window.addEventListener("scroll", debounce(handleScroll))
        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        }
    }, [debounce, handleScroll])

    return { isSticky, element }
}

export default useSticky