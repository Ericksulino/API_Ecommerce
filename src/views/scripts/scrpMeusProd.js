
    let currentAction = null;
  
    function showModal(message, action,modal,css) {
      currentAction = action;
      var element = document.getElementById(modal);
      document.getElementById("modal-message").innerHTML = message;
      element.classList.add(css);
    }

    function showModal(message, action,modal,css) {
      currentAction = action;
      var element = document.getElementById(modal);
      document.getElementById("modal-message").innerHTML = message;
      element.classList.add(css);
      
    }

  
    function closeModal() {
      var element = document.getElementById("modal");
      element.classList.remove("show-modal");
    }
  
    document.addEventListener("DOMContentLoaded", function() {
      const editButtons = document.querySelectorAll(".button.green");
      const deleteButtons = document.querySelectorAll(".button.red");
      const confirmButton = document.querySelector(".button.sim");
      const negButton = document.querySelector(".button.nao");
  
      editButtons.forEach(function(editButton) {
        editButton.addEventListener("click", function(event) {
          showModal("Deseja mesmo editar?", "edit","modal","show-modal");
          console.log(`Editar item: ${event.target.id}`);
        });
      });
  
      deleteButtons.forEach(function(deleteButton) {
        deleteButton.addEventListener("click", function(event) {
          showModal("Deseja mesmo excluir?", "delete","modal","show-modal");
          console.log(`Excluir item: ${event.target.id}`);
        });
      });
   
      confirmButton.addEventListener("click", function() {
        switch (currentAction) {
          case "edit":
            // Código para editar item
            console.log("Editando item");
            
             window.location.href = '/CadItem';
             //window.location.href = '/CadItem?imagem=' + imagem + '&nome=' + nome + '&valor=' + valor + '&categoria=' + categoria + '&tipo=' + tipo + '&descricao=' + descricao + '&anunciante=' + anunciante + '&telefone=' + telefone;
             
            break;
          case "delete":
            // Código para excluir item
            console.log("Excluindo item");
            break;
          default:
            console.log("Nenhuma ação selecionada");
        }
  
        closeModal();
      });

      negButton.addEventListener("click", function() {
  
        closeModal();
      });
    });
  