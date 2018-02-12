previous_click_id = 0;

function showPassage(id){
  // alert(id);
     $("."+id+"").scrollintoview({ duration: "slow"});
}

function selectParentSpan(childel){
  parel = childel;
   while(parel.parentNode.tagName.toLowerCase() == 'span'){
    parel = parel.parentNode;
  }
  return parel;
}

function changeBackgroundColor(classname, color){
var els = document.querySelectorAll("."+classname);
if(document.getElementsByClassName(classname)){
  var els = document.getElementsByClassName(classname);
    Array.prototype.forEach.call(els, function(el) {
      el.style.backgroundColor=color;
      var spanels = el.getElementsByTagName("span");
        Array.prototype.forEach.call(spanels, function(spanel) {
          spanel.style.backgroundColor=color;
     });
  });
  }
}

function showComment(new_id, old_id){
    document.getElementById('comment-intro').style.display="none";
    var oldSpan = document.getElementById('comment-'+old_id);
    oldSpan.style.display = "none";
    var mySpan = document.getElementById('comment-'+new_id);
    mySpan.style.display = "";    
    $( "#effect" ).effect( 'highlight', {}, 3000);
}


$(window).load(function(){
(function () {

    var mySpan = document.getElementById('comment-intro');
    mySpan.style.display = "";    


    var previous;
    var current;

    $("select").focus(function () {
    }).change(function() {

      current = this.value;
  changeBackgroundColor('d'+previous_click_id, 'transparent');
  changeBackgroundColor('o'+previous_click_id, 'transparent');
  changeBackgroundColor('d'+current, 'gold');
  changeBackgroundColor('o'+current, 'gold');

    showPassage("d"+current);
    showPassage("o"+current);
    showComment(current, previous_click_id)
    previous_click_id = this.value;
  });


})();
});


var highlights = document.getElementsByClassName("cross");
for (var i = highlights.length - 1; i >= 0; i--) {
    highlights[i].addEventListener('click', function(evt) {
    var current = evt.currentTarget.id;
    changeBackgroundColor('d'+previous_click_id, 'transparent');
    changeBackgroundColor('o'+previous_click_id, 'transparent');
    changeBackgroundColor('d'+current, 'gold');
    changeBackgroundColor('o'+current, 'gold');
    showPassage("d"+current);
    showPassage("o"+current);
    showComment(current, previous_click_id)
    previous_click_id = current;
    evt.preventDefault();
  }, false);
};


