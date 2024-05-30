import React, { useEffect, useRef } from 'react';
import ImageComponent from './ImageComponent';
import animationLibrary from 'gsap';

const MainContent: React.FC = () => {
  const animatedElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = animatedElement.current;
    if (element) {
      animationLibrary.from(element, {
        duration: 0.5,
        // opacity: 0, y: 50,
      });
    }
  }, []);

  return (
    <div>
      <div id='mainvisual'>
        <ImageComponent src='/img/Library.png' alt='Library' />
      </div>

      <section id='about' aria-labelledby='about-section'>
        <h2 id='about-section' className='section-title'>
          About
        </h2>
        <div className='content'>
          <div className='delayScroll' ref={animatedElement}>
            <ImageComponent
              src='/img/neko.png'
              alt='neko'
              className='about-image'
            />
          </div>
          <div className='text'>
            <h3 className='content-title'>Lab</h3>
            <p>
              こちらはLabが運営するメディアです。
              <br />
              Web制作のために参考になればぜひ使ってください。
            </p>
          </div>
        </div>
      </section>

      <section id='world' aria-labelledby='world-section'>
        <h2 id='world-section' className='section-title'>
          プログラミングの世界
        </h2>
        <ul>
          <li>
            <div className='delayScroll'>
              <ImageComponent src='/img/onair.png' alt='onair' />
            </div>
            <h3 className='content-title'>Web制作</h3>
            <p>
              法人・個人向けにWebサイトを制作することです。
              ホームページ制作やサイト制作とも呼ばれます。
              Web制作を行うことで、コンテンツの発信や、自社サービス・アプリとの連携などが可能になります。
            </p>
          </li>
          <li>
            <div className='delayScroll'>
              <ImageComponent src='/img/Design.png' alt='Design' />
            </div>
            <h3 className='content-title'>Webデザイン</h3>
            <p>
              WebサイトやWebアプリケーションの外観やUIを計画し、構築するプロセスやスキルのことを行います。
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MainContent;
