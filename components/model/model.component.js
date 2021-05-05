function ModelController (mainService){
    var vm = this;
    vm.close = function(){
        var myModal = new bootstrap.Modal(document.getElementById('model'+this.details.rollNo), {
            keyboard: false
          })
        console.log(myModal);
        console.log(myModal.hide());
    }

}

model.component("model",{
    templateUrl: 'components/model/model.template.html',
    controller: ModelController,
    controllerAs: 'vm',
    bindings : {
        details : "="
    }
})