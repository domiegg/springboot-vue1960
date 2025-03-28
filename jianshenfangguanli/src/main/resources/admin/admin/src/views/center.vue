<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="auto"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='dianzhang'"  label='店长名称' prop="dianzhangName">
               <el-input v-model="ruleForm.dianzhangName"  placeholder='店长名称' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='dianzhang'"  label='店长手机号' prop="dianzhangPhone">
               <el-input v-model="ruleForm.dianzhangPhone"  placeholder='店长手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='dianzhang'" label='店长头像' prop="dianzhangPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.dianzhangPhoto?$base.url+ruleForm.dianzhangPhoto:''"
                         @change="dianzhangPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='dianzhang'"  label='店长邮箱' prop="dianzhangEmail">
               <el-input v-model="ruleForm.dianzhangEmail"  placeholder='店长邮箱' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item v-if="flag=='dianzhang'"  label="店长简介" prop="dianzhangContent">
                 <editor
                         style="min-width: 200px; max-width: 600px;"
                         v-model="ruleForm.dianzhangContent"
                         class="editor"
                         action="file/upload">
                 </editor>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='jiaolian'"  label='教练名称' prop="jiaolianName">
               <el-input v-model="ruleForm.jiaolianName"  placeholder='教练名称' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='jiaolian'"  label='教练手机号' prop="jiaolianPhone">
               <el-input v-model="ruleForm.jiaolianPhone"  placeholder='教练手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiaolian'" label='教练头像' prop="jiaolianPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.jiaolianPhoto?$base.url+ruleForm.jiaolianPhoto:''"
                         @change="jiaolianPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='jiaolian'"  label='教练邮箱' prop="jiaolianEmail">
               <el-input v-model="ruleForm.jiaolianEmail"  placeholder='教练邮箱' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='jiaolian'"  label='工薪' prop="jiaolianNewMoney">
                 <el-input v-model="ruleForm.jiaolianNewMoney"  placeholder='工薪' disabled style="width: 100px"></el-input>
                 <!--<a id="btn-recharge" @click="chongzhi" href="javascript:void(0)">点我充值</a>-->
                 <!--<a id="btn-recharge" @click="tixian" href="javascript:void(0)">点我提现</a>-->
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item v-if="flag=='jiaolian'"  label="教练简介" prop="jiaolianContent">
                 <editor
                         style="min-width: 200px; max-width: 600px;"
                         v-model="ruleForm.jiaolianContent"
                         class="editor"
                         action="file/upload">
                 </editor>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='qiantai'"  label='前台名称' prop="qiantaiName">
               <el-input v-model="ruleForm.qiantaiName"  placeholder='前台名称' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='qiantai'"  label='前台手机号' prop="qiantaiPhone">
               <el-input v-model="ruleForm.qiantaiPhone"  placeholder='前台手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='qiantai'" label='前台头像' prop="qiantaiPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.qiantaiPhoto?$base.url+ruleForm.qiantaiPhoto:''"
                         @change="qiantaiPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='qiantai'"  label='前台邮箱' prop="qiantaiEmail">
               <el-input v-model="ruleForm.qiantaiEmail"  placeholder='前台邮箱' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='qiantai'"  label='工薪' prop="qiantaiNewMoney">
                 <el-input v-model="ruleForm.qiantaiNewMoney"  placeholder='工薪' disabled style="width: 100px"></el-input>
                 <!--<a id="btn-recharge" @click="chongzhi" href="javascript:void(0)">点我充值</a>-->
                 <!--<a id="btn-recharge" @click="tixian" href="javascript:void(0)">点我提现</a>-->
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item v-if="flag=='qiantai'"  label="前台简介" prop="qiantaiContent">
                 <editor
                         style="min-width: 200px; max-width: 600px;"
                         v-model="ruleForm.qiantaiContent"
                         class="editor"
                         action="file/upload">
                 </editor>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='用户名称' prop="yonghuName">
               <el-input v-model="ruleForm.yonghuName"  placeholder='用户名称' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='用户手机号' prop="yonghuPhone">
               <el-input v-model="ruleForm.yonghuPhone"  placeholder='用户手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='用户身份证号' prop="yonghuIdNumber">
               <el-input v-model="ruleForm.yonghuIdNumber"  placeholder='用户身份证号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yonghu'" label='用户头像' prop="yonghuPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.yonghuPhoto?$base.url+ruleForm.yonghuPhoto:''"
                         @change="yonghuPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yonghu'"  label='用户邮箱' prop="yonghuEmail">
               <el-input v-model="ruleForm.yonghuEmail"  placeholder='用户邮箱' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yonghu'"  label='现有余额' prop="newMoney">
                 <el-input v-model="ruleForm.newMoney"  placeholder='现有余额' disabled style="width: 100px"></el-input>
                 <!--<a id="btn-recharge" @click="chongzhi" href="javascript:void(0)">点我充值</a>-->
                 <!--<a id="btn-recharge" @click="tixian" href="javascript:void(0)">点我提现</a>-->
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='zhuchang'"  label='驻场人员名称' prop="zhuchangName">
               <el-input v-model="ruleForm.zhuchangName"  placeholder='驻场人员名称' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='zhuchang'"  label='驻场人员手机号' prop="zhuchangPhone">
               <el-input v-model="ruleForm.zhuchangPhone"  placeholder='驻场人员手机号' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='zhuchang'" label='驻场人员头像' prop="zhuchangPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.zhuchangPhoto?$base.url+ruleForm.zhuchangPhoto:''"
                         @change="zhuchangPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='zhuchang'"  label='驻场人员邮箱' prop="zhuchangEmail">
               <el-input v-model="ruleForm.zhuchangEmail"  placeholder='驻场人员邮箱' clearable></el-input>
           </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='zhuchang'"  label='工薪' prop="zhuchangNewMoney">
                 <el-input v-model="ruleForm.zhuchangNewMoney"  placeholder='工薪' disabled style="width: 100px"></el-input>
                 <!--<a id="btn-recharge" @click="chongzhi" href="javascript:void(0)">点我充值</a>-->
                 <!--<a id="btn-recharge" @click="tixian" href="javascript:void(0)">点我提现</a>-->
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item v-if="flag=='zhuchang'"  label="驻场人员简介" prop="zhuchangContent">
                 <editor
                         style="min-width: 200px; max-width: 600px;"
                         v-model="ruleForm.zhuchangContent"
                         class="editor"
                         action="file/upload">
                 </editor>
             </el-form-item>
         </el-col>
         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users' &&( 1==2|| flag=='yonghu'
