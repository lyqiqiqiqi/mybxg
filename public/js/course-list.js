define(['jquery','template','util'],function($,template,util){
	//导航菜单选中
	util.setMenu(location.pathname);
	//获取列表数据
	$.ajax({
		type : 'get',
		url : '/api/course',
		dataType : 'json',
		success : function(data){
			// console.log(data);
			//渲染数据列表
			var html = template('courseTpl',{list : data.result});
			$('#courseInfo').html(html);
		}
	})
})