<template>
    <div class="index">
        <div class="wrapper clear">
            <div class="wrapper-left">
                <div class="zg-nav-center">
                    <div class="page-title">
                        <i class="el-icon-tickets"></i>
                        <span>编辑推荐</span>
                        <a class="more-section" href="#"><span>更多推荐 »</span></a>
                    </div>
                    <div class="section">
                        <ul>
                            <li class="clear">
                                <div class="listHeader">
                                    <!--<div class="listTopic">-->
                                    <!--来自话题：<a href="#" class="theme">{{ item.word }}</a>-->
                                    <!--</div>-->
                                    <h2>
                                        <a href="#">
                                            为什么 USB 接口设计之初选择了不能正反插的方案？
                                        </a>
                                    </h2>
                                    <div class="listUserinfo clear">
                                        <a href="#" class="listUserlogo"><img style="width: 38px;height: 38px;" src=".././images/user_cardlogo.jpg"/></a>
                                        <a href="#" class="userName">kotoba</a>
                                        <a class="userTag" style="color: #222">,&nbsp;&nbsp;中央处理器 铁路、编程话题优秀回答者 </a>
                                    </div>
                                </div>
                                <div class="listContent">
                                    <div class="section-content clear">
                                        <!--<div class="image">-->
                                        <!--<img :src="item.thumb_pic"/>-->
                                        <!--&lt;!&ndash;{{ item.thumb_pic }}&ndash;&gt;-->
                                        <!--</div>-->
                                        <div class="clear text-wrapper">
                            <span>
                                USB接口最早设计出来的时候，没考虑过插拔的事情的，USB接口的主要目的是要设计一个通用的（universal）外设接口，希望解决的问题包括：1. PCI这种内置的，不好插拔的接口； 2. 统一类似PS/2，9针串口，并口等等这种五花八门的接口； 3. 针式接口容易损坏的…
                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="zg-question clear">
                        <h2><a>19 年暑假有哪些游戏和动漫爱好者圣地巡礼的地方？</a></h2>
                        <span>问答</span>
                    </div>
                    <div class="zg-question clear">
                        <h2><a>为什么微波可以穿透木板墙壁等介质，频率更高的可见光却不行？</a></h2>
                        <span>问答</span>
                    </div>
                    <div class="zg-question clear">
                        <h2><a>如何评价 2018 NBA 选秀的第八顺位球员：科林·塞克斯顿？</a></h2>
                        <span>问答</span>
                    </div>
                </div>
                <div class="zg-nav-bottom">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="今日最热" name="first">
                            <div class="content clear">
                                <div id="cardList">
                                    <ul>
                                        <li class="clear" v-for="(item, index) in dataShow" :key="index">
                                            <div class="listHeader">
                                                <!--<div class="listTopic">-->
                                                <!--来自话题：<a href="#" class="theme">{{ item.word }}</a>-->
                                                <!--</div>-->
                                                <div class="listUserinfo clear">
                                                    <!--<a href="#" class="listUserlogo"><img style="width: 24px;height: 24px" src="./images/user_cardlogo.jpg"/></a>-->
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
                                                        <a class="tools-all"  href="#">显示全部</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listFooter clear">
                                                <!--<span class="up">&#9650&nbsp;{{ item.num }}</span>-->
                                                <!--<span class="down">&#9660{{ item.num2 }}</span>-->
                                                <span class="el-icon-plus">关注问题</span>
                                                <span class="comments el-icon-chat-square">{{ item.num_comment }}条评论</span>
                                                <span class="share el-icon-paperclip">分享</span>
                                                <span class="collect el-icon-collection-tag">收藏</span>
                                                <span class="appreciate el-icon-cherry">感谢</span>
                                                <span>.没有帮助</span>
                                                <span>.举报</span>
                                                <span>.作者保留权力</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <!--<p v-if="loading">加载中...</p>-->
                                    <!--<p v-if="noMore">没有更多了</p>-->
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="本月最热" name="second">
                            <div class="content clear">
                                <div id="cardList">
                                    <ul>
                                        <li class="clear" v-for="(item, index) in dataShow" :key="index">
                                            <div class="listHeader">
                                                <!--<div class="listTopic">-->
                                                <!--来自话题：<a href="#" class="theme">{{ item.word }}</a>-->
                                                <!--</div>-->
                                                <div class="listUserinfo clear">
                                                    <!--<a href="#" class="listUserlogo"><img style="width: 24px;height: 24px" src="./images/user_cardlogo.jpg"/></a>-->
                                                    <a href="#" class="listUsername">{{ item.author_name }}1</a>
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
                                                        <a class="tools-all"  href="#">显示全部</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listFooter clear">
                                                <!--<span class="up">&#9650&nbsp;{{ item.num }}</span>-->
                                                <!--<span class="down">&#9660{{ item.num2 }}</span>-->
                                                <span class="el-icon-plus">关注问题</span>
                                                <span class="comments el-icon-chat-square">{{ item.num_comment }}条评论</span>
                                                <span class="share el-icon-paperclip">分享</span>
                                                <span class="collect el-icon-collection-tag">收藏</span>
                                                <span class="appreciate el-icon-cherry">感谢</span>
                                                <span>.没有帮助</span>
                                                <span>.举报</span>
                                                <span>.作者保留权力</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <!--<p v-if="loading">加载中...</p>-->
                                    <!--<p v-if="noMore">没有更多了</p>-->
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <div class="wrapper-right">
                <div class="sidebar">
                    <div class="sidebar-top">
                        <div class="module-title">
                            <a class="zg-link-gray">更多圆桌 »</a>
                            <h3>热门圆桌</h3>
                        </div>
                        <ul class="clear">
                            <li class="clear">
                                <a class="avatar-link" href="#"><img src="../../.././assets/images/module1-1.jpg"/></a>
                                <div class="module-content">
                            <span class="timer">
                                还有 14 小时开始</span>
                                    <a>非常想问 | 一个人住</a>
                                    <div class="meta">
                                        <span>5247 人关注</span>
                                        <span class="zg-bull">•</span>
                                        <span>5 个问题</span>
                                    </div>
                                </div>
                            </li>
                            <li class="clear" style="padding-top: 13px">
                                <a class="avatar-link" href="#"><img src="../../.././assets/images/module1-2.jpg"/></a>
                                <div class="module-content">
                            <span class="timer">
                                还有 4 天结束</span>
                                    <a>买对化妆品 · 不花冤枉钱</a>
                                    <div class="meta">
                                        <span>3828 人关注</span>
                                        <span class="zg-bull">•</span>
                                        <span>23 个问题</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--<div id="sidebar_content">-->
                    <!--&lt;!&ndash;<div></div>&ndash;&gt;-->
                    <!--<ul class="user-item">-->
                    <!--<li><a href="#"><img src="./images/sidebar_collection.jpg"/>&nbsp;&nbsp;我的收藏</a></li>-->
                    <!--<li><a href="#"><img src="./images/sidebar_question.jpg"/>&nbsp;&nbsp;我关注的问题</a><a class="question_number">38</a></li>-->
                    <!--<li><a href="#"><img src="./images/sidebar_invitation.jpg"/>&nbsp;&nbsp;我的邀请</a></li>-->
                    <!--&lt;!&ndash;<li><a href="#"><img src="./images/sidebar_coupon.jpg"/>&nbsp;&nbsp;我的礼券</a></li>&ndash;&gt;-->
                    <!--<li><a href="#"><img src="./images/sidebar_community.jpg"/>&nbsp;&nbsp;社区服务中心</a></li>-->
                    <!--<li><a href="#"><img src="./images/sidebar_copyright.jpg"/>&nbsp;&nbsp;版权服务中心</a></li>-->
                    <!--&lt;!&ndash;<li><a href="#"><img src="./images/sidebar_editorstatus.jpg"/>&nbsp;&nbsp;公共编辑动态</a></li>&ndash;&gt;-->
                    <!--</ul>-->
                    <!--</div>-->
                    <div class="sidebar-content">
                        <div class="module-title">
                            <a class="zg-link-gray">更多话题 »</a>
                            <h3>热门话题</h3>
                        </div>
                        <ul class="clear">
                            <li class="clear">
                                <a class="avatar-link" href="#"><img src="../../.././assets/images/module2-1.jpg"/></a>
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 14 小时开始</span>-->
                                    <a>节气</a>
                                    <div class="meta">
                                        <span>5247 人关注</span>
                                        <!--<span class="zg-bull">•</span>-->
                                        <!--<span>5 个问题</span>-->
                                    </div>
                                </div>
                            </li>
                            <li class="clear" style="padding-top: 13px">
                                <a class="avatar-link" href="#"><img src="../../.././assets/images/module2-2.jpg"/></a>
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 4 天结束</span>-->
                                    <a>神器</a>
                                    <div class="meta">
                                        <span>3828 人关注</span>
                                        <!--<span class="zg-bull">•</span>-->
                                        <!--<span>23 个问题</span>-->
                                    </div>
                                </div>
                            </li>
                            <li class="clear" style="padding-top: 13px">
                                <a class="avatar-link" href="#"><img src="../../.././assets/images/module2-3.jpg"/></a>
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 4 天结束</span>-->
                                    <a>机器学习</a>
                                    <div class="meta">
                                        <span>1036315 人关注</span>
                                        <!--<span class="zg-bull">•</span>-->
                                        <!--<span>23 个问题</span>-->
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="sidebar-content">
                        <div class="module-title">
                            <a class="zg-link-gray">换一换</a>
                            <h3>热门收藏</h3>
                        </div>
                        <ul class="clear">
                            <li class="clear">
                                <!--<a class="avatar-link" href="#"><img src="../.././assets/images/module2-1.jpg"/></a>-->
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 14 小时开始</span>-->
                                    <a>知乎最系列</a>
                                    <div class="meta">
                                        <span>5247 人关注</span>
                                        <span class="zg-bull">•</span>
                                        <span>35 条内容</span>
                                    </div>
                                </div>
                            </li>
                            <li class="clear" style="padding-top: 13px">
                                <!--<a class="avatar-link" href="#"><img src="../.././assets/images/module2-2.jpg"/></a>-->
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 4 天结束</span>-->
                                    <a>都是好东西</a>
                                    <div class="meta">
                                        <span>3828 人关注</span>
                                        <span class="zg-bull">•</span>
                                        <span>145 条内容</span>
                                    </div>
                                </div>
                            </li>
                            <li class="clear" style="padding-top: 13px">
                                <!--<a class="avatar-link" href="#"><img src="../.././assets/images/module2-3.jpg"/></a>-->
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 4 天结束</span>-->
                                    <a>人在关系中（"职场"部分已新建收藏夹）</a>
                                    <div class="meta">
                                        <span>1036315 人关注</span>
                                        <span class="zg-bull">•</span>
                                        <span>363 条内容</span>
                                    </div>
                                </div>
                            </li>
                            <li class="clear" style="padding-top: 13px">
                                <!--<a class="avatar-link" href="#"><img src="../.././assets/images/module2-3.jpg"/></a>-->
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 4 天结束</span>-->
                                    <a>吃很重要</a>
                                    <div class="meta">
                                        <span>1036315 人关注</span>
                                        <span class="zg-bull">•</span>
                                        <span>176 条内容</span>
                                    </div>
                                </div>
                            </li>
                            <li class="clear" style="padding-top: 13px">
                                <!--<a class="avatar-link" href="#"><img src="../.././assets/images/module2-3.jpg"/></a>-->
                                <div class="module-content">
                                    <!--<span class="timer">-->
                                    <!--还有 4 天结束</span>-->
                                    <a>家居·生活·健身</a>
                                    <div class="meta">
                                        <span>1036315 人关注</span>
                                        <span class="zg-bull">•</span>
                                        <span>454 条内容</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="sidebar_footer">
                        <a href="#">刘看山 · </a><a href="#">知乎指南 · </a><a href="#">建议反馈 · </a><a href="#">移动应用</a><br>
                        <a>加入知乎 · </a><a>知乎协议 · </a><a href="#">举报投诉 · </a><a href="#">隐私政策</a><br/>
                        <a href="#"> · 联系我们 </a><span>&copy;2019 知乎</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../.././axios/api'

export default {
    name: 'index',
    data() {
      return {
          dataShow:[],
          activeName: 'first'
      };
    },
    created() {
        this.getData()
    },
    methods: {
        getData: function () {
            api.mockData('data/index').then(res => {
                console.log(res);
                this.dataShow = res;
            });
        },
        handleClick() {
        },
    }
};
</script>

<style scoped src=".././found.scss" lang="scss"></style>
<style scoped src="../../.././css/base.css"></style>
