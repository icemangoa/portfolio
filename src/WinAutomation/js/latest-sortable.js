$( document ).ready(function() {
    
    setTimeout(function() {
      $('.toast').toast('show');
    }, 1000);
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#addActions'). modal('show');
  }
);

$('.card').on('shown.bs.collapse', function () {
  $(this).find('.chevronRotate').first().addClass('fa-rotate-180');
});

$('.card').on('hidden.bs.collapse', function () {
  $(this).find('.chevronRotate').first().removeClass('fa-rotate-180');
});

$(document).on('click', '.plusSign', function() {
  $('.prependPoint').removeClass('bg-transparent').addClass('bg-white');
  $('#newLabel, #newLabel input').fadeIn('fast', function() {
    $("#newLabel input").focus();
  });

});

$(document).on('keyup keydown', '#newLabel', function(e) {
    var key = e.which;
    if (key == 13) {
        newLabel(e);
    }
});

function newLabel(e) {
  e.preventDefault();
  var variableName = $('#newLabel input').val();
  $('#newLabel').closest('.prependPoint').before('\n\
    <li class="horiMenu nav-item list-group-item border border-left-0 border-bottom-0 border-top-0 bg-transparent py-0 px-0">\n\
      <a class="nav-link d-inline-block px-lg-5 py-3 smaller-3 rounded-0 text-light semi-bold" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">' + variableName + ' \n\
      </a> \n\
      <span class="horiMenuDetails position-absolute d-inline-block" style="margin-left: -18%; padding-top: 11px;"> \n\
        <div class="text-center border border-light border-right-0 border-top-0 border-bottom-0"> \n\
          <button type="button" class="border-0 bg-transparent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background-color: #3888e9;"> \n\
            <span class="d-block"> \n\
              <i class="fas fa-ellipsis-v smaller-4 text-primary"> \n\
              </i> \n\
            </span> \n\
            <span class="sr-only"> \n\
            </span> \n\
          </button> \n\
          <div class="dropdown-menu border-0 shadow rounded-0"> \n\
            <a class="dropdown-item smaller-3 text-secondary" href="#"> \n\
              <i class="far fa-edit mr-2"> \n\
              </i> RENAME \n\
            </a> \n\
            <a class="dropdown-item smaller-3 text-secondary" href="#deleteConfimationModal" data-toggle="modal"> \n\
              <i class="far fa-trash-alt mr-2"> \n\
              </i> DELETE \n\
            </a> \n\
          </div> \n\
        </div> \n\
      </span> \n\
    </li>');

  $('#newLabel input').val('').hide();

  $('.plusSignContainer').scrollTo({top:'+=0px',left:'+=2000px'}, 777);

  $('.prependPoint').removeClass('bg-white').addClass('bg-transparent');

  $('.plusSignContainer .horiMenu').last().find('a:first-child').click();

  /*$('#newLabel').closest('.prependPoint').prepend('\n\
    <a href="javascript:void(0);" class="d-block pl-4 rounded-0 text-light plusSign">\n\
      <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\
          <g id="080419---UPDATED" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\
              <g id="Left-&amp;-Right-Panes" transform="translate(-980.000000, -113.000000)">\n\
                  <g id="FUNCTIONS" transform="translate(-41.000000, 100.000000)">\n\
                      <g id="TAB-BAR-/-Functions" transform="translate(251.000000, 1.000000)">\n\
                          <g id="TAB-Default">\n\
                              <g id="Function-1-Btn" transform="translate(151.000000, 0.000000)">\n\
                                  <g id="State-2-ON" transform="translate(110.000000, 12.000000)">\n\
                                      <g id="Add-New-Function" transform="translate(509.000000, 0.000000)">\n\
                                          <rect id="Rectangle" fill="#AAB6C0" fill-rule="nonzero" x="0" y="0" width="25" height="25" rx="3"></rect>\n\
                                          <text id="+" font-family="Exo-Bold, Exo" font-size="18" font-weight="bold" fill="#FFFFFF">\n\
                                              <tspan x="7" y="19">+</tspan>\n\
                                          </text>\n\
                                      </g>\n\
                                  </g>\n\
                              </g>\n\
                          </g>\n\
                      </g>\n\
                  </g>\n\
              </g>\n\
          </g>\n\
      </svg>\n\
    </a>');*/
};

$(document).on('keyup keydown', 'li.nav-item', function(e) {
    var key = e.which;
    if (key == 13) {
        $(this).find('a').tab('show');
    }
});

$(document).on('blur', '#newLabel input', function() {
  $(this).fadeOut('fast');
  $('.prependPoint').removeClass('bg-white').addClass('bg-transparent');
});

$(document).on('click', '.scrollLeft', function() {
  $('.plusSignContainer').scrollTo({top:'+=0px',left:'+=200px'}, 300);
});

$(document).on('click', '.scrollRight', function() {
  $('.plusSignContainer').scrollTo({top:'+=0px',left:'-=200px'}, 300);
});

