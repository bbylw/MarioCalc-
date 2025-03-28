# 马里奥风格计算器 (Mario Style Calculator)

一个独特的网页计算器，采用经典超级马里奥游戏风格设计，具有精美的视觉效果和游戏音效。

![马里奥计算器预览](demo.png)

## ✨ 特性

- 🎮 马里奥游戏风格界面设计
- 🎵 原版马里奥游戏音效
- 🎨 像素风格字体和按钮
- 🌈 动态视觉效果和动画
- 📱 响应式设计，支持移动设备
- 🧮 强大的计算功能：
  - 支持负数计算
  - 精确的小数运算
  - 智能错误处理（如除以零）
  - 大数字千位分隔符显示

## 🚀 在线体验

你可以通过以下链接体验这个项目：

- Cloudflare Pages: [你的域名].pages.dev
- GitHub Pages链接缺少用户名

## 🛠️ 技术栈

- HTML5
- CSS3
- JavaScript (原生，面向对象编程)
- 马里奥游戏音效
- 动画效果与过渡

## 💻 本地运行

1. 克隆项目到本地：
```bash
git clone https://github.com/[你的用户名]/mario-calculator.git
```

2. 进入项目目录：
```bash
cd mario-calculator
```

3. 使用本地服务器运行项目（多种方式）：

   - 使用 Python (Python 3):
     ```bash
     python -m http.server 8000
     ```
   
   - 使用 Node.js (需要先安装 http-server):
     ```bash
     npx http-server
     ```
   
   - 使用 VS Code Live Server 插件

4. 在浏览器中访问：
   - http://localhost:8000 (Python)
   - http://localhost:8080 (Node.js)

## 🚀 部署指南

### Cloudflare Pages 部署

1. 在 GitHub 上创建仓库并推送代码
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 进入 Pages 页面
4. 点击 "创建项目"
5. 选择 "连接到 Git"
6. 选择你的 GitHub 仓库
7. 部署设置：
   - 构建设置：无需配置（静态网站）
   - 环境变量：无需配置
8. 点击 "保存并部署"

### GitHub Pages 部署

1. 在 GitHub 上创建仓库
2. 将代码推送到仓库：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[你的用户名]/mario-calculator.git
git push -u origin main
```

3. 在仓库设置中启用 GitHub Pages：
   - 进入仓库的 Settings
   - 找到 Pages 设置
   - Source 选择 main 分支
   - 保存设置

## 🎮 使用说明

- 数字键 (0-9)：输入数字
- 小数点 (.)：输入小数
- 运算符 (+, -, ×, ÷, %)：执行基本运算
- AC：清除所有输入并显示马里奥动画
- DEL：删除最后一位输入
- =：计算结果并显示马里奥胜利动画
- 每个按键都配有马里奥游戏风格的音效

### 高级功能

- **负数输入**：点击减号 (-) 后输入数字可以输入负数
- **连续运算**：可以连续进行多步计算，如 2 + 3 × 4 会先计算 2 + 3 再乘以 4
- **错误处理**：除以零等错误会显示"Error"提示
- **数字格式化**：大数字会自动添加千位分隔符，提高可读性
- **精确计算**：支持小数点后最多 10 位的精确计算

## 📝 许可证

[MIT License](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 🙏 致谢

- 音效来源：[The Mushroom Kingdom](https://themushroomkingdom.net/)
- 字体：[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 提交 [Issue](https://github.com/[你的用户名]/mario-calculator/issues)
- 发送邮件到：[your-email@example.com]
