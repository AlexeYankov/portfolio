import React from 'react';
import './animatedCode.css';

export const AnimatedCode = () => {
  React.useEffect(() => {
    const pre = document.querySelector('pre');
    document.addEventListener('mousemove', (e) => {
      rotateElement(e, pre);
    });
  }, []);

  function rotateElement(event: MouseEvent, element: HTMLPreElement | null) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y)

    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    // console.log(middleX, middleY)

    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    // console.log(offsetX, offsetY);

    // set rotation
    element?.style.setProperty('--rotateX', offsetX + 'deg');
    element?.style.setProperty('--rotateY', -1 * offsetY + 'deg');
  }
  return (
    <div className="containerBody">
      <pre className="language-css" tabIndex={0}>
        <code className="language-css">
          <span className="token selector">.ваш-код</span>
          <span className="token punctuation"> &#123;</span>
          <br />
          <span className="token property">display</span>
          <span className="token punctuation">:</span>
          flex
          <span className="token punctuation">;</span>
          <br />
          <span className="token punctuation">&#125;</span>
        </code>
      </pre>
    </div>
  );
};
