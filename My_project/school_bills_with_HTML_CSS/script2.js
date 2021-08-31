 //create form for new row in list
$("form").submit(function (e) {
    e.preventDefault();
    var Course_Title = $("input[name='Course_Title']").val();
    var Name_Student = $("input[name='Name_Student']").val();
    var Course_Language = $("input[name='Course_Language']").val();
    
    var date_of_registration = $("input[name='date_of_registration']").val();
    
     //save new data
    $(".data-table tbody").append(
      "<tr data-Course_Title='" +
        Course_Title +
        "' data-Name_Student='" +
        Name_Student +
        "' data-Course_Language='" +
        Course_Language +
        "'data-date_of_registration='" +
        date_of_registration +
        
        "'><td>" +
        Course_Title +
        "</td><td>" +
        Name_Student +
        "</td><td>" +
        Course_Language +
        "</td><td>" +
        date_of_registration +
       
        "</td><td><button class='btn btn-danger btn-lg btn-delete mr-2' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></td></tr>"
    );

    $("input[name='']").val("");
  });

  $("body").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
  });
    //append new data in list
  $("body").on("click", ".btn-edit", function () {
    var Course_Title = $(this).parents("tr").attr("data-Course_Title");
    var Course_Language = $(this).parents("tr").attr("data-Course_Language");
    var Name_Student = $(this).parents("tr").attr("data-Name_Student");
    var date_of_registration = $(this).parents("tr").attr("data-date_of_registration");
    
     //add new data in html
    $(this)
      .parents("tr")
      .find("td:eq(0)")
      .html("<input name='edit_text' value='" + Course_Title + "'>");
      $(this)
      .parents("tr")
      .find("td:eq(1)")
      .html("<input name='Name_Student' value='" + Name_Student + "'>");
    $(this)
      .parents("tr")
      .find("td:eq(2)")
      .html("<input name='Course_Language' value='" + Course_Language + "'>");
    
    $(this)
      .parents("tr")
      .find("td:eq(3)")
      .html("<input name='date_of_registration' value='" + date_of_registration + "'>");
    

    $(this)
      .parents("tr")
      .find("td:eq(4)")
      .prepend(
        "<button type='button' class='btn btn-info btn-lg btn-update mr-2'>Update</button>"
      );
    $(this).hide();
  });
    //update a row in list
  $("body").on("click", ".btn-update", function () {
    var Course_Title = $(this).parents("tr").find("input[name='edit_text']").val();
    var Course_Language = $(this).parents("tr").find("input[name='Course_Language']").val();
      
    var Name_Student = $(this).parents("tr").find("input[name='Name_Student']").val();  
    var date_of_registration = $(this).parents("tr").find("input[name='date_of_registration']").val();
      
    
     //create a new row in list
    $(this).parents("tr").find("td:eq(0)").text(Course_Title);
    $(this).parents("tr").find("td:eq(1)").text(Name_Student);
    $(this).parents("tr").find("td:eq(2)").text(Course_Language);
   
    $(this).parents("tr").find("td:eq(3)").text(date_of_registration);
    

    $(this).parents("tr").attr("data-Course_Title", Course_Title);
    $(this).parents("tr").attr("data-Name_Student", Name_Student);
    $(this).parents("tr").attr("data-Course_Language", Course_Language);
    
    $(this).parents("tr").attr("data-date_of_registration", date_of_registration);
   

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
  });
    
  //appear form for new addition
  const login = document.getElementById("Login");
  const loginForm = document.getElementById("myForm");

  login.addEventListener('click', () =>{
      if (loginForm.style.display === 'none'){
          loginForm.style.display = "inline";
      }else {
          loginForm.style.display = 'none';
      }
  });