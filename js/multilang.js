
$(document).ready(function(){
    var selector = '#translate';
    $(selector).on('click', function(e){
      e.preventDefault();
      startLang( $(this) );
    });
    var startLang = function(el){
      var el = $(el);
      var text = el.attr('data-text');
      var file = el.attr('data-file');
      file = file.split(',');
      text = text.split(',');
      var index = el.attr('data-index');
      if(index >= file.length){
        index = 0;
      }
      changeName(el, text[index]);
      changeIndex(el, index);
      loadLang(file[index]);
      $('html').attr('lang', file[index]);
    };
  
    var changeName = function(el, name){
      $(el).html( name );
    };
  
    var changeIndex = function(el, index){
      $(el).attr('data-index', ++index);
    };
  
    var loadLang = function(lang){
      var processLang = function(data){
        //Separa el archivo en salto de linea
        var arr = data.split('\n');
        for(var i in arr){
          if( lineValid(arr[i]) ){
            //Separar la key del value con =>
            var obj = arr[i].split('=>');
            assignText(obj[0], obj[1]);
          }
        }
      };
      //Funcion para pisar el texto
      var assignText = function(key, value){
        //Busca data-lang + lo que esta en la izquierda =>
        $('[data-lang="'+key+'"]').each(function(){
          var attr = $(this).attr('data-destine');
          if(typeof attr !== 'undefined'){
            $(this).attr(attr, value);
          }else{
            //Esta pisando el texto "value"
            $(this).html(value);
          }
        });
      };
      var lineValid = function(line){
        return (line.trim().length > 0);
      };
      $('.loading-lang').addClass('show');
      $.ajax({
        //Encuentra el archivo
        url: 'lang/'+lang+'.txt',
        error:function(){
          alert('No se cargó traducción');
        },
        success: function(data){
          $('.loading-lang').removeClass('show');
          processLang(data);
        }
      });
    }; 
    /*anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 50 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: [1,1],
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });*/
});
  