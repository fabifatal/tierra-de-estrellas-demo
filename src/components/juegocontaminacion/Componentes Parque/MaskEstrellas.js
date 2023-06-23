import React from "react";
import PersonajeParque from "./PersonajeParque";

const MaskEstrellas = (props) => {
  return (
    <svg>
      <g id="Arbustos_Atras" data-name="Arbustos Atras">
        <path
          fill="black"
          d="m250.51,264.18c.07-5.27.12-10.67-1.58-15.66s-5.52-9.6-10.67-10.75c-5.15-1.15-11.31,2.31-11.77,7.56,2.69-3.59-.46-8.68-4.04-11.38-2.73-2.06-6.04-3.75-9.43-3.32-3.39.43-6.53,3.75-5.68,7.06,1.92-4.67-2.07-10.14-6.95-11.44-4.89-1.3-10.06.44-14.59,2.67-2.55,1.26-5.19,2.85-6.34,5.45-1.16,2.6.04,6.36,2.85,6.82-3.42-3.32-9.11-.9-13.02,1.84-3.24,2.26-6.54,4.89-7.82,8.62-1.28,3.73.51,8.75,4.4,9.45-5.68,2.31-7.89,10.49-4.15,15.35,3.74,4.86,12.22,4.81,15.91-.08-2.27-.8-4.63,1.77-4.4,4.16.22,2.39,2.16,4.28,4.22,5.52,7.43,4.46,18.05,2.49,23.39-4.32,17.54,2.59,35.58,1.84,52.85-2.19l-3.17-15.36Z"
        />
        <path
          fill="black"
          d="m614.84,283.96c-3.27-9.2-4.13-19.24-2.46-28.86.22-1.28.59-2.7,1.72-3.34,1.63-.92,3.61.37,4.92,1.71,2.64,2.69,4.78,5.87,6.29,9.32-2.8-9.98.13-21.36,7.41-28.76.98-.99,2.09-1.95,3.45-2.27,2.5-.58,5.06,1.29,6.13,3.62,1.07,2.33,1.03,5.01.97,7.57-.66-6.85,1.21-13.91,5.18-19.53.96-1.36,2.09-2.68,3.6-3.37,4.09-1.86,8.93,1.97,9.85,6.37.92,4.39-.84,8.86-2.55,13,1.98-3.81,4.12-7.8,7.75-10.09,3.63-2.29,9.23-2.09,11.47,1.58,2.41,3.94-.2,8.93-2.76,12.78,4.12-2.63,10.43-4.88,13.12-.8,1.74,2.63.45,6.21-1.43,8.74s-4.38,4.74-5.3,7.75c1.19-4.2,8.1-4.59,10.29-.81,2.19,3.78-.61,9.16-4.85,10.23,2.27-3.07,7.9-2,9.27,1.56,1.37,3.56-1.52,7.9-5.29,8.47,1.99-1.81,5.71-1.09,6.79,1.38,1.08,2.47-1.02,5.74-3.71,5.7l-79.86-1.93Z"
        />
      </g>
      <g id="Ciudad">
        <path
          fill="black"
          d="m756.09,285.88v-66.1l30.62-18.45v86.77h6.36v-63.94h34.28v68.22h9.13v-98.61h18.42v-22.65h10.96v21.59h11.11v95.4l-120.88-2.23Z"
        />
        <path
          fill="black"
          d="m881.35,286.81v-56.66l26.25-15.81v74.38h16.8v-54.81h29.39v58.48h17.92v-84.53h15.79v-19.42h9.39v18.51h9.52v81.77l-125.06-1.91Z"
        />
      </g>
      <g id="arbol5">
        <path
          fill="black"
          d="m1111.68,240.81c-2.79,6.33-11.49,9.47-17.37,5.82-5.88-3.66-6.5-13.59-.78-17.48-3.67,4.51-9.87,6.83-15.61,5.83-5.74-1-10.78-5.27-12.71-10.76-1.08-3.08-.97-7.03,1.63-9-.87,2.28-4.45,1.38-6.05-.47-2.96-3.42-3.57-8.41-2.57-12.82,1-4.41,3.39-8.37,5.91-12.13,1.47-2.21,3.09-4.46,5.42-5.72s5.6-1.21,7.32.82c-4.97-5.72-1.98-14.91,3.15-20.49,2.66-2.89,5.99-5.41,9.87-6.02,3.88-.62,8.32,1.14,9.84,4.76-1.44-7.61.48-15.91,5.58-21.75,5.09-5.84,13.39-8.88,20.95-7.18,7.56,1.71,13.89,8.38,14.66,16.08,2.5-4.98,9.46-7.1,14.31-4.35,4.85,2.75,6.61,9.8,3.61,14.5,4.31.44,8.78.93,12.47,3.2,3.69,2.27,6.32,6.86,4.91,10.95-.42,1.22-1.18,2.48-.77,3.71.3.91,1.16,1.49,1.91,2.08,6.6,5.11,8.21,15.56,3.45,22.41,4.09,3.5,6.33,9.04,5.82,14.4-.51,5.35-3.77,10.37-8.45,13.03-1.54.87-3.98,1.22-4.66-.41.97-1.1,3,.02,3.15,1.48.16,1.46-.84,2.77-1.86,3.83-5.83,6.01-14.56,9.06-22.87,8-1.16-.15-2.5-.53-2.9-1.63-.4-1.1,1.4-2.34,1.91-1.29-2.72,6.79-12.48,9.48-18.3,5.04.16.38.18.82.11,1.27-.41,2.54-3.24,3.92-5.63,2.95l-2.3-.93c-.2,3.11-3.8,5.5-6.75,4.47-2.95-1.03-4.29-5.13-2.51-7.69l-3.89-4.52Z"
        />
        <path
          fill="black"
          d="m1115.97,350.36c-.62-29.74,2.14-97.39,2.14-97.39,0,0-20.09-40.38-26.39-56.05.52-.68,1.4-1.07,2.25-.99,2.2,8.64,5.67,14.19,9.87,22.06-.52-9.74-1.26-16.66-1.79-26.4,1.07-.1,2.15-.21,3.22-.31-1.35,17.67,5.02,34.35,15.35,48.76,1.63-19.18,3.58-56.12,3.58-56.12l2.47-2.44s.39,19.51.59,29.27c2.9-6.36,5.8-12.72,8.69-19.08,1.11,1.26,2.21,2.52,3.32,3.78-8.99,12.39-12.83,28.4-10.42,43.52,12.19-15.69,33.49-49.27,33.49-49.27l3,4.32s-11.93,18.5-17.9,27.75c5.98.02,11.97.05,17.95.07-.18,1.32-.35,2.65-.53,3.97-4.95-.22-19.78-.04-19.78-.04,0,0-10.86,13.21-14.64,18.23-1.16,1.54-2.33,3.09-3.05,4.88-.98,2.42-1.14,7.69-1.14,7.69,0,0-1.77,62.09-2.66,93.14-3.21-.58-4.39-1.17-7.6-1.75v2.42Z"
        />
      </g>
      <g id="arbo4">
        <path
          fill="black"
          d="m977.48,252.06c-7.38.3-14.1-4.23-19.36-9.4-3.71-3.64-7.21-8.23-6.98-13.43.25-5.81,5.04-10.45,6.37-16.11,1.35-5.73-.99-11.6-1.79-17.43-1.64-12.02,3.88-24.75,13.78-31.78,3.06-2.17,6.91-3.87,10.51-2.81,4.21,1.24,6.54,5.75,7.56,10.02,1.02,4.27,1.25,8.83,3.42,12.65,2.48,4.36,7.21,7.21,9.25,11.79,1.47,3.29,1.35,7.05,1.19,10.65-.38,9.02-.79,18.23-4.04,26.65-3.24,8.43-9.88,16.08-18.69,18.12l-1.24,1.08Z"
        />
        <path
          fill="black"
          d="m976.57,302.64c.68-10.97,1.36-21.94,2.04-32.91.67-10.91,1.35-21.83,2.02-32.74.38-6.16.76-12.31,1.14-18.47.03-.48-.43-.88-.88-.88-.5,0-.85.4-.88.88-.68,10.97-1.36,21.94-2.04,32.91-.67,10.91-1.35,21.83-2.02,32.74-.38,6.16-.76,12.31-1.14,18.47-.03.48.43.88.88.88.5,0,.85-.4.88-.88h0Z"
        />
        <path
          fill="black"
          d="m970.3,226.82c1.5,2.71,3.76,4.99,6.44,6.55.78.45,1.6.83,2.43,1.16.43.17.99-.18,1.09-.62.12-.51-.16-.9-.62-1.08-.09-.03-.18-.07-.27-.11-.04-.01-.07-.03-.11-.04.21.08.1.04.05.02-.18-.08-.35-.15-.52-.24-.33-.16-.65-.32-.97-.5-.63-.36-1.25-.75-1.83-1.19-.03-.02-.06-.05-.09-.07-.12-.09.03.03.04.03-.07-.02-.17-.13-.23-.18-.14-.11-.28-.23-.42-.35-.28-.24-.54-.48-.8-.74-.25-.25-.5-.5-.73-.77-.12-.14-.24-.27-.36-.41-.06-.07-.11-.13-.16-.2-.05-.06-.15-.15-.18-.22.02.03.05.06.07.09-.02-.02-.03-.05-.05-.07-.03-.05-.07-.09-.1-.14-.06-.08-.12-.17-.19-.26-.11-.16-.22-.31-.33-.47-.23-.35-.45-.71-.65-1.08-.22-.4-.81-.57-1.21-.32-.41.26-.56.77-.32,1.21h0Z"
        />
      </g>
      <g id="arbol3">
        <path
          fill="black"
          d="m927.21,251.58c-8.97-6-14.5-16.82-14.09-27.6.05-1.41.21-2.84.79-4.12.83-1.83,2.44-3.16,3.7-4.73,4.23-5.25,4.27-12.63,3.82-19.36-.45-6.72-1.09-13.91,2.19-19.8,3.28-5.89,12.32-8.97,16.86-3.99,4.38,4.8,1.51,12.54,3.12,18.84,1.04,4.07,3.98,7.47,4.9,11.56,1.17,5.2-1.08,10.53-1.11,15.86-.03,6.24,2.98,12.28,2.46,18.5-.46,5.45-3.83,10.57-8.66,13.15-4.83,2.58-10.96,2.54-15.75-.11l1.78,1.78Z"
        />
        <path
          fill="black"
          d="m930.91,214.4c.01,10.26.02,20.52.04,30.78.01,10.21.02,20.41.04,30.62,0,5.76.01,11.52.02,17.27,0,1.13,1.77,1.14,1.77,0-.01-10.26-.02-20.52-.04-30.78-.01-10.21-.02-20.41-.04-30.62,0-5.76-.01-11.52-.02-17.27,0-1.13-1.77-1.14-1.77,0h0Z"
        />
        <path
          fill="black"
          d="m940.35,224.66c-.23.97-.54,1.93-.92,2.86-.02.06-.05.12-.08.18-.04.09.04-.08.03-.08-.01.03-.02.05-.03.08-.05.12-.11.24-.16.36-.11.23-.22.46-.33.69-.22.45-.47.89-.72,1.32-.26.43-.53.85-.82,1.26-.15.21-.3.41-.45.62-.02.03-.13.18-.05.07.09-.11-.05.07-.07.09-.08.1-.15.19-.23.29-.64.78-1.34,1.51-2.1,2.19-.21.19-.43.37-.64.56-.1.08-.2.17-.31.25-.03.02-.06.05-.09.07-.09.07,0,0,.04-.03-.05.04-.11.08-.16.12-.46.35-.94.67-1.43.98-.39.24-.58.8-.32,1.21.25.39.79.58,1.21.32,1.8-1.12,3.43-2.52,4.8-4.12,1.37-1.6,2.52-3.4,3.35-5.33.48-1.12.89-2.27,1.17-3.46.11-.45-.14-.98-.62-1.08-.45-.1-.97.14-1.09.62h0Z"
        />
        <path
          fill="black"
          d="m920.96,223.41c1.56,2.35,3.79,4.14,6.39,5.21.69.28,1.39.5,2.12.66.45.1.98-.13,1.09-.62.1-.45-.13-.98-.62-1.08-.62-.14-1.23-.32-1.83-.54-.07-.03-.14-.05-.21-.08-.04-.01-.07-.03-.11-.04-.11-.04.16.07.05.02-.15-.07-.3-.13-.44-.2-.29-.14-.58-.29-.86-.45-.27-.16-.54-.32-.8-.49-.12-.08-.24-.16-.35-.24-.06-.04-.12-.09-.18-.13-.03-.02-.06-.05-.09-.07-.16-.12.16.12,0,0-.49-.39-.96-.81-1.39-1.26-.25-.26-.49-.53-.71-.81-.02-.03-.05-.06-.07-.09-.1-.13.08.11.02.02-.05-.07-.1-.14-.15-.21-.11-.15-.22-.31-.32-.47-.25-.38-.79-.58-1.21-.32-.38.25-.59.8-.32,1.21h0Z"
        />
      </g>
      <g id="arbol2">
        <path
          fill="black"
          d="m358.15,251.15c-5.86-10.47-11.77-23.46-5.71-33.83,2.08-3.55,5.41-6.37,6.85-10.23,1.61-4.32.55-9.1.05-13.68-.5-4.58-.15-9.84,3.35-12.84,4.32-3.7,11.51-1.75,15.04,2.72s4.21,10.52,4.18,16.2-.62,11.49.87,16.98c1.25,4.6,3.92,8.79,4.65,13.5,1.33,8.57-3.99,16.77-10.13,22.9-2.91,2.91-6.27,5.68-10.32,6.44-4.05.76-8.86-1.19-10.03-5.14-.77-2.61.03-5.81-1.8-7.82l3.01,4.77Z"
        />
        <path
          fill="black"
          d="m364.15,219.85c.02,7.2.17,14.41.37,21.61.21,7.73.48,15.47.79,23.2.28,7.13.6,14.25.94,21.37.25,5.34.52,10.69.8,16.03.13,2.39.22,4.79.39,7.18,0,.03,0,.07,0,.1.06,1.13,1.83,1.14,1.77,0-.11-1.96-.22-3.92-.32-5.88-.27-5.05-.53-10.1-.77-15.16-.34-6.97-.65-13.94-.94-20.92-.32-7.72-.6-15.44-.82-23.16-.21-7.29-.38-14.59-.43-21.89,0-.82-.01-1.65-.01-2.47,0-1.13-1.77-1.14-1.77,0h0Z"
        />
        <path
          fill="black"
          d="m370.72,224.68c0,.36-.01.71-.05,1.07,0,.04,0,.07-.01.11-.02.19.03-.17,0-.05-.01.08-.02.16-.04.24-.03.18-.07.35-.11.52-.08.35-.18.69-.3,1.03-.05.15-.13.3-.17.45.08-.26,0,.02-.04.08-.04.09-.08.18-.13.27-.15.31-.33.62-.51.91-.09.14-.19.28-.28.42-.05.07-.09.13-.14.19-.01.02-.12.16-.03.04.09-.12-.03.03-.05.06-.44.55-.95,1.04-1.5,1.49-.05.04-.12.05.05-.04-.05.03-.09.07-.13.1-.09.06-.17.13-.26.19-.15.11-.31.21-.47.3-.17.1-.34.19-.52.28-.09.04-.18.09-.27.13-.03.01-.07.03-.1.04-.03.01-.07.03-.1.04.13-.05.15-.06.06-.03-.22.09-.4.19-.53.41-.11.19-.16.47-.09.68.13.41.63.8,1.09.62,1.48-.61,2.8-1.53,3.84-2.75,1.03-1.2,1.8-2.62,2.21-4.15.23-.86.34-1.76.33-2.64,0-.46-.4-.9-.88-.88-.47.02-.89.39-.88.88h0Z"
        />
        <path
          fill="black"
          d="m356.53,226.56c.28,2.21.88,4.34,1.81,6.37.89,1.96,2.09,3.78,3.52,5.4.78.89,1.64,1.7,2.57,2.44.19.15.37.26.62.26.22,0,.48-.1.62-.26.29-.32.39-.94,0-1.25-.8-.64-1.56-1.34-2.25-2.09-.35-.38-.68-.77-1-1.17-.04-.05-.08-.11-.13-.16,0,0,.11.14.05.06-.02-.02-.04-.05-.05-.07-.08-.11-.16-.22-.24-.33-.15-.2-.29-.41-.44-.62-.58-.85-1.09-1.74-1.54-2.67-.11-.24-.22-.47-.33-.71-.02-.05-.05-.11-.07-.16-.04-.09.03.08.03.08-.01-.03-.02-.05-.03-.08-.05-.13-.1-.25-.15-.38-.19-.48-.36-.96-.51-1.45-.17-.55-.32-1.12-.44-1.68-.06-.27-.11-.55-.16-.83-.02-.14-.05-.29-.07-.43-.01-.08-.02-.15-.03-.23,0-.03-.02-.13,0,0,.02.15,0-.04,0-.06-.03-.24-.08-.44-.26-.62-.15-.15-.4-.27-.62-.26-.43.02-.95.39-.88.88h0Z"
        />
      </g>
      <g id="arbol1">
        <path
          fill="black"
          d="m317.79,235.26c-13.34-7.8-23.21-24.23-17.85-38.71,1.1-2.97,2.79-5.76,3.34-8.88.66-3.79-.42-7.66-.31-11.5.24-8.27,6.71-15.94,14.83-17.58,2.57-.52,5.34-.46,7.68.7,3.85,1.91,5.76,6.31,6.63,10.51,2.18,10.42.06,22,5.42,31.2,2.43,4.17,6.3,7.59,7.63,12.23,1.18,4.1.15,8.53-1.53,12.45-2.6,6.07-7.19,11.73-13.52,13.62-6.34,1.9-14.33-1.28-16.05-7.65l3.73,3.62Z"
        />
        <path
          fill="black"
          d="m319.12,187.52c2.45,14.22,4.44,28.51,5.97,42.86,1.52,14.28,2.58,28.61,3.18,42.96.34,8.12.53,16.24.58,24.36,0,1.13,1.77,1.14,1.77,0-.08-14.51-.64-29.01-1.66-43.48-1.02-14.4-2.5-28.78-4.44-43.09-1.09-8.05-2.33-16.08-3.71-24.09-.08-.47-.66-.73-1.09-.62-.5.14-.7.61-.62,1.08h0Z"
        />
        <path
          fill="black"
          d="m310.64,186.15c.44,2.71,1.36,5.33,2.66,7.75,1.3,2.42,3.01,4.64,5.02,6.51,1.15,1.07,2.4,2.03,3.73,2.86.39.25.99.1,1.21-.32.23-.43.1-.94-.32-1.21-.57-.35-1.12-.73-1.65-1.13-.06-.05-.12-.09-.18-.14-.1-.08.17.14.02.02-.03-.02-.06-.05-.09-.07-.13-.1-.26-.21-.39-.32-.25-.21-.5-.42-.75-.64-.99-.88-1.9-1.85-2.73-2.88-.05-.06-.09-.12-.14-.18-.02-.03-.05-.06-.07-.09-.12-.15.09.12.02.02-.1-.13-.2-.27-.3-.41-.2-.26-.38-.53-.57-.81-.37-.54-.72-1.1-1.04-1.68-.33-.58-.63-1.17-.91-1.78-.07-.14-.13-.29-.2-.44-.03-.07-.06-.14-.09-.21-.06-.14.02.04.02.06-.01-.05-.04-.11-.06-.16-.13-.31-.25-.63-.37-.95-.51-1.39-.88-2.83-1.12-4.3-.07-.46-.67-.75-1.09-.62-.5.16-.7.6-.62,1.08h0Z"
        />
        <path
          fill="black"
          d="m332.66,206.34c.05.15.09.29.12.44,0,.03.01.06.02.1,0,.03.03.17,0,.04-.02-.12,0-.01,0,.01,0,.05,0,.11.01.16,0,.14,0,.28,0,.43,0,.09-.01.18-.02.26,0,.03,0,.07-.01.1-.01.13.04-.22,0,0-.11.64-.3,1.25-.53,1.85-.11.29-.22.58-.34.86-.06.14-.11.29-.17.43-.06.14-.1.33-.19.46.01-.02.08-.18.01-.03-.01.03-.03.06-.04.09-.03.07-.06.14-.09.21-.07.15-.13.3-.2.45-.12.28-.25.56-.38.84-1.06,2.29-2.29,4.51-3.66,6.64-.77,1.19-1.58,2.35-2.44,3.48-.13.17-.14.48-.09.68.06.2.21.43.41.53.2.11.45.16.68.09.23-.08.38-.21.53-.41,1.56-2.05,2.97-4.2,4.23-6.45,1.28-2.29,2.4-4.68,3.34-7.13.56-1.45,1.03-3.08.5-4.61-.15-.44-.61-.77-1.09-.62-.43.14-.78.62-.62,1.08h0Z"
        />
      </g>
      <path
        id="arbusto5"
        fill="black"
        d="m0,176.28c3.26-15.31,6.52-29.43,18.68-39.31,2.24-1.82,4.66-3.53,7.45-4.25,10.14-2.63,18.6,8.62,20.65,18.88,3.04,15.22-1.01,31.71-10.75,43.81,5.5-9.08,14.7-15.85,25.01-18.42,2.82-.7,5.82-1.1,8.6-.24,5.91,1.82,8.85,8.9,8.07,15.03-.78,6.13-4.33,11.5-7.78,16.63,5.49-7.83,15.87-13.3,24.75-9.73,8.88,3.57,11.18,18.58,2.4,22.4,5.75-4.46,14.48-4.57,20.34-.25,5.86,4.32,8.32,12.69,5.74,19.49,7.32-5.87,20.23,3.2,17.16,12.07,5.19-.63,9.99,3.56,11.84,8.45,1.85,4.88,1.46,10.29,1.04,15.5-.46,5.66-.99,11.55-3.92,16.41-4.5,7.45-13.45,10.72-21.72,13.46-3.11,1.03-6.4,2.07-9.61,1.41-3.21-.67-6.17-3.72-5.49-6.92-18.25,3.08-36.93.49-55.26-2.1C38.78,295.98,18.42,293.37,0,290.76v-114.49Z"
      />
      <path
        id="arbusto3"
        fill="black"
        d="m1200,149.24c-2.19-8.92-10.47-14.29-18.36-9.56-7.88,4.73-8.09,18.35-.03,22.76-7.58-6.22-20.17-4.9-26.29,2.76-6.12,7.65-4.62,20.22,3.13,26.22-4.89-4.02-13.13-1.73-16.26,3.77-3.13,5.5-1.63,12.84,2.49,17.64,4.12,4.8,10.38,7.36,16.64,8.32-7.8-.45-12.22,10.18-9,17.3,3.22,7.11,10.72,11.11,17.72,14.59-5.48-3.7-13.46-3.15-18.38,1.26-4.92,4.41-6.33,12.27-3.25,18.11-6.04-6.17-18.05-3.1-21.36,4.87-3.31,7.97,1.81,17.93,9.88,21.02,2.28.87,6.16-.48,4.91-2.58-2.49,3.39-.24,8.56,3.43,10.62,3.67,2.06,8.13,1.9,12.34,1.69,14.93-.77,27.47-1.53,42.39-2.3v-156.5Z"
      />

      <g id="skatermask">
        <g>
          <path
            d="m263.06,247.96c-.27-1.96-.54-3.93-.81-5.89-.07-.54-.15-1.1.03-1.62.3-.87,1.22-1.36,2.07-1.75,2.12-.98,4.27-1.88,6.46-2.7,1.4-.52,2.82-1.01,4.3-1.18,1.47-.17,2.96,0,4.44.15,5.06.54,10.12,1.08,15.18,1.62.84.09,1.72.19,2.43.63,1.27.78,1.7,2.36,2.03,3.79,2.32,10.04,4.64,20.07,6.95,30.11.29,1.27.58,2.66.01,3.84-.48,1-1.48,1.65-2.43,2.25-1.79,1.12-3.58,2.24-5.38,3.37-.76.48-1.54.96-2.42,1.17-1.19.28-2.43.03-3.63-.23-8.01-1.7-16.01-3.41-24.02-5.11-.48-.1-.98-.21-1.36-.52-.67-.53-.79-1.47-.86-2.31-.77-9.1-1.53-18.19-2.3-27.29l-.7,1.68Z"
            fill="black"
          />
          <g clip-path="url(#clippath-3)">
            <path
              d="m296.96,282.77c-2.93-10.69-5.09-21.6-6.44-32.6-.21-1.72-.46-3.58-1.67-4.82-.9-.93-2.19-1.36-3.44-1.73-7.98-2.39-16.23-3.85-24.54-4.37-.6-.04-1.22-.06-1.76.19-.91.43-1.3,1.5-1.54,2.48-.87,3.48-1.1,7.09-1.25,10.68-.29,6.86-.32,13.73-.08,20.59.1,2.96.25,5.92.78,8.83.08.42.17.85.44,1.18.35.42.93.56,1.46.69,4.09.94,8.17,1.88,12.26,2.81,8.37,1.92,17.07,3.85,25.45,2.01l.33-5.94Z"
              fill="black"
            />
          </g>
        </g>
        <path
          d="m267.38,239.84c-.72-2.26-.46-4.6-.59-7-2.73.3-5.5.06-8.15-.71-.72-.21-1.44-.46-2.19-.42-.74.04-1.53.45-1.82,1.2-.3.75.15,1.81.89,1.83-1.17-.14-2.39-.46-3.23-1.36-1.2-1.29-1.27-3.54-.41-5.15.86-1.61,2.47-2.61,4.13-3,1.66-.39,3.37-.24,5.05,0,3.02.43,6.03,1.15,8.83,2.46.28.13.57.28.75.55.28.41.23.99.16,1.5-.35,2.75-.7,5.5-1.05,8.25l-2.37,1.85Z"
          fill="black"
        />
        <path
          d="m254.66,229.71c-.8,3.68-.68,9.43-.37,13.19.07.87.18,1.77.65,2.51,1.07,1.7,3.44,1.85,5.45,1.81.23,1.38.13.84.25,2.23.18,2.06,2.08,3.5,4.11,3.12,1.79-.34,2.95-1.94,2.82-3.68-.17-2.27-.15-2.6-.48-4.85,1.3.73,3.2-.19,3.43-1.67s-1.3-2.93-2.76-2.64c.29-2.7.41-5.43.34-8.15-3.07.36-6.2.21-9.22-.46-.68-.15-1.38-.33-2.07-.22-.69.11-1.42-1.73-1.53-1.04l-.63-.16Z"
          fill="black"
        />
        <path
          d="m266.3,247.81c2.27-.52,7.13.54,9.37,1.19,5.3,1.54,10.74,3.2,14.98,6.73,4.24,3.53,6.99,9.44,5.18,14.65-1.46,4.22-5.72,7.13-10.17,7.64-4.44.51-8.96-1.13-12.53-3.82-3.57-2.69-6.29-6.36-8.54-10.22,1-1.33,2-2.66,3-4,2.85,3.51,7.16,5.78,11.67,6.15-1.99-2.87-3.98-5.73-5.97-8.6-1.91-2.75-3.91-5.89-3.35-9.19l-3.64-.55Z"
          fill="black"
        />
        <path
          d="m268.25,247.51c1.15.05,2.08.93,2.86,1.78,7.9,8.49,13.71,18.91,16.77,30.09.15.56.3,1.17.11,1.72-.15.46-.52.81-.88,1.13-1.36,1.19-2.89,2.18-4.58,2.83-6.25,2.4-12.65,1.51-18.81.08-.56-.13-1.16-.28-1.57-.69-.36-.35-.48-.85-.68-1.31-6.3-14.34-8.04-26.61-.98-32.47,1.02-.85,1.43-2.23,2.74-2.46,1.37-.24,2.7-.38,4.14-.8l.88.1Z"
          fill="black"
        />
        <path
          d="m239.06,280.52c1.14,2.9,1.24,3.13,2.38,6.03,14.92-2.09,28.09-19.53,30.05-24.48.22-.56.44-1.16.31-1.74-.13-.55-.54-.98-.94-1.37l-6.36-6.32c-2.9-2.88-7.85-1.23-8.44,2.82,0,0-2.2,15.51-16.99,25.06Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export default MaskEstrellas;
