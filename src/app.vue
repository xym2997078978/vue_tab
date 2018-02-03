<template>
    
</template>
<script>
import Tab from "./js/tab.js"
export default {
    name: "tab",
    mounted() {
        this.go();
    },
    methods: {
        go() {
            let title = ['新闻', '贴吧', '文库'];
            let content = [
                '习近平主席2017年1月17日发表的题为《共担时代责任 共促全球发展》的主旨演讲，赢得国际社会广泛赞誉，各国领导人纷纷“点赞”。近日，论坛有关负责人评价说，习主席的那次演讲提振了人们对未来经济发展的信心。',
                '【活动】Word天，许愿这种事落到吧友头上竟然变成这样……13如果让你来定一个小目标,你想要多少钱,来做什么？ 百万富翁昨天正式上线之后，Baby在这里https://tieba.baidu',
                '报考者务必携带的考试文具包括黑色字迹的钢笔或签字笔、2B铅笔和橡皮。报考者必须用2B铅笔在指定位置上填涂准考证号，并在答题卡上作答。在试题本或其他位置作答一律无效。'];
            let test=new Tab(title, content);
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html, body{
    width: 100%;
    height: 100%;
}
.wrap{
    width: 350px;
    height: 240px;
    background: #eee;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
ul{
    display: flex;
}
ul li{
    flex: 1;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
ol, ol li{
    width: 100%;
    height: 197px;
    overflow: hidden;
    padding-top: 10px;
}
ol li{
    font-size: 15px;
    line-height: 25px;
    text-indent: 2em;
}
.bg{
    background: skyblue;
}
</style>
