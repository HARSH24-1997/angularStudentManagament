function BulkController(secondaryService) {
    var vm = this;
    vm.numberRecords = ""
    vm.success = 0;
    vm.error = 0;
    vm.bulk = function () {
        secondaryService.bulkAdd(vm.numberRecords)
        .then(resp => {
           vm.success= resp.data.nInserted
           vm.error = resp.data.writeErrors.length
        })
        .catch(err=>{
            throw new err ;
        })
    }
}


bulk.component("bulk", {
    templateUrl: 'components/bulk/bulk.template.html',
    controller: ['secondaryService', BulkController],
    controllerAs: 'vm',
})