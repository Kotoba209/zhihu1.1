<template>
    <div class="index">
        <div class="header-wrapper">
        <div id="header">
            <div id="logo">
                <a href="/"><img src="./images/header_logo.jpg"/></a>
            </div>
            <div id="navigate">
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <!--<li><a href="#" class="selected">首页</a></li>-->
                    <li><router-link to="/found">发现</router-link></li>
                    <!--<li><a href="#">发现</a></li>-->
                    <li><router-link to="/response">等你来答</router-link></li>
                    <!--<li><a href="#">等你来答</a></li>-->
                    <!--<li><a href="#">等你来答</a></li>-->
                </ul>
            </div>
            <div id="searchbar">
                <input type="text" placeholder="搜索你感兴趣的内容..."/>
                <button>提问</button>
            </div>
            <div id="userinfo">
                <li>
                <el-badge :value="3" class="item">
                <a href="#"><img src="./images/header_pic01.jpg"/></a>
                </el-badge>
                </li>
                <li>
                    <el-badge :value="7" class="item">
                <a href="#"><img src="./images/header_pic02.jpg"/></a>
                    </el-badge>
                </li>
                <li>
                <a href="#"><img style="width: 30px;height: 30px;" src="./images/userlogo.jpg"/></a>
                </li>
            </div>
        </div>
        </div>
        <div class="blank-state"></div>
        <div class="content clear">
            <router-view></router-view>
        <div class="sidebar">
            <div id="sidebar_top">
                <ul>
                    <li><a id="live" href="#"><img src="./images/sidebar_live.jpg"/><br/>Live</a></li>
                    <li><a id="bookstore" href="#"><img src="./images/sidebar_bookstore.jpg"/><br/>书店</a></li>
                    <li><a id="desk" href="#"><img src="./images/sidebar_desk.jpg"/><br/>圆桌</a></li>
                    <li><a id="column" href="#"><img src="./images/sidebar_column.jpg"/><br/>专栏</a></li>
                    <li><a id="consult" href="#"><img src="./images/sidebar_consult.jpg"/><br/>付费咨询</a></li>
                </ul>
            </div>
            <div id="sidebar_content">
                <!--<div></div>-->
                <ul class="user-item">
                    <li><a href="#"><img src="./images/sidebar_collection.jpg"/>&nbsp;&nbsp;我的收藏</a></li>
                    <li><a href="#"><img src="./images/sidebar_question.jpg"/>&nbsp;&nbsp;我关注的问题</a><a class="question_number">38</a></li>
                    <li><a href="#"><img src="./images/sidebar_invitation.jpg"/>&nbsp;&nbsp;我的邀请</a></li>
                    <!--<li><a href="#"><img src="./images/sidebar_coupon.jpg"/>&nbsp;&nbsp;我的礼券</a></li>-->
                    <li><a href="#"><img src="./images/sidebar_community.jpg"/>&nbsp;&nbsp;社区服务中心</a></li>
                    <li><a href="#"><img src="./images/sidebar_copyright.jpg"/>&nbsp;&nbsp;版权服务中心</a></li>
                    <!--<li><a href="#"><img src="./images/sidebar_editorstatus.jpg"/>&nbsp;&nbsp;公共编辑动态</a></li>-->
                </ul>
            </div>
            <div id="sidebar_footer">
                <a href="#">刘看山 · </a><a href="#">知乎协议 · </a><a href="#">知乎指南 · </a><a href="#">知乎隐私保护指引</a><br>
                <a>应用 · </a><a>工作</a><a href="#">申请开通知乎机构号</a><br/>
                <a href="#">侵权举报 · </a><a href="#">网上有害信息举报专区</a><br/>
                <span>违法和不良信息举报：010-82716601</span><br/>
                <a href="#">儿童色情信息举报专区</a><br/>
                <a href="#">证照中心</a><br>
                <a href="#">联系我们 </a><span>&copy;2019 知乎</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import api from '.././axios/api';
export default {
    name: 'index',
    data() {
        return {
            dataShow:[],
            loading: false
        }
    },
    computed: {
        // noMore () {
        //     return this.dataShow >= 20
        // },
        // disabled () {
        //     return this.loading || this.noMore
        // }
    },
    created() {
       this.getData()
    },
    methods:{
        getData:function () {
           api.mockData('data/index').then(res => {
               console.log(res);
               this.dataShow = res;
           });
        },
        // load () {
        //     this.loading = true
        //     setTimeout(() => {
        //         this.dataShow += 2
        //         this.loading = false
        //     }, 2000)
        // },
    },
};
</script>

<style scoped src="./index.css"></style>
<style scoped lang="scss">
    .index{
        .listFooter{
            .el-button{
                border: none;
                padding: 0;
                font-size: 14px;
                color: #8590a6;
                text-align: center;
                cursor: pointer;
            }
            .el-button:hover{
                background-color: #fff;
            }
            .el-button:focus{
                background-color: #fff;
            }
        }
        .el-popover{
            min-width: 96px!important;
            padding: 0;
        }
    }
    .prop-content{
        .el-button{
            border: none!important;
            margin-left: 1px;
            cursor: pointer;
        }
        .el-button:hover{
            background-color: #fff;
            color: #606266;
        }
        .el-button:focus{
            background-color: #fff;
            color: #606266;
        }
    }
</style>
