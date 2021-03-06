var itemlength;
var load = document.querySelector(".loadbox");
window.onload = function() {
	var items = document.getElementsByClassName('scrollitem');
	itemlength=items.length;
	window.scrollTop = 0;
}

window.onscroll=function(){
	//窗口高度
	var pageH=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	//文档高度
	var itemH=document.documentElement.offsetHeight||document.body.offsetHeight;
	//视窗上面隐藏掉的部分的高度
	var scrollH=document.documentElement.scrollTop || document.body.scrollTop;  
	if(pageH+scrollH==itemH && itemlength<=100){//滚到底时
		setTimeout(additem,1000);
		load.style.display = 'block';
	}
}

function additem() {
	var list=document.querySelector(".scrolllist");
	var num = itemlength + 1;
	for (var i=0; i<15; i++) {
		var item = document.createElement('li');
		item.className = 'scrollitem';
		item.innerHTML = 'item' + (i + num);
		list.appendChild(item);
		itemlength++;
	}
	load.style.display = 'none';
}
