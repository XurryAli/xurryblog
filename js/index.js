/*
* @Author: Xurry
* @Date:   2017-08-28 12:04:56
* @Last Modified by:   Xurry
* @Last Modified time: 2017-08-28 12:05:01
*/

$('.travelThis').on('click',function(){
	window.location.href = "article-list.html?t=" +new Date().getTime();
})
$('.travelMore').on('click',function(){
	window.location.href = "article-list.html?t=" +new Date().getTime();
})