define(['jquery','template'],function($,template){
	//加载列表数据
	$.ajax({
		type : 'get',
		url : '/api/teacher',
		dataType : 'json',
		success : function(data){
			var html = template('teacherInfoTpl',{list:data.result});
			$('#teacherInfo').html(html);
		}
	});
});