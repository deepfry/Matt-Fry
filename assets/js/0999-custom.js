$("#contactFormCustom").submit(function(e){

if (validateFields($("#contactFormCustom")) !== 1) return
	else e.preventDefault();
});
$('input, textarea').keyup(function(){
	$(this).removeClass('error')
})

$(document).ready(function(){
	$('#share-icons .facebook-share').attr('href', "https://www.facebook.com/dialog/share?app_id=158575354726891&display=popup&href="+window.location.href+"&quote="+encodeURIComponent($('#page-description').attr('content')))
	$('#share-icons .twitter-share').attr('href', "http://twitter.com/share?url="+window.location.href+"&hashtags=mattfry,mattfryarts")
})
