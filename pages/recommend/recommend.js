Page({
  data: {
    count:0,
    movieInfo:[]
  },
  onLoad: function (options) {
    this.getMovie();
  },
  onReachBottom: function (scrollTop) {
    this.getMovie();
  },
  onPullDownRefresh:function(){
    this.setData({
      count:0,
      movieInfo: []
    });
    this.getMovie();
  },
  getFormat(arr,key){
    var str = [];
    if(key){
      for (var i = 0; i < arr.length; i++) {
        str.push(arr[i][key])
      }
    }else{
      str = arr;
    }    
    return str.join('/')
  },
  getMovie(){
    var count = this.data.count;
    var movieInfo = this.data.movieInfo;
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      data: {
        start: count,
      },
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {       
        console.log(res) ;
        count += res.data.count;
        that.setData({count:count});
        var subjects = res.data.subjects;
        for (var i = 0; i < subjects.length;i++){
          subjects[i].castsStr = that.getFormat(subjects[i].casts,"name");
          subjects[i].genresStr = that.getFormat(subjects[i].genres);
          subjects[i].directorsStr = that.getFormat(subjects[i].directors, "name");
       }
        console.log(subjects);
        movieInfo = movieInfo.concat(subjects);
        that.setData({
          movieInfo: movieInfo,
          count: count 
        });
      }
    })
  },
})