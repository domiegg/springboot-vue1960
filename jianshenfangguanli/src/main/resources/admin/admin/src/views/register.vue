<template>
    <div>
        <div class="container">
            <div class="login-form">
                <h1 class="h1" style="color:#000;fontSize:28px;">金帝豪斯健身房管理系统注册</h1>
                <el-form class="rgs-form">
                    <el-form-item label="账号" class="input">
                        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="账号"  />
                    </el-form-item>
                    <el-form-item label="密码" class="input">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password/>
                    </el-form-item>
                    <el-form-item label="重复密码" class="input">
                        <el-input type="passwo   rd" v-model="ruleForm.repetitionPassword" autocomplete="off" show-password/>
                    </el-form-item>
                        <el-form-item label="店长名称" class="input" v-if="tableName=='dianzhang'">
                            <el-input v-model="ruleForm.dianzhangName" autocomplete="off" placeholder="店长名称"  />
                        </el-form-item>
                        <el-form-item label="店长手机号" class="input" v-if="tableName=='dianzhang'">
                            <el-input v-model="ruleForm.dianzhangPhone" autocomplete="off" placeholder="店长手机号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="dianzhangPhotoFlag">
                            </el-form-item>
                            <el-form-item label="店长头像" class="input" v-if="tableName=='dianzhang'">
                                    <file-upload
                                        tip="点击上传店长头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.dianzhangPhoto?$base.url+ruleForm.dianzhangPhoto:''"
                                        @change="dianzhangPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="店长邮箱" class="input" v-if="tableName=='dianzhang'">
                            <el-input v-model="ruleForm.dianzhangEmail" autocomplete="off" placeholder="店长邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="店长简介" class="input" v-if="tableName=='dianzhang'">
                                <el-input type="textarea" v-model="ruleForm.dianzhangContent" placeholder="店长简介"></el-input>
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="逻辑删除" class="input" v-if="tableName=='dianzhang'">
                                <el-input v-model="ruleForm.dataDelete" autocomplete="off" placeholder="逻辑删除"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="添加时间" class="input" v-if="tableName=='dianzhang'">
                                <el-input v-model="ruleForm.insertTime" autocomplete="off" placeholder="添加时间"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='dianzhang'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                        <el-form-item label="教练名称" class="input" v-if="tableName=='jiaolian'">
                            <el-input v-model="ruleForm.jiaolianName" autocomplete="off" placeholder="教练名称"  />
                        </el-form-item>
                        <el-form-item label="教练手机号" class="input" v-if="tableName=='jiaolian'">
                            <el-input v-model="ruleForm.jiaolianPhone" autocomplete="off" placeholder="教练手机号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="jiaolianPhotoFlag">
                            </el-form-item>
                            <el-form-item label="教练头像" class="input" v-if="tableName=='jiaolian'">
                                    <file-upload
                                        tip="点击上传教练头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.jiaolianPhoto?$base.url+ruleForm.jiaolianPhoto:''"
                                        @change="jiaolianPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="教练邮箱" class="input" v-if="tableName=='jiaolian'">
                            <el-input v-model="ruleForm.jiaolianEmail" autocomplete="off" placeholder="教练邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="工薪" class="input" v-if="tableName=='jiaolian'">
                                <el-input v-model="ruleForm.jiaolianNewMoney" autocomplete="off" placeholder="工薪"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="教练简介" class="input" v-if="tableName=='jiaolian'">
                                <el-input type="textarea" v-model="ruleForm.jiaolianContent" placeholder="教练简介"></el-input>
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="逻辑删除" class="input" v-if="tableName=='jiaolian'">
                                <el-input v-model="ruleForm.dataDelete" autocomplete="off" placeholder="逻辑删除"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="添加时间" class="input" v-if="tableName=='jiaolian'">
                                <el-input v-model="ruleForm.insertTime" autocomplete="off" placeholder="添加时间"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='jiaolian'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                        <el-form-item label="前台名称" class="input" v-if="tableName=='qiantai'">
                            <el-input v-model="ruleForm.qiantaiName" autocomplete="off" placeholder="前台名称"  />
                        </el-form-item>
                        <el-form-item label="前台手机号" class="input" v-if="tableName=='qiantai'">
                            <el-input v-model="ruleForm.qiantaiPhone" autocomplete="off" placeholder="前台手机号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="qiantaiPhotoFlag">
                            </el-form-item>
                            <el-form-item label="前台头像" class="input" v-if="tableName=='qiantai'">
                                    <file-upload
                                        tip="点击上传前台头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.qiantaiPhoto?$base.url+ruleForm.qiantaiPhoto:''"
                                        @change="qiantaiPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="前台邮箱" class="input" v-if="tableName=='qiantai'">
                            <el-input v-model="ruleForm.qiantaiEmail" autocomplete="off" placeholder="前台邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="工薪" class="input" v-if="tableName=='qiantai'">
                                <el-input v-model="ruleForm.qiantaiNewMoney" autocomplete="off" placeholder="工薪"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="前台简介" class="input" v-if="tableName=='qiantai'">
                                <el-input type="textarea" v-model="ruleForm.qiantaiContent" placeholder="前台简介"></el-input>
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="逻辑删除" class="input" v-if="tableName=='qiantai'">
                                <el-input v-model="ruleForm.dataDelete" autocomplete="off" placeholder="逻辑删除"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="添加时间" class="input" v-if="tableName=='qiantai'">
                                <el-input v-model="ruleForm.insertTime" autocomplete="off" placeholder="添加时间"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='qiantai'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                        <el-form-item label="用户名称" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuName" autocomplete="off" placeholder="用户名称"  />
                        </el-form-item>
                        <el-form-item label="用户手机号" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuPhone" autocomplete="off" placeholder="用户手机号"  />
                        </el-form-item>
                        <el-form-item label="用户身份证号" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuIdNumber" autocomplete="off" placeholder="用户身份证号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="yonghuPhotoFlag">
                            </el-form-item>
                            <el-form-item label="用户头像" class="input" v-if="tableName=='yonghu'">
                                    <file-upload
                                        tip="点击上传用户头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.yonghuPhoto?$base.url+ruleForm.yonghuPhoto:''"
                                        @change="yonghuPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="用户邮箱" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuEmail" autocomplete="off" placeholder="用户邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="现有余额" class="input" v-if="tableName=='yonghu'">
                                <el-input v-model="ruleForm.newMoney" autocomplete="off" placeholder="现有余额"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="逻辑删除" class="input" v-if="tableName=='yonghu'">
                                <el-input v-model="ruleForm.dataDelete" autocomplete="off" placeholder="逻辑删除"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="添加时间" class="input" v-if="tableName=='yonghu'">
                                <el-input v-model="ruleForm.insertTime" autocomplete="off" placeholder="添加时间"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='yonghu'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                        <el-form-item label="驻场人员名称" class="input" v-if="tableName=='zhuchang'">
                            <el-input v-model="ruleForm.zhuchangName" autocomplete="off" placeholder="驻场人员名称"  />
                        </el-form-item>
                        <el-form-item label="驻场人员手机号" class="input" v-if="tableName=='zhuchang'">
                            <el-input v-model="ruleForm.zhuchangPhone" autocomplete="off" placeholder="驻场人员手机号"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="zhuchangPhotoFlag">
                            </el-form-item>
                            <el-form-item label="驻场人员头像" class="input" v-if="tableName=='zhuchang'">
                                    <file-upload
                                        tip="点击上传驻场人员头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.zhuchangPhoto?$base.url+ruleForm.zhuchangPhoto:''"
                                        @change="zhuchangPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="驻场人员邮箱" class="input" v-if="tableName=='zhuchang'">
                            <el-input v-model="ruleForm.zhuchangEmail" autocomplete="off" placeholder="驻场人员邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="工薪" class="input" v-if="tableName=='zhuchang'">
                                <el-input v-model="ruleForm.zhuchangNewMoney" autocomplete="off" placeholder="工薪"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="驻场人员简介" class="input" v-if="tableName=='zhuchang'">
                                <el-input type="textarea" v-model="ruleForm.zhuchangContent" placeholder="驻场人员简介"></el-input>
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="逻辑删除" class="input" v-if="tableName=='zhuchang'">
                                <el-input v-model="ruleForm.dataDelete" autocomplete="off" placeholder="逻辑删除"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="添加时间" class="input" v-if="tableName=='zhuchang'">
                                <el-input v-model="ruleForm.insertTime" autocomplete="off" placeholder="添加时间"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='zhuchang'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                    <div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
                        <el-button class="btn" type="primary" @click="login()">注册</el-button>
                        <el-button class="btn close" type="primary" @click="close()">取消</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                },
                tableName:"",
                rules: {},
                sexTypesOptions : [],
                dianzhangPhotoFlag:false,//用于刷新文件上传
                jiaolianPhotoFlag:false,//用于刷新文件上传
                qiantaiPhotoFlag:false,//用于刷新文件上传
                yonghuPhotoFlag:false,//用于刷新文件上传
                zhuchangPhotoFlag:false,//用于刷新文件上传
            };
        },
        mounted(){
            let table = this.$storage.get("loginTable");
            this.tableName = table;

            //级联表的下拉框查询

        },
        methods: {
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            dianzhangPhotoUploadChange(fileUrls) {
               this.ruleForm.dianzhangPhoto = fileUrls;
                if(this.dianzhangPhotoFlag){
                    this.dianzhangPhotoFlag=false;
                }else{
                    this.dianzhangPhotoFlag=true;
                }
            },
            jiaolianPhotoUploadChange(fileUrls) {
               this.ruleForm.jiaolianPhoto = fileUrls;
                if(this.jiaolianPhotoFlag){
                    this.jiaolianPhotoFlag=false;
                }else{
                    this.jiaolianPhotoFlag=true;
                }
            },
            qiantaiPhotoUploadChange(fileUrls) {
               this.ruleForm.qiantaiPhoto = fileUrls;
                if(this.qiantaiPhotoFlag){
                    this.qiantaiPhotoFlag=false;
                }else{
                    this.qiantaiPhotoFlag=true;
                }
            },
            yonghuPhotoUploadChange(fileUrls) {
               this.ruleForm.yonghuPhoto = fileUrls;
                if(this.yonghuPhotoFlag){
                    this.yonghuPhotoFlag=false;
                }else{
                    this.yonghuPhotoFlag=true;
                }
            },
            zhuchangPhotoUploadChange(fileUrls) {
               this.ruleForm.zhuchangPhoto = fileUrls;
                if(this.zhuchangPhotoFlag){
                    this.zhuchangPhotoFlag=false;
                }else{
                    this.zhuchangPhotoFlag=true;
                }
            },
            close(){
                this.$router.push({ path: "/login" });
            },
            // 注册
            login() {

                            if((!this.ruleForm.username)){
                                this.$message.error('账号不能为空');
                                return
                            }
                            if((!this.ruleForm.password)){
                                this.$message.error('密码不能为空');
                                return
                            }
                            if((!this.ruleForm.repetitionPassword)){
                                this.$message.error('重复密码不能为空');
                                return
                            }
                            if(this.ruleForm.repetitionPassword != this.ruleForm.password){
                                this.$message.error('密码和重复密码不一致');
                                return
                            }
                            if((!this.ruleForm.dianzhangName)&& 'dianzhang'==this.tableName){
                                this.$message.error('店长名称不能为空');
                                return
                            }
                             if('dianzhang' == this.tableName && this.ruleForm.dianzhangPhone&&(!this.$validate.isMobile(this.ruleForm.dianzhangPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            // dianzhang 中的 店长头像 判空处理
                            // if('dianzhang' == this.tableName && (this.ruleForm.dianzhangPhoto== null ||this.ruleForm.dianzhangPhoto== "")){
                            //     this.$message.error("店长头像不能为空");
                            //     return
                            // }
                            if('dianzhang' == this.tableName && this.ruleForm.dianzhangEmail&&(!this.$validate.isEmail(this.ruleForm.dianzhangEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // dianzhang 中的 店长简介 判空处理
                            // if('dianzhang' == this.tableName && (this.ruleForm.dianzhangContent== null ||this.ruleForm.dianzhangContent== "")){
                            //     this.$message.error("店长简介不能为空");
                            //     return
                            // }
                            // dianzhang 中的 逻辑删除 判空处理
                            // if('dianzhang' == this.tableName && (this.ruleForm.dataDelete== null ||this.ruleForm.dataDelete== "")){
                            //     this.$message.error("逻辑删除不能为空");
                            //     return
                            // }
                            // dianzhang 中的 添加时间 判空处理
                            // if('dianzhang' == this.tableName && (this.ruleForm.insertTime== null ||this.ruleForm.insertTime== "")){
                            //     this.$message.error("添加时间不能为空");
                            //     return
                            // }
                            // dianzhang 中的 创建时间 判空处理
                            // if('dianzhang' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.jiaolianName)&& 'jiaolian'==this.tableName){
                                this.$message.error('教练名称不能为空');
                                return
                            }
                             if('jiaolian' == this.tableName && this.ruleForm.jiaolianPhone&&(!this.$validate.isMobile(this.ruleForm.jiaolianPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            // jiaolian 中的 教练头像 判空处理
                            // if('jiaolian' == this.tableName && (this.ruleForm.jiaolianPhoto== null ||this.ruleForm.jiaolianPhoto== "")){
                            //     this.$message.error("教练头像不能为空");
                            //     return
                            // }
                            if('jiaolian' == this.tableName && this.ruleForm.jiaolianEmail&&(!this.$validate.isEmail(this.ruleForm.jiaolianEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // jiaolian 中的 工薪 判空处理
                            // if('jiaolian' == this.tableName && (this.ruleForm.jiaolianNewMoney== null ||this.ruleForm.jiaolianNewMoney== "")){
                            //     this.$message.error("工薪不能为空");
                            //     return
                            // }
                            // jiaolian 中的 教练简介 判空处理
                            // if('jiaolian' == this.tableName && (this.ruleForm.jiaolianContent== null ||this.ruleForm.jiaolianContent== "")){
                            //     this.$message.error("教练简介不能为空");
                            //     return
                            // }
                            // jiaolian 中的 逻辑删除 判空处理
                            // if('jiaolian' == this.tableName && (this.ruleForm.dataDelete== null ||this.ruleForm.dataDelete== "")){
                            //     this.$message.error("逻辑删除不能为空");
                            //     return
                            // }
                            // jiaolian 中的 添加时间 判空处理
                            // if('jiaolian' == this.tableName && (this.ruleForm.insertTime== null ||this.ruleForm.insertTime== "")){
                            //     this.$message.error("添加时间不能为空");
                            //     return
                            // }
                            // jiaolian 中的 创建时间 判空处理
                            // if('jiaolian' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.qiantaiName)&& 'qiantai'==this.tableName){
                                this.$message.error('前台名称不能为空');
                                return
                            }
                             if('qiantai' == this.tableName && this.ruleForm.qiantaiPhone&&(!this.$validate.isMobile(this.ruleForm.qiantaiPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            // qiantai 中的 前台头像 判空处理
                            // if('qiantai' == this.tableName && (this.ruleForm.qiantaiPhoto== null ||this.ruleForm.qiantaiPhoto== "")){
                            //     this.$message.error("前台头像不能为空");
                            //     return
                            // }
                            if('qiantai' == this.tableName && this.ruleForm.qiantaiEmail&&(!this.$validate.isEmail(this.ruleForm.qiantaiEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // qiantai 中的 工薪 判空处理
                            // if('qiantai' == this.tableName && (this.ruleForm.qiantaiNewMoney== null ||this.ruleForm.qiantaiNewMoney== "")){
                            //     this.$message.error("工薪不能为空");
                            //     return
                            // }
                            // qiantai 中的 前台简介 判空处理
                            // if('qiantai' == this.tableName && (this.ruleForm.qiantaiContent== null ||this.ruleForm.qiantaiContent== "")){
                            //     this.$message.error("前台简介不能为空");
                            //     return
                            // }
                            // qiantai 中的 逻辑删除 判空处理
                            // if('qiantai' == this.tableName && (this.ruleForm.dataDelete== null ||this.ruleForm.dataDelete== "")){
                            //     this.$message.error("逻辑删除不能为空");
                            //     return
                            // }
                            // qiantai 中的 添加时间 判空处理
                            // if('qiantai' == this.tableName && (this.ruleForm.insertTime== null ||this.ruleForm.insertTime== "")){
                            //     this.$message.error("添加时间不能为空");
                            //     return
                            // }
                            // qiantai 中的 创建时间 判空处理
                            // if('qiantai' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.yonghuName)&& 'yonghu'==this.tableName){
                                this.$message.error('用户名称不能为空');
                                return
                            }
                             if('yonghu' == this.tableName && this.ruleForm.yonghuPhone&&(!this.$validate.isMobile(this.ruleForm.yonghuPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            if((!this.ruleForm.yonghuIdNumber)&& 'yonghu'==this.tableName){
                                this.$message.error('用户身份证号不能为空');
                                return
                            }
                            // yonghu 中的 用户头像 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.yonghuPhoto== null ||this.ruleForm.yonghuPhoto== "")){
                            //     this.$message.error("用户头像不能为空");
                            //     return
                            // }
                            if('yonghu' == this.tableName && this.ruleForm.yonghuEmail&&(!this.$validate.isEmail(this.ruleForm.yonghuEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // yonghu 中的 现有余额 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.newMoney== null ||this.ruleForm.newMoney== "")){
                            //     this.$message.error("现有余额不能为空");
                            //     return
                            // }
                            // yonghu 中的 逻辑删除 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.dataDelete== null ||this.ruleForm.dataDelete== "")){
                            //     this.$message.error("逻辑删除不能为空");
                            //     return
                            // }
                            // yonghu 中的 添加时间 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.insertTime== null ||this.ruleForm.insertTime== "")){
                            //     this.$message.error("添加时间不能为空");
                            //     return
                            // }
                            // yonghu 中的 创建时间 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.zhuchangName)&& 'zhuchang'==this.tableName){
                                this.$message.error('驻场人员名称不能为空');
                                return
                            }
                             if('zhuchang' == this.tableName && this.ruleForm.zhuchangPhone&&(!this.$validate.isMobile(this.ruleForm.zhuchangPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            // zhuchang 中的 驻场人员头像 判空处理
                            // if('zhuchang' == this.tableName && (this.ruleForm.zhuchangPhoto== null ||this.ruleForm.zhuchangPhoto== "")){
                            //     this.$message.error("驻场人员头像不能为空");
                            //     return
                            // }
                            if('zhuchang' == this.tableName && this.ruleForm.zhuchangEmail&&(!this.$validate.isEmail(this.ruleForm.zhuchangEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // zhuchang 中的 工薪 判空处理
                            // if('zhuchang' == this.tableName && (this.ruleForm.zhuchangNewMoney== null ||this.ruleForm.zhuchangNewMoney== "")){
                            //     this.$message.error("工薪不能为空");
                            //     return
                            // }
                            // zhuchang 中的 驻场人员简介 判空处理
                            // if('zhuchang' == this.tableName && (this.ruleForm.zhuchangContent== null ||this.ruleForm.zhuchangContent== "")){
                            //     this.$message.error("驻场人员简介不能为空");
                            //     return
                            // }
                            // zhuchang 中的 逻辑删除 判空处理
                            // if('zhuchang' == this.tableName && (this.ruleForm.dataDelete== null ||this.ruleForm.dataDelete== "")){
                            //     this.$message.error("逻辑删除不能为空");
                            //     return
                            // }
                            // zhuchang 中的 添加时间 判空处理
                            // if('zhuchang' == this.tableName && (this.ruleForm.insertTime== null ||this.ruleForm.insertTime== "")){
                            //     this.$message.error("添加时间不能为空");
                            //     return
                            // }
                            // zhuchang 中的 创建时间 判空处理
                            // if('zhuchang' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                this.$http({
                    url: `${this.tableName}/register`,
                    method: "post",
                    data:this.ruleForm
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                    this.$message({
                        message: "注册成功,请登录后在个人中心页面补充个人数据",
                        type: "success",
                        duration: 1500,
                        onClose: () => {
                        this.$router.replace({ path: "/login" });
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
.el-radio__input.is-checked .el-radio__inner {
    border-color: #00c292;
    background: #00c292;
}

.el-radio__input.is-checked .el-radio__inner {
    border-color: #00c292;
    background: #00c292;
}

.el-radio__input.is-checked+.el-radio__label {
    color: #00c292;
}

.el-radio__input.is-checked+.el-radio__label {
    color: #00c292;
}

.el-radio__input.is-checked+.el-radio__label {
    color: #00c292;
}

.h1 {
    margin-top: 10px;
}

body {
    padding: 0;
    margin: 0;
}


.nk-navigation {
    margin-top: 15px;

a {
    display: inline-block;
    color: #fff;
    background: rgba(255, 255, 255, .2);
    width: 100px;
    height: 50px;
    border-radius: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    padding: 0 20px;
}

.icon {
    margin-left: 10px;
    width: 30px;
    height: 30px;
}
}

.register-container {
    margin-top: 10px;

a {
    display: inline-block;
    color: #fff;
    max-width: 500px;
    height: 50px;
    border-radius: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    padding: 0 20px;

div {
    margin-left: 10px;
}
}
}

.container {
    height: 100vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
        background-image: url(/jianshenfangguanli/img/back-img-bg.jpg);

.login-form {
    right: 50%;
    top: 50%;
    height: auto;
    transform: translate3d(50%, -50%, 0);
    border-radius: 10px;
    background-color: rgba(255,255,255,.5);
    width: 420px;
    padding: 30px 30px 40px 30px;
    font-size: 14px;
    font-weight: 500;

.h1 {
    margin: 0;
    text-align: center;
    line-height: 54px;
    font-size: 24px;
    color: #000;
}

.rgs-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.input {
    width: 95%;

& /deep/ .el-form-item__label {
      line-height: 40px;
      color: rgba(17, 16, 16, 1);
      font-size: #606266;
  }

& /deep/ .el-input__inner {
      height: 40px;
      color: rgba(23, 24, 26, 1);
      font-size: 14px;
      border-width: 1px;
      border-style: solid;
      border-color: #606266;
      border-radius: 22px;
      background-color: #fff;
  }
}

.btn {
    margin: 0 10px;
    width: 88px;
    height: 44px;
    color: #fff;
    font-size: 14px;
    border-width: 1px;
    border-style: solid;
    border-color: #409EFF;
    border-radius: 22px;
    background-color: #409EFF;
}

.close {
    margin: 0 10px;
    width: 88px;
    height: 44px;
    color: #409EFF;
    font-size: 14px;
    border-width: 1px;
    border-style: solid;
    border-color: #409EFF;
    border-radius: 22px;
    background-color: #FFF;
}

}
}
}
</style>




