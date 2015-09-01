$(document).ready(function(){
/* 定义所有class为copy-input标签，点击后可复制class为input的文本 */
	 $("#copy-button").zclip({
		path: "ZeroClipboard.swf",
		copy: function(){
			return $(this).parent().find("#trimData").val();
		},
		afterCopy:function(){/* 复制成功后的操作 */
			$("#copyResult").modal('show');
			setTimeout(function() {
				$("#copyResult").modal('hide');
			}, 5000);
		}
	});
	
	$("#trim-button").click(function(){
		$("#trimData").val(trimData($("#sourceData").val()));
	});
});

function trimData(sourceData){
	var trimData = "假设已经整理过"+sourceData;
	return trimData; 
}