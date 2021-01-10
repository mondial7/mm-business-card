import { html, css, LitElement } from 'lit-element';

export class MmBusinessCard extends LitElement {
  static get styles() {
    return css`
      @keyframes bubble_out {
          0% { transform: scale(1); opacity: 1; }
          99% { transform: scale(2); opacity: 0; }
          100% { z-index: -2; opacity: 0; }
      }

      :host {
        display: block;
        color: var(--mm-business-card-text-color, #C8E0F4);
        background-color: #031927;
        text-align: center;
        font-family: arial, sans-serif;
        margin: 0;
        max-width: 100%;
        padding: 20px;
        overflow: hidden;
      }

      a {
          color: #222;
      }

      h1 {
          margin: 5px auto 20px;
          font-variant: small-caps;
      }

      .bubble__container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: auto;
          text-align: left;
      }

      #my_pic,
      #description,
      #placeholder {
        position: absolute;
        width: 300px;
        height: 300px;
        margin: auto;
        border-radius: 50%;
        transition: all 300ms;
      }

      #placeholder {
        background-color: #fbfbfb;
        transform: scale(1.05);
      }

      #description {
          background-color: #fbfbfb;
          text-align: center;
          color: #031927;
      }

      #description p,
      #description h1 {
        margin: 0px;
        padding: 10px;
      }

      @media all and (max-width: 500px) { 
        #description h1 {
          font-size: 80%;
        }
      }

      #description_content {
        position: relative;
        top: 60px;
        padding: 5px;
      }

      #description_close {
        display: block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        position: absolute;
        top: 2px;
        left: calc(50% - 15px);
        cursor: pointer;
      }

      .close {
        animation: bubble_out 300ms ease-out forwards !important;
      }

      #socials {
        position: relative;
        text-align: center;
      }

      #socials > a {
          position: absolute;
          display: inline-block;
      }

      #socials > a:nth-child(1){
          top: -35px;
          left: calc(50% + 100px);
      }

      #socials > a:nth-child(2){
          top: -1px;
          left: calc(50% + 44px);
      }

      #socials > a:nth-child(3){
          top: 12px;
          left: calc(50% - 22px);
      }

      #socials .mm_icon.curriculum text{
          font: bold 330px monospace;
      }

      #socials .mm_icon {
          width: 45px;
          height: 45px;
          z-index: 0;
          fill: #508AA8;
          transition: all 300ms;
          -webkit-transition: all 300ms;
      }

      #socials .mm_icon:hover {
          z-index: 1;
          fill: #BA1200;
          transform: scale(2,2);
          -webkit-transform: scale(2,2);
      }

      .topics {
          margin-top: 90px;
          line-height: 1.4em;
      }

      .topics span {
          cursor: pointer;
          transition: all 300ms;
      }

      .topics span:hover {
          color: #fff;
      }

      .topics__line {
          position: relative;
          top: -10px;
          display: inline-block;
          width: 50px;
          height: 1px;
          background-color: #000;
      }

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      picture: { type: String },
      github: { type: String },
      linkedin: { type: String },
      curriculum: { type: String },
      topics: { type: Array },
      description: {
        type: String,
        attribute: false,
      },
      classes: {
        type: Object,
        attribute: false,
      },
      placeholderZ: { type: String, attribute: false }
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.topics = [];
    this.description = '';
    this.classes = {
      picture: '',
      description: 'close',
      placeholder: 'close',
    };
    this.placeholderZ = 'z-index:-1'
  }

  __hideTopic() {
    this.classes = {
      ...this.classes,
      description: 'close',
      picture: '',
    }
  }

  __showTopic(i) {
    return () => {
      this.classes = {
        ...this.classes,
        placeholder: '',
      }
      // this.placeholderZ = 'z-index:-1'
      this.description = this.topics[i].description
      setTimeout(() => { 
        this.classes = {
          ...this.classes,
          description: '',
          picture: 'close',
          placeholder: 'close',
        }
        this.placeholderZ = 'z-index:-2'
      }, 100)
    }
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      
      <div class="bubble__container">
          <img alt="${this.title} Picture" src="${this.picture}" id="my_pic"  class="${this.classes.picture}"/>
          <section id="description" class="${this.classes.description}">
              <div id="description_close" @click=${this.__hideTopic}>x</div>
              <div id="description_content">${this.description}</div>
          </section>
          <section id="placeholder" style="${this.placeholderZ}" class="${this.classes.placeholder}"></section>
      </div>
      
      <section id="socials">
          <a href="${this.linkedin}" target="_blank" title="Linkedin Profile">
              <svg class="mm_icon linkedin"
                    viewBox="0 0 512 512">
                  <g>
                    <path d="M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256   C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"/>
                    <g>
                      <g>
                        <path d="M128.094,383.891h48v-192h-48V383.891z M320.094,191.891c-41.094,0.688-61.312,30.641-64,32v-32h-48v192h48v-112     c0-4.108,10.125-37,48-32c20.344,1.328,31.312,28.234,32,32v112l47.812,0.219V251.188 C382.219,232,372.625,192.578,320.094,191.891z M152.094,127.891c-13.25,0-24,10.734-24,24s10.75,24,24,24s24-10.734,24-24     S165.344,127.891,152.094,127.891z"/>
                      </g>
                    </g>
                  </g>
              </svg>
          </a>
          <a href="${this.github}" target="_blank" title="GitHub Profile">
              <svg class="mm_icon github" 
                    viewBox="0 0 512 512">
                  <g>
                    <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027 c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5 c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25   c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66 c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5 c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8   s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25 c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25 s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5   v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094 c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675   c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41 s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353 C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z"/>
                  </g>
              </svg>
          </a>
          <a href="${this.curriculum}" target="_blank" title="Résumé - Curriculum Vitae">
              <svg class="mm_icon curriculum"
                    viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256    C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472    z" />
                      <text x="65" y="360">CV</text>
                      <!--<path d="M351.938,224C334.266,224,320,238.297,320,255.969S334.266,288,351.938,288C369.672,288,384,273.641,384,255.969    S369.672,224,351.938,224z" />
                      <path d="M255.938,224C238.266,224,224,238.297,224,255.969S238.266,288,255.938,288C273.672,288,288,273.641,288,255.969    S273.672,224,255.938,224z" />
                      <path d="M160,224c-17.688,0-32,14.297-32,31.969S142.312,288,160,288c17.656,0,32-14.359,32-32.031S177.656,224,160,224z" />-->
                    </g>
                  </g>
              </svg>
          </a>
      </section>
      <section class="topics">
        ${this.topics.map(({ title }, i) => html`
        <div class="topic"><span class="lset" @click=${this.__showTopic(i)} id="l${i}">${title}</span><br><span class="topics__line"></span></div>
        `)}
      </section>
    `;
  }
}
