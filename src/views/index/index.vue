<template>
    <div class="index">
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
                                </div>
                                <div class="clear text-wrapper">
                                    <span class="text">{{ item.paragraph }}</span>
                                    <a style="float: left" href="#">阅读全文 v</a>
                                </div>
                            </div>
                        </div>
                        <div class="listFooter clear">
                            <span class="up">&#9650&nbsp;{{ item.num }}</span>
                            <span class="down">&#9660{{ item.num2 }}</span>
                            <span class="comments mg-lf">{{ item.num_comment }}</span>
                            <span class="share mg-lf">分享</span>
                            <span class="collect mg-lf">收藏</span>
                            <span class="appreciate mg-lf">感谢</span>
                            <el-popover
                                    placement="bottom"
                                    width="96"
                                    trigger="click">
                                <div class="prop-content">
                                    <el-button slot="reference">没有帮助</el-button>
                                    <el-button slot="reference">举报</el-button>
                                    <el-button slot="reference">禁止转载</el-button>
                                    <el-button slot="reference">不感兴趣</el-button>
                                </div>
                                <el-button slot="reference">...</el-button>
                            </el-popover>
                        </div>
                    </li>
                </ul>
                <!--<p v-if="loading">加载中...</p>-->
                <!--<p v-if="noMore">没有更多了</p>-->
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
