function SearchController (mainService){
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
    
}

search.component("search",{
    templateUrl: 'components/search/search.template.html',
    controller:['mainService',SearchController],
    controllerAs: 'vm'
})

