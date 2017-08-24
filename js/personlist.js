/*
* @Author: Xurry
* @Date:   2017-08-24 14:09:09
* @Last Modified by:   Xurry
* @Last Modified time: 2017-08-24 15:31:06
*/

var articleListApp = angular.module("articleListApp",["ui.bootstrap","commonApp"])
.controller("articleListController",["$scope","$http",function($scope,$http){
	$http.get("./data/person-article.json").success(function (response) {
		$scope.isActive = false;						//控制鼠标移入背景色状态
		$scope.isDisabled = false;						//控制鼠标移入移出图片大小变化
		$scope.datas = response.data;
		$scope.totalItems = response.data.length; 		//总项目数
	    $scope.currentPage = response.currentPage; 		//当前页
	    $scope.perPage = response.perPage; 				// 每页显示的项目数
	    $scope.maxSize = response.maxSize; 				//分页按钮显示的数量
	    $scope.pageChanged = function() { 				//页面改变时的函数
	        console.log('当前页: ' + $scope.currentPage);
	    };
	    $scope.getArticle = function($event, value) {
	    	for(var i = 0; i < $scope.totalItems; i++){
		    	var type = response.data[i].articleType
		    	var articleId = response.data[i].articleId
		    	if(articleId == value){
		    		$scope.articleUrl = "article.html?articleid=" + value;
		    		console.log($scope.articleUrl)
		    	}
		    }
	    }
    });
}]);