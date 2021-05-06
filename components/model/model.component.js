function ModelController (mainService){
    var vm = this;
    vm.rank = '';
    vm.studentTotalMarks = "";
    this.$onInit = function() {
    mainService.rank(vm.details.class)
    .then((resp)=>{
        var arr = resp.data;
        console.log(arr,"dfdf");
         vm.rank = arr.findIndex((elem)=> elem._id.name == vm.details.name );
         vm.studentTotalMarks = arr[vm.rank]._id.Totalmarks;
         vm.rank = vm.rank + 1; 
    })
    .catch(err=>{
        console.log(err);
    })    
    };

}

model.component("model",{
    templateUrl: 'components/model/model.template.html',
    controller: ModelController,
    controllerAs: 'vm',
    bindings : {
        details : "="
    }
})