window.__require = (function e(a, n, i) {
    function o(s, l) {
        if (!n[s]) {
            if (!a[s]) {
                var c = s.split("/");
                if (((c = c[c.length - 1]), !a[c])) {
                    var N = "function" == typeof __require && __require;
                    if (!l && N) return N(c, !0);
                    if (m) return m(c, !0);
                    throw new Error("Cannot find module '" + s + "'");
                }
                s = c;
            }
            var u = (n[s] = { exports: {} });
            a[s][0].call(
                u.exports,
                function (e) {
                    return o(a[s][1][e] || e);
                },
                u,
                u.exports,
                e,
                a,
                n,
                i
            );
        }
        return n[s].exports;
    }
    for (var m = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
    return o;
})(
    {
        BC_message: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "b6257GyeVtGb5GSaKK0sDvR", "BC_message"),
                    cc.Class({
                        extends: cc.Component,
                        properties: { rich_text: cc.RichText },
                        setView: function (a) {
                            (this.playerInfo = e("PlayerInfo").getInstant), (this.rich_text.string = "player" + a.nickName + " in the game<color=#94FF86>" + a.gameName + "</color>winning<color=#CD7F32>" + a.win / this.playerInfo.exchangeRate + "</color>gold"), this.actionDo();
                        },
                        actionDo: function () {
                            var e = this;
                            (this.rich_text.node.x = 800),
                                cc
                                    .tween(this.rich_text.node)
                                    .to(5, { position: cc.v2(-800, 0) })
                                    .call(function () {
                                        e.node.destroy();
                                    })
                                    .start();
                        },
                    }),
                    cc._RF.pop();
            },
            { PlayerInfo: void 0 },
        ],
        gameConfig_16game: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "b7eecbkBcBGtIw5r4LAo6Aa", "gameConfig_16game"),
                    (a.exports = {
                        "\u51b0\u7403\u7a81\u7834": { iconName: "bingqiutupo", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u767e\u4eba\u725b\u725b": { iconName: "bairenniuniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u4e8c\u5341\u4e00\u70b9": { iconName: "21dian", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u94bb\u77f3": { iconName: "shuiguozuanshi", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u6708\u5149\u5b9d\u76d2": { iconName: "yueguangbaohe", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u4e4b\u590f": { iconName: "shuiguozhixia", bundleName: "", gameType: 2, lineName: "5", isShow: 1, noUse: "" },
                        "\u57c3\u53ca\u73cd\u5b9d": { iconName: "aijizhenbao", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u94bb\u77f3\u6355\u9c7c": { iconName: "zuanshibuyu", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u5c0f\u739b\u4e3d": { iconName: "shuiguoxiaomali", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u592a\u6781\u718a\u732b": { iconName: "taijixiongmao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u8d22\u795e\u593a\u5b9d": { iconName: "caishenduobao", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u7ef4\u52a0\u65af\u4e4b\u591c": { iconName: "weijiasizhiye", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u6c34\u6d52\u4f20": { iconName: "shuihuzhuan", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u7f8e\u5973\u6e38\u6cf3\u961f": { iconName: "meinvyouyongdui", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u4e94\u798f\u4e34\u95e8": { iconName: "wufulinmen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u4e5d\u7ebf\u62c9\u738b": { iconName: "jiuxianlawang", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u75af\u72c2\u5c0f\u4e11": { iconName: "fengkuangxiaochou", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        gameConfig_40game: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "88859UVSyVINp7cO4/wggUc", "gameConfig_40game"),
                    (a.exports = {
                        penaltyshooters: { iconName: "penatltyshooters", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        premierleaguestar: { iconName: "premierleaguestar", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        ghostpirates: { iconName: "ghostpirates", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u98de\u79bd\u8d70\u517d": { iconName: "feiqinzoushou", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        ColorGame: { iconName: "colorgame", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u9f99\u864e\u6597": { iconName: "longhudou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u8d22\u795e\u5230": { iconName: "caishendao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u6597\u725b": { iconName: "douniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u795e\u517d": { iconName: "shenshou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u7ffb\u786c\u5e01": { iconName: "fanyingbi", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u7ea2\u9ed1\u5927\u6218": { iconName: "hongheidazhan", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        freespin: { iconName: "freespin", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        superspin: { iconName: "superspin", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        jackpotspin: { iconName: "jackpotspin", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        lucky777: { iconName: "lucky777", bundleName: "", gameType: 2, lineName: "3", isShow: 1, noUse: "" },
                        luckypoker: { iconName: "luckypoker", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        goldcup: { iconName: "goldcup", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        "\u6df1\u6d77\u6355\u9c7c": { iconName: "shenhaibuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        FireLinkRR: { iconName: "FireLinkRR", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkR66: { iconName: "FireLinkRoute66", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkOS: { iconName: "FireLinkOlveraStreet", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkCS: { iconName: "FireLinkChinaStreet", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u5feb\u4e50\u6355\u9c7c": { iconName: "kuailebuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        "\u75af\u72c2\u5c0f\u4e11": { iconName: "fengkuangxiaochou", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" },
                        "\u5927\u5bcc\u8c6a": { iconName: "dafuhao", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" },
                        "\u9e70\u592b\u4eba": { iconName: "yingfuren", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u6f58\u91d1\u83b2GW": { iconName: "panjinliangw", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u4e4b\u590f": { iconName: "shuiguozhixia", bundleName: "", gameType: 2, lineName: "5", isShow: 1, noUse: "" },
                        "\u7f57\u9a6c": { iconName: "roma", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u516b\u53662": { iconName: "bagua2", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        "\u4e8c\u5341\u4e00\u70b9": { iconName: "21dian", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "ATT\u7ffb\u724c\u673a": { iconName: "attlianhuanpao", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u767e\u5bb6\u4e50": { iconName: "baijiale", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u767e\u4eba\u725b\u725b": { iconName: "bairenniuniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u5954\u9a70\u5b9d\u9a6c": { iconName: "benchibaoma", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u5fb7\u5dde\u6251\u514b": { iconName: "dezhoupuke", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u4fc4\u7f57\u65af\u8f6e\u76d8": { iconName: "eluosilunpan", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u7687\u5bb6\u8d5b\u9a6c": { iconName: "huangjiasaima", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u91d1\u8d22\u795e": { iconName: "jincaishen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u5c0f\u4e11": { iconName: "joker", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u94c3\u94db\u6e38\u620f": { iconName: "lingdangyouxi", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u68ee\u6797\u821e\u4f1a": { iconName: "senlinwuhui", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u5c0f\u739b\u4e3d": { iconName: "shuiguoxiaomali", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u94bb\u77f3": { iconName: "shuiguozuanshi", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u6c34\u6d52\u4f20": { iconName: "shuihuzhuan", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u7ef4\u52a0\u65af\u4e4b\u591c": { iconName: "weijiasizhiye", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u8db3\u7403\u738b\u56fd": { iconName: "zuqiuwanggu", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        gameConfig_8game: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "50d67W2WEVDxoQT6+PVRnv6", "gameConfig_8game"), (a.exports = { "\u6c34\u679c\u5c0f\u739b\u4e3d": { iconName: "shuiguoxiaomali", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }, "\u706b\u713088": { iconName: "fire88", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }, "\u6c34\u679c\u94bb\u77f3": { iconName: "shuiguozuanshi", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" }, "\u7f8e\u5973\u6e38\u6cf3\u961f": { iconName: "meinvyouyongdui", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" }, "\u7cbe\u7075\u5973\u738b": { iconName: "jinglingnvwang", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" }, ghostpirates: { iconName: "ghostpirates", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, FireLinkOS: { iconName: "FireLinkOlveraStreet", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" }, "\u9e70\u592b\u4eba": { iconName: "yingfuren", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" } }), cc._RF.pop();
            },
            {},
        ],
        gameConfig_Mega999: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "9af98KGCG5GAKEcpnG/y/hf", "gameConfig_Mega999"), (a.exports = { "\u718a\u51fa\u6ca1": { iconName: "BonusBears_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u5927\u84dd": { iconName: "GreatBlue_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u4f8f\u7f57\u7eaa": { iconName: "trex_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u72c2\u70ed\u975e\u6d32": { iconName: "Safari_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u897f\u6e38\u4e89\u97382": { iconName: "xiyouzhengba2_mega999", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u4fc4\u7f57\u65af\u8f6e\u76d836": { iconName: "eluosilunpan_mega999", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u718a\u51fa\u6ca1918": { iconName: "BonusBears_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u5927\u84dd918": { iconName: "GreatBlue_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u4f8f\u7f57\u7eaa918": { iconName: "trex_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u72c2\u70ed\u975e\u6d32918": { iconName: "Safari_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u897f\u6e38\u4e89\u97382918": { iconName: "xiyouzhengba2_918", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u4fc4\u7f57\u65af\u8f6e\u76d836918": { iconName: "eluosilunpan_918", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" } }), cc._RF.pop();
            },
            {},
        ],
        "gameConfig_WL888\u5e7f\u5dde\u5ba2\u6237": [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "d5be1+p4ZxOxakpVG25TPlH", "gameConfig_WL888\u5e7f\u5dde\u5ba2\u6237"), (a.exports = { "\u5feb\u4e50\u6355\u9c7c": { iconName: "kuailebuyu", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u767e\u5bb6\u4e50": { iconName: "baijiale", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" }, "\u6c34\u679c\u94bb\u77f3": { iconName: "shuiguozuanshi", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" }, "\u9f99\u864e\u6597": { iconName: "longhudou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" }, "\u4fc4\u7f57\u65af\u8f6e\u76d8": { iconName: "eluosilunpan", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u91d1\u8d22\u795e": { iconName: "jincaishen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" }, "\u6c34\u679c\u5c0f\u739b\u4e3d": { iconName: "shuiguoxiaomali", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }, "\u5fb7\u5dde\u6251\u514b": { iconName: "dezhoupuke", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" } }), cc._RF.pop();
            },
            {},
        ],
        gameConfig_all: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "ca29cITf25C3pWBbNCJ2+Oq", "gameConfig_all"),
                    (a.exports = {
                        "\u52a8\u7269\u8dd1\u8dd1\u8dd1": { iconName: "dongwupaopaopao", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        UpDown7: { iconName: "7updown", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        IceStone: { iconName: "IceStone", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u94c1\u62f36": { iconName: "tiequan6", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u897f\u6e38\u4e89\u9738\u738b\u8005\u5929\u4e0b": { iconName: "xiyouzhengbs_wangzhetianxia", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "freespin\u6a2a\u7248": { iconName: "freespin", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        "\u9ebb\u5c06\u80e1\u4e86": { iconName: "majianghule", bundleName: "", gameType: 2, lineName: "2000", isShow: 1, noUse: "" },
                        "\u91d1\u8d22\u795e": { iconName: "jincaishen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u94bb\u77f3\u6355\u9c7c": { iconName: "zuanshibuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        "\u57c3\u53ca\u73cd\u5b9d": { iconName: "aijizhenbao", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        "\u963f\u5179\u7279\u514b": { iconName: "aiziteke", bundleName: "", gameType: 2, lineName: "5", isShow: 1, noUse: "" },
                        "\u963f\u62c9\u4e01": { iconName: "alading", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u75af\u72c2\u6355\u9c7c": { iconName: "fengkuangbuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        PantherQueen: { iconName: "PantherQueen", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        HerculesSonZeus: { iconName: "HerculesSonZeus", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u4fc4\u7f57\u65af\u8f6e\u76d836": { iconName: "eluosilunpan36", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u8d22\u795e\u53d1\u53d1\u53d1": { iconName: "caishenfafafa", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        FireLinkRR: { iconName: "FireLinkRR", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkR66: { iconName: "FireLinkRoute66", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkOS: { iconName: "FireLinkOlveraStreet", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkCS: { iconName: "FireLinkChinaStreet", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        MadameDestiny: { iconName: "MadameDestiny", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" },
                        "\u5feb\u4e50\u6355\u9c7c": { iconName: "kuailebuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        "\u9f99\u864e\u6597": { iconName: "longhudou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u7ea2\u9ed1\u5927\u6218": { iconName: "hongheidazhan", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u75af\u72c2\u5c0f\u4e11": { iconName: "fengkuangxiaochou", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" },
                        "\u9ebb\u5c06\u767e\u4e50\u95e8": { iconName: "majiangbailemen", bundleName: "", gameType: 2, lineName: "1024", isShow: 1, noUse: "" },
                        penaltyshooters: { iconName: "penatltyshooters", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        "\u70c8\u706b\u82f1\u96c4": { iconName: "liehuoyingxiong", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u6ca7\u6d77\u9057\u73e0": { iconName: "canghaiyizhu", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u62a2\u5e84\u767e\u5bb6\u4e50": { iconName: "baijialeQZ", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        premierleaguestar: { iconName: "premierleaguestar", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        ghostpirates: { iconName: "ghostpirates", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        spinBig: { iconName: "spinbig", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u98de\u79bd\u8d70\u517d": { iconName: "feiqinzoushou", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        ColorGame: { iconName: "colorgame", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u8d22\u795e\u5230": { iconName: "caishendao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u6597\u725b": { iconName: "douniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u6597\u9e21": { iconName: "douji", bundleName: "", gameType: 0, lineName: "", isShow: 0, noUse: "" },
                        "\u795e\u517d": { iconName: "shenshou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u7ffb\u786c\u5e01": { iconName: "fanyingbi", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u718a\u732b\u7af9\u5b50": { iconName: "xiongmaozhuzi", bundleName: "", gameType: 2, lineName: "30", isShow: 1, noUse: "" },
                        "\u6bd4\u7ffc\u53cc\u98de": { iconName: "biyishuangfei", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u8df3\u9ad8\u9ad8": { iconName: "tiaogaogao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u7eff\u53f6\u6c34\u679c": { iconName: "lvyeshuiguo", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6cd5\u8001\u5b9d\u85cf": { iconName: "aijibaozang", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        freespin: { iconName: "freespin", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        superspin: { iconName: "superspin", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        jackpotspin: { iconName: "jackpotspin", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        lucky777: { iconName: "lucky777", bundleName: "", gameType: 2, lineName: "3", isShow: 1, noUse: "" },
                        luckypoker: { iconName: "luckypoker", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        goldcup: { iconName: "goldcup", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        "\u6df1\u6d77\u6355\u9c7c": { iconName: "shenhaibuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        "\u6d77\u738b2": { iconName: "haiwang2", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        "\u79d1\u8bfa\u7403": { iconName: "kenuo", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u5fb7\u5dde\u725b\u4ed4": { iconName: "dezhouniuzai", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u7eb8\u724c\u8001\u864e\u673a": { iconName: "zhipailaohuji", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u4f01\u9e45\u5bfb\u5b9d": { iconName: "qiexunbao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u91d1\u5e93": { iconName: "jinku", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u5927\u5bcc\u8c6a": { iconName: "dafuhao", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        WildBullAlo: { iconName: "WildBullAlo", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u96f7\u9706\u6218\u673a": { iconName: "leitingzhanji", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                        "\u4e5d\u7ebf\u62c9\u738b": { iconName: "jiuxianlawang", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6597\u5730\u4e3b": { iconName: "doudizhu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u4e8c\u516b\u6760": { iconName: "erbagang", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u9e70\u592b\u4eba": { iconName: "yingfuren", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u6f58\u91d1\u83b2GW": { iconName: "panjinliangw", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u4e4b\u590f": { iconName: "shuiguozhixia", bundleName: "", gameType: 2, lineName: "5", isShow: 1, noUse: "" },
                        "\u7f57\u9a6c": { iconName: "roma", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        "\u62db\u8d22\u8fdb\u5b9d": { iconName: "zhaocaijinbao", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u516b\u53662": { iconName: "bagua2", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" },
                        "\u4e8c\u5341\u4e00\u70b9": { iconName: "21dian", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "ATT\u7ffb\u724c\u673a": { iconName: "attlianhuanpao", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u706b\u51e4\u51f0": { iconName: "huofenghuang", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u51b0\u7403\u7a81\u78342": { iconName: "bingqiutupo2", bundleName: "", gameType: 2, lineName: "88", isShow: 1, noUse: "" },
                        "\u767e\u5bb6\u4e50": { iconName: "baijiale", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u767e\u4eba\u725b\u725b": { iconName: "bairenniuniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u5954\u9a70\u5b9d\u9a6c": { iconName: "benchibaoma", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u51b0\u7403\u7a81\u7834": { iconName: "bingqiutupo", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u718a\u51fa\u6ca1": { iconName: "BonusBears", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u8d22\u795e\u593a\u5b9d": { iconName: "caishenduobao", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u8d22\u6e90\u6eda\u6eda": { iconName: "caiyuangungun", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u5fb7\u5dde\u6251\u514b": { iconName: "dezhoupuke", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u4fc4\u7f57\u65af\u8f6e\u76d8": { iconName: "eluosilunpan", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u706b\u713088": { iconName: "fire88", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u5927\u84dd": { iconName: "GreatBlue", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u7ea2\u5305\u63a5\u9f99": { iconName: "hongbaojielong", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u7687\u5bb6\u8d5b\u9a6c": { iconName: "huangjiasaima", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u50f5\u5c38\u5148\u751f": { iconName: "jiangshixiansheng", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u7ecf\u5178\u6c34\u679c\u673a": { iconName: "jingdianshuiguoji", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u7cbe\u7075\u5973\u738b": { iconName: "jinglingnvwang", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u9526\u8863\u536b": { iconName: "jinyiwei", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u5c0f\u4e11": { iconName: "joker", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u8fde\u73af\u593a\u5b9d": { iconName: "lianhuanduobao", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u94c3\u94db\u6e38\u620f": { iconName: "lingdangyouxi", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u5415\u5e03\u620f\u8c82\u8749": { iconName: "lvbuxidiaochan", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u7f8e\u5973\u6e38\u6cf3\u961f": { iconName: "meinvyouyongdui", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u68a6\u5e7b\u5973\u795e": { iconName: "menghuannvshen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u54ea\u5412\u95f9\u6d77": { iconName: "nezhanaohai", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u6f58\u91d1\u83b2": { iconName: "panjinlian", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u8dd1\u5f97\u5feb": { iconName: "paodekuai", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u62a2\u5e84\u725b\u725b": { iconName: "qiangzhuangniuniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u72c2\u70ed\u975e\u6d32": { iconName: "Safari", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u4e09\u6253\u767d\u9aa8\u7cbe": { iconName: "sandabaigujing", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u68ee\u6797\u821e\u4f1a": { iconName: "senlinwuhui", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u4e0a\u6d77\u96f6\u96f6\u53d1": { iconName: "shanghai00fa", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u673a": { iconName: "shuiguoji", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u5c0f\u739b\u4e3d": { iconName: "shuiguoxiaomali", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u94bb\u77f3": { iconName: "shuiguozuanshi", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u6c34\u6d52\u4f20": { iconName: "shuihuzhuan", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u592a\u6781\u718a\u732b": { iconName: "taijixiongmao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u4f8f\u7f57\u7eaa": { iconName: "trex", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u65fa\u5b9d": { iconName: "wangbao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u4e07\u5723\u8282": { iconName: "wangshengjieqianye", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u7ef4\u52a0\u65af\u4e4b\u591c": { iconName: "weijiasizhiye", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u4e94\u798f\u4e34\u95e8": { iconName: "wufulinmen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u897f\u6e38\u8bb0": { iconName: "xiyouji", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u897f\u6e38\u4e89\u97382": { iconName: "xiyouzhengba2", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u62bc\u5927\u5c0f": { iconName: "yadaxiao", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u4e00\u8def\u53d1\u53d1\u53d1": { iconName: "yilufafafa", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u6708\u5149\u5b9d\u76d2": { iconName: "yueguangbaohe", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u7389\u84b2\u56e2": { iconName: "yuputuan", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u7389\u84b2\u56e22": { iconName: "yuputuan2", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u70b8\u91d1\u82b1": { iconName: "zhajinhua", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u5fe0\u809d\u4e49\u80c6": { iconName: "zhongganyidan", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u8db3\u7403\u738b\u56fd": { iconName: "zuqiuwanggu", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        gameConfig_baxiputaoya: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "0c4ecT/jE5D0Zhni9sWMLTI", "gameConfig_baxiputaoya"),
                    (a.exports = { penaltyshooters: { iconName: "penatltyshooters", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" }, "\u5fb7\u5dde\u6251\u514b": { iconName: "dezhoupuke", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" }, "\u9f99\u864e\u6597": { iconName: "longhudou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" }, goldcup: { iconName: "goldcup", bundleName: "", gameType: 2, lineName: "20", isShow: 1, noUse: "" }, "\u6df1\u6d77\u6355\u9c7c": { iconName: "shenhaibuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" }, "\u6d77\u738b2": { iconName: "haiwang2", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" }, "\u75af\u72c2\u5c0f\u4e11": { iconName: "fengkuangxiaochou", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" }, "\u9e70\u592b\u4eba": { iconName: "yingfuren", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u4e8c\u5341\u4e00\u70b9": { iconName: "21dian", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" }, "\u91d1\u5e93": { iconName: "jinku", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" }, "\u57c3\u53ca\u73cd\u5b9d": { iconName: "aijizhenbao", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u767e\u5bb6\u4e50": { iconName: "baijiale", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" }, "\u4fc4\u7f57\u65af\u8f6e\u76d8": { iconName: "eluosilunpan", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u7687\u5bb6\u8d5b\u9a6c": { iconName: "huangjiasaima", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u94c3\u94db\u6e38\u620f": { iconName: "lingdangyouxi", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u8db3\u7403\u738b\u56fd": { iconName: "zuqiuwanggu", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" } }),
                    cc._RF.pop();
            },
            {},
        ],
        gameConfig_maaaaaaaaaaaaaaaa_: [
            function (e, a) {
                "use strict";
                var n;
                cc._RF.push(a, "cd08frl8itL8osrJtmFZU8j", "gameConfig_maaaaaaaaaaaaaaaa_");
                var i =
                    (((n = {
                        "\u98de\u79bd\u8d70\u517d": { iconName: "feiqinzoushou", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        ColorGame: { iconName: "colorgame", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u9f99\u864e\u6597": { iconName: "longhudou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u6597\u725b": { iconName: "douniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u795e\u517d": { iconName: "shenshou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u7ffb\u786c\u5e01": { iconName: "fanyingbi", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u7ea2\u9ed1\u5927\u6218": { iconName: "hongheidazhan", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        spinBig: { iconName: "spinbig", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        penaltyshooters: { iconName: "penatltyshooters", bundleName: "", gameType: 1, lineName: "20", isShow: 1, noUse: "" },
                        "\u6df1\u6d77\u6355\u9c7c": { iconName: "shenhaibuyu", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u62a2\u5e84\u725b\u725b": { iconName: "qiangzhuangniuniu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u6597\u5730\u4e3b": { iconName: "doudizhu", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u79d1\u8bfa\u7403": { iconName: "kenuo", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u767e\u5bb6\u4e50": { iconName: "baijiale", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u68ee\u6797\u821e\u4f1a": { iconName: "senlinwuhui", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u5fb7\u5dde\u6251\u514b": { iconName: "dezhoupuke", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        FireLinkRR: { iconName: "FireLinkRR", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkR66: { iconName: "FireLinkRoute66", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkOS: { iconName: "FireLinkOlveraStreet", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        FireLinkCS: { iconName: "FireLinkChinaStreet", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u8dd1\u5f97\u5feb": { iconName: "paodekuai", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" },
                        "\u75af\u72c2\u5c0f\u4e11": { iconName: "fengkuangxiaochou", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" },
                        "\u7ecf\u5178\u6c34\u679c\u673a": { iconName: "jingdianshuiguoji", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u673a": { iconName: "shuiguoji", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u5c0f\u739b\u4e3d": { iconName: "shuiguoxiaomali", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6c34\u679c\u94bb\u77f3": { iconName: "shuiguozuanshi", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" },
                        "\u94c3\u94db\u6e38\u620f": { iconName: "lingdangyouxi", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" },
                    })["\u9f99\u864e\u6597"] = { iconName: "longhudou", bundleName: "", gameType: 0, lineName: "", isShow: 1, noUse: "" }),
                    (n.金库 = { iconName: "jinku", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" }),
                    (n.大富豪 = { iconName: "dafuhao", bundleName: "", gameType: 2, lineName: "10", isShow: 1, noUse: "" }),
                    (n.雷霆战机 = { iconName: "leitingzhanji", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }),
                    (n.九线拉王 = { iconName: "jiuxianlawang", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }),
                    (n.鹰夫人 = { iconName: "yingfuren", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }),
                    (n.旺宝 = { iconName: "wangbao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" }),
                    (n.水果之夏 = { iconName: "shuiguozhixia", bundleName: "", gameType: 2, lineName: "5", isShow: 1, noUse: "" }),
                    (n.罗马 = { iconName: "roma", bundleName: "", gameType: 2, lineName: "15", isShow: 1, noUse: "" }),
                    (n.招财进宝 = { iconName: "zhaocaijinbao", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }),
                    (n.海王2 = { iconName: "haiwang2", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }),
                    (n.埃及珍宝 = { iconName: "aijizhenbao", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }),
                    (n.阿兹特克 = { iconName: "aiziteke", bundleName: "", gameType: 2, lineName: "5", isShow: 1, noUse: "" }),
                    (n.阿拉丁 = { iconName: "alading", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" }),
                    (n.ATT翻牌机 = { iconName: "attlianhuanpao", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }),
                    (n.太极熊猫 = { iconName: "taijixiongmao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" }),
                    (n.维加斯之夜 = { iconName: "weijiasizhiye", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }),
                    (n.五福临门 = { iconName: "wufulinmen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" }),
                    (n.火焰88 = { iconName: "fire88", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }),
                    (n.财源滚滚 = { iconName: "caiyuangungun", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }),
                    (n.财神夺宝 = { iconName: "caishenduobao", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }),
                    (n.小丑 = { iconName: "joker", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" }),
                    (n.金财神 = { iconName: "jincaishen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" }),
                    (n.一路发发发 = { iconName: "yilufafafa", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" }),
                    (n.万圣节 = { iconName: "wangshengjieqianye", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }),
                    n);
                (a.exports = i), cc._RF.pop();
            },
            {},
        ],
        gameConfig_shibo: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "2e4425kFOtLfbcE4izj7N0T", "gameConfig_shibo"),
                    (a.exports = {
                        "\u9ebb\u5c06\u767e\u4e50\u95e8": { iconName: "majiangbailemen", bundleName: "", gameType: 2, lineName: "1024", isShow: 1, noUse: "" },
                        "\u7eb8\u724c\u8001\u864e\u673a": { iconName: "zhipailaohuji", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u4f01\u9e45\u5bfb\u5b9d": { iconName: "qiexunbao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u70c8\u706b\u82f1\u96c4": { iconName: "liehuoyingxiong", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u6ca7\u6d77\u9057\u73e0": { iconName: "canghaiyizhu", bundleName: "", gameType: 2, lineName: "50", isShow: 1, noUse: "" },
                        "\u718a\u732b\u7af9\u5b50": { iconName: "xiongmaozhuzi", bundleName: "", gameType: 2, lineName: "30", isShow: 1, noUse: "" },
                        "\u6bd4\u7ffc\u53cc\u98de": { iconName: "biyishuangfei", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u8df3\u9ad8\u9ad8": { iconName: "tiaogaogao", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u7eff\u53f6\u6c34\u679c": { iconName: "lvyeshuiguo", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u6cd5\u8001\u5b9d\u85cf": { iconName: "aijibaozang", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u8d22\u795e\u53d1\u53d1\u53d1": { iconName: "caishenfafafa", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u4e5d\u7ebf\u62c9\u738b": { iconName: "jiuxianlawang", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u50f5\u5c38\u5148\u751f": { iconName: "jiangshixiansheng", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" },
                        "\u4e94\u798f\u4e34\u95e8": { iconName: "wufulinmen", bundleName: "", gameType: 2, lineName: "243", isShow: 1, noUse: "" },
                        "\u6c34\u6d52\u4f20": { iconName: "shuihuzhuan", bundleName: "", gameType: 2, lineName: "9", isShow: 1, noUse: "" },
                        "\u5feb\u4e50\u6355\u9c7c": { iconName: "kuailebuyu", bundleName: "", gameType: 3, lineName: "", isShow: 1, noUse: "" },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        gameConfig_xiyou1game: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "6f802QLyIFMFqddlbe0tiJm", "gameConfig_xiyou1game"), (a.exports = { "\u897f\u6e38\u4e89\u9738\u738b\u8005\u5929\u4e0b": { iconName: "xiyouzhengbs_wangzhetianxia", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" } }), cc._RF.pop();
            },
            {},
        ],
        gameConfig: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "da4cbthRF5F4byJ8BAwFNtf", "gameConfig"), (a.exports = { "\u718a\u51fa\u6ca1": { iconName: "BonusBears_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u5927\u84dd": { iconName: "GreatBlue_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u4f8f\u7f57\u7eaa": { iconName: "trex_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u72c2\u70ed\u975e\u6d32": { iconName: "Safari_mega999", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u897f\u6e38\u4e89\u97382": { iconName: "xiyouzhengba2_mega999", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u4fc4\u7f57\u65af\u8f6e\u76d8": { iconName: "eluosilunpan_mega999", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u718a\u51fa\u6ca1918": { iconName: "BonusBears_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u5927\u84dd918": { iconName: "GreatBlue_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u4f8f\u7f57\u7eaa918": { iconName: "trex_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u72c2\u70ed\u975e\u6d32918": { iconName: "Safari_918", bundleName: "", gameType: 2, lineName: "25", isShow: 1, noUse: "" }, "\u897f\u6e38\u4e89\u97382918": { iconName: "xiyouzhengba2_918", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" }, "\u4fc4\u7f57\u65af\u8f6e\u76d8918": { iconName: "eluosilunpan_918", bundleName: "", gameType: 1, lineName: "", isShow: 1, noUse: "" } }), cc._RF.pop();
            },
            {},
        ],
        gameIconCtrl: [
            function (e, a) {
                "use strict";
                cc._RF.push(a, "19dbdKZKHNHRLLnyl9xGU5m", "gameIconCtrl"),
                    cc.Class({
                        extends: cc.Component,
                        properties: { icon_sp: cc.Sprite, line_sp: cc.Sprite, comingsoon: cc.Sprite, favor_node: cc.Node },
                        onLoad: function () {
                            (this.canvasNode = cc.find("Canvas")), (this.playerInfo = e("PlayerInfo").getInstant);
                        },
                        start: function () {
                            this.initView();
                        },
                        update: function () {
                            this.language != cc.sys.localStorage.getItem("language") && ((this.language = cc.sys.localStorage.getItem("language")), this.ChangeLanguage(this.language));
                        },
                        ChangeLanguage: function (e) {
                            switch (e) {
                                case "zh":
                                    this.folder = "icon_zh";
                                    break;
                                case "fr":
                                case "th":
                                case "es":
                                case "vn":
                                case "my":
                                case "kp":
                                case "in":
                                case "id":
                                case "en":
                                default:
                                    this.folder = "icon_en";
                            }
                            var a = this;
                            cc.resources.load("Gameicon/" + this.folder + "/" + this.data.iconName, cc.SpriteFrame, function (e, n) {
                                a.icon_sp && (a.icon_sp.spriteFrame = n);
                            });
                        },
                        initView: function () {
                            var e = this;
                            this.node.name = this.index;
                            var a = this;
                            (this.line_sp.node.active = !1),
                                (this.favor_node.active = !1),
                                2 == this.data.gameType &&
                                    cc.resources.load("Gameicon/line/" + this.data.lineName, cc.SpriteFrame, function (e, n) {
                                        a.line_sp && ((a.line_sp.spriteFrame = n), (a.line_sp.node.active = !0));
                                    }),
                                this.node.getChildByName("icon").on("mouseenter", function () {
                                    (e.favor_node.active = !0), (e.node.getChildByName("icon").scale = 1.1);
                                }),
                                this.node.getChildByName("icon").on("mouseleave", function () {
                                    (e.favor_node.active = !1), (e.node.getChildByName("icon").scale = 1);
                                }),
                                this.favor_node.on("mouseenter", function () {
                                    (e.node.getChildByName("icon").scale = 1.1), (e.favor_node.active = !0);
                                }),
                                this.favor_node.on("mouseleave", function () {
                                    (e.node.getChildByName("icon").scale = 1), (e.favor_node.active = !1);
                                }),
                                this.checkFavorData();
                        },
                        iconAction: function () {
                            var e = cc.v2(0, 0);
                            (this.icon_sp.node.x = 700),
                                cc
                                    .tween(this.node)
                                    .to(1, { position: e })
                                    .call(function () {})
                                    .start();
                        },
                        setData: function (e, a) {
                            (this.index = a), (this.data = e), (this.node.gameType = e.gameType);
                        },
                        favorClick: function () {
                            this.node.isFavor ? (this.node.isFavor = 0) : (this.node.isFavor = 1), this.updateFavorData();
                        },
                        updateFavorData: function () {
                            var e = this.playerInfo.readData_Function("favorList");
                            if ((e || (e = []), this.node.isFavor)) e.push(this.node.name), (this.favor_node.children[0].active = !1), (this.favor_node.children[1].active = !0);
                            else {
                                for (var a in e)
                                    if (this.node.name == e[a]) {
                                        e.splice(a, 1);
                                        break;
                                    }
                                (this.favor_node.children[0].active = !0), (this.favor_node.children[1].active = !1);
                            }
                            this.playerInfo.writeData_Function("favorList", e);
                        },
                        checkFavorData: function () {
                            var e = this.playerInfo.readData_Function("favorList");
                            if (e) for (var a in ((this.favor_node.children[0].active = !0), (this.favor_node.children[1].active = !1), (this.node.isFavor = 0), e)) this.node.name == e[a] && ((this.favor_node.children[0].active = !1), (this.favor_node.children[1].active = !0), (this.node.isFavor = 1));
                        },
                        onclick: function (a) {
                            var n = null,
                                i = this.canvasNode.getComponent("LobbyMain").netWork.socket;
                            switch (this.node.name) {
                                default:
                                    break;
                                case "\u94bb\u77f3\u6355\u9c7c":
                                    this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Fish");
                                    break;
                                case "\u6d77\u738b2":
                                    this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Fishhaiwang2");
                                    break;
                                case "\u6df1\u6d77\u6355\u9c7c":
                                    this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Shenhaibuyu");
                                    break;
                                case "\u96f7\u9706\u6218\u673a":
                                    this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Leitingzhanji");
                                    break;
                                case "\u5feb\u4e50\u6355\u9c7c":
                                    this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Kuailebuyu");
                                    break;
                                case "\u75af\u72c2\u6355\u9c7c":
                                    this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Fishfengkuangbuyu");
                                    break;
                                case "\u4e8c\u5341\u4e00\u70b9":
                                    (a.currentTarget.getComponent(cc.Button).interactable = !1), (window.BLACKJACK_LOBBYNET = i), this.QieHuanScene_normal("game_21dian");
                                    break;
                                case "\u57c3\u53ca\u73cd\u5b9d":
                                    (window.EF_LOBBYNET = i), this.QieHuanScene("Slot_EgyptianTreasures");
                                    break;
                                case "\u963f\u5179\u7279\u514b":
                                    (window.AZTK_LOBBYNET = i), this.QieHuanScene("Slot_aztec");
                                    break;
                                case "\u963f\u62c9\u4e01":
                                    (window.ALADING_LOBBYNET = i), this.QieHuanScene("Slot_Alading");
                                    break;
                                case "WildBullAlo":
                                    (window.WBA_LOBBYNET = i), this.QieHuanScene("Slot_WildBuffAlo");
                                    break;
                                case "FireLinkRR":
                                    (window.FLRW_LOBBYNET = i), this.QieHuanScene("Slot_FireLinkRiverWalk");
                                    break;
                                case "FireLinkCS":
                                    (window.FLCS_LOBBYNET = i), this.QieHuanScene("Slot_FireLinkChinaStreet");
                                    break;
                                case "FireLinkOS":
                                    (window.FLOS_LOBBYNET = i), this.QieHuanScene("Slot_FireLinkOlveraStreet");
                                    break;
                                case "FireLinkR66":
                                    (window.FLR66_LOBBYNET = i), this.QieHuanScene("Slot_FireLinkRoute66");
                                    break;
                                case "ATT\u7ffb\u724c\u673a":
                                    (window.ATT_LOBBYNET = i), this.QieHuanScene("game_ATTlianhuanpao");
                                    break;
                                case "\u79d1\u8bfa\u7403":
                                    (window.KNQ_LOBBYNET = i), this.QieHuanScene("game_realball");
                                    break;
                                case "\u706b\u51e4\u51f0":
                                    (window.HFH_LOBBYNET = i), this.QieHuanScene("game_ATThuofenghuang");
                                    break;
                                case "\u4e8c\u516b\u6760":
                                    (n = e("TwoEightNetWork").getInstant).setLobbyMainObj_Function(this.canvasNode.getComponent("LobbyMain")), n.loginGame_Function("", 16011, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u767e\u5bb6\u4e50":
                                    (n = e("baijialeNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16004, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u62a2\u5e84\u767e\u5bb6\u4e50":
                                    (n = e("baijialeQZNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16021, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u52a8\u7269\u8dd1\u8dd1\u8dd1":
                                    (a.currentTarget.getComponent(cc.Button).interactable = !1), (window.DWPPP_LOBBYNET = i), this.QieHuanScene_normal("game_dongwupaopaopao");
                                    break;
                                case "\u767e\u4eba\u725b\u725b":
                                    (n = e("bairenniuniuNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 13501, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u5954\u9a70\u5b9d\u9a6c":
                                    (n = e("bcbm_NetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16008, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u98de\u79bd\u8d70\u517d":
                                    (n = e("feiqinzoushou_NetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16015, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u9ebb\u5c06\u80e1\u4e86":
                                    (window.majianghule_LOBBYNET = i), this.QieHuanScene("Slot_majianghule");
                                    break;
                                case "\u51b0\u7403\u7a81\u7834":
                                    (window.BQTP_LOBBYNET = i), this.QieHuanScene("Slot_bingqiutupo");
                                    break;
                                case "\u51b0\u7403\u7a81\u78342":
                                    (window.BQTP2_LOBBYNET = i), this.QieHuanScene("Slot_bingqiutupo2");
                                    break;
                                case "\u718a\u51fa\u6ca1":
                                case "\u718a\u51fa\u6ca1918":
                                    (window.BonusBears_LOBBYNET = i), this.QieHuanScene("Slot_BonusBears");
                                    break;
                                case "\u8d22\u795e\u5230":
                                    (window.CSDHY_LOBBYNET = i), this.QieHuanScene("Slot_Caishendao");
                                    break;
                                case "\u8d22\u795e\u593a\u5b9d":
                                    (window.CSDB_LOBBYNET = i), this.QieHuanScene("Slot_Caishenduobao");
                                    break;
                                case "\u8d22\u6e90\u6eda\u6eda":
                                    (window.CYGG_LOBBYNET = i), this.QieHuanScene("Slot_Caiyuangungun");
                                    break;
                                case "PantherQueen":
                                    (window.PantherQueen_LOBBYNET = i), this.QieHuanScene("Slot_PantherQueen");
                                    break;
                                case "HerculesSonZeus":
                                    (window.HerculesSonZeus_LOBBYNET = i), this.QieHuanScene("Slot_HerculesSonZeus");
                                    break;
                                case "\u5fb7\u5dde\u6251\u514b":
                                    cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[7] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Holdem") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Holdem");
                                    break;
                                case "\u6597\u5730\u4e3b":
                                    cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[7] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Land") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Land");
                                    break;
                                case "\u4fc4\u7f57\u65af\u8f6e\u76d8":
                                    this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "Roulette");
                                    break;
                                case "\u4fc4\u7f57\u65af\u8f6e\u76d836":
                                case "\u4fc4\u7f57\u65af\u8f6e\u76d836918":
                                    this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "Roulette36");
                                    break;
                                case "\u94c1\u62f36":
                                    (n = e("tiequan6_NetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16026, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u897f\u6e38\u4e89\u9738\u738b\u8005\u5929\u4e0b":
                                    (a.currentTarget.getComponent(cc.Button).interactable = !1), (window.XYZBWZTX_LOBBYNET = i), this.QieHuanScene_normal("Game_xiyouzhengbaWZTX");
                                    break;
                                case "\u706b\u713088":
                                    (window.FIRE88_LOBBYNET = i), this.QieHuanScene("Slot_Fire88");
                                    break;
                                case "IceStone":
                                    (window.IceStone_LOBBYNET = i), this.QieHuanScene("Slot_IceStone");
                                    break;
                                case "\u5927\u84dd":
                                    (window.GreatBlue_LOBBYNET = i), this.QieHuanScene("Slot_GreatBlue");
                                case "\u5927\u84dd918":
                                    (window.GreatBlue_LOBBYNET = i), this.QieHuanScene("Slot_GreatBlue");
                                    break;
                                case "\u7ea2\u5305\u63a5\u9f99":
                                    cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[1] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Game_hongbao") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Hongbao");
                                    break;
                                case "\u7687\u5bb6\u8d5b\u9a6c":
                                    (a.currentTarget.getComponent(cc.Button).interactable = !1), (window.HJSM_LOBBYNET = i), this.QieHuanScene_normal("game_saima");
                                    break;
                                case "\u50f5\u5c38\u5148\u751f":
                                    (window.JSXS_LOBBYNET = i), this.QieHuanScene("Slot_Jiangshixiansheng");
                                    break;
                                case "\u91d1\u8d22\u795e":
                                    (window.CAISHEN_LOBBYNET = i), this.QieHuanScene("Slot_CaishenGold");
                                    break;
                                case "\u7ecf\u5178\u6c34\u679c\u673a":
                                    this.QieHuanScene("game_shuiguoji_shuban");
                                    break;
                                case "\u7cbe\u7075\u5973\u738b":
                                    this.QieHuanScene("game_jlnw");
                                    break;
                                case "\u9526\u8863\u536b":
                                    (window.JYW_LOBBYNET = i), this.QieHuanScene("Slot_Jinyiwei");
                                    break;
                                case "\u5c0f\u4e11":
                                    this.QieHuanScene("Slot_joker");
                                    break;
                                case "\u8fde\u73af\u593a\u5b9d":
                                    (window.LHDB_LOBBYNET = i), this.QieHuanScene_normal("game_Lianhuanduobao");
                                    break;
                                case "\u94c3\u94db\u6e38\u620f":
                                    this.QieHuanScene("game_lingdangyouxi");
                                    break;
                                case "\u9f99\u864e\u6597":
                                    (n = e("longhudouNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16003, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u7ea2\u9ed1\u5927\u6218":
                                    (n = e("hongheidazhaNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16018, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u6597\u725b":
                                    (n = e("douniuNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16019, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u5fb7\u5dde\u725b\u4ed4":
                                    ((n = e("DZNZNetWork").getInstant).lobbyMainSocket = i), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16010, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u7ffb\u786c\u5e01":
                                    (n = e("fanjinbiNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16016, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u795e\u517d":
                                    (n = e("shenshouNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16020, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u6597\u9e21":
                                    (n = e("doujiNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16017, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u5415\u5e03\u620f\u8c82\u8749":
                                    (window.LBXDC_LOBBYNET = i), this.QieHuanScene("Slot_Lvbuxidiaochan");
                                    break;
                                case "\u6ca7\u6d77\u9057\u73e0":
                                    (window.canghaiyizhu_LOBBYNET = i), this.QieHuanScene("Slot_canghaiyizhu");
                                    break;
                                case "\u4f01\u9e45\u5bfb\u5b9d":
                                    (window.qiexunbao_LOBBYNET = i), this.QieHuanScene("Slot_qiexunbao");
                                    break;
                                case "\u9ebb\u5c06\u767e\u4e50\u95e8":
                                    (window.majianghuanlemen_LOBBYNET = i), this.QieHuanScene("Slot_majianghuanlemen");
                                    break;
                                case "\u7eb8\u724c\u8001\u864e\u673a":
                                    (window.zhipailaohuji_LOBBYNET = i), this.QieHuanScene("Slot_zhipailaohuji");
                                    break;
                                case "\u70c8\u706b\u82f1\u96c4":
                                    (window.liehuoyingxiong_LOBBYNET = i), this.QieHuanScene("Slot_liehuoyingxiong");
                                    break;
                                case "MadameDestiny":
                                    (window.MadameDestiny_LOBBYNET = i), this.QieHuanScene("Slot_MadameDestiny");
                                    break;
                                case "\u7f8e\u5973\u6e38\u6cf3\u961f":
                                    (window.MNYYD_LOBBYNET = i), this.QieHuanScene("Slot_Meinvyouyongdui");
                                    break;
                                case "\u68a6\u5e7b\u5973\u795e":
                                    (window.MHNS_LOBBYNET = i), this.QieHuanScene("Slot_Menghuannvshen");
                                    break;
                                case "\u54ea\u5412\u95f9\u6d77":
                                    (window.NZNH_LOBBYNET = i), this.QieHuanScene("Slot_Nezhanaohai");
                                    break;
                                case "\u6f58\u91d1\u83b2":
                                    (window.PJL_LOBBYNET = i), this.QieHuanScene("Slot_Panjinlian");
                                    break;
                                case "\u8dd1\u5f97\u5feb":
                                    cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[7] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Runing") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Run");
                                    break;
                                case "\u62a2\u5e84\u725b\u725b":
                                    cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[1] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("GrabBull") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_GrabBull");
                                    break;
                                case "\u7f57\u9a6c":
                                    (window.ROMA_LOBBYNET = i), this.QieHuanScene("Slot_RomeGlory");
                                    break;
                                case "\u72c2\u70ed\u975e\u6d32":
                                case "\u72c2\u70ed\u975e\u6d32918":
                                    (window.Safari_LOBBYNET = i), this.QieHuanScene("Slot_Safari");
                                    break;
                                case "\u4e09\u6253\u767d\u9aa8\u7cbe":
                                    (window.SDBGJ_LOBBYNET = i), this.QieHuanScene("Slot_sandabaigujing");
                                    break;
                                case "\u68ee\u6797\u821e\u4f1a":
                                    (a.currentTarget.getComponent(cc.Button).interactable = !1), (window.XYZB_LOBBYNET = i), this.QieHuanScene_normal("game_senlinwuhui");
                                    break;
                                case "\u4e0a\u6d77\u96f6\u96f6\u53d1":
                                    (window.SH00F_LOBBYNET = i), this.QieHuanScene("Slot_Shanghai00fa");
                                    break;
                                case "\u9e70\u592b\u4eba":
                                    (window.YFR_LOBBYNET = i), this.QieHuanScene("Slot_Yingfuren");
                                    break;
                                case "\u62db\u8d22\u8fdb\u5b9d":
                                    (window.ZCJB_LOBBYNET = i), this.QieHuanScene("Slot_Zhaocaijinbao");
                                    break;
                                case "\u6c34\u679c\u673a":
                                    this.QieHuanScene("game_shuiguoji");
                                    break;
                                case "\u6c34\u679c\u5c0f\u739b\u4e3d":
                                    (window.SGXML_LOBBYNET = i), this.QieHuanScene("Slot_Shuiguoxiaomali");
                                    break;
                                case "\u6c34\u679c\u94bb\u77f3":
                                    (window.DIAMOND_LOBBYNET = i), this.QieHuanScene("Slot_DiamondStrike");
                                    break;
                                case "\u6c34\u6d52\u4f20":
                                    (window.SHZ_LOBBYNET = i), this.QieHuanScene("Slot_Shuihuzhuan");
                                    break;
                                case "\u592a\u6781\u718a\u732b":
                                    (window.TaijiPanda_LOBBYNET = i), this.QieHuanScene("Slot_Taijixiongmao");
                                    break;
                                case "\u4f8f\u7f57\u7eaa":
                                case "\u4f8f\u7f57\u7eaa918":
                                    (window.trex_LOBBYNET = i), this.QieHuanScene("Slot_trex");
                                    break;
                                case "\u65fa\u5b9d":
                                    (window.WB_LOBBYNET = i), this.QieHuanScene("Slot_Wangbao");
                                    break;
                                case "\u4e07\u5723\u8282":
                                    this.QieHuanScene("game_wsj");
                                    break;
                                case "\u7ef4\u52a0\u65af\u4e4b\u591c":
                                    (window.WJSZY_LOBBYNET = i), this.QieHuanScene("Slot_Weijiasizhiye");
                                    break;
                                case "\u4e94\u798f\u4e34\u95e8":
                                    (window.WFLM_LOBBYNET = i), this.QieHuanScene("Slot_Wufulinmen");
                                    break;
                                case "\u897f\u6e38\u8bb0":
                                    (window.XYJ_LOBBYNET = i), this.QieHuanScene("Slot_Xiyouxi");
                                    break;
                                case "\u6f58\u91d1\u83b2GW":
                                    (window.PJLGW_LOBBYNET = i), this.QieHuanScene("Slot_PanjinlianGW");
                                    break;
                                case "\u6c34\u679c\u4e4b\u590f":
                                    (window.SGZX_LOBBYNET = i), this.QieHuanScene("Slot_Shuiguozhixia");
                                    break;
                                case "\u4e5d\u7ebf\u62c9\u738b":
                                    (window.JXLW_LOBBYNET = i), this.QieHuanScene("Slot_9xianlawang");
                                    break;
                                case "\u516b\u53662":
                                    (window.BG2_LOBBYNET = i), this.QieHuanScene("Slot_Bagua2");
                                    break;
                                case "\u75af\u72c2\u5c0f\u4e11":
                                    (window.FKXC_LOBBYNET = i), this.QieHuanScene("Slot_Fengkuangxiaochou");
                                    break;
                                case "\u91d1\u5e93":
                                    (window.JK_LOBBYNET = i), this.QieHuanScene("Slot_Jinku");
                                    break;
                                case "\u5927\u5bcc\u8c6a":
                                    (window.DFH_LOBBYNET = i), this.QieHuanScene("Slot_Dafuhao");
                                    break;
                                case "goldcup":
                                    (window.goldcup_LOBBYNET = i), this.QieHuanScene("Slot_goldcup");
                                    break;
                                case "freespin":
                                    (window.freespin_LOBBYNET = i), this.QieHuanScene("Slot_freespin");
                                    break;
                                case "freespin\u6a2a\u7248":
                                    (window.freespin_LOBBYNET = i), this.QieHuanScene("Slot_freespin_L");
                                    break;
                                case "superspin":
                                    (window.superspin_LOBBYNET = i), this.QieHuanScene("Slot_superspin");
                                    break;
                                case "jackpotspin":
                                    (window.jackpotspin_LOBBYNET = i), this.QieHuanScene("Slot_jackpotspin");
                                    break;
                                case "lucky777":
                                    (window.lucky777_LOBBYNET = i), this.QieHuanScene("Slot_lucky777");
                                    break;
                                case "premierleaguestar":
                                    (window.premierleaguestar_LOBBYNET = i), this.QieHuanScene("Slot_premierleaguestar");
                                    break;
                                case "luckypoker":
                                    (window.luckypoker_LOBBYNET = i), this.QieHuanScene("game_luckypoker");
                                    break;
                                case "ghostpirates":
                                    (window.ghostpirates_LOBBYNET = i), this.QieHuanScene("Slot_ghostpirates");
                                    break;
                                case "spinBig":
                                    (window.spinbig_LOBBYNET = i), this.QieHuanScene("Slot_spinbig");
                                    break;
                                case "penaltyshooters":
                                    (window.penaltyshooters_LOBBYNET = i), this.QieHuanScene("game_penaltyshooters");
                                    break;
                                case "\u8d22\u795e\u53d1\u53d1\u53d1":
                                    (window.caishenfafafa_LOBBYNET = i), this.QieHuanScene("Slot_caishenfafafa");
                                    break;
                                case "\u7eff\u53f6\u6c34\u679c":
                                    (window.lvyeshuiguo_LOBBYNET = i), this.QieHuanScene("Slot_lvyeshuiguo");
                                    break;
                                case "\u6cd5\u8001\u5b9d\u85cf":
                                    (window.falaobaozang_LOBBYNET = i), this.QieHuanScene("Slot_falaobaozang");
                                    break;
                                case "\u8df3\u9ad8\u9ad8":
                                    (window.tiaogaogao_LOBBYNET = i), this.QieHuanScene("Slot_tiaogaogao");
                                    break;
                                case "\u6bd4\u7ffc\u53cc\u98de":
                                    (window.biyishuangfei_LOBBYNET = i), this.QieHuanScene("Slot_biyishuangfei");
                                    break;
                                case "\u6c34\u679c\u4e4b\u590f":
                                    (window.SGZX_LOBBYNET = i), this.QieHuanScene("Slot_Shuiguozhixia");
                                    break;
                                case "\u718a\u732b\u7af9\u5b50":
                                    (window.xiongmaozhuzi_LOBBYNET = i), this.QieHuanScene("Slot_xiongmaozhuzi");
                                    break;
                                case "\u897f\u6e38\u4e89\u97382":
                                case "\u897f\u6e38\u4e89\u97382918":
                                    (a.currentTarget.getComponent(cc.Button).interactable = !1), (window.XYZB_LOBBYNET = i), this.QieHuanScene_normal("game_xiyouzhengba");
                                    break;
                                case "\u62bc\u5927\u5c0f":
                                    (n = e("yadaxiaoNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16005, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "ColorGame":
                                    (n = e("colorgameNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16014, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "UpDown7":
                                    (n = e("7UpDownNetWork").getInstant), (a.currentTarget.getComponent(cc.Button).interactable = !1), n.loginGame_Function("", 16024, n.playerInfo.playerId, n.playerInfo.gameSign);
                                    break;
                                case "\u4e00\u8def\u53d1\u53d1\u53d1":
                                    (window.YLFFF_LOBBYNET = i), this.QieHuanScene("Slot_Yilufafafa");
                                    break;
                                case "\u6708\u5149\u5b9d\u76d2":
                                    (window.YGBH_LOBBYNET = i), this.QieHuanScene("Slot_yueguangbaohe");
                                    break;
                                case "\u7389\u84b2\u56e2":
                                    (window.YPT_LOBBYNET = i), this.QieHuanScene("Slot_Yuputuan");
                                    break;
                                case "\u7389\u84b2\u56e22":
                                    (window.YPT2_LOBBYNET = i), this.QieHuanScene("Slot_Yuputuan2");
                                    break;
                                case "\u70b8\u91d1\u82b1":
                                    cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[7] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Flower") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Flower");
                                    break;
                                case "\u5fe0\u809d\u4e49\u80c6":
                                    (window.ZGYD_LOBBYNET = i), this.QieHuanScene("Slot_Zhongganyidan");
                                    break;
                                case "\u8db3\u7403\u738b\u56fd":
                                    this.QieHuanScene("game_3Dfootball");
                            }
                        },
                        QieHuanScene: function (e) {
                            var a = this;
                            if (0 != this.canvasNode.getComponent("LobbyMain").netWork.connected) {
                                var n = cc.find("Canvas/Loading");
                                n.active = !0;
                                var i = n.getChildByName("loadingProgressBar"),
                                    o = cc.find("pb_Loading_txt", i);
                                (i.getComponent(cc.ProgressBar).progress = 0),
                                    (o.getComponent(cc.Label).string = "0%"),
                                    (this.p = 0),
                                    cc.director.preloadScene(
                                        e,
                                        function (e, n) {
                                            if (a.p < e / n) {
                                                var m = e / n;
                                                (a.p = m), (i.getComponent(cc.ProgressBar).progress = m), (o.getComponent(cc.Label).string = (100 * m).toFixed(2) + "%");
                                            }
                                        },
                                        function () {
                                            cc.audioEngine.stopAll(), cc.director.loadScene(e);
                                        }
                                    );
                            }
                        },
                        QieHuanScene_normal: function (e, a) {
                            var n = this,
                                i = cc.find("Canvas/Loading");
                            i.active = !0;
                            var o = i.getChildByName("loadingProgressBar"),
                                m = cc.find("pb_Loading_txt", o);
                            (o.getComponent(cc.ProgressBar).progress = 0),
                                (m.getComponent(cc.Label).string = "0%"),
                                (this.p = 0),
                                cc.director.preloadScene(
                                    e,
                                    function (e, a) {
                                        if (n.p < e / a) {
                                            var i = e / a;
                                            (n.p = i), (o.getComponent(cc.ProgressBar).progress = i), (m.getComponent(cc.Label).string = (100 * i).toFixed(2) + "%");
                                        }
                                    },
                                    function () {
                                        cc.audioEngine.stopAll(), cc.director.loadScene(e, a);
                                    }
                                );
                        },
                    }),
                    cc._RF.pop();
            },
            { "7UpDownNetWork": void 0, DZNZNetWork: void 0, PlayerInfo: void 0, TwoEightNetWork: void 0, baijialeNetWork: void 0, baijialeQZNetWork: void 0, bairenniuniuNetWork: void 0, bcbm_NetWork: void 0, colorgameNetWork: void 0, doujiNetWork: void 0, douniuNetWork: void 0, fanjinbiNetWork: void 0, feiqinzoushou_NetWork: void 0, hongheidazhaNetWork: void 0, longhudouNetWork: void 0, shenshouNetWork: void 0, tiequan6_NetWork: void 0, yadaxiaoNetWork: void 0 },
        ],
    },
    {},
    ["BC_message", "gameConfig", "gameConfig_16game", "gameConfig_40game", "gameConfig_8game", "gameConfig_Mega999", "gameConfig_WL888\u5e7f\u5dde\u5ba2\u6237", "gameConfig_all", "gameConfig_baxiputaoya", "gameConfig_maaaaaaaaaaaaaaaa_", "gameConfig_shibo", "gameConfig_xiyou1game", "gameIconCtrl"]
);
