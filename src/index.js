import {Text0} from './text-0.js';
import {Text1} from './text-1.js';
import {Text2} from './text-2.js';

const textFun = (...arg) => {
    let P = document.createElement("p");
    P.innerHTML = arg.join(" ");
    document.getElementById('root').appendChild(P);
}
textFun(Text0,Text1,Text2);