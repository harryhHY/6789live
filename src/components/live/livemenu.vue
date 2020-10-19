<template>
  <div class="livemenu left cl">
    <div class="live_class">
      <div class="my_attention">
        <div class="my_attention_header cl">
          <span class="left">我的关注</span>
          <span class="rigth setting_attention" @click="gotoattention()">
            <i class="el-icon-setting"></i>
          </span>
        </div>
        <div class="mylike">
          <div
            v-for="(item, key, index) in mylike"
            :key="item.id"
            class="playnum"
            @click="changetype(item.id)"
          >
            {{ item.playnum }}
          </div>
        </div>
      </div>
      <div class="live_category cl">
        <div class="live_category_header cl">
          <span class="left"> 直播分类 </span>
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="temp_i"> 足球 </i>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item, key, index) in footData"
                :key="item.id"
                :index="'1-' + item.id"
                @click="changetype(item.id)"
                >{{ item.playname }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="temp_i"> 篮球 </i>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item, key, index) in footData"
                :key="item.id"
                :index="'2-' + item.id"
                @click="changetype(item.id)"
                >{{ item.playname }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="temp_i"> 综合 </i>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item, key, index) in footData"
                :key="item.id"
                :index="'3-' + item.id"
                @click="changetype(item.id)"
                >{{ item.playname }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylike: [
        {
          id: 1,
          playtype: 1,
          playnum: "英超",
        },
        {
          id: 2,
          playtype: 2,
          playnum: "NBA",
        },
        {
          id: 3,
          playtype: 3,
          playnum: "CBA",
        },
      ],
      footData: [
        {
          id: 1,
          playname: "西甲",
        },
        {
          id: 2,
          playname: "意甲",
        },
        {
          id: 3,
          playname: "国足",
        },
        {
          id: 4,
          playname: "英超",
        },
      ],
      isCollapse: true,
    };
  },
  methods: {
    gotoattention(){
      this.$router.push(
        '/person/attention'
      )
    },
    changetype(id) {
      this.$emit("changetype", id);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.livemenu {
  width: 10%;
}
.live_class {
  text-align: center;
  font-size: 20px;
  color: #fff;
  background: rgb(84, 92, 100);
  .setting_attention {
    cursor: pointer;
  }
  .my_attention {
    .my_attention_header {
    }

    .my_attention_header span:first-child {
      margin-left: 5%;
    }
  }
  .playnum {
    padding: 20px 0;
  }
  .playnum:hover {
    cursor: pointer;
    color: #000000;
    background: #fff;
  }
  .live_category_header {
    span {
      margin-left: 5%;
    }
  }
  .el-submenu .el-menu-item {
    min-width: 0;
  }
  .el-menu--collapse {
    font-size: 20px;
    width: 100%;
  }
  .temp_i {
    color: #fff;
    font-style: normal;
  }
}
</style>