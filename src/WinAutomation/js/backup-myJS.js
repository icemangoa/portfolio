


$(document).ready(function() {

  setTimeout(function() {
    $('.toast').toast('show').delay(3000).fadeOut('slow');
  }, 1000);
  
  $('[data-toggle="tooltip"]').tooltip();

  removeRightPanel();
  
  //$('#editFunction'). modal('show');

  //winautomation
  if ($('.logos .owl-carousel').length) {
      $('.logos .owl-carousel').owlCarousel({
          loop:true,
          margin:70,
          dots: false,
          center:true,
          autoplay: true,
          autoWidth:true,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
                  nav:true,
                  loop:true
              },
              600:{
                  items:3,
                  nav:false,
                  loop:true
              },
              1000:{
                  items:4,
                  nav:false,
                  loop:true
              }
          }
      })
  };


  if ($('.testimonials .owl-carousel').length) {
      $('.testimonials .owl-carousel').owlCarousel({
        margin:0,
        loop:true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:false
            }
          }
    });
  }


});

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

$('#sortableTopFunctions').on( 'DOMMouseScroll mousewheel', function ( event ) {
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

$('.horiMenuDetails > div').on('show.bs.dropdown', function () {
  $('.plusSignContainer').css('overflow-x','visible').css('overflow-y','visible');
});

$('.horiMenuDetails > div').on('hidden.bs.dropdown', function () {
  $('.plusSignContainer').css('overflow-x','hidden').css('overflow-y','hidden');
});

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
  $( "#sortableTopFunctions" ).sortable({
    axis: "x",
    //helper: "clone",
    placeholder: "ui-state-highlight"
  });
  $( "#sortable" ).disableSelection();
});

$(function() {

    $(".draggable").draggable({
      revert: function(is_valid_drop) {     
        if(!is_valid_drop){
          console.log("revert triggered");
          if (!$('.sortable .draggable').length){
            $('.beGoneWannaBe').fadeIn('fast');
            $('.droppableBorder').removeClass('droppableBorder');
          }
          $('.droppableBorder').removeClass('droppableBorder');
          return true;
        }
      },
      revertDuration: 200,
      zIndex: 100,
      connectToSortable: ".sortable",
      helper: function() {
      var widthYo = $(this).width(),
          heightYo = $(this).height(),
          helper = $(this).clone();
          helper.css('width', widthYo).css('height', heightYo);
          helper.removeClass('col-6 col-md-3 mb-4 draggable ui-draggable ui-draggable-handle').addClass("px-0 pointer sortiable");
          helper.find('.pt-3').removeClass("shadowHover movecursor col-12").addClass("col-12");
          return helper;
      },
      start: function( event, ui ) {
        $('#addActions').modal('toggle');
        if ($(this).closest('.row').find($('.beGoneWannaBe:visible'))) {
          $('.beGoneWannaBe').fadeOut('fast');
        };
        $('.sortable').addClass('droppableBorder');
      },
      stop: function( event, ui ) {
        $('#addActions').css('opacity', '1');
      }
    });


    $(".sortable").sortable({
      axis: "y",
      items: ".sortiable",
      over: function( event, ui ) {
        //nothing here!
      },
      beforeStop: function (event, ui) { 
          ui.item.css('width', '').css('height', '');
          ui.item.find('.pt-3').removeClass("shadowHover movecursor bg-light col-12").addClass("col-12");
          ui.item.find('.pt-3').find('.col-3').removeClass('col-3').addClass('col-1');
          ui.item.find('.pt-3').find('.col-9').removeClass('col-9').addClass('col-11');
      },
      receive: function( event, ui ) {
        $('#editFunction').modal('show');
        $('.droppableBorder').removeClass('droppableBorder');
      }
    });

});

$(document).on('mousedown', '.draggable', function() {
  $('#addActions').css('opacity', '.3');
  var position = $(this).offset();
  var widthYo = $(this).width();
  $(this).clone().prependTo('body').addClass('toBeGone  position-absolute').css('z-index', '99999999').removeClass('col-6 col-md-3').css('width', widthYo).css('top', position.top).css('left', position.left+15);
});

$(document).on('mouseup', '.draggable', function() {
  $('#addActions').css('opacity', '1');
  $('.toBeGone').fadeOut().remove();
});

$(document).on('mousemove', '.draggable', function() {
  $('.toBeGone').fadeOut().remove();
});

$('#customSwitch1').change( function() {
  if ($(this).prop('checked')) {
    console.log('checked yo');
    $('#checkedStatus').text('ENABLED');
  } else {
    console.log('not checked yo');
    $('#checkedStatus').text('DISABLED');
  }
});





