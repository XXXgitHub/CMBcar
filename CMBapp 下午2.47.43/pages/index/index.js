Page({
  data: {
    movies: [
      { url: '../../resources/1_FGO.jpg', clicktap:'linkone'},
      { url: '../../resources/2_tianmao.jpg', clicktap:'linktwo'},
      { url: '../../resources/3_tengxun.jpg', clicktap:'linkthr'},
      { url: '../../resources/4_zhaopaihui.jpg', clicktap:'goHash' }
    ],
    viewList:[
      {
        title:'YOUNG卡（青年版）',
        apply:'../../resources/apply.png',
        bankImage:'../../resources/bank01.png',
        gifImage:'../../resources/gif01.png',
        txtOne:'1. 每月首笔取现免手续费',
        txtTwo: '2. 生日月尊享双倍积分',
        linkurl: '/pages/link/linkYoung/linkYoung'
      },
      {
        title: '银联单币信用卡',
        apply: '../../resources/apply.png',
        bankImage: '../../resources/bank02.png',
        gifImage: '../../resources/gif02.png',
        txtOne: '1. 刷卡赢1000积分 ',
        txtTwo: '2. 积分永久有效',
        linkurl: '/pages/link/linkcurrency/linkcurrency'
      },
      {
        title: 'HelloKitty粉丝信用卡',
        apply: '../../resources/apply.png',
        bankImage: '../../resources/bank03.png',
        gifImage: '../../resources/gif03.png',
        txtOne: '1. 刷卡达标赢礼盒',
        txtTwo: '2. 多款精美卡面设计',
        linkurl: '/pages/link/linkHelloKitty/linkHelloKitty'
      },
      {
        title: '火影忍者信用卡',
        apply: '../../resources/apply.png',
        bankImage: '../../resources/bank04.png',
        gifImage: '../../resources/gif04.png',
        txtOne: '1. 刷卡达标赢美旅双肩包 ',
        txtTwo: '2. 火影忍者粉丝专属信用卡',
        linkurl: '/pages/link/linkNaruto/linkNaruto'
      },
      {
        title: '王者荣耀联名卡',
        apply: '../../resources/apply.png',
        bankImage: '../../resources/bank05.png',
        gifImage: '../../resources/gif05.png',
        txtOne: '1. 打比赛 赢积分',
        txtTwo: '2. 刷卡达标赠新秀丽双肩包',
        linkurl: '/pages/link/linkKing/linkKing'
      },
      {
        title: 'NBA联名勇士球队卡',
        apply: '../../resources/apply.png',
        bankImage: '../../resources/bank06.png',
        gifImage: '../../resources/gif06.png',
        txtOne: '1. 刷卡赢美国旅行者背包',
        txtTwo: '2. 积分永久有效',
        linkurl: '/pages/link/linkNBA/linkNBA'
      }
    ]

},
  onShareAppMessage: function () {
    return {
      title: '招商银行信用卡申请',
      desc: '信用卡申请，这里有你需要的！',
      path: 'pages/index/index'
    }
  },
  linkone:function(){
    wx.navigateTo({
      url: '/pages/link/linkone/linkone',
    })
  },
  linktwo: function () {
    wx.navigateTo({
      url: '/pages/link/linktwo/linktwo',
    })
  },
  linkthr: function () {
    wx.navigateTo({
      url: '/pages/link/linkthr/linkthr',
    })
  },
  goHash:function(){
    wx.navigateToMiniProgram({
      appId: 'wx651ac999a21208a3',
      path: '',
      envVersion: 'release',
      success(res) {
       console.log('ok')
      }
    })
  },

  onPullDownRefresh: function () {  
    setTimeout(function(){
      wx.stopPullDownRefresh();
    },1000)
  }, 

})
