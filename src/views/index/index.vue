<template>
    <div class="index">
        <div class="header-wrapper">
        <div id="header">
            <div id="logo">
                <a href="#"><img src="./images/header_logo.jpg"/></a>
            </div>
            <div id="navigate">
                <ul>
                    <li><a href="#" class="selected">首页</a></li>
                    <li><a href="#">发现</a></li>
                    <li><a href="#">话题</a></li>
                </ul>
            </div>
            <div id="searchbar">
                <input type="text" placeholder="搜索你感兴趣的内容..."/>
                <button>提问</button>
            </div>
            <div id="userinfo">
                <a href="#"><img src="./images/header_pic01.jpg"/></a>
                <a href="#"><img src="./images/header_pic02.jpg"/></a>
                <a href="#"><img style="width: 30px;height: 30px;" src="./images/userlogo.jpg"/></a>
            </div>
        </div>
        </div>
        <div class="content clear">
        <div id="maincolumn" class="clear">
            <div id="card">
                <ul class="clear">
                    <li><a href="#" title="提问"><img src="./images/card_question.jpg"/><span>提问</span></a></li>
                    <li><a href="#" title="回答"><img src="./images/card_answer.jpg"/><span>回答</span></a></li>
                    <li><a href="#" title="写文章"><img src="./images/card_write.jpg"/><span>写文章</span></a></li>
                    <li><a href="#" title="写想法"><img src="./images/card_thoughts.jpg"/><span>写想法</span></a></li>
                    <li class="special"><a href="#">草稿</a></li>
                </ul>
            </div>
            <div id="cardList">
                <ul>
                    <li class="clear" v-for="(item, index) in dataShow" :key="index">
                        <div class="listHeader">
                            <div class="listTopic">
                                来自话题：<a href="#" class="theme">{{ item.word }}</a>
                            </div>
                            <div class="listUserinfo clear">
                                <a href="#" class="listUserlogo"><img style="width: 24px;height: 24px" src="./images/user_cardlogo.jpg"/></a>
                                <a href="#" class="listUsername">{{ item.author_name }}</a>
                                <div class="userIntro">,&nbsp;&nbsp;{{ item.tag1 }} {{ item.tag2 }} {{ item.tag3 }}</div>
                            </div>
                        </div>
                        <div class="listContent">
                            <div class="listTitle"><a href="#">{{ item.title }}</a></div>
                            <div class="listArticle clear">
                                <div class="image">
                                    <img :src="item.thumb_pic"/>
                                    <!--{{ item.thumb_pic }}-->
                                </div>
                                <div class="clear text-wrapper">
                                    <span class="text">{{ item.paragraph }}</span>
                                    <a style="float: left" href="#">阅读全文 v</a>
                                </div>
                            </div>
                        </div>
                        <div class="listFooter clear">
                            <span class="up">{{ item.num }}</span>
                            <!--<span class="down">&#9660</span>-->
                            <span class="comments">{{ item.num_comment }}</span>
                            <span class="share">分享</span>
                            <span class="collect">收藏</span>
                            <span class="appreciate">感谢</span>
                            <span class="more">···</span>
                        </div>
                    </li>
                </ul>
                <p v-if="loading">加载中...</p>
                <p v-if="noMore">没有更多了</p>
            </div>
        </div>
        <div id="sidebar">
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
                    <li><a href="#"><img src="./images/sidebar_coupon.jpg"/>&nbsp;&nbsp;我的礼券</a></li>
                    <li><a href="#"><img src="./images/sidebar_community.jpg"/>&nbsp;&nbsp;社区服务中心</a></li>
                    <li><a href="#"><img src="./images/sidebar_copyright.jpg"/>&nbsp;&nbsp;版权服务中心</a></li>
                    <li><a href="#"><img src="./images/sidebar_editorstatus.jpg"/>&nbsp;&nbsp;公共编辑动态</a></li>
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
import api from '../.././axios/api';
export default {
    name: 'index',
    data() {
        return {
            dataShow:[],
            loading: false
        }
    },
    computed: {
        noMore () {
            return this.dataShow >= 20
        },
        disabled () {
            return this.loading || this.noMore
        }
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
        load () {
            this.loading = true
            setTimeout(() => {
                this.dataShow += 2
                this.loading = false
            }, 2000)
        },
    },
};
</script>

<style scoped src="./index.css">

</style>
