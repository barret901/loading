  function query() {
    //遮罩层
    var xval=getBusyOverlay('viewport',
        {color:'gray', opacity:0.75, text:'viewport: loading...',
          style:'text-shadow: 0 0 3px black;font-weight:bold;font-size:16px;color:white'},
        {color:'#ff0', size:100, type:'o'});
    $.ajax({
      url : "getData?sd=" + sd + "&ed=" + ed,
      type : "post",
      dataType : 'json',
      beforeSend:function(){
        if(xval) {
          xval.settext("正在查询，请稍后......");
        }
      },
      success : function(data) {
        xval.remove();
        for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data[i].length; j++) {
            $("#data" + (i+1) + "" + (j+1)).text(data[i][j]);
          }
        }
      },
      error : function(msg) {
        alert("error");
      }
    });
  }
