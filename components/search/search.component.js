function SearchController (mainService,$uibModal, $log, $document){
    var vm = this;
    vm.search=""
    vm.searchArr = []
    console.log(mainService);
    vm.onSearch = function(){
        var res = vm.search.split(",");
        var arr = res.map((val)=>{
            return parseInt(val);
        })
        console.log(arr);
        mainService.search(arr)
        .then(students=>{
            vm.searchArr =  students.data;
        })
        .catch(err=>{
            console.error(err);
        })
    }
    vm.animationsEnabled = true;
    vm.open = function (size, parentSelector, resp) {
    var parentElem = parentSelector ?
        angular.element($document[0].querySelector(parentSelector)) : undefined;
    
    $uibModal.open({
        animation: false,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'components/search/model.template.html',
        controller: ModalInstanceCtrl,
        controllerAs: 'vm',
        size: size,
        appendTo: parentElem,
        backdrop:'static',
        resolve: {
            data : function () {
                return resp;
              }
        }
    });
}
}

function ModalInstanceCtrl($uibModalInstance,mainService,data) {
    console.log($uibModalInstance);
    console.log(mainService,"dfdf");
    var vm = this;
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.nameStudent = data.name;
    vm.classStudent = data.class;
    vm.rollNoStudent = data.rollNo;
    vm.rank=""
    vm.studentTotalMarks=""
    mainService.rank(vm.classStudent)
    .then((resp)=>{
        var arr = resp.data;
        console.log(arr,"arr");
         vm.rank = arr.findIndex((elem)=> elem._id.name == vm.nameStudent );
         vm.studentTotalMarks = arr[vm.rank]._id.Totalmarks;
         vm.rank = vm.rank + 1; 
    })
    .catch(err=>{
        console.log(err);
    })    
}


search.component("search",{
    templateUrl: 'components/search/search.template.html',
    controller:['mainService','$uibModal', '$log', '$document',SearchController],
    controllerAs: 'vm'
})

