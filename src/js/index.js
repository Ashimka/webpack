import "../scss/main.scss";
import "../index.html";

import img from "../img/refresh.webp";

const imgBlock = document.querySelector(".main__img");

imgBlock.innerHTML = `
<img src="${img}" alt="refresh"/>
`;
