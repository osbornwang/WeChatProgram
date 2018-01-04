Page({
  data: {  
    tempObj: {
      "rating": {
        "max": 10,
        "average": 9.6,
        "stars": "50",
        "min": 0
      },
      "reviews_count": 5726,
      "wish_count": 96066,
      "douban_site": "",
      "year": "1994",
      "images": {
        "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
        "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp",
        "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp"
      },
      "alt": "https://movie.douban.com/subject/1292052/",
      "id": "1292052",
      "mobile_url": "https://movie.douban.com/subject/1292052/mobile",
      "title": "肖申克的救赎",
      "do_count": null,
      "share_url": "https://m.douban.com/movie/subject/1292052",
      "seasons_count": null,
      "schedule_url": "",
      "episodes_count": null,
      "countries": [
        "美国"
      ],
      "genres": [
        "犯罪",
        "剧情"
      ],
      "collect_count": 1186257,
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1054521/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.webp"
          },
          "name": "蒂姆·罗宾斯",
          "id": "1054521"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1054534/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.webp"
          },
          "name": "摩根·弗里曼",
          "id": "1054534"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1041179/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.webp"
          },
          "name": "鲍勃·冈顿",
          "id": "1041179"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1000095/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7827.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7827.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7827.webp"
          },
          "name": "威廉姆·赛德勒",
          "id": "1000095"
        }
      ],
      "current_season": null,
      "original_title": "The Shawshank Redemption",
      "summary": "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……\n本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。©豆瓣",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1047973/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.webp"
          },
          "name": "弗兰克·德拉邦特",
          "id": "1047973"
        }
      ],
      "comments_count": 220041,
      "ratings_count": 939378,
      "aka": [
        "月黑高飞(港)",
        "刺激1995(台)",
        "地狱诺言",
        "铁窗岁月",
        "消香克的救赎"
      ]
    },
    movieInfo:{}
  },
  onLoad: function (options) {
    console.log(options);
    var movie_id = options.movie_id;
    var that = this;
    this.setData({
      tempStr1: this.getFormat(that.data.tempObj.casts,'name'),
      tempStr2: this.getFormat(this.data.tempObj.genres),
    });
    wx.request({
      url: "https://api.douban.com/v2/movie/subject/" + movie_id ,
      data: {},
      header: {
        'Content-Type': 'json'
      },
      success: function (res) { 
        res.data.castsStr = that.getFormat(res.data.casts,'name');
        res.data.genresStr = that.getFormat(res.data.genres);
        res.data.directorsStr = that.getFormat(res.data.directors, 'name');
        console.log(res);
        that.setData({
          movieInfo:res.data
        })
      }
    })    

  }, 
  getFormat(arr, key) {
    var str = [];
    if (key) {
      for (var i = 0; i < arr.length; i++) {
        str.push(arr[i][key])
      }
    } else {
      str = arr;
    }
    return str.join('/')
  },
})
