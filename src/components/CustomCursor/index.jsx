import React, { useEffect } from 'react'
import '../CustomCursor/cursor.css'

const index = () => {
    useEffect(() => {
        const cursorDot = document.querySelector("[data-cursor-dot]")
        const cursorOutline = document.querySelector("[data-cursor-outline]")

        window.addEventListener("mousemove", function (e) {
            const posX = e.clientX
            const posY = e.clientY
            cursorDot.style.left = `${posX}px`
            cursorDot.style.top = `${posY}px`
            // cursorOutline.style.left = `${posX}px`
            // cursorOutline.style.top = `${posY}px`
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" })
        })
        const script = document.createElement('script');
        script.src = 'cursor.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [])
    return (
        <div className='cursor-body'>
            <div class="cursor-dot" data-cursor-dot></div>
            <div class="cursor-outline" data-cursor-outline></div>
        </div>
    )
}

export default index
