
$(document).ready(function() {
  var api_key = "563492ad6f91700001000001fbe334dd2c6a4de480bc086a7e02a450";
  var videoUrl;
  var videoFrame = document.getElementById('backVid');
  $(form1).submit(function (event) {
    event.preventDefault();
    videosearch();
  })

function videosearch() {
  $.ajax({
      method:'GET',
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", api_key);
      },

      url: "https://api.pexels.com/videos/search?query="+$("#search").val()+"&orientation=landscape&size=large&per_page=10",
      success: function (data) {
        console.log(data);
        var randomNum = Math.floor((Math.random() * 8));
        videoUrl = data.videos[randomNum].video_files[0].link;
        $(vid).attr("src", videoUrl);
        $("h1").text($("#search").val());
        videoFrame.load();
        videoFrame.play();
      }

    })

}
})
