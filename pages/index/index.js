//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    BmapAK:'ej1M0rW7j0zhHIVDjaHBy0EaPxB3vS21',
    DoubanAPI:'https://api.douban.com',
    imgUrls: [
      '../../assets/img/001.jpg',
      '../../assets/img/002.jpg',
      '../../assets/img/003.jpg',
    ]   
  },
  onLoad: function (options) {  
    var that = this;
    wx.getLocation({
      success: function(res) {
        console.log(res);
        var latitude = res.latitude,
            longitude = res.longitude;
        // var url = 'https://api.map.baidu.com/geocoder/v2/?location=' + latitude + ', ' + longitude + ' &output=json&ak='+that.data.BmapAK;
        var url = 'https://api.map.baidu.com/geocoder/v2/?location=' +'40.51' + ', ' + '111.46'+ ' &output=json&ak=' + that.data.BmapAK;
        wx.request({
          url: url,
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            // success    
            console.log(res);
            console.log(that);
            var city = res.data.result.addressComponent.city;
            city = city.substring(0, city.length-1);
            console.log(city);           
            var url = "https://api.douban.com/v2/movie/in_theaters?city=" +city;
            console.log(url)
            wx.request({
              url: url,
              data: {},
              header: {
                'Content-Type': 'json'
              },
              success: function (res) {
                // success    
                console.log(res);
                that.setData({

                })
              }
            })    
          }          
        })      
      },
    })
  },
  onReady: function () {
    console.log('ready')
  },
  onShow: function () {
    // Do something when page show.
    console.log('show')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('hide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('unload')  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log('PullDownRefresh')
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('ReachBottom')
  },
  onPageScroll: function () {
    // Do something when page scroll
    console.log('PageScroll')
  },
 
})
