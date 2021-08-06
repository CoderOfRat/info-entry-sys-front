(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d7c755"],{"0e84":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"users_content"},[o("el-card",[o("el-form",{ref:"userQueryRef",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formOptions,size:"mini","label-position":"right","label-width":"120px"}},[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"用户名称"}},[o("el-input",{attrs:{placeholder:"用户名称"},model:{value:e.formOptions.username,callback:function(t){e.$set(e.formOptions,"username",t)},expression:"formOptions.username"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"手机"}},[o("el-input",{attrs:{placeholder:"手机号码"},model:{value:e.formOptions.userPhone,callback:function(t){e.$set(e.formOptions,"userPhone",t)},expression:"formOptions.userPhone"}})],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"是否可用",required:""}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formOptions.enabled,callback:function(t){e.$set(e.formOptions,"enabled",t)},expression:"formOptions.enabled"}},[o("el-option",{attrs:{label:"是",value:!0}}),o("el-option",{attrs:{label:"否",value:!1}})],1)],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"账号是否未被锁定",required:""}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formOptions.accountNonLocked,callback:function(t){e.$set(e.formOptions,"accountNonLocked",t)},expression:"formOptions.accountNonLocked"}},[o("el-option",{attrs:{label:"是",value:!0}}),o("el-option",{attrs:{label:"否",value:!1}})],1)],1)],1),o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{label:"账号是否未过期",required:""}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formOptions.accountNonExpired,callback:function(t){e.$set(e.formOptions,"accountNonExpired",t)},expression:"formOptions.accountNonExpired"}},[o("el-option",{attrs:{label:"是",value:!0}}),o("el-option",{attrs:{label:"否",value:!1}})],1)],1)],1),o("el-col",{class:Object.keys(e.formOptions).length%3===0?"nextline_action_button_content":Object.keys(e.formOptions).length%3===1?"inline2_action_button_content":"inline1_action_button_content",attrs:{span:8}},[o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.queryUserList}},[e._v("查询")])],1)],1)],1)],1)],1),o("el-card",[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",border:"",stripe:"",size:"mini",height:"380"},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55",fixed:""}}),o("el-table-column",{attrs:{label:"序号",type:"index",width:"55",fixed:""}}),o("el-table-column",{attrs:{prop:"id",label:"标识","min-width":"120","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{prop:"username",label:"用户名","min-width":"140","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{prop:"userNickName",label:"昵称","min-width":"140","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{prop:"userPhone",label:"手机号","min-width":"140","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{prop:"userEmail",label:"邮箱","min-width":"180","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{prop:"accountNonExpired",label:"账户是否未过期","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.accountNonExpired?"是":"否"))]}}])}),o("el-table-column",{attrs:{prop:"accountNonLocked",label:"账户是否未被锁定","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.accountNonLocked?"是":"否"))]}}])}),o("el-table-column",{attrs:{prop:"enabled",label:"账户是否可用","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.enabled?"是":"否"))]}}])}),o("el-table-column",{attrs:{prop:"role",label:"角色","show-overflow-tooltip":"","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,(function(t){return o("el-tag",{key:t.id,attrs:{type:"primary","disable-transitions":""}},[e._v(e._s(t.nameZh))])}))}}])}),o("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(o){return e.handleClick(t.row)}}},[e._v("编辑")])]}}])})],1),o("el-pagination",{attrs:{"current-page":e.paginationOptions.pageNo,"page-sizes":e.paginationOptions.pageSizes,"page-size":e.paginationOptions.pageSize,layout:e.paginationOptions.loyout,background:"",total:e.paginationOptions.total,size:"mini"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),o("user-edit-dialog",{ref:"userEditDialogRef"})],1)},a=[],r=o("5530"),s=(o("99af"),o("da71")),l=o("9067"),n=function(e){return Object(l["a"])({method:"post",url:s["a"]+"/user/page",data:e})},c=function(e,t){return Object(l["a"])({method:"put",url:"".concat(s["a"],"/user/update/").concat(t),data:e})},u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-dialog",{attrs:{title:"用户设置",visible:e.dialogFormVisible,"lock-scroll":""},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeDialog}},[o("div",{staticClass:"register_form_main"},[o("el-row",{staticStyle:{height:"100%"}},[o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content-left"},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.baseURL+"/user/uploadAvatar",data:e.fileType,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?o("img",{staticClass:"avatar",attrs:{src:e.imageUrl,draggable:"false"}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),o("span",{staticStyle:{"font-size":"small",color:"red",padding:"10px 0"}},[e._v("* 请上传头像或选择默认头像")]),o("el-scrollbar",{staticStyle:{height:"90px",width:"200px"}},[o("div",{staticClass:"demo-image__lazy",style:"width: "+88*e.defaultImgs.length+"px"},e._l(e.defaultImgs,(function(t,i){return o("div",{key:i,staticStyle:{display:"inline-block"},on:{click:function(o){return e.choosedefaultImg(i,t)}}},[o("el-image",{class:e.nowIndex===i?"default_img_chioce":"",attrs:{src:t,draggable:"false"}})],1)})),0)])],1)]),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content-right"},[o("el-form",{ref:"userEditRef",attrs:{model:e.userEditForm,rules:e.userEditFormRules,size:"mini"}},[o("el-form-item",{attrs:{label:"",prop:"username"}},[o("el-input",{attrs:{placeholder:"用户名"},model:{value:e.userEditForm.username,callback:function(t){e.$set(e.userEditForm,"username",t)},expression:"userEditForm.username"}},[o("i",{staticClass:"el-icon-user",attrs:{slot:"prepend"},slot:"prepend"})])],1),o("el-form-item",{attrs:{label:"",prop:"userNickName"}},[o("el-input",{attrs:{type:"text",placeholder:"昵称"},model:{value:e.userEditForm.userNickName,callback:function(t){e.$set(e.userEditForm,"userNickName",t)},expression:"userEditForm.userNickName"}},[o("i",{staticClass:"el-icon-magic-stick",attrs:{slot:"prepend"},slot:"prepend"})])],1),o("el-form-item",{attrs:{label:"",prop:"userPhone"}},[o("el-input",{attrs:{type:"tel",placeholder:"手机号"},model:{value:e.userEditForm.userPhone,callback:function(t){e.$set(e.userEditForm,"userPhone",t)},expression:"userEditForm.userPhone"}},[o("i",{staticClass:"el-icon-mobile-phone",attrs:{slot:"prepend"},slot:"prepend"})])],1),o("el-form-item",{attrs:{label:"",prop:"userEmail"}},[o("el-input",{attrs:{type:"email",placeholder:"邮箱"},model:{value:e.userEditForm.userEmail,callback:function(t){e.$set(e.userEditForm,"userEmail",t)},expression:"userEditForm.userEmail"}},[o("i",{staticClass:"el-icon-message",attrs:{slot:"prepend"},slot:"prepend"})])],1),o("el-form-item",{attrs:{label:"是否可用","label-width":"100px",prop:"enabled"}},[o("el-switch",{attrs:{"active-text":"可用","inactive-text":"不可用"},model:{value:e.userEditForm.enabled,callback:function(t){e.$set(e.userEditForm,"enabled",t)},expression:"userEditForm.enabled"}})],1),o("el-form-item",{attrs:{label:"是否未被锁定","label-width":"100px",prop:"accountNonLocked"}},[o("el-switch",{attrs:{"active-text":"未锁定","inactive-text":"锁定"},model:{value:e.userEditForm.accountNonLocked,callback:function(t){e.$set(e.userEditForm,"accountNonLocked",t)},expression:"userEditForm.accountNonLocked"}})],1),o("el-form-item",{attrs:{label:"是否未过期","label-width":"100px",prop:"accountNonExpired"}},[o("el-switch",{attrs:{"active-text":"未过期","inactive-text":"已过期"},model:{value:e.userEditForm.accountNonExpired,callback:function(t){e.$set(e.userEditForm,"accountNonExpired",t)},expression:"userEditForm.accountNonExpired"}})],1)],1)],1)])],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"mini"},on:{click:e.dialogClose}},[e._v("取 消")]),o("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.resetForm("userEditRef")}}},[e._v("重置")]),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.onCertain}},[e._v("保存")])],1)])],1)},p=[],d=(o("159b"),o("b64b"),o("2b3d"),o("d3b7"),o("3ca3"),o("ddb0"),{data:function(){return{dialogFormVisible:!1,fileType:{fileType:0},imageUrl:"",nowIndex:-1,baseURL:s["a"],userEditForm:{accountNonExpired:!0,accountNonLocked:!0,enabled:!0,userAvatar:"",userEmail:"",userNickName:"",userPhone:"",username:""},initFormData:{},defaultImgs:["http://1.116.79.69:80/fes/picture/2021-4-27-e9a33f87-ab85-464a-a4b4-5fcd196eea51.png","http://1.116.79.69:80/fes/picture/2021-4-27-5da50eea-9146-40e5-836c-42ee5eb29092.png","http://1.116.79.69:80/fes/picture/2021-4-27-137171c6-5a54-4025-8e84-877cbab6c355.png","http://1.116.79.69:80/fes/picture/2021-4-27-d9b3fe51-6e70-4ffa-970d-2d517a7bdc7a.png","http://1.116.79.69:80/fes/picture/2021-4-27-a16b1069-2665-4f4a-85b5-c9607f65a00a.png","http://1.116.79.69:80/fes/picture/2021-4-27-90c64b39-d069-4644-8bef-3dc4e3e5ab55.png","http://1.116.79.69:80/fes/picture/2021-4-27-905ea61e-dac4-472f-bce5-24a9bcedac66.png","http://1.116.79.69:80/fes/picture/2021-4-27-8c5ba8c3-bcfc-4d8b-9bac-6566d53d5173.png"],userEditFormRules:{username:[{required:!0,message:"请输入用户名",trigger:["blur","change"]},{min:3,max:10,message:"用户名长度在 3 到 10 个字符",trigger:"blur"}],userEmail:[{required:!0,message:"请填写邮箱",trigger:["blur","change"]}],userNickName:[{required:!0,message:"请填写昵称",trigger:["blur","change"]}],userPhone:[{required:!0,message:"请填写手机号码",trigger:["blur","change"]}]}}},methods:{openDialog:function(e){var t=this;this.initFormData=e,this.dialogFormVisible=!0,this.$nextTick((function(){t.initForm(e)}))},initForm:function(e){var t=this;Object.keys(this.userEditForm).forEach((function(o){t.userEditForm[o]=e[o]?e[o]:null,"userAvatar"===o&&(t.imageUrl=e[o])}))},closeDialog:function(){this.resetFormData(),this.resetForm("userEditRef")},dialogClose:function(){this.dialogFormVisible=!1,this.resetFormData()},resetForm:function(e){this.$refs[e].resetFields(),this.initForm(this.initFormData),this.resetFormData()},resetFormData:function(){this.ifLogin=!0,this.imageUrl="",this.nowIndex=-1},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.nowIndex=-1,console.log(this.imageUrl)},beforeAvatarUpload:function(e){if(console.log(e.type),/^image\/+?/.test(e.type))this.fileType.fileType=0;else if(/^video\/+?/.test(e.type))this.fileType.fileType=1;else if(/^audio\/+?/.test(e.type))this.fileType.fileType=2;else{if(!/^application\/vnd.ms-+?/.test(e.type))return this.$message.error("此文件类型不支持!"),!1;this.fileType.fileType=3}var t=e.size/1024/1024<100;return t||this.$message.error("上传头像图片大小不能超过 100MB!"),t},choosedefaultImg:function(e,t){e!==this.nowIndex?(console.log(this.nowIndex),this.nowIndex=e,this.imageUrl=t):(console.log(this.nowIndex,-1),this.nowIndex=-1,this.imageUrl="")},onCertain:function(){var e=this;this.$refs["userEditRef"].validate((function(t){return!!t&&(e.imageUrl?(e.userEditForm.userAvatar=e.imageUrl,void c(e.userEditForm,e.initFormData.id).then((function(t){t&&t.code&&"00000"===t.code&&(e.resetForm("userEditRef"),e.imageUrl="",e.nowIndex=-1,e.$message.success("修改成功！"),e.dialogClose())}))):e.$message.error("请上传头像或选择默认头像"))}))}}}),m=d,f=(o("1867"),o("2877")),h=Object(f["a"])(m,u,p,!1,null,"77fb9ceb",null),b=h.exports,g={components:{UserEditDialog:b},data:function(){return{formOptions:{accountNonExpired:!0,accountNonLocked:!0,enabled:!0,userPhone:"",username:""},paginationOptions:{pageNo:1,pageSizes:[10,20,30,50,100],pageSize:10,layout:"total, sizes, prev, pager, next, jumper",total:0},tableData:[],multipleSelection:[]}},methods:{queryUserList:function(){var e=this;this.$refs["userQueryRef"].validate((function(t){if(!t)return!1;var o={condition:Object(r["a"])({},e.formOptions)};o.pageNo=e.paginationOptions.pageNo,o.pageSize=e.paginationOptions.pageSize,n(o).then((function(t){t&&t.code&&"00000"===t.code&&(e.resetForm("userQueryRef"),e.tableData=t.data.content,e.paginationOptions.total=t.data.totalElements)}))}))},handleClick:function(e){this.$refs.userEditDialogRef.openDialog(e)},resetForm:function(e){this.$refs[e].resetFields()},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.paginationOptions.pageSize=e,this.queryUserList()},handleCurrentChange:function(e){this.paginationOptions.pageNo=e,this.queryUserList()}}},v=g,w=(o("fe88"),Object(f["a"])(v,i,a,!1,null,"0944fac4",null));t["default"]=w.exports},1867:function(e,t,o){"use strict";o("3010")},3010:function(e,t,o){},df36:function(e,t,o){},fe88:function(e,t,o){"use strict";o("df36")}}]);