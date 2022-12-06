$(document).ready(function(){
  // open and close aside
  $('#arrow-aside').click(function(){
    $('aside').toggleClass('aside-close')
    $('aside p, aside h3').toggle()
    $('.content-item').toggleClass('content-item-center')
    $('.container-aside').toggleClass('container-aside-center')
  })

  // Slide down add new account
  $('.accounts-container').mouseenter(function(){
    $('.account:last-child').slideDown()
    $('.account:last-child').css('background-color', '#fff')
  });

  $('.accounts-container').mouseleave(function(){
    $('.account:last-child').slideUp()
  });

  $("#bttn-settings").click(function(){
    if($('aside').width() > 100){
    $(".list-settings").slideToggle("fast");
    }
  })

  // Slide up create new groups and category
  $($('#new-groups').parent()).mouseenter(function(){
    if($('aside').width() > 100){
    $('#new-groups').slideDown("500");
    }
  })

  $($('#new-groups').parent()).mouseleave(function(){
    if($('aside').width() > 100){
    $('#new-groups').slideUp("500");
    }
  })

  $($('#new-category').parent()).mouseenter(function(){
    if($('aside').width() > 100){
    $('#new-category').slideDown("500");
    }
  })

  $($('#new-category').parent()).mouseleave(function(){
    if($('aside').width() > 100){
    $('#new-category').slideUp("500");
    }
  })

  //open/close form
  $('#add-user').click(function(){
    $('form').slideToggle('slow')
  })

  // validate form submission
  $('form').validate({
    errorClass: 'invalid',
    rules:{
      userName: {
          required:true,
          minlength:3,
        },
      userEmail: {
          required:true,
        },
      userAddress: {
          required:true,
        },
      userTel:{
          required:true,
        },
      userCity: {
          required:true,
        },
      userState: {
          required:true,
        },
      userDate: {
          required:true,
          minlength: 10
        },
      },
      messages:{
        userName:{
          required: "Please enter your name",
          minlength: "Name must be greater than or equal to {0}."
        },
        userDate: {
          minlength: "Digite uma data valida"
        },
      },
  })

  // mask input
  $('#tel-form').mask('(00) 0 0000-0000',{placeholder: '(00) 0 0000-0000'})
  $('#state-form').mask('AA', {placeholder: "RS"})
  $('#date-form').mask("00/00/0000", {placeholder: "__/__/____"});

  //Add new user
  $('#bttn-submit').click(function(e){
    e.preventDefault()

    if($('form').valid()){
      let id = Math.floor(Math.random() * 100)
      let newTr = `
      <tr>
        <td class="tbody-checkbox">
          <label for="user-${id}">
            <input type="checkbox" name="selectUser" id="user-${id}" />
          </label>
        </td>
        <td class="tbody-name">${$('#name-form').val()}</td>
        <td class="tbody-email">${$('#email-form').val()}</td>
        <td class="tbody-address">${$('#address-form').val()}</td>
        <td class="tbody-city">${$('#city-form').val()}</td>
        <td class="tbody-state">${$('#state-form').val()}</td>
        <td class="tbody-date">${$('#date-form').val()}</td>
        <td class="tbody-phone">${$('#tel-form').val() }</td>
        <td class="tbody-id">${id}</td>
      </tr>
      `
      $('#name-form').val("")
      $('#email-form').val("")
      $('#address-form').val("")
      $('#city-form').val("")
      $('#state-form').val("")
      $('#date-form').val("")
      $('#tel-form').val("")

      $('tbody').append(newTr)
    }
  })

  $('#remove-user').click(function(){
    $("input:checked").parents('tr').remove()
  })

  $('#new-groups').click(function(){
    var list = $('#new-groups ul')
    var newItem = `
    <li class="item-nav">
      <div class="content-item">
        <p>Group ${$('#new-groups ul').children().length}</p>
      </div>
    </li>
    `
    list.prepend(newItem)
  })

  $('#new-category').click(function(){
    var list = $('#new-category ul')
    var newItem = `
    <li class="item-nav">
      <div class="content-item">
        <p>Category ${$('#new-category ul').children().length}</p>
      </div>
    </li>
    `
    list.prepend(newItem)
  })
})