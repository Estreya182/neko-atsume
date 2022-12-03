class Menu {
    constructor() {
 
      this.menuButton = createButton("");

    }

    

handleElements() {
   
        this.menuButton.class("menuButton");
        this.menuButton.position( 100, 50);
    
        
      }

play (){

        this.handleElements();
        this.handlemenuButton();
      
}

      handlemenuButton() {
        this.menuButton.mousePressed(() => {
            this.showMenu();

            
                 
        });
      }
      showMenu() {
        swal({
          title: `¡Menu!`,
          imageUrl:
           "https://www.tu-web.com.mx/images/blanca.jpg",
           imageSize: "400x400",  
          confirmButtonText: "Ok"
        });
      }
     
    
}