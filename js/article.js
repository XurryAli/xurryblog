/*
* @Author: Xurry
* @Date:   2017-08-24 14:59:56
* @Last Modified by:   Xurry
* @Last Modified time: 2017-08-24 16:28:32
*/

var articleApp = angular.module("articleApp",["commonApp",'ngSanitize'])
.controller("articleController",["$scope","$http",'$sce',function($scope,$http,$sce){
	$http.get("./data/article.json").success(function (response) {
		$scope.datas = response.data;
		$scope.totalItems = response.data.length; 		//总项目数
	    $scope.currentPage = response.currentPage; 		//当前页
	    $scope.perPage = response.perPage; 				// 每页显示的项目数
	    $scope.maxSize = response.maxSize; 				//分页按钮显示的数量
	    $scope.pageChanged = function() { 				//页面改变时的函数
	        console.log('当前页: ' + $scope.currentPage);
	    };

	    function getUrlRequest(){
	        var url = window.location.search; //获取url中"?"符后的字串
	        var theRequest = new Object();
	        if (url.indexOf("?") != -1) {
	            var str = url.substr(1);
	            if (str.indexOf("&") != -1) {
	                strs = str.split("&");
	                console.log(strs[0])
	                for (var i = 0; i < strs.length; i++) {
	                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
	                }
	            } else {
	                var key = str.substring(0,str.indexOf("="));
	                var value = str.substr(str.indexOf("=")+1);
	                theRequest[key] = decodeURI(value);
	            }
	        }
	        return theRequest;
	    }

	    for(var i = 0; i < $scope.totalItems; i++){
	    	var type = response.data[i].articleType
	    	var addressId = getUrlRequest().articleid
	    	var articleId = response.data[i].articleId
	    	console.log(articleId)
	    	if(articleId == addressId){
	    		$scope.articleTitle = response.data[i].articleTitle;
	    		$scope.articleAuthor = response.data[i].articleAuthor;
	    		$scope.articleContent = response.data[i].articleContent;
	    		$scope.articleTime = response.data[i].articleTime;
	    		$scope.articleType = response.data[i].articleType;
	    		$scope.articleClassify = response.data[i].articleClassify;
	    	}
	    }
    });
}]);