app.controller('myCtrl',function($scope){
		$scope.todo = [];
		$scope.index =[];
		$scope.complete =[];
		$scope.addTodo = function(){
			$scope.todo.push($scope.text);
			$scope.text ='';

		}
		$scope.removeTodo = function(remove){
			$scope.todo.splice(remove,1);
		}
		$scope.editSave = function(item){
			$scope.todo.splice(item,1,$scope.index[item]);
			$scope.foo = false;
		}
		$scope.completed = function(index){
			console.log(index+ 'chech');
			$scope.complete.push(index);

		}
		$scope.clear = function(){
			for (var i = $scope.complete.length -1; i >= 0; i--){
   				$scope.todo.splice($scope.complete[i],1);
   			}
   			$scope.complete =[];

		}

	});