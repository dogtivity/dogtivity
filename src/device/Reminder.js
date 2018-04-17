import React, { Component } from 'react';

import anime from 'animejs';
import Device from './Device';
import Navigation from './Navigation';

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: anime.timeline({
        easing: 'linear',
        autoplay: false,
        key: 0
      })
    };
  }

  play() {
    this.state.animation.restart();
  }

  componentDidMount() {
    this.state.animation
      .add({
        targets: '#reminderOverlay rect',
        opacity: [0, 0.75],
        offset: 200,
        duration: 500
      })
      .add({
        targets: '#reminderNotificationBox',
        height: [0, 96],
        width: [0, 333],
        x: [187.5, 21],
        y: [600, 122],
        opacity: 1,
        duration: 800,
        offset: '-=600',
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderNotificationIcon',
        opacity: [0, 1],
        duration: 500,
        offset: '-=100'
      })
      .add({
        targets: '#reminderNotificationText',
        opacity: [0, 1],
        duration: 500,
        offset: '-=500'
      })
      .add({
        targets: '#reminderTouch1',
        opacity: [0, 0.4, 0],
        r: [20, 32, 20],
        duration: 600,
        offset: '+=2200',
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderTouch1Effect1',
        scale: [1, 1.05, 1],
        translateX: [0, -8.325, 0],
        translateY: [0, -8.325, 0],
        offset: '-=600',
        duration: 600,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderAppBg',
        height: [0, 667],
        y: [667, 0],
        opacity: [0, 1],
        offset: '+=0',
        duration: 1200,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderAppTopBar',
        opacity: 1,
        duration: 600,
        offset: '-=850',
      })
      .add({
        targets: '#reminderAppHeader',
        opacity: 1,
        duration: 600,
        offset: '-=400',
      })
      .add({
        targets: '#reminderAppSwitcher',
        opacity: 1,
        duration: 600,
        offset: '-=600',
      })
      .add({
        targets: '.reminderAppListItemContent',
        opacity: 1,
        duration: 600,
        offset: '-=600',
      })
      .add({
        targets: '.reminderAppListItem polygon',
        opacity: 1,
        duration: 600,
        offset: '-=600',
      })
      .add({
        targets: '.reminderAppListItem rect',
        width: 375,
        duration: 300,
        offset: '-=600',
      })
      .add({
        targets: '#reminderTouch2',
        opacity: [0, 0.4, 0],
        r: [20, 32, 20],
        duration: 600,
        offset: '+=5000',
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderTouch2Effect1',
        scale: [1, 1.025, 1],
        translateX: [0, -4, 0],
        translateY: [0, -3, 0],
        duration: 600,
        offset: '-=600',
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderBookingView',
        translateX: [375, 0],
        opacity: 1,
        duration: 400,
        offset: '+=100'
      })
      .add({
        targets: '#reminderTouch3',
        opacity: [0, 0.4 ,0],
        r: [20, 32 ,20],
        duration: 600,
        offset: '+=4000',
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderBookingSubmit',
        scale: [1, 1.05, 1],
        translateX: [0, -8.15, 0],
        translateY: [0, -30, 0],
        offset: '-=600',
        duration: 600,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderBookingSuccessBox',
        height: [0, 460],
        y: [569, 116],
        offset: '+=200',
        duration: 600,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderBookingSuccess .content',
        opacity: [0, 1],
        offset: '-=200',
        duration: 400
      })
      .add({
        targets: '#reminderBookingSuccess .icon circle',
        r: 80,
        offset: '-=500',
        duration: 600,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#reminderBookingSuccess .icon polygon',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        offset: '-=100',
        duration: 600
      })
      .add({
        targets: '#reminderBookingSuccess .icon polygon',
        opacity: [0, 1],
        scale: [0, 1],
        translateX: [85 , 0],
        translateY: [75, 0],
        easing: 'easeOutBack',
        offset: '-=300',
        duration: 800
      })
      .add({
        targets: '#reminderEnd',
        opacity: [0, 0.25],
        offset: '+=5000',
        duration: 1000
      });
  };

  render() {
    let date = new Date();
    let h = date.getHours();
    h < 10 && (h = "" + 0 + h);
    let m = date.getMinutes();
    m < 10 && (m = "" + 0 + m);
    let time = h + "." + m;

    return (
      <Device play={() => this.play()} id="reminder">
        <defs>
          <rect id="reminderNotificationBox" rx="8" height="96" width="333" x="21" y="122" />
          <rect id="reminderBookingSuccessBox" x="36" y="116" width="303" height="460" rx="4" />
          <filter x="-9.6%" y="-29.2%" width="119.2%" height="166.7%" filterUnits="objectBoundingBox" id="shadow-notification">
            <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
          </filter>
          <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="177.866667%" gradientTransform="translate(0.500000,0.000000),scale(1.000000,0.562219),rotate(90.000000),translate(-0.500000,-0.000000)" id="gradientScreenBg">
            <stop stopColor="#4ECDC4" offset="0%"></stop>
            <stop stopColor="#A2E3C4" offset="100%"></stop>
          </radialGradient>
        </defs>
        <rect fill="url(#gradientScreenBg)" x="0" y="0" width="375" height="667" />
        <text fontSize="112" fill="#FFFFFF">
          <tspan x="67.94" y="270">{time}</tspan>
        </text>
        <g id="reminderOverlay">
          <rect x="0" y="0" width="375" height="667" fill="#4ECDC4" opacity="0.75" />
        </g>
        <g>
          <use fill="black" filter="url(#shadow-notification)" xlinkHref="#reminderNotificationBox"></use>
          <use fill="#FFFFFF" xlinkHref="#reminderNotificationBox"></use>
        </g>
        <g id="reminderTouch1Effect1">
          <use fill="black" filter="url(#shadow-notification)" xlinkHref="#reminderNotificationBox"></use>
          <use fill="#FFFFFF" xlinkHref="#reminderNotificationBox"></use>
        </g>
        <path id="reminderNotificationIcon" fill="#4ECDC4" d="M59.9727511,166.398902 C59.9767466,164.205331 61.4603952,161.803518 63.2865566,161.03436 C65.1127416,160.265155 66.5899267,161.419801 66.5859987,163.613366 C66.5820032,165.806937 65.0983546,168.20875 63.2721932,168.977908 C61.4588543,169.741697 59.9870287,168.608823 59.9728588,166.438426 L59.9727511,166.398902 Z M54.5254818,159.65043 C53.8422327,157.268728 54.7672484,154.251623 56.5915702,152.911505 C58.4158703,151.57149 60.4486543,152.415999 61.1319243,154.797759 C61.8151734,157.179461 60.8901577,160.196566 59.0658359,161.536683 C57.2543818,162.86727 55.2345213,162.044916 54.5380625,159.693291 L54.5254818,159.65043 Z M52.8192398,156.24392 C53.841517,158.615665 53.2726526,161.140647 51.5486201,161.883745 C49.8245876,162.626843 47.5983482,161.306616 46.576071,158.934871 C45.5537938,156.563127 46.1226583,154.038145 47.8466908,153.295046 C49.5707233,152.551948 51.7969626,153.872175 52.8192398,156.24392 Z M42.9642967,167.584896 C41.0877985,166.26747 39.9180499,163.557917 40.3515679,161.532925 C40.7851055,159.50794 42.6577652,158.934358 44.5343074,160.251778 C46.4108057,161.569204 47.5805542,164.278757 47.1470363,166.303749 C46.7165547,168.31448 44.8657015,168.896539 42.9982826,167.60843 L42.9642967,167.584896 Z M44.1823817,175.534104 C43.3640851,174.444968 43.3479599,172.410015 44.049819,171.449597 C44.049819,171.449597 44.1737493,171.31193 44.2454763,171.25394 C45.4529491,170.277644 46.9029391,169.639192 48.1566144,168.722666 C49.0032697,168.103572 49.5954281,167.065843 50.5870825,166.724091 C52.4992796,166.065085 54.8141503,166.03026 56.6531175,166.872149 C57.9116504,167.44831 58.47753,168.955898 59.4426134,169.948173 C60.53248,171.068719 62.2179381,171.754269 62.8274453,173.193667 C63.2261743,174.135247 63.453242,175.465476 62.8111009,176.261291 C60.7208508,178.851714 56.3871338,178.58372 53.0625661,178.423492 C49.9533054,178.273563 46.0522113,178.022645 44.1823817,175.534104 Z" transform="translate(53.423653, 165.396704) rotate(-17.000000) translate(-53.423653, -162.396704) " />
        <text id="reminderNotificationText" fontSize="24" fill="#3A405A">
          <tspan x="88" y="162">Vuf! On aika taas käydä </tspan>
          <tspan x="88" y="193">rokottamassa Mussukka!</tspan>
        </text>

        <circle id="reminderTouch1" fill="#C6FFFB" stroke="#249B92" strokeWidth="4" opacity="0" cx="219.5" cy="175.5" />

        <rect id="reminderAppBg" fill="#FFFFFF" x="0" y="0" width="375" height="667" opacity="0" />
        <g id="reminderAppTopBar" opacity="0">
          <rect fill="#4ECDC4" x="0" y="0" width="375" height="80" />
          <g transform="translate(6.000000, 5.000000)" fill="#FFFFFF">
            <rect x="339" y="1.5" width="20" height="7.5" rx="0.5" />
            <path d="M15.1317075,0.0705570341 C15.6451721,-0.132845306 16.2263076,0.118509849 16.42971,0.631974486 C16.4761509,0.749208928 16.5,0.874169136 16.5,1.000267 L16.5,8.52852574 C16.5,9.08081049 16.0522847,9.52852574 15.5,9.52852574 L2.2951598,9.52852574 C2.24517709,9.52852574 2.19594844,9.52483208 2.14775597,9.51768565 C2.09953981,9.52482647 2.05020191,9.52852574 2,9.52852574 L1,9.52852574 C0.44771525,9.52852574 6.76353751e-17,9.08081049 0,8.52852574 L0,6.02852574 C-6.76353751e-17,5.476241 0.541015625,5.20735875 1,5.02852574 L15.1317075,0.0705570341 Z" />
            <path d="M72.1704372,0 C74.9427505,0 77.4641212,1.07441257 79.3408745,2.82956276 L72.1704372,10.0013428 L65,2.82956276 C66.8767533,1.07441257 69.398124,0 72.1704372,0 Z" />
            <rect opacity="0.502547554" x="21" y="2" width="37" height="7" />
            <rect opacity="0.502547554" x="163" y="2" width="37" height="7" />
            <rect opacity="0.502547554" x="304" y="2" width="30" height="7" />
          </g>
          <Navigation selected={3} />
        </g>
        <g stroke="#3A405A" strokeWidth="1.5" id="reminderAppSwitcher" opacity="0">
          <path d="M11,88.5 L127,88.5 L127,118.5 L11,118.5 C8.790861,118.5 7,116.709139 7,114.5 L7,92.5 C7,90.290861 8.790861,88.5 11,88.5 Z" fill="#3A405A" />
          <rect x="128" y="88.5" width="120" height="30" />
          <path d="M248,88.5 L364,88.5 C366.209139,88.5 368,90.290861 368,92.5 L368,114.5 C368,116.709139 366.209139,118.5 364,118.5 L248,118.5 L248,88.5 Z" />
          <g stroke="none" transform="translate(5.000000, 93.000000)" fontSize="16">
            <text fill="#FFFFFF">
              <tspan x="38.236" y="16">Nopein</tspan>
            </text>
            <text fill="#3A405A">
              <tspan x="161.132" y="16">Halvin</tspan>
            </text>
            <text fill="#3A405A">
              <tspan x="283.884" y="16">Lähin</tspan>
            </text>
            </g>
        </g>
        <g opacity="0" id="reminderAppHeader">
          <text fontFamily="Chewy" fontSize="28" fontWeight="normal" letterSpacing="0.5" fill="#FFFFFF">
            <tspan x="78.2558594" y="60">Alueen eläinlääkärit</tspan>
          </text>
          <polygon fill="#FFFFFF" points="43.59375 60 38.3574219 60 30.90625 50.2792969 38.3574219 40.5722656 43.59375 40.5722656 36.1425781 50.2792969" />
        </g>

        <g id="reminderTouch2Effect1">
          <g className="reminderAppListItem" transform="translate(0.000000, 135.000000)">
            <g className="reminderAppListItemContent" opacity="0" fill="#3A405A">
              <text fontSize="20">
                <tspan x="16" y="26">Eläinlääkäriasema</tspan>
              </text>
              <g fontSize="12">
                <text>
                  <tspan x="16" y="42">Katu 123, 00000 Kaupunki</tspan>
                </text>
                <text>
                  <tspan x="16" y="65">Seuraava aika huomenna 10.30</tspan>
                </text>
              </g>
              <text fontSize="36">
                <tspan x="268.124" y="50">42 €</tspan>
              </text>
            </g>
            <rect fill="#D8D8D8" x="0" y="79" height="1" />
            <polygon opacity="0" fill="#4ECDC4" points="346 49.4277344 353.451172 39.7070312 346 30 351.236328 30 358.6875 39.7070312 351.236328 49.4277344" />
          </g>
        </g>
        <g className="reminderAppListItem" transform="translate(0.000000, 215.000000)">
          <g className="reminderAppListItemContent" opacity="0" fill="#3A405A">
            <text fontSize="20">
              <tspan x="16" y="26">Eläinlääkäriasema</tspan>
            </text>
            <g fontSize="12">
              <text>
                <tspan x="16" y="42">Katu 123, 00000 Kaupunki</tspan>
              </text>
              <text>
                <tspan x="16" y="65">Seuraava aika huomenna 13.30</tspan>
              </text>
            </g>
            <text fontSize="36">
              <tspan x="268.124" y="50">39 €</tspan>
            </text>
          </g>
          <rect fill="#D8D8D8" x="0" y="79" height="1" />
          <polygon opacity="0" fill="#4ECDC4" points="346 49.4277344 353.451172 39.7070312 346 30 351.236328 30 358.6875 39.7070312 351.236328 49.4277344" />
        </g>
        <g className="reminderAppListItem" transform="translate(0.000000, 295.000000)">
          <g className="reminderAppListItemContent" opacity="0" fill="#3A405A">
            <text fontSize="20">
              <tspan x="16" y="26">Eläinlääkäriasema</tspan>
            </text>
            <g fontSize="12">
              <text>
                <tspan x="16" y="42">Katu 123, 00000 Kaupunki</tspan>
              </text>
              <text>
                <tspan x="16" y="65">Seuraava aika huomenna 18.30</tspan>
              </text>
            </g>
            <text fontSize="36">
              <tspan x="268.124" y="50">38 €</tspan>
            </text>
          </g>
          <rect fill="#D8D8D8" x="0" y="79" height="1" />
          <polygon opacity="0" fill="#4ECDC4" points="346 49.4277344 353.451172 39.7070312 346 30 351.236328 30 358.6875 39.7070312 351.236328 49.4277344" />
        </g>
        <circle id="reminderTouch2" fill="#C6FFFB" stroke="#249B92" strokeWidth="4" opacity="0" cx="330" cy="175.5" />

        <g id="reminderBookingView" opacity="0">
          <g>
            <rect fill="#FFFFFF" x="0" y="80" width="375" height="500" />
            <rect fill="#D8D8D8" x="0" y="168" width="375" height="1" />
            <rect fill="#D8D8D8" x="0" y="256" width="375" height="1" />
            <rect fill="#4ECDC4" x="67" y="26" width="308" height="43" />
            <text fontFamily="Chewy" fontSize="28" fontWeight="normal" letterSpacing="0.5" fill="#FFFFFF">
              <tspan x="132.964844" y="60">Varaa aika</tspan>
            </text>
            <g fill="#3A405A">
              <text fontSize="28">
                <tspan x="29" y="125">Eläinlääkäriasema</tspan>
              </text>
              <text fontSize="16">
                <tspan x="30" y="148">Katu 123, 00000 Kaupunki</tspan>
              </text>
              <text fontSize="20">
                <tspan x="29" y="218">Huomenna 10.30</tspan>
              </text>
              <text fontSize="20">
                <tspan x="29" y="309">Rokotus</tspan>
              </text>
              <text fontSize="36">
                <tspan x="157" y="527">42 €</tspan>
              </text>
            </g>
            <g transform="translate(207.000000, 192.000000)">
              <rect stroke="#4ECDC4" strokeWidth="3" x="0" y="0" width="142" height="40" rx="20" />
              <path d="M27.2,25.464 L23.936,15 L25.904,15 L27.376,20.264 C27.712,21.448 27.952,22.472 28.304,23.672 L28.368,23.672 C28.72,22.472 28.96,21.448 29.28,20.264 L30.736,15 L32.64,15 L29.392,25.464 L27.2,25.464 Z M35.792,19.896 L35.424,21.176 L38.096,21.176 L37.728,19.896 C37.392,18.792 37.088,17.592 36.784,16.44 L36.72,16.44 C36.432,17.608 36.128,18.792 35.792,19.896 Z M32.288,25.464 L35.696,15 L37.872,15 L41.28,25.464 L39.328,25.464 L38.512,22.632 L34.992,22.632 L34.176,25.464 L32.288,25.464 Z M42.576,25.464 L42.576,15 L44.432,15 L44.432,25.464 L42.576,25.464 Z M47.088,25.464 L47.088,15 L48.944,15 L48.944,19.208 L53.184,19.208 L53.184,15 L55.04,15 L55.04,25.464 L53.184,25.464 L53.184,20.824 L48.944,20.824 L48.944,25.464 L47.088,25.464 Z M57.696,25.464 L57.696,15 L60.496,15 C63.696,15 65.584,16.728 65.584,20.184 C65.584,23.656 63.696,25.464 60.592,25.464 L57.696,25.464 Z M59.552,23.96 L60.368,23.96 C62.48,23.96 63.68,22.76 63.68,20.184 C63.68,17.624 62.48,16.504 60.368,16.504 L59.552,16.504 L59.552,23.96 Z M69.68,19.896 L69.312,21.176 L71.984,21.176 L71.616,19.896 C71.28,18.792 70.976,17.592 70.672,16.44 L70.608,16.44 C70.32,17.608 70.016,18.792 69.68,19.896 Z M66.176,25.464 L69.584,15 L71.76,15 L75.168,25.464 L73.216,25.464 L72.4,22.632 L68.88,22.632 L68.064,25.464 L66.176,25.464 Z M81.808,19.896 L81.44,21.176 L84.112,21.176 L83.744,19.896 C83.408,18.792 83.104,17.592 82.8,16.44 L82.736,16.44 C82.448,17.608 82.144,18.792 81.808,19.896 Z M78.304,25.464 L81.712,15 L83.888,15 L87.296,25.464 L85.344,25.464 L84.528,22.632 L81.008,22.632 L80.192,25.464 L78.304,25.464 Z M88.592,25.464 L88.592,15 L90.448,15 L90.448,25.464 L88.592,25.464 Z M93.104,25.464 L93.104,15 L94.96,15 L94.96,19.752 L95.008,19.752 L98.736,15 L100.8,15 L97.584,19.08 L101.344,25.464 L99.296,25.464 L96.464,20.536 L94.96,22.408 L94.96,25.464 L93.104,25.464 Z M105.64,19.896 L105.272,21.176 L107.944,21.176 L107.576,19.896 C107.24,18.792 106.936,17.592 106.632,16.44 L106.568,16.44 C106.28,17.608 105.976,18.792 105.64,19.896 Z M102.136,25.464 L105.544,15 L107.72,15 L111.128,25.464 L109.176,25.464 L108.36,22.632 L104.84,22.632 L104.024,25.464 L102.136,25.464 Z M115.504,19.896 L115.136,21.176 L117.808,21.176 L117.44,19.896 C117.104,18.792 116.8,17.592 116.496,16.44 L116.432,16.44 C116.144,17.608 115.84,18.792 115.504,19.896 Z M112,25.464 L115.408,15 L117.584,15 L120.992,25.464 L119.04,25.464 L118.224,22.632 L114.704,22.632 L113.888,25.464 L112,25.464 Z" fill="#4ECDC4" />
            </g>
            <g id="reminderBookingSubmit">
              <g transform="translate(26.000000, 549)">
                <rect stroke="#4ECDC4" strokeWidth="3" fill="#4ECDC4" x="0" y="0" width="326" height="40" rx="20" />
                <path d="M142.289043,25 L139,14 L141.604522,14 L142.906783,19.1288344 C143.240696,20.3266871 143.457739,21.440184 143.791652,22.654908 L143.858435,22.654908 C144.175652,21.440184 144.409391,20.3266871 144.726609,19.1288344 L146.012174,14 L148.516522,14 L145.244174,25 L142.289043,25 Z M151.93913,19.4325153 L151.672,20.4447853 L153.992696,20.4447853 L153.742261,19.4325153 C153.441739,18.3358896 153.141217,17.0368098 152.857391,15.8895706 L152.790609,15.8895706 C152.523478,17.053681 152.239652,18.3358896 151.93913,19.4325153 Z M147.998957,25 L151.40487,14 L154.36,14 L157.765913,25 L155.161391,25 L154.493565,22.3849693 L151.17113,22.3849693 L150.503304,25 L147.998957,25 Z M158.951304,25 L158.951304,14 L162.874783,14 C165.178783,14 167.065391,14.809816 167.065391,17.4248466 C167.065391,19.0444785 166.297391,20.0736196 165.128696,20.5966258 L167.599652,25 L164.84487,25 L162.757913,21.0352761 L161.405565,21.0352761 L161.405565,25 L158.951304,25 Z M161.405565,19.0613497 L162.674435,19.0613497 C163.96,19.0613497 164.661217,18.5046012 164.661217,17.4248466 C164.661217,16.345092 163.96,15.9739264 162.674435,15.9739264 L161.405565,15.9739264 L161.405565,19.0613497 Z M171.606609,19.4325153 L171.339478,20.4447853 L173.660174,20.4447853 L173.409739,19.4325153 C173.109217,18.3358896 172.808696,17.0368098 172.52487,15.8895706 L172.458087,15.8895706 C172.190957,17.053681 171.90713,18.3358896 171.606609,19.4325153 Z M167.666435,25 L171.072348,14 L174.027478,14 L177.433391,25 L174.82887,25 L174.161043,22.3849693 L170.838609,22.3849693 L170.170783,25 L167.666435,25 Z M181.173217,19.4325153 L180.906087,20.4447853 L183.226783,20.4447853 L182.976348,19.4325153 C182.675826,18.3358896 182.375304,17.0368098 182.091478,15.8895706 L182.024696,15.8895706 C181.757565,17.053681 181.473739,18.3358896 181.173217,19.4325153 Z M177.233043,25 L180.638957,14 L183.594087,14 L187,25 L184.395478,25 L183.727652,22.3849693 L180.405217,22.3849693 L179.737391,25 L177.233043,25 Z" fill="#FFFFFF" />
              </g>
            </g>
            <rect stroke="#4ECDC4" strokeWidth="3" x="207" y="284" width="142" height="40" rx="20" />
            <path d="M254.232,309 L254.232,298.568 L256.808,298.568 L258.488,303.208 C258.696,303.816 258.888,304.488 259.096,305.128 L259.16,305.128 C259.368,304.488 259.544,303.816 259.752,303.208 L261.4,298.568 L263.96,298.568 L263.96,309 L261.816,309 L261.816,305.176 C261.816,304.152 262.008,302.632 262.12,301.624 L262.056,301.624 L261.208,304.104 L259.72,308.088 L258.424,308.088 L256.936,304.104 L256.104,301.624 L256.04,301.624 C256.152,302.632 256.344,304.152 256.344,305.176 L256.344,309 L254.232,309 Z M270.536,309.192 C267.832,309.192 266.36,307.672 266.36,304.168 L266.36,298.568 L268.728,298.568 L268.728,304.408 C268.728,306.456 269.368,307.16 270.536,307.16 C271.704,307.16 272.376,306.456 272.376,304.408 L272.376,298.568 L274.648,298.568 L274.648,304.168 C274.648,307.672 273.224,309.192 270.536,309.192 Z M281.176,309.192 C278.472,309.192 277,307.672 277,304.168 L277,298.568 L279.368,298.568 L279.368,304.408 C279.368,306.456 280.008,307.16 281.176,307.16 C282.344,307.16 283.016,306.456 283.016,304.408 L283.016,298.568 L285.288,298.568 L285.288,304.168 C285.288,307.672 283.864,309.192 281.176,309.192 Z M289.736,309 L289.736,300.552 L286.872,300.552 L286.872,298.568 L294.968,298.568 L294.968,300.552 L292.104,300.552 L292.104,309 L289.736,309 Z M298.408,303.72 L298.152,304.68 L300.376,304.68 L300.136,303.72 C299.848,302.68 299.56,301.448 299.288,300.36 L299.224,300.36 C298.968,301.464 298.696,302.68 298.408,303.72 Z M294.632,309 L297.896,298.568 L300.728,298.568 L303.992,309 L301.496,309 L300.856,306.52 L297.672,306.52 L297.032,309 L294.632,309 Z" fill="#4ECDC4" />
          </g>
        </g>
        <circle id="reminderTouch3" fill="#C6FFFB" stroke="#249B92" strokeWidth="4" opacity="0" cx="170" cy="566" />
        <g id="reminderBookingSuccess">
          <use fill="black" filter="url(#shadow-notification)" xlinkHref="#reminderBookingSuccessBox"></use>
          <use fill="#4ECDC4" xlinkHref="#reminderBookingSuccessBox"></use>
          <mask id="reminderBookingSuccessBoxMask" fill="white">
            <use fill="#FFFFFF" xlinkHref="#reminderBookingSuccessBox" />
          </mask>
          <path id="reminderBookingSuccessTop" mask="url(#reminderBookingSuccessBoxMask)" d="M40,116 L335,116 C337.209139,116 339,117.790861 339,120 L339,344 L36,344 L36,120 C36,117.790861 37.790861,116 40,116 Z" fill="#4ECDC4"></path>
          <g className="icon">
            <circle fill="#FFFFFF" cx="188" cy="230"></circle>
            <g transform="translate(127, 190)">
              <polygon id="reminderSuccessStroke" strokeWitdh="4" stroke="#4ECDC4" points="0 59.9765625 11.953125 47.8828125 36 72 108 0 120.023438 11.953125 36 95.9765625" />
              <polygon id="reminderSuccessFill" opacity="0" fill="#4ECDC4" points="0 59.9765625 11.953125 47.8828125 36 72 108 0 120.023438 11.953125 36 95.9765625" />
            </g>
          </g>
          <g className="content" transform="translate(0,-20)">
            <text fontSize="24">
              <tspan x="127.824" y="381" fill="#3A405A">Aika varattu!</tspan>
              <tspan x="113.54" y="412" fontSize="20" fill="#3A405A">Eläinlääkäriasema</tspan>
              <tspan x="84.83" y="437" fontSize="20" fill="#3A405A">Rokotus huomenna 10.30</tspan>
              <tspan x="54.27" y="478" fontSize="20" fill="#3A405A">Tiedot on lähetetty sähköpostiisi.</tspan>
              <tspan x="73.91" y="503" fontSize="20" fill="#FFFFFF" textDecoration="underline">Lisää ajanvaraus kalenteriin.</tspan>
            </text>
            <g transform="translate(-90,14)">
              <rect stroke="#FFFFFF" strokeWidth="3" x="237" y="523" width="89" height="40" rx="20" />
              <path d="M276.736,548.316 C273.92,548.316 272,546.268 272,542.86 C272,539.452 273.92,537.5 276.736,537.5 C279.552,537.5 281.472,539.468 281.472,542.86 C281.472,546.268 279.552,548.316 276.736,548.316 Z M276.736,546.284 C278.16,546.284 279.056,544.956 279.056,542.86 C279.056,540.78 278.16,539.532 276.736,539.532 C275.312,539.532 274.416,540.78 274.416,542.86 C274.416,544.956 275.312,546.284 276.736,546.284 Z M283.44,548.124 L283.44,537.692 L285.792,537.692 L285.792,541.964 L285.856,541.964 L288.96,537.692 L291.552,537.692 L288.4,541.852 L292.128,548.124 L289.552,548.124 L287.008,543.724 L285.792,545.324 L285.792,548.124 L283.44,548.124 Z" id="OK" fill="#FFFFFF"></path>
            </g>
          </g>
          <rect id="reminderEnd" x="0" y="0" width="375" height="667" fill="#3A405A" />
        </g>
      </Device>
    );
  }
}

export default Reminder;
