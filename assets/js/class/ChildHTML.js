import ElementHTML from "./ElementHTML.js";


class ChildHTML extends ElementHTML {
    section(parent){
        const selectParent = document.querySelector(parent);
        const section = document.createElement("section");
        if(parent){
            selectParent.appendChild(section);
        } else {
        document.body.appendChild(section);
        }

    }

}

export default ChildHTML;