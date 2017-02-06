$(function () {

	$('#search_button').button({
		icons:{
			primary: 'ui-icon-search',
		},
	});

	$('#reg').dialog({
		autoOpen:true,
		modal:true,
		resizable:false,
		width:320,
		height:380,
		buttons: {
			'提交':function(){
				$(this).submit();
			}
		}
	});

	$('#reg').buttonset();

	$('#reg').validate({

		submitHandler: function(form){
			alert('ok , pret de submit.....');

		},

		showErrors: function(errorMap, errorList){
			var errors=this.numberOfInvalids();
			if(errors>0){
				$('#reg').dialog('option','height',errors*20+380);
			}else{
				$('#reg').dialog('option', 'height', 380);
			}
			this.defaultShowErrors();
		},
		highlight: function(element, errorClass){
			$(element).css('border','1px solid maroon');
		},
		unhighlight: function(element, errorClass){
			$(element).css('border','1px solid #ccc');

			//找到$(element)即input节点的父元素，再去父元素中找子元素为span的元素， 并且将其内容改为ok
			//$(element).parent().find('span').html('ok');

			//这里要给span的元素加内容，html('&nbsp') 加了空格，不加的话，给他加背景图片是没效果的
			
			//注意如果html()，这样写是表示取值			
		        $(element).parent().find('span').html('&nbsp').addClass('succ');
		},

		errorLabelContainer:'ol.reg_error',
		wrapper:'li',

		rules:{
			user:{
				required: true,
				minlength:2,
			},
			pass:{
				required: true,
				minlength:6,
			},
			email:{
				required: true,
				email:true,
			},
			date:{
				date:true,
			},

		},
		messages:{
			user:{
				required: '账号不得为空',
				minlength: jQuery.format('账号不得小于{0}位'),
			},
			pass: {
				required: '密码不得为空',
				minlength: jQuery.format('密码不得小于{0}位'),
			},
			email: {
				required: '邮箱不得为空',
				email:'请输入正确的邮箱地址',
			},
		},
	});

	$('#date').datepicker({
		showOn: 'button',
		//showOn: 'both',
		//buttonText: 'D',
		buttonImage:'img/calendar.gif',
		buttonImageOnly:true,
	});


	
});


