|| flag=='dianzhang'
|| flag=='jiaolian'
|| flag=='qiantai'
|| flag=='zhuchang')"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
        ruleForm: {},
        flag: '',
        usersFlag: false,
        // sexTypesOptions : [],
// 注册表 用户
    // 注册的类型字段 用户
        // 性别
        sexTypesOptions : [],
// 注册表 店长
    // 注册的类型字段 店长
        // 性别
        sexTypesOptions : [],
// 注册表 教练
    // 注册的类型字段 教练
        // 性别
        sexTypesOptions : [],
// 注册表 前台
    // 注册的类型字段 前台
        // 性别
        sexTypesOptions : [],
// 注册表 驻场人员
    // 注册的类型字段 驻场人员
        // 性别
        sexTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
// 注册表 用户
// 注册表 店长
// 注册表 教练
// 注册表 前台
// 注册表 驻场人员
      } else {
        this.$message.error(data.msg);
      }
    });

// 注册表 用户 的级联表
// 注册表 店长 的级联表
// 注册表 教练 的级联表
// 注册表 前台 的级联表
// 注册表 驻场人员 的级联表

      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
              this.sexTypesOptions = data.data.list;
          } else {
              this.$message.error(data.msg);
          }
      });
  },
  methods: {
    chongzhi() {
      this.$router.replace({ path: "/pay" });
    },
    tixian() {
      let _this=this;
      this.$confirm(`确定要提现么?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      }).then(() => {
          _this.ruleForm.newMoney=0;
          _this.$http({
              url: `${this.$storage.get("sessionTable")}/update`,
              method: "post",
              data: this.ruleForm
          }).then(({ data }) => {
              if (data && data.code === 0) {
                  _this.$message({message: "提现成功",type: "success",duration: 1500,onClose: () => {}});
              } else {this.$message.error(data.msg);}
          });
      });
    },
    dianzhangPhotoUploadChange(fileUrls) {
        this.ruleForm.dianzhangPhoto = fileUrls;
    },
    jiaolianPhotoUploadChange(fileUrls) {
        this.ruleForm.jiaolianPhoto = fileUrls;
    },
    qiantaiPhotoUploadChange(fileUrls) {
        this.ruleForm.qiantaiPhoto = fileUrls;
    },
    yonghuPhotoUploadChange(fileUrls) {
        this.ruleForm.yonghuPhoto = fileUrls;
    },
    zhuchangPhotoUploadChange(fileUrls) {
        this.ruleForm.zhuchangPhoto = fileUrls;
    },


    onUpdateHandler() {
                         if((!this.ruleForm.dianzhangName)&& 'dianzhang'==this.flag){
                             this.$message.error('店长名称不能为空');
                             return
                         }

                             if( 'dianzhang' ==this.flag && this.ruleForm.dianzhangPhone&&(!isMobile(this.ruleForm.dianzhangPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.dianzhangPhoto)&& 'dianzhang'==this.flag){
                             this.$message.error('店长头像不能为空');
                             return
                         }

                             if( 'dianzhang' ==this.flag && this.ruleForm.dianzhangEmail&&(!isEmail(this.ruleForm.dianzhangEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.dianzhangContent)&& 'dianzhang'==this.flag){
                             this.$message.error('店长简介不能为空');
                             return
                         }

                         if((!this.ruleForm.jiaolianName)&& 'jiaolian'==this.flag){
                             this.$message.error('教练名称不能为空');
                             return
                         }

                             if( 'jiaolian' ==this.flag && this.ruleForm.jiaolianPhone&&(!isMobile(this.ruleForm.jiaolianPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.jiaolianPhoto)&& 'jiaolian'==this.flag){
                             this.$message.error('教练头像不能为空');
                             return
                         }

                             if( 'jiaolian' ==this.flag && this.ruleForm.jiaolianEmail&&(!isEmail(this.ruleForm.jiaolianEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.jiaolianContent)&& 'jiaolian'==this.flag){
                             this.$message.error('教练简介不能为空');
                             return
                         }

                         if((!this.ruleForm.qiantaiName)&& 'qiantai'==this.flag){
                             this.$message.error('前台名称不能为空');
                             return
                         }

                             if( 'qiantai' ==this.flag && this.ruleForm.qiantaiPhone&&(!isMobile(this.ruleForm.qiantaiPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.qiantaiPhoto)&& 'qiantai'==this.flag){
                             this.$message.error('前台头像不能为空');
                             return
                         }

                             if( 'qiantai' ==this.flag && this.ruleForm.qiantaiEmail&&(!isEmail(this.ruleForm.qiantaiEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.qiantaiContent)&& 'qiantai'==this.flag){
                             this.$message.error('前台简介不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuName)&& 'yonghu'==this.flag){
                             this.$message.error('用户名称不能为空');
                             return
                         }

                             if( 'yonghu' ==this.flag && this.ruleForm.yonghuPhone&&(!isMobile(this.ruleForm.yonghuPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.yonghuIdNumber)&& 'yonghu'==this.flag){
                             this.$message.error('用户身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.yonghuPhoto)&& 'yonghu'==this.flag){
                             this.$message.error('用户头像不能为空');
                             return
                         }

                             if( 'yonghu' ==this.flag && this.ruleForm.yonghuEmail&&(!isEmail(this.ruleForm.yonghuEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.zhuchangName)&& 'zhuchang'==this.flag){
                             this.$message.error('驻场人员名称不能为空');
                             return
                         }

                             if( 'zhuchang' ==this.flag && this.ruleForm.zhuchangPhone&&(!isMobile(this.ruleForm.zhuchangPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.zhuchangPhoto)&& 'zhuchang'==this.flag){
                             this.$message.error('驻场人员头像不能为空');
                             return
                         }

                             if( 'zhuchang' ==this.flag && this.ruleForm.zhuchangEmail&&(!isEmail(this.ruleForm.zhuchangEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.zhuchangContent)&& 'zhuchang'==this.flag){
                             this.$message.error('驻场人员简介不能为空');
                             return
                         }

        if((!this.ruleForm.sexTypes) && (1==2|| this.flag=='yonghu'
|| this.flag=='dianzhang'
|| this.flag=='jiaolian'
|| this.flag=='qiantai'
|| this.flag=='zhuchang')){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
