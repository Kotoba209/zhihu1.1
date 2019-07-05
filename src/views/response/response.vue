<template>
    <div class="found">
        <div>
            <div class="nav-box clear">
                <a>
                    <div class="QuestionType QuestionType--active">
                        <i class="iconfont iconredu"></i>
                        人气问题
                    </div>
                </a>
                <a>
                    <div class="QuestionType">
                        <i class="iconfont iconlvzhi"></i>
                        潜力好问
                    </div>
                </a>
                <a>
                    <div class="QuestionType">
                        <i class="iconfont iconnew"></i>
                        新问题
                    </div>
                </a>
                <a>
                    <div class="QuestionType">
                        <i class="iconfont iconfl-renyuan"></i>
                        人人答
                    </div>
                    <!--<a></a>-->
                </a>
            </div>
        </div>
        <div class="content clear">
            <div class="wrapper" v-for="(item, index) in dataShow" :key="index">
                <div class="title"><a>{{ item.title }}</a></div>
                <div class="btn-item clear">
                    <el-button type="primary" icon="el-icon-edit" plain>写回答</el-button>
                    <el-button class="btn" icon="el-icon-check">关注问题</el-button>
                    <el-button class="btn" icon="el-icon-time">稍后回答</el-button>
                    <div class="comment">
                        <span>{{ item.num3 }}个回答.</span>
                        <span>{{ item.num2 }}个浏览</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../.././axios/api'

export default {
    name: 'found',
    data() {
        return {
            dataShow: [],
        }
    },
    created() {
        this.getData()
    },
    methods:{
        getData:function () {
            api.mockData('data/index').then(res => {
                this.dataShow = res;
            });
        }
    },
};
</script>

<style scoped src="../.././css/base.css"></style>
<style scoped src="./response.scss" lang="scss"></style>
