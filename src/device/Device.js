import React, { Component } from 'react';

class Device extends Component {
  render() {
    let {children, play, id} = this.props;
    return (
      <div id={id}>
        <svg
          className="device"
          viewBox="0 0 420 854"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <filter x="-1.2%" y="-0.5%" width="102.5%" height="101.2%" filterUnits="objectBoundingBox" id="device-shadow">
              <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
              <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
              <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
              <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.120640851 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
            <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="100%" id="button">
              <stop stopColor="#B4E1FF" offset="0%"></stop>
              <stop stopColor="#A2E3C4" offset="100%"></stop>
            </radialGradient>
          </defs>
          <g transform="translate(2.222222, 0.000000)">
            <path d="M59.2592593,0 L355.555556,0 C388.283541,-6.01203334e-15 414.814815,26.5312741 414.814815,59.2592593 L414.814815,794.074074 C414.814815,826.802059 388.283541,853.333333 355.555556,853.333333 L59.2592593,853.333333 C26.5312741,853.333333 4.00802223e-15,826.802059 0,794.074074 L0,59.2592593 C-4.00802223e-15,26.5312741 26.5312741,6.01203334e-15 59.2592593,0 Z" fill="#F4F5F6" />
            <path d="M62.962963,7.40740741 L351.851852,7.40740741 C382.534338,7.40740741 407.407407,32.2804769 407.407407,62.962963 L407.407407,790.37037 C407.407407,821.052856 382.534338,845.925926 351.851852,845.925926 L62.962963,845.925926 C32.2804769,845.925926 7.40740741,821.052856 7.40740741,790.37037 L7.40740741,62.962963 C7.40740741,32.2804769 32.2804769,7.40740741 62.962963,7.40740741 Z" filter="url(#device-shadow)" />
            <path d="M177.407407,45.9259259 L237.407407,45.9259259 C239.248357,45.9259259 240.740741,47.4183101 240.740741,49.2592593 C240.740741,51.1002084 239.248357,52.5925926 237.407407,52.5925926 L177.407407,52.5925926 C175.566458,52.5925926 174.074074,51.1002084 174.074074,49.2592593 C174.074074,47.4183101 175.566458,45.9259259 177.407407,45.9259259 Z" fill="#BCC3C6" />
          </g>
          <g transform="translate(0.000000, 107.407407)" fill="#EFF0F1">
            <path d="M417.407407,75.5555556 L418.518519,75.5555556 C419.336718,75.5555556 420,76.2188374 420,77.037037 L420,137.037037 C420,137.855237 419.336718,138.518519 418.518519,138.518519 L417.407407,138.518519 C415.975558,138.518519 414.814815,137.357775 414.814815,135.925926 L414.814815,78.1481481 C414.814815,76.7162988 415.975558,75.5555556 417.407407,75.5555556 Z" />
            <path d="M2.59259259,75.5555556 C4.02444194,75.5555556 5.18518519,76.7162988 5.18518519,78.1481481 L5.18518519,135.925926 C5.18518519,137.357775 4.02444194,138.518519 2.59259259,138.518519 L1.48148148,138.518519 C0.663281852,138.518519 0,137.855237 0,137.037037 L0,77.037037 C0,76.2188374 0.663281852,75.5555556 1.48148148,75.5555556 L2.59259259,75.5555556 Z" />
            <path d="M2.59259259,0 C4.02444194,2.63026459e-16 5.18518519,1.16074324 5.18518519,2.59259259 L5.18518519,32.962963 C5.18518519,34.3948123 4.02444194,35.5555556 2.59259259,35.5555556 L2.22222222,35.5555556 C0.994922778,35.5555556 0,34.5606328 0,33.3333333 L0,2.22222222 C0,0.994922778 0.994922778,-2.2545125e-16 2.22222222,0 L2.59259259,0 Z" />
            <path d="M2.59259259,151.111111 C4.02444194,151.111111 5.18518519,152.271854 5.18518519,153.703704 L5.18518519,211.481481 C5.18518519,212.913331 4.02444194,214.074074 2.59259259,214.074074 L1.48148148,214.074074 C0.663281852,214.074074 0,213.410792 0,212.592593 L0,152.592593 C0,151.774393 0.663281852,151.111111 1.48148148,151.111111 L2.59259259,151.111111 Z" />
          </g>
          <path d="M209.259259,828.888889 C225.827802,828.888889 239.259259,815.457431 239.259259,798.888889 C239.259259,782.320346 225.827802,768.888889 209.259259,768.888889 C192.690717,768.888889 179.259259,782.320346 179.259259,798.888889 C179.259259,815.457431 192.690717,828.888889 209.259259,828.888889 Z M209.259259,832.592593 C190.645218,832.592593 175.555556,817.50293 175.555556,798.888889 C175.555556,780.274847 190.645218,765.185185 209.259259,765.185185 C227.873301,765.185185 242.962963,780.274847 242.962963,798.888889 C242.962963,817.50293 227.873301,832.592593 209.259259,832.592593 Z" fill="url(#button)" />
          <g transform="translate(22.000000, 85.000000)" stroke="none" fill="none" fontWeight="300">
            <mask id="screen" fill="white">
              <path d="M7.41106719,0 L367.588933,0 C371.681952,0 375,3.31438482 375,7.40288568 L375,659.597114 C375,663.685615 371.681952,667 367.588933,667 L7.41106719,667 C3.3180478,667 0,663.685615 0,659.597114 L0,7.40288568 C0,3.31438482 3.3180478,0 7.41106719,0 Z" />
            </mask>
            <g mask="url(#screen)">
              {children}
            </g>
          </g>
        </svg>
        <button className="play" onClick={play}>Näytä video</button>
      </div>
    );
  }
}

export default Device;