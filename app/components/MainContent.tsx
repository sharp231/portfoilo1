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
        // opacity: 0,
        y: 50,
      });
    }
  }, []);

  return (
    <div>
      <div id='mainvisual'>
        <ImageComponent
          src='/img/Library.png'
          alt='Library'
          width={1920}
          height={600}
        />
      </div>

      <div>
        <h2 id='about' className='section-title' aria-label='About section'>
          About
        </h2>
        <div className='content'>
          <div className='wrapper'>
            <div className='delayScroll' ref={animatedElement}>
              <ImageComponent
                src='/img/neko.jpg'
                alt='neko'
                className='about-img'
              />
            </div>
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

        <section id='world' aria-labelledby='profile'>
          <h2 id='profile' className='section-title'>
            プログラミングの世界
          </h2>
          <ul>
            <li>
              <div className='delayScroll'>
                <ImageComponent src='/img/onair.jpg' alt='onair' />
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
                <ImageComponent src='/img//Design.png' alt='Design' />
              </div>
              <h3 className='content-title'>Webデザイン</h3>
              <p>
                WebサイトやWebアプリケーションの外観やUIを計画し、構築するプロセスやスキルのことを行います。
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