$('#sortable').on( 'DOMMouseScroll mousewheel', function ( event ) {
  if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //scroll down
    $('.plusSignContainer').scrollTo({top:'+=0px',left:'+=200px'}, 150);
  } else {
    //scroll up
    $('.plusSignContainer').scrollTo({top:'+=0px',left:'-=200px'}, 150);
  }
  //prevent page fom scrolling
  return false;
  event.preventDefault();
});

/*$('.horiMenuDetails > div').on('show.bs.dropdown', function () {
  $('.plusSignContainer').css('overflow-x','visible').css('overflow-y','visible');
});

$('.horiMenuDetails > div').on('hidden.bs.dropdown', function () {
  $('.plusSignContainer').css('overflow-x','hidden').css('overflow-y','hidden');
});*/

function removeLeftPanel() {
  $('.leftPanel').addClass('d-none');
  if ($('.rightPanel').hasClass('d-none')) {
      $('.middlePanel').removeClass('col-10').addClass('col-12');
  } else {
      $('.middlePanel').removeClass('col-7').addClass('col-9');
  } 
}

function removeRightPanel() {
  $('.rightPanel').addClass('d-none');
  if ($('.leftPanel').hasClass('d-none')) {
    $('.middlePanel').removeClass('col-9').addClass('col-12');
  } else {
    $('.middlePanel').removeClass('col-7').addClass('col-10');
  }
};

function showRightPanel() {
  if ( $('.rightPanel').hasClass('d-none') && $('.leftPanel').hasClass('d-none') ) {
      $('.rightPanel').removeClass('d-none');
      $('.middlePanel').removeClass('col-7 col-8 col-9 col-10 col-11 col-12').addClass('col-9');
  } else {
    $('.rightPanel').removeClass('d-none');
    $('.middlePanel').removeClass('col-7 col-8 col-9 col-10 col-11 col-12').addClass('col-7');
  } 
};

function showLeftPanel() {
  if ( $('.leftPanel').hasClass('d-none') && $('.rightPanel').hasClass('d-none') ) {
      $('.leftPanel').removeClass('d-none');
      $('.middlePanel').removeClass('col-7 col-8 col-9 col-10 col-11 col-12').addClass('col-10');
  } else {
    $('.leftPanel').removeClass('d-none');
    $('.middlePanel').removeClass('col-7 col-8 col-9 col-10 col-11 col-12').addClass('col-7');
  } 
};

$(function() {
  $( "#sortable" ).sortable({
    axis: "x",
    helper: "clone",
    placeholder: "ui-state-highlight",
    forcePlaceholderSize: true
  });
  $( "#sortable" ).disableSelection();
});


$(function() {

  $(".draggable").draggable({
    revert: "invalid",
    revertDuration: 200,
    zIndex: 100,
    appendTo: 'body',
    connectToSortable: ".droppable",
    helper: function() {
      var helper = $(this).clone();
      helper.css({'width': 'auto', 'height': 'auto'});
      helper.removeClass('col-6 col-md-3 mb-4 draggable ui-draggable ui-draggable-handle'); 
      helper.addClass("col-md-12 pointer");        
      return helper;
    },
    start: function( event, ui ) {
      console.log(this);
      $('#addActions').modal('toggle');

      if ($(this).closest('.row').find($('.beGoneWannaBe:visible'))) {
        $('.beGoneWannaBe').fadeOut('fast');
      };
    },
    stop: function( event, ui ) {
      $(this).closest('.row').addClass('boom');
      setTimeout(function() {
        //$('#addActions').modal('toggle');
      }, 300);
      $('#addActions').css('opacity', '1');
      
      if ($(this).closest('.row').find(!$('.sortable .pointer').length)) {
        $('.beGoneWannaBe').fadeIn('fast');
      }

    }
  });


  $(".sortable").sortable({
    axis: "y",
    classes: {
      "ui-droppable-active": "border"
    }
  });


  $( ".sortable" ).disableSelection();


  $(".droppable").droppable({
    accept: ".draggable",
    classes: {
      "ui-droppable-active": "droppableBorder"
    },
    drop: function( event, ui ) {
      $(this).find('.row.first').append(ui.draggable.clone(true));
      if ($('.beGoneWannaBe:visible')) {
        $('.beGoneWannaBe').fadeOut('fast');
      }
      $(".droppable .draggable").addClass("col-12 pointer");
      $(".droppable .draggable").removeClass('col-6 col-md-3 mb-4 draggable ui-draggable ui-draggable-handle'); 
      $(".droppable .pt-3").removeClass("shadowHover movecursor col-12 bg-light");
      $(".droppable .pt-3").addClass("col-5");
      $(".droppable .pt-3").removeAttr('tabindex');
      $('#addActions').css('opacity', '1');
    }
  });

});




$(document).on('mousedown', '.draggable', function() {
  $('#addActions').css('opacity', '.3');
});

$(document).on('mouseup', '.draggable', function() {
  $('#addActions').css('opacity', '1');
});






