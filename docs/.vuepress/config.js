module.exports = {
    title: '云原生应用开发文档',
    description: '本文档提供资产云应用中心上架应用相关技术说明',

    themeConfig: {
        logo: '/ocia.png',
        lastUpdated: 'Last Updated',
        repo: 'https://github.com/assetcloud/docs.git',
        docsRepo: 'assetcloud/docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在GitHub上编辑此页！',
        nav: [
            { text: '首页', link: '/' },
            { text: '快速入门', link: '/Ues/' },
            { text: '设计规范', link: '/guide/' },
            { text: '开发指南', link: '/API explain/' },
            { text: '工具与资源', link: '/Tools and resources/' },
        ],
        sidebar: {
            "/Ues/": ["", "one", "two", "three", "four", "five", "FAQ"],
            "/guide/": ["", "one", "two", "three"],
            "/API explain/": ["", "one", "two", "unicode", "mqApi"],
            "/Tools and resources/": ["", "one", "two"],
        }


    }
}