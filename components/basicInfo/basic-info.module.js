var basicInfo = angular.module('basicInfo', [
    'api'
]);


basicInfo.directive('gmail', function() {
    // return {
    //   require: 'ngModel',
    //   link: function(scope, element, attr, mCtrl) {
    //     function myValidation(value) {
    //     const domain = value.substring(value.lastIndexOf('@') + 1);
    //     if (email === '' || domain.toLowerCase() === 'gmail.com') {
    //         mCtrl.$setValidity('gmail.com is present ', true);
    //     } else {
    //         mCtrl.$setValidity('gmail.com is not present ', false);
    //     }
    //     return value;
    //     }
    //     mCtrl.$parsers.push(myValidation);
    //   }
    // };
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$validators.gmail = function(modelValue, viewValue) {
            const domain = viewValue.substring(viewValue.lastIndexOf('@') + 1);
            if (ctrl.$isEmpty(modelValue)) {
              return true;
            }
            if (domain.toLowerCase() == 'gmail.com') {
              return true;
            }
            return false;
          };
        }
      };
  });

  var INTEGER_REGEXP = /^-?\d+$/;

  basicInfo.directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
  
          if (INTEGER_REGEXP.test(viewValue)) {
            return true;
          }
          return false;
        };
      }
    };
  });

  app.directive('noninteger', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.noninteger = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return false;
        }

        // it is invalid
        return true;
      };
    }
  };
});