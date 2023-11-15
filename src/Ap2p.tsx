import gsap, { Power2, Sine } from 'gsap';
import './App.css'
import { Menu } from 'iconsax-react';
import { useEffect, useRef } from 'react';

function Ap2p() {
  const wrapper = useRef(null);

  function openMenu() {
    const tl = gsap.timeline();
    const wrapperEl = wrapper.current as unknown as HTMLElement;

    const [el1] = [wrapperEl.querySelector(".links")];

    tl.to(el1, {
      x: 0,
      ease: Sine.easeInOut,
      duration: 0.4
    })

    wrapperEl.addEventListener("mouseleave", () => {
      tl.reverse();
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let wrapperEl = wrapper.current as unknown as HTMLElement;
      if (window.scrollY > 60) {
        gsap.to(wrapperEl.querySelector(".logo"), {
          x: "-11%",
          duration: 3
        })
      } else
        wrapperEl.style.justifyContent = "center"
    })
  }, [])

  return (
    <>
      <nav className='m-4 fixed overflow-hidden rounded-xl w-[calc(100vw-2rem)] bg-black h-max flex justify-center items-center gap-2' ref={wrapper}>
        <div className="logo relative bg-orange-200 aspect-square rounded-[10px] w-[3.75rem] h-[3.75]"></div>

        <div className="right-panel flex rounded-xl h-[3.75rem] items-center p-2 pl-3 gap-2 bg-orange-200">
          <button title='Menu trigger' className='trigger' onMouseOver={() => { openMenu() }}><Menu color="#FF8A65" size={"16"} variant='Bold' /></button>

          {/* <div className="links rounded-xl h-[3.75rem] items-center p-2 pl-3 bg-orange-200 flex gap-6 right-[-100%] px-4 absolute">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
          </div> */}
          <button className='relative z-20 bg-orange-500 transition-colors hover:bg-orange-400 active:bg-orange-500 rounded-md px-4 text-sm flex h-full items-center justify-center'>Call to Action</button>
        </div>
      </nav>
      <div className='w-screen h-[130vh]'></div>
    </>
  )
}

export default Ap2p
