    gotopostdetails(item){//跳转贴子详情页面
      this.$router.push('/postdetails');
      this.$store.commit('postdel',item)
    },


        gotonewsdel(e) {
      this.$router.push({
        path: "/newdel",
      });
      this.$store.commit("newsList", e);
    },