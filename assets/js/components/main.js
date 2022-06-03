//import ElementHTML from "../class/ElementHTML.js";
// plus besoin d'importer ElementHTML vu que CHILDHTML hérite d'ElementHTML 
import ChildHTML from "../class/ChildHTML.js";



// create d'un composant main qui hérite de ChildHTML
const mainChild = () => {
    const elm = new ChildHTML();
    //creation d'une balise html MAIN 
    elm.main("main");
    const child = new ChildHTML();
    //creation d'une balise html section
    child.section(".main");
}


export default mainChild;