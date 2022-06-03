import ElementHTML from "../class/ElementHTML.js";
import ChildHTML from "../class/ChildHTML.js";



const mainChild = () => {
    const elm = new ElementHTML();
    elm.main("main");
    const child = new ChildHTML();
    child.section(".main");
}


export default mainChild;