$('#timer').countdown('2024/03/01').on('update.countdown', function(event) {

    var $this = $(this).html(event.strftime(''
  
      + '<span>%-w</span> недель'
  
      + '<span>%-d</span> дней'
  
      ));
  
  });


