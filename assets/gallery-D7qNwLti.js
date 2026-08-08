import{a as r,m as s}from"./hero-runtime-xeFwYqUH.js";const o=["Potential flow round a cylinder — the exact classical solution, not a simulation. The current has no choice but to part around the mark.","A star chart with the Block T at the celestial pole. The sky turns about it; constellations are surveyed on, then a different sky is drawn.","Generated terrain cut into level curves by marching squares, inked one elevation at a time from the lowlands up. The mark takes the summit."],n=["I","II","III"],i=document.getElementById("studies");r().forEach((a,t)=>{const e=document.createElement("section");e.className="study hero",e.innerHTML=`
        <canvas></canvas>
        <span class="tag">${n[t]} &middot; ${a.name}</span>
        <svg class="mark" viewBox="0 0 100 100" role="img" aria-label="Thrain">
          <rect x="10" y="12" width="80" height="20" rx="6" fill="#f4f4f5"/>
          <rect x="40" y="40" width="20" height="20" rx="6" fill="#f4f4f5"/>
          <rect x="40" y="68" width="20" height="20" rx="6" fill="#C14E24"/>
        </svg>
        <p class="wordmark">THRAIN</p>
        <svg class="rim-word" aria-hidden="true" style="display:none">
          <defs><path id="rim-path-${t}" fill="none"/></defs>
          <text><textPath href="#rim-path-${t}" startOffset="50%">THRAIN</textPath></text>
        </svg>
        <p class="note">${o[t]}</p>`,i.appendChild(e),s(e.querySelector("canvas"),a,{root:e,mark:e.querySelector(".mark"),word:e.querySelector(".wordmark"),rim:e.querySelector(".rim-word"),rimPath:e.querySelector(`#rim-path-${t}`)})});
