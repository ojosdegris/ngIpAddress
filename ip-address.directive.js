angular.module('ve').directive('ipAddress', function ipAddress(){
  	return {
    	restrict:'A',
      require:'?ngModel',
      link: function(scope, elm, attr, ctrl){      	
        if (!ctrl) return;        
        ctrl.$parsers.push(function(viewValue){
        	if (!viewValue) return null;          
          var isvalid = isValidIp(viewValue)          
          return isvalid ? viewValue : null;                   
        })
      }          
    }
  
  	function isValidIp(value){
         var arr = value.split('.')
         var r = /^\d{1,3}$/;
         return arr.length === 4  && arr
                    .map(function(e){
         	            return ( r.test(e) && ((e|0) >= 0) && ( (e | 0) <= 255))            
                    })
                    .every(function(e){ return e })                 
    }   
  })
