$(document).ready(function(){

  output = $("#output");

  if (window.innerWidth <= 480){
    $("#submit").css("margin-top", "20px");
  }

  $("#testForm").submit(function(e){
    e.preventDefault();
    
    var $form = $(this),
        user = $form.find("input[name='userName']").val(),
        pass = $form.find("input[name='password']").val(),
        url = $form.attr("action");

    $.ajax({
      type:"POST",
      url:url,
      data:{"form":{ "username": user,
                   "password": pass }},
      dataType:"json",
      success: function(data){
        $("#userOutput").empty()
        $("#userPass").empty()
        $("#userOutput").append(data["results:"].username);
        $("#userPass").append(data["results:"].password);
      }
    })
  });
});
