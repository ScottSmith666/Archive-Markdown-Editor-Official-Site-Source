import {createStore} from "vuex";

export default createStore({
    state: () => {
        return {
            isOpenGoToSourceModel: false,
            lang: "zh-CN",
            candidateLangUI: {
                "zh-CN": {
                    "navSubTitle": "简约、美观、功能强大",
                    "slogan": "Archive Markdown Editor HarmonyOS版（适用于平板和PC）即将推出，敬请期待！",
                    "mainPageSubTitle": "一款简约、美观、功能强大的跨平台Markdown编辑器，具有多媒体归档、密码保护等独有功能，欢迎您的使用。",
                    "downloadButton": "立即下载",
                    "archive": {
                        "title": "文件，乖乖收好",
                        "description": "通过独创的Archive Markdown Format（*.mdz）文件格式，归档多媒体文件，有效解决传统Markdown格式未与多媒体文件强绑定，易出现多媒体丢失的问题。",
                    },
                    "safety": {
                        "title": "安全，毋庸置疑",
                        "description": "在保存为Archive Markdown Format（*.mdz）文件格式时可对其设置密码，保护文件内容安全。",
                    },
                    "various": {
                        "title": "媒体，多种多样",
                        "description": "支持插入各类视频文件和音频文件，以及其他类型文件。",
                    },
                    "dialog": {
                        "getSourceCode": {
                            "title": "获得各系统版本AME源码",
                            "harmonyOSVer": "HarmonyOS版本",
                            "otherOSVer": "其他系统版本",
                            "close": "关闭",
                        },
                        "download": {
                            "title": "下载Archive Markdown Editor",
                            "global": "预编译版-国际通道",
                            "hmOsVer": "HarmonyOS版本",
                            "hmOsVerButton": "即将推出",
                            "sourceCode": "源码",
                            "sourceCodeDescription": "可进入GitHub或Gitee获取本程序的源码。",
                            "close": "关闭",
                        },
                    },
                },
                "zh-TW": {
                    "navSubTitle": "簡約、美觀、功能強大",
                    "slogan": "Archive Markdown Editor HarmonyOS版（適用於平板和PC）即將推出，敬請期待！",
                    "mainPageSubTitle": "一款簡約、美觀、功能強大的跨平台Markdown編輯器，具有多媒體歸檔、密碼保護等獨特功能，歡迎您的使用。",
                    "downloadButton": "立即下載",
                    "archive": {
                        "title": "檔案，乖乖收好",
                        "description": "透過獨創的Archive Markdown Format（*.mdz）檔案格式，歸檔多媒體，有效解決傳統Markdown格式未與多媒體檔案強綁定，易出現多媒體遺失的問題。",
                    },
                    "safety": {
                        "title": "安全，毋庸置疑",
                        "description": "在儲存為Archive Markdown Format（*.mdz）檔案格式時可對其設定密碼，並保護檔案內容安全。",
                    },
                    "various": {
                        "title": "媒體，多元",
                        "description": "支援插入各類影片檔案和音訊文件，以及其他類型文件。",
                    },
                    "dialog": {
                        "getSourceCode": {
                            "title": "取得各系統版本AME原始碼",
                            "harmonyOSVer": "HarmonyOS版本",
                            "otherOSVer": "其他系统版本",
                            "close": "關閉",
                        },
                        "download": {
                            "title": "下載Archive Markdown Editor",
                            "global": "預編譯版",
                            "hmOsVer": "HarmonyOS版本",
                            "hmOsVerButton": "即将推出",
                            "sourceCode": "原始碼",
                            "sourceCodeDescription": "可進入GitHub或Gitee取得本程式的原始碼。",
                            "close": "關閉",
                        },
                    },
                },
                "en": {
                    "navSubTitle": "Simple, beautiful, and powerful",
                    "slogan": "Archive Markdown Editor HarmonyOS version (for tablet and 2in1) is coming soon, stay tuned!",
                    "mainPageSubTitle": "A simple, beautiful, and powerful cross-platform Markdown editor with unique features such as multimedia archiving and password protection. Welcome to use it.",
                    "downloadButton": "Download",
                    "archive": {
                        "title": "Archive your media file",
                        "description": "By using the unique Archive Markdown Format (*.mdz) file format, multimedia files can be archived, effectively solving the problem that traditional Markdown formats are not strongly bound to multimedia files, which can easily lead to the loss of multimedia files.",
                    },
                    "safety": {
                        "title": "Safety is beyond doubt.",
                        "description": "When saving as an Archive Markdown Format (*.mdz) file, you can set a password to protect the file content.",
                    },
                    "various": {
                        "title": "Media, Diversification",
                        "description": "It supports inserting various video and audio files, as well as other file types.",
                    },
                    "dialog": {
                        "getSourceCode": {
                            "title": "Obtain the AME source code for various OS versions",
                            "harmonyOSVer": "HarmonyOS ver.",
                            "otherOSVer": "Other OS ver.",
                            "close": "Close",
                        },
                        "download": {
                            "title": "Download Archive Markdown Editor",
                            "global": "Pre-compiled",
                            "hmOsVer": "HarmonyOS ver.",
                            "hmOsVerButton": "Coming soon",
                            "sourceCode": "Source code",
                            "sourceCodeDescription": "The source code for this program can be obtained from GitHub or Gitee.",
                            "close": "Close",
                        },
                    },
                },
            },
        };
    },
    mutations: {
        updateOpenGoToSourceModel(state, value) {
            state.isOpenGoToSourceModel = value;
        },
        updateLang(state, language) {
            state.lang = language;
        }
    },
});
