function SearchController (mainService,$uibModal, $log, $document){
    var vm = this;
    vm.search=""
    vm.searchArr = []
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
    vm.open = function (size, parentSelector) {
    console.log(parentSelector)
    var parentElem = parentSelector ?
        angular.element($document[0].querySelector(parentSelector)) : undefined;
        
    console.log(parentElem);
    var $uibModalInstance = $uibModal.open({
        animation: false,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'components/search/model.template.html',
        controller: ModalInstanceCtrl(),
        controllerAs: 'vm',
        size: size,
        appendTo: parentElem,
        backdrop:'static',
        resolve: {}
    });
    
    function ModalInstanceCtrl() {
        // console.log($uibModalInstance,"fdfdf");
        var vm = this;
        
    }
}
}


search.component("search",{
    templateUrl: 'components/search/search.template.html',
    controller:['mainService','$uibModal', '$log', '$document',SearchController],
    controllerAs: 'vm'
})

