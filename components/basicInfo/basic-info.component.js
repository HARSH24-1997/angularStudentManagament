function BasicInfoController (mainService){
    var vm = this;
    vm.name ="";
    vm.schoolName = "";
    vm.rollNo = "";
    vm.age = "";
    vm.class = "";
    vm.email = "";
    vm.maths = "";
    vm.english = "";
    vm.science = "";
    vm.computer = "";    // [{subject:computer,marks:95}]; 

    vm.onCreate = function(isValid){
        if(isValid){
            alert("User Details are valid and ready to go ")
        }
        mainService.createUser({
            name:vm.name,
            school:vm.schoolName,
            age:vm.age,
            rollNo:vm.rollNo,
            class:vm.class,
            email:vm.email,
            marks:[{
                subject:"science",
                marks:vm.science
            },{
                subject:"maths",
                marks:vm.maths
            },{
                subject:"english",
                marks:vm.english
            },{
                subject:"computer",
                marks:vm.computer
            }]
        }).then((resp)=>{
            console.log(resp);
        })
    }
}

basicInfo.component("basicInfo",{
    templateUrl: 'components/basicInfo/basic-info.template.html',
    controller:['mainService',BasicInfoController],
    controllerAs: 'vm'
})