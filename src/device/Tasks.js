import React, { Component } from 'react';

import anime from 'animejs';
import Device from './Device';
import Navigation from './Navigation';

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
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
    let pointCounters = {
      week: {
        a: 0, b: 0, c: 0, d: 0
      },
      month: {
        a: 0, b: 0, c: 0, d: 0
      }
    }

    this.state.animation
      .add({
        targets: '#tasksTouch1',
        opacity: [0, 0.4, 0],
        r: [20, 32, 20],
        duration: 600,
        offset: '+=1000',
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksTouch1Effect1',
        scale: [1, 1.05, 1],
        translateX: [0, -8.325, 0],
        translateY: [0, -8.325, 0],
        offset: '-=600',
        duration: 600,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksTouch1Effect1 ellipse',
        rx: [16, 0, 16],
        ry: [16, 20, 16],
        offset: '-=0',
        duration: 400,
        easing: 'easeInOutQuart'
      })
      .add({
        targets: '#tasksTouch1Effect1 .points',
        fill: '#B0D80D',
        offset: '-=200',
        duration: 1
      })
      .add({
        targets: '#tasksTouch1Effect1 .points .value',
        opacity: 0,
        offset: '-=100',
        duration: 1
      })
      .add({
        targets: '#tasksTouch1Effect1 .points .initial',
        opacity: [0, 1],
        offset: '-=1',
        duration: 1
      })
      .add({
        targets: '#tasksTouch1Effect2',
        r: [1, 4, 2],
        cy: [126, 40, 50],
        opacity: [1, 1, 0],
        easing: 'easeOutBack',
        duration: 400,
      })
      .add({
        targets: '#tasksTouch1Effect1 .title tspan',
        y: 110,
        opacity: 0.6,
        fill: '#000000',
        fontSize: [26, 20],
        offset: '-=0',
        duration: 400,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksTouch1Effect1 rect',
        opacity: [0, 0.05],
        height: 47,
        offset: '-=400',
        duration: 400,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksTouch1Effect1 .description',
        opacity: 0,
        offset: '-=400',
        duration: 400
      })
      .add({
        targets: '#tasksTouch1Effect1 .points',
        scale: 0.875,
        translateX: 47,
        translateY: -8,
        offset: '-=400',
        duration: 400,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksListContent',
        offset: '-=400',
        translateY: -43,
        duration: 400,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksListContent .lastListItem',
        height: 64,
        offset: '-=400',
        duration: 400,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksTouch2',
        opacity: [0, 0.4, 0],
        r: [20, 32, 20],
        duration: 600,
        offset: '+=1500',
        easing: 'easeOutBack'
      })
      .add({
        targets: '#tasksTopIconPoints path',
        scale: [1, 1.1, 1],
        translateX: [0, -30, 0],
        translateY: [0, -4, 0],
        offset: '-=600',
        duration: 600,
      })
      .add({
        targets: '#tasksList',
        scaleX: 0,
        offset: '-=200',
        duration: 300,
        easing: 'easeOutQuad'
      })
      .add({
        targets: '#tasksPoints',
        translateX: [375, 0],
        offset: '-=300',
        duration: 300,
        easing: 'easeOutQuad'
      })
      .add({
        targets: '#tasksTopIconPoints',
        opacity: 0,
        offset: '-=300',
        duration: 300
      })
      .add({
        targets: '#tasksTopIconList',
        opacity: [0, 1],
        offset: '-=300',
        duration: 300
      })
      .add({
        targets: pointCounters.week,
        a: 36,
        b: 32,
        c: 24,
        d: 15,
        round: 1,
        offset: '-=100',
        easing: 'easeInOutQuad',
        duration: 1000,
        update: function() {
          let aEl = document.querySelector('#tasksPointsCounterA'),
              bEl = document.querySelector('#tasksPointsCounterB'),
              cEl = document.querySelector('#tasksPointsCounterC'),
              dEl = document.querySelector('#tasksPointsCounterD');

          aEl.innerHTML = pointCounters.week.a;
          bEl.innerHTML = pointCounters.week.b;
          cEl.innerHTML = pointCounters.week.c;
          dEl.innerHTML = pointCounters.week.d;
        }
      })
      .add({
        targets: '#tasksEnd',
        opacity: [0, 0.25],
        offset: '+=2000',
        duration: 1000
      });
  };

  render() {
    return (
      <Device play={() => this.play()} id="tasks">
        <rect id="tasksAppBg" fill="#FFFFFF" x="0" y="0" width="375" height="667" />
        <g id="tasksAppTopBar">
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
        <g id="tasksAppHeader">
          <text fontFamily="Chewy" fontSize="28" fontWeight="normal" letterSpacing="0.5" fill="#FFFFFF">
            <tspan x="135" y="60">Tehtävät</tspan>
          </text>
        </g>
        <g id="tasksList">
          <g id="tasksTouch1Effect1">
            <rect fill="#000000" x="0" y="80" width="375" height="90"></rect>
            <text className="title" fill="#3A405A">
              <tspan x="18" y="121" fontSize="24">Aamuruoka</tspan>
            </text>
            <text className="description" fontSize="16" fill="#3A405A">
              <tspan x="18" y="144">Ennen kello 10</tspan>
            </text>
            <g className="points" fill="#4ECDC4">
              <ellipse cx="335" cy="126" rx="16" ry="16" />
              <text fontSize="20" fontFamily="Chewy" fontWeight="normal" fill="#FFFFFF">
                <tspan className="value" x="332" y="134">1</tspan>
                <tspan className="initial" x="330" y="134">A</tspan>
              </text>
            </g>
          </g>
          <g id="tasksListContent">
            <g fill="#000000" opacity="0.05">
              <rect x="0" y="556" width="375" height="56" className="lastListItem"></rect>
              <rect x="0" y="492" width="375" height="64"></rect>
              <rect x="0" y="428" width="375" height="64"></rect>
              <rect x="0" y="364" width="375" height="64"></rect>
              <rect x="0" y="300" width="375" height="64"></rect>
              <rect x="0" y="236" width="375" height="64"></rect>
              <rect x="0" y="170" width="375" height="47"></rect>
            </g>
            <text opacity="0.6" fontSize="20" fill="#000000">
                <tspan x="18" y="265">Iltapäivälenkki</tspan>
                <tspan x="18" y="329">Iltaruoka</tspan>
                <tspan x="18" y="521">Aamulenkki</tspan>
                <tspan x="18" y="457">Kynsien leikkaus</tspan>
                <tspan x="18" y="199">Aamulenkki</tspan>
                <tspan x="18" y="393">Iltalenkki</tspan>
                <tspan x="18" y="585">Aamuruoka</tspan>
            </text>
            <g fontSize="16">
              <text fill="#000000" opacity="0.6">
                <tspan x="18" y="283">Välillä 15–17</tspan>
                <tspan x="18" y="347">Välillä 17–19</tspan>
                <tspan x="18" y="539">Välillä 8–10</tspan>
                <tspan x="18" y="475">Huomenna</tspan>
                <tspan x="18" y="411">Välillä 21–23</tspan>
                <tspan x="18" y="603">Välillä 8–10</tspan>
              </text>
            </g>
            <circle fill="#000000" opacity="0.15" cx="335" cy="268" r="14"></circle>
            <circle fill="#000000" opacity="0.15" cx="335" cy="332" r="14"></circle>
            <circle fill="#000000" opacity="0.15" cx="335" cy="524" r="14"></circle>
            <circle fill="#000000" opacity="0.15" cx="335" cy="460" r="14"></circle>
            <circle fill="#FFBA49" cx="335" cy="194" r="14"></circle>
            <circle fill="#000000" opacity="0.15" cx="335" cy="396" r="14"></circle>
            <circle fill="#000000" opacity="0.15" cx="335" cy="588" r="14"></circle>
            <text fontFamily="Chewy" fontWeight="normal" fill="#FFFFFF" fontSize="16">
              <tspan x="331" y="274">3</tspan>
              <tspan x="333" y="338">1</tspan>
              <tspan x="332" y="530">3</tspan>
              <tspan x="332" y="466">5</tspan>
              <tspan x="332" y="200">L</tspan>
              <tspan x="332" y="402">2</tspan>
              <tspan x="333" y="594">1</tspan>
            </text>
            <rect fill="#0E8A82" x="0" y="216" width="375" height="20"></rect>
            <path d="M156.864,231.624 L156.864,223.176 L154,223.176 L154,221.192 L162.096,221.192 L162.096,223.176 L159.232,223.176 L159.232,231.624 L156.864,231.624 Z M168.34,231.816 C165.636,231.816 164.164,230.296 164.164,226.792 L164.164,221.192 L166.532,221.192 L166.532,227.032 C166.532,229.08 167.172,229.784 168.34,229.784 C169.508,229.784 170.18,229.08 170.18,227.032 L170.18,221.192 L172.452,221.192 L172.452,226.792 C172.452,230.296 171.028,231.816 168.34,231.816 Z M175.368,231.624 L175.368,221.192 L177.72,221.192 L177.72,229.64 L181.848,229.64 L181.848,231.624 L175.368,231.624 Z M187.82,231.816 C185.004,231.816 183.084,229.768 183.084,226.36 C183.084,222.952 185.004,221 187.82,221 C190.636,221 192.556,222.968 192.556,226.36 C192.556,229.768 190.636,231.816 187.82,231.816 Z M187.82,229.784 C189.244,229.784 190.14,228.456 190.14,226.36 C190.14,224.28 189.244,223.032 187.82,223.032 C186.396,223.032 185.5,224.28 185.5,226.36 C185.5,228.456 186.396,229.784 187.82,229.784 Z M198.208,231.816 C196.848,231.816 195.408,231.304 194.352,230.312 L195.696,228.696 C196.448,229.336 197.408,229.784 198.272,229.784 C199.248,229.784 199.728,229.4 199.728,228.776 C199.728,228.12 199.136,227.912 198.224,227.528 L196.864,226.952 C195.792,226.52 194.768,225.624 194.768,224.104 C194.768,222.376 196.304,221 198.48,221 C199.68,221 200.944,221.48 201.84,222.376 L200.64,223.864 C199.952,223.336 199.312,223.032 198.48,223.032 C197.664,223.032 197.152,223.384 197.152,223.976 C197.152,224.616 197.84,224.84 198.736,225.208 L200.08,225.752 C201.344,226.264 202.144,227.112 202.144,228.584 C202.144,230.312 200.704,231.816 198.208,231.816 Z M207.316,231.816 C205.956,231.816 204.516,231.304 203.46,230.312 L204.804,228.696 C205.556,229.336 206.516,229.784 207.38,229.784 C208.356,229.784 208.836,229.4 208.836,228.776 C208.836,228.12 208.244,227.912 207.332,227.528 L205.972,226.952 C204.9,226.52 203.876,225.624 203.876,224.104 C203.876,222.376 205.412,221 207.588,221 C208.788,221 210.052,221.48 210.948,222.376 L209.748,223.864 C209.06,223.336 208.42,223.032 207.588,223.032 C206.772,223.032 206.26,223.384 206.26,223.976 C206.26,224.616 206.948,224.84 207.844,225.208 L209.188,225.752 C210.452,226.264 211.252,227.112 211.252,228.584 C211.252,230.312 209.812,231.816 207.316,231.816 Z M215.976,226.344 L215.72,227.304 L217.944,227.304 L217.704,226.344 C217.416,225.304 217.128,224.072 216.856,222.984 L216.792,222.984 C216.536,224.088 216.264,225.304 215.976,226.344 Z M212.2,231.624 L215.464,221.192 L218.296,221.192 L221.56,231.624 L219.064,231.624 L218.424,229.144 L215.24,229.144 L214.6,231.624 L212.2,231.624 Z" fill="#FFFFFF"></path>
          </g>
        </g>

        <g id="tasksTopIconPoints">
          <path d="M342.710545,42.7532468 L343.258857,40 L326.741143,40 L327.289714,42.7532468 L323,42.7532468 L323,43.7835325 C323,46.0115325 323.717091,48.12 325.073662,49.8809351 C326.326961,51.5078442 328.07761,52.7251948 330.027532,53.332987 C330.958701,54.5854545 332.354857,55.5530909 333.961039,55.8516883 L333.961039,58.1818182 L330.272727,58.1818182 L330.272727,60.7792208 L339.675325,60.7792208 L339.675325,58.1818182 L336.038961,58.1818182 L336.038961,55.8518961 C337.647844,55.5534545 339.045766,54.5850909 339.976727,53.3316364 C341.924987,52.7234286 343.673974,51.5066494 344.926338,49.8809351 C346.282909,48.12 347,46.0115325 347,43.7835325 L347,42.7532468 L342.710545,42.7532468 Z M325.146649,44.8311688 L327.705039,44.8311688 L328.845403,50.5363636 C326.842545,49.2971429 325.46213,47.1688312 325.146649,44.8311688 Z M341.155844,50.5355844 L342.295481,44.8311688 L344.853351,44.8311688 C344.537974,47.1688312 343.158026,49.2963117 341.155844,50.5355844 Z"fill="#FFFFFF" fillRule="nonzero"></path>
        </g>

        <g stroke="#FFFFFF" strokeWidth="3" id="tasksTopIconList">
          <path d="M332,45 L349,45" />
          <path d="M325,45 L328,45" />
          <path d="M332,51 L349,51" />
          <path d="M325,51 L328,51" />
          <path d="M332,57 L349,57" />
          <path d="M325,57 L328,57" />
        </g>

        <circle id="tasksTouch1Effect2" cx="335" cy="126" fill="#0E8A82" />

        <circle id="tasksTouch1" fill="#C6FFFB" stroke="#249B92" strokeWidth="4" opacity="0" cx="219.5" cy="130" />
        <circle id="tasksTouch2" fill="#C6FFFB" stroke="#249B92" strokeWidth="4" opacity="0" cx="330" cy="50" />

        <g id="tasksPoints">
          <g stroke="#3A405A" strokeWidth="1.5" id="tasksPointSwitcher">
            <path d="M11,88.5 L127,88.5 L127,118.5 L11,118.5 C8.790861,118.5 7,116.709139 7,114.5 L7,92.5 C7,90.290861 8.790861,88.5 11,88.5 Z" fill="#3A405A" />
            <rect x="128" y="88.5" width="120" height="30" />
            <path d="M248,88.5 L364,88.5 C366.209139,88.5 368,90.290861 368,92.5 L368,114.5 C368,116.709139 366.209139,118.5 364,118.5 L248,118.5 L248,88.5 Z" />
            <g stroke="none" transform="translate(5.000000, 93.000000)" fontSize="16">
              <text fill="#FFFFFF">
                <tspan x="44" y="16">Viikko</tspan>
              </text>
              <text fill="#3A405A">
                <tspan x="152" y="16">Kuukausi</tspan>
              </text>
              <text fill="#3A405A">
                <tspan x="283" y="16">Kaikki</tspan>
              </text>
              </g>
          </g>

          <text fontSize="24" fill="#3A405A">
            <tspan x="134" y="175">Äiti</tspan>
            <tspan x="134" y="254">Iskä</tspan>
            <tspan x="134" y="335">Lilli</tspan>
            <tspan x="134" y="414">Aleksi</tspan>
          </text>
          <text fontFamily="Chewy" fontSize="20" fontWeight="normal" fill="#4ECDC4">
            <tspan id="tasksPointsCounterA" x="326" y="174">36</tspan>
            <tspan id="tasksPointsCounterB" x="326" y="253">32</tspan>
            <tspan id="tasksPointsCounterC" x="325" y="334">24</tspan>
            <tspan id="tasksPointsCounterD" x="329" y="413">15</tspan>
          </text>
          <text fontSize="48" fill="#3A405A">
            <tspan x="25" y="182">1</tspan>
            <tspan x="25" y="261">2</tspan>
            <tspan x="25" y="342">3</tspan>
            <tspan x="25" y="421">4</tspan>
          </text>
          <circle fill="#C96ADD" cx="91" cy="166" r="21"></circle>
          <circle fill="#4E85CD" cx="91" cy="245" r="21"></circle>
          <circle fill="#FFBA49" cx="91" cy="326" r="21"></circle>
          <circle fill="#B0D80D" cx="91" cy="405" r="21"></circle>
          <text fontFamily="Chewy" fontSize="26" fontWeight="normal" letterSpacing="0.5" fill="#FFFFFF">
            <tspan x="84" y="177">Ä</tspan>
            <tspan x="87" y="255">I</tspan>
            <tspan x="85" y="336">L</tspan>
            <tspan x="84" y="415">A</tspan>
          </text>
        </g>
        <rect id="tasksEnd" x="0" y="0" width="375" height="667" fill="#3A405A" />
      </Device>
    );
  }
}

export default Reminder;
