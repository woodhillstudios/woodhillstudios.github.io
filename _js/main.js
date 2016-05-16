var feed = new Instafeed({
    get: 'user',
    userId: 253231379,
    accessToken: '1743055682.1677ed0.944aad40b212424aa69a93dcf5c50520',
    resolution: 'low_resolution',
    template: '<div class="col-xs-12 col-md-4 instafeed__item"><a class="instafeed__image" href="{{link}}"><img src="{{image}}" /><div class="instafeed__item__meta"><span class="instafeed__item__likes"><i class="fa fa-heart" aria-hidden="true"></i>{{likes}}</span><span class="instafeed__item__comments"><i class="fa fa-comment" aria-hidden="true"></i>{{comments}}</span></div></a></div>'
});
feed.run();
