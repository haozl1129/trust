<template>
    <div id="app" data-server-rendered="true">
        <!-- <div id="nav"> -->
        <!-- <router-link to="/productdetail/22">详情</router-link> |
        <router-link to="/about">About111</router-link> -->
        <!-- </div> -->
        <router-view />
    </div>
</template>
<script>
</script>
<style lang="scss">
// @font-face {
//     font-family: "pf";
//     src: url("~@/assets/font/PingFangRegular.ttf");
//     font-weight: normal;
//     font-style: normal;
// }

// @font-face {
//     font-family: "pfh";
//     src: url("~@/assets/font/PingFangHeavy.ttf");
//     font-weight: normal;
//     font-style: normal;
// }

// @font-face {
//     font-family: "pfm";
//     src: url("~@/assets/font/PingFangMedium.ttf");
//     font-weight: normal;
//     font-style: normal;
// }

// @font-face {
//     font-family: "pfnum";
//     src: url("~@/assets/font/ImpactLTStd.otf");
//     font-weight: normal;
//     font-style: normal;
// }

html,
body {
    margin: 0;
    background-color: #211c34;
    font-size: 16px;
    font-family: pf, "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
}

.box-wrap {
    display: -webkit-flex;
    display: flex;
    flex-flow: wrap;
}

.box-flex {
    flex: 1;
}

.box-auto {
    flex: 0;
}

.box-v-middle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.notice-fc {
    color: #de3f38;
}

#nav {
    padding: 0px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

ul {
    margin: 0;
    padding: 0;

    li {
        list-style: none;
        display: inline-block;
    }
}

ul.tab {
    li {
        float: left;
    }
}

a,
a:link,
a:visited,
a:hover,
a:active {
    color: #fff;
    text-decoration: none;
}

.text-center {
    text-align: center;
}
</style>