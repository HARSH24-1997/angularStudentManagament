function ReportsController (mainService){
    var vm = this;
    var e =  document.getElementById("subject")
    var f = document.getElementById("class")
    vm.subject = e.options[e.selectedIndex].value;
    vm.class = f.options[f.selectedIndex].value;
    vm.count = ""
    vm.avg = ""
    vm.totalMarks = ""
    vm.subjectName = ""
    var g =  document.getElementById("subjectTopper")
    var h = document.getElementById("classTopper")
    vm.subjectTopper = g.options[g.selectedIndex].value;
    vm.classTopper = h.options[h.selectedIndex].value;
    vm.topperName = ""
    vm.topperMarks = ""
    vm.topperSubject = ""

    //First time 
    mainService.totalMarks({
        subject:vm.subject,
        class:vm.class
    })
    .then(result=>{
        if(result.data[0]!=null || result.data[0]!=undefined){
        var resp  =  result.data[0];
        vm.count = resp.Count;
        vm.avg = resp.Average
        vm.totalMarks = resp.TotalMarks;
        vm.subjectName = resp._id.subject;
        }
        else{

        }
    })
    .catch(err=>{
        console.error(err);
    })

    //on changing the filter
    vm.onFilter = function(){
        console.log(vm.subject,vm.class,"sfdf")
        mainService.totalMarks({
            subject:vm.subject,
            class:vm.class
        })
        .then(result=>{
            if(result){
            var resp  =  result.data[0];
            console.log(resp);
            vm.count = resp.Count;
            vm.avg = resp.Average;
            vm.totalMarks = resp.TotalMarks;
            vm.subjectName = resp._id.subject;
            }
            else{

            }
        })
        .catch(err=>{
            console.error(err);
        })
    }

   

    mainService.subjectTopper({
        subject:vm.subjectTopper,
        class:vm.classTopper
    })
    .then(result=>{
        if(result){
        var resp  =  result.data[0];
        console.log(resp);
        vm.topperName = resp.name;
        vm.topperMarks = resp.marks;
        vm.topperSubject = resp.subject;
        }
        else{

        }
    })
    .catch(err=>{
        console.error(err);
    })

    vm.onFilterTopper =  function(){
        mainService.subjectTopper({
            subject:vm.subjectTopper,
            class:vm.classTopper
        })
        .then(result=>{
            if(result){
            var resp  =  result.data[0];
            console.log(resp);
            vm.topperName = resp.name;
            vm.topperMarks = resp.marks;
            vm.topperSubject = resp.subject;
            }
            else{

            }
        })
        .catch(err=>{
            console.error(err);
        })
    }
}

basicInfo.component("reports",{
    templateUrl: 'components/reports/reports.template.html',
    controller: ["mainService",ReportsController],
    controllerAs: 'vm'
})