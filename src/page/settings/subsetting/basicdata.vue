<template>
  <div>
        <el-form :label-position="labelPosition" :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="性别" prop="gender">
                <el-select v-model="ruleForm.gender" placeholder="请选择性别">
                <el-option label="男" value="boy"></el-option>
                <el-option label="女" value="girl"></el-option>
                <el-option label="保密" value="xxx"></el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="生日" required>
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="星座">
                    <el-input :disabled="disabled" v-model="ruleForm.constellation">{{constellation}}</el-input>
                </el-form-item>
            </el-form-item>
            <br>
            <el-form-item label="地区" prop="area">
                <el-input v-model="ruleForm.area"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="爱好" prop="hobby">
                <el-input v-model="ruleForm.hobby"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="个人简介" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <br>
            <el-form-item class="btn_box">
                <el-button class="canclebtn" @click="resetForm('ruleForm')">取消</el-button>
                <el-button class="submitbtn" type="primary" @click="submitForm('ruleForm')" v-preventReClick>修改</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
    name:"Basicdata",
    data(){
        return{
            ruleForm: {
                gender: 'xxx',
                date1: '',
                constellation:"",
                area:"",
                hobby:"",
                desc: ''
                },
                rules: {
                gender: [
                    { required: false, message: '请选择性别', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写个人描述', trigger: 'blur' }
                ]
            },
            labelPosition:'right',
            disabled:true
        }
    },
    methods: {
        //时间转换
        dateFormat(dateData) {
            var date = new Date(dateData)
            var y = date.getFullYear()
            var m = date.getMonth() + 1
            m = m < 10 ? ('0' + m) : m
            var d = date.getDate()
            d = d < 10 ? ('0' + d) : d
            const time = y + '-' + m + '-' + d
            return time
        },
        //星座函数
        getAstro(strBirthday){
            let birthYear,birthMonth,birthDay; 
            let strBirthdayArr=strBirthday.split("-");
            console.log(strBirthdayArr);
            if (strBirthdayArr.length>0 && this.ruleForm.date1) {
                birthYear = strBirthdayArr[0];  
                birthMonth = strBirthdayArr[1];  
                birthDay = strBirthdayArr[2];  
            }else{
                return;
            }
            let s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
            let arr=[20,19,21,21,21,22,23,23,23,23,22,22];
            return s.substr(birthMonth*2-(birthDay< arr[birthMonth-1]?2:0),2);//12  21
        },
      submitForm(formName) {
          console.log(this.dateFormat(this.ruleForm.date1));
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.basic.basicInfo({
                sex:this.$inHTMLData(this.ruleForm.gender),
                birthday:this.$inHTMLData(this.dateFormat(this.ruleForm.date1)),
                location:this.$inHTMLData(this.ruleForm.area),
                hobby:this.$inHTMLData(this.ruleForm.hobby),
                desc:this.$inHTMLData(this.ruleForm.desc)
            }).then(res => {
                // console.log(res);
                if (res.data.code == 1) {
                    this.$message({
                        type: 'error', // warning、success
                        message: res.data.msg 
                    }) 
                } else if (res.data.code == 0) {
                    this.$message({
                        type: 'success', // warning、success
                        message: res.data.msg 
                    })
                    this.$refs[formName].resetFields();                            
                } else if (res.data.code == -1) {
                    this.$message({
                        type: 'warning', // warning、success
                        message: res.data.msg 
                    })
                    this.$router.push("/")
                }
            })
            .catch(error => {
                this.$message("设置失败")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    computed:{
        constellation(){
            this.ruleForm.constellation = this.getAstro(this.dateFormat(this.ruleForm.date1));
            console.log(this.ruleForm.constellation);
        }
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
/deep/ .el-textarea{
    width: 200%;
}
.btn_box{
    // width: 200px;
    margin: auto;
}
.canclebtn{
    width: 120px;
    margin-left: 250px;
}
.submitbtn{
    width: 120px;
    margin-left: 10px;
}
</style>>

