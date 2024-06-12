import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '赛博法师',
  subtitle: 'Lazy Cat',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 250,         // 主题颜色的默认色调，范围从0到360。例如：红色: 0, 蓝绿色: 200, 青色: 250, 粉红色: 345
    fixed: false,     // 对访客隐藏主题颜色选择器
  },
  banner: {
    enable: true,
    src: 'assets/images/background.jpg',   // 相对于/src目录。如果以'/'开头，则相对于/public目录。
    position: 'center', // 等同于object-position，默认为居中
  },
  favicon: [    // 将此数组留空以使用默认的网站图标
    // {
    //   src: '/favicon/icon.png',    //  网站图标的路径，相对于/public目录
    //   theme: 'light',              // （可选）'light' 或 'dark'，只有在你有适用于亮色和暗色模式的不同网站图标时才设置
    //   sizes: '32x32',              // （可选）网站图标的大小，只有在你有不同大小的网站图标时才设置
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/ZOUYIQAQ',     // 内部链接不应包含基础路径，因为它会自动添加
      external: true,                         // 显示一个外部链接图标并将在新标签页中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/good-spirit.jpg',  // 相对于/src目录。如果以'/'开头，则相对于/public目录。
  name: '赛博法师',
  bio: '最棒最强精神状况最稳定的赛博法师',
  links: [
    // {
    //   name: 'Twitter',
    //   icon: 'fa6-brands:twitter',       // 访问 https://icones.js.org/ 获取图标代码
    //                                     // 如果还未包含相应的图标集，你需要安装它
    //                                     // `pnpm add @iconify-json/<icon-set-name>`
    //   url: 'https://twitter.com',
    // },
    // {
    //   name: 'Steam',
    //   icon: 'fa6-brands:steam',
    //   url: 'https://store.steampowered.com',
    // },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/ZOUYIQAQ',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
