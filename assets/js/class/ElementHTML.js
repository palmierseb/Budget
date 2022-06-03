class ElementHTML {

  header(className,id){
      const header = document.createElement("header");
      if(className){
          header.classList.add(className);     
      }
       if(id) {
        header.setAttribute("id",id);
      }
      document.body.appendChild(header);
  }
  main(className,id){
      const main = document.createElement("main");
      if(className){
          main.classList.add(className);
      } 
      if(id){
        main.setAttribute("id",id);
      }
      document.body.appendChild(main);
  }
   footer(className,id){
       const footer = document.createElement("footer");
       if(className){
           footer.classList.add(className);
       }
       if(id) {
           footer.setAttribute("id",id);
       }
       document.body.appendChild(footer);
   }
}
export default ElementHTML;