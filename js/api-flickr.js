var apiSetup = {
	"url": "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=b461e83dc9483ede0dfb705a0bee592f&user_id=135437412%40N05&format=json&nojsoncallback=1",
	"method": "GET",
    "async": true,
    "crossDomain": true,
};

$.ajax(apiSetup).done(function (data) {
    for(i=0; i<=5; i++){
        var farm = data.photos.photo[i].farm;
        var server = data.photos.photo[i].server;
        var id = data.photos.photo[i].id;
        var secret = data.photos.photo[i].secret;
        var divPhotos = document.querySelector('#flickr-photos');
        var photo = '<div class="col-md-2 col-xs-12">'+
                        '<img src="https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'.jpg" alt="Foto '+i+' da galeria">' +
                    '</div>';
        
        divPhotos.innerHTML += photo;
    };
});