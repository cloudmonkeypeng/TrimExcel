$(document).ready(function(){
/* 定义所有class为copy-input标签，点击后可复制class为input的文本 */
	 $("#copy-button").zclip({
		path: "ZeroClipboard.swf",
		copy: function(){
			return $(this).parent().find("#trimData").val();
		},
		afterCopy:function(){/* 复制成功后的操作 */
			$("#copyResult").modal('show');
			Console.log('复制成功');
        }
	});
	
	$("#trim-button").click(function(){
		var sourceData ="";
		sourceData = $("#sourceData").val();
		$("#trimData").val(sourceData);
	});
	
	$("#copy-button").click(function(){
		
	});
	
	$("#copy-button").popover();
});