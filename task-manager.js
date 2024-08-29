$(document).ready(function(){
    $('#addtask').click(function(){
       var task=$('#taskinput').val();
       if(task){
        $('#tasklist').append('<li><span class="tasktext">'+task+'</span> <span class="editbutton">Edit</span> <span class="removebutton">Remove</span></li>')
        $('#taskinput').val('');
       }
    })
    $('#taskinput').focus(function(){
        $(this).addClass('highlight')
    })
    $('#taskinput').blur(function(){
        $(this).removeClass('highlight')
    })
    $('#tasklist').on('click','.tasktext',function(){
        $(this).toggleClass('completed')
    })
    $('#tasklist').on('click','.removebutton',function(){
        $(this).parent().remove();
    })
    $('#tasklist').on('click','.editbutton',function(){
        var $tasktext= $(this).siblings('.tasktext')
        var currenttext=$tasktext.text();
        var newtext=prompt('Edit Task:',currenttext)
        if(newtext){
            $tasktext.text(newtext);
        }
    })
    $('#tasklist').on('mouseenter','.tasktext',function(){
        $(this).css('cursor','pointer')
    })
})