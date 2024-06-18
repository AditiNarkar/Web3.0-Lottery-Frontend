"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3802],{13802:function(o,r,c){c.r(r),c.d(r,{default:function(){return $}});var e=c(41805);c(2265),c(36187);let l=(0,e.C)`
    :after {
        background-color: ${(0,e.g)("light",90)};
    }

    :hover {
        :after {
            background-color: ${(0,e.g)("light",70)};
        }
    }

    :active {
        :after {
            background-color: ${(0,e.g)("light",50)};
        }
    }
`,n=(0,e.C)`
    background-color: ${e.c.red40};
    border-color: ${e.c.red40};
    color: ${e.c.red40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.red40};
    }

    ${l}
`,a=(0,e.C)`
    background-color: ${e.c.mint40};
    border-color: ${e.c.mint40};
    color: ${e.c.mint40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.mint40};
    }

    ${l}
`,t=(0,e.C)`
    background-color: ${e.c.navy40};
    border-color: ${e.c.navy40};
    color: ${e.c.navy40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.navy40};
    }

    ${l}
`,d=(0,e.C)`
    background-color: ${e.c.yellow50};
    border-color: ${e.c.yellow50};
    color: ${e.c.yellow50};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.yellow50};
    }

    ${l}
`,s=o=>{switch(o){case"red":return n;case"green":return a;case"blue":return t;case"yellow":return d;default:return}},{ButtonColoredStyled:u}={ButtonColoredStyled:(0,e.s)(e.B)`
    :after {
        background-color: ${(0,e.g)("dark",0)};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
        border-radius: 10px;
    }

    ${({color:o})=>o&&s(o)}
`},$=({color:o,...r})=>(0,e.a)(u,{color:o,...r})}}]);