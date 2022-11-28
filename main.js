$('button').on('click',function(e){
    e.preventDefault();
    $('ul').append(`<li>${$('#task-input').val()}</li>`)
})

$('ul').on('click',function(e){
    $(e.target).css("text-decoration","line-through")
})
