<!--
 * @Description: 
 * @Author: fireMan34
 * @LastEditors: fireMan34
 * @Date: 2022-07-21 19:15:55
 * @LastEditTime: 2022-07-21 19:40:35
-->
# 暂停更新

    我现在需要去完成一些有趣的任务。

# hexo-filter-markdown-auto-indent
    这是我在hexo 关于 markdown 的自动缩进插件。它的工作很简单，或许我可以向`hexo markdown render`的作者提议，并且增加它的相关配置。这是我的第一次提交，

# 它的工作

向markdown所有不是列表标签下的文本标签添加缩进方式。

# 它的工作前置
如果你使用的是 `hexo-renderer-marked` 模块,你可以使用它处理文本.

## 关联段落

### 1
``` markdown
This is the auto indenting filter for my hexo markdown article. It works very simply. 
Maybe I need to submit a pull request to the markdown renderer, and determine whether it works through configuration. 
This is my first time. It's settled for the time being.
```
It will be renter to `html`:
```html
<p style="text-indent:2em;">
This is the auto indenting filter for my hexo markdown article. It works very simply. 
<br><span style="padding-left:2em">
Maybe I need to submit a pull request to the markdown renderer, and determine whether it works through configuration. 
<br><span style="padding-left:2em">
This is my first time. It's settled for the time being.
</p>
```

### 2
``` markdown
This is the auto indenting filter for my hexo markdown article. It works very simply. 

Maybe I need to submit a pull request to the markdown renderer, and determine whether it works through configuration. 

This is my first time. It's settled for the time being.
```
It will be renter to `html`:
```html
<p style="text-indent:2em;">
This is the auto indenting filter for my hexo markdown article. It works very simply. 
</p>
<p style="text-indent:2em;">
Maybe I need to submit a pull request to the markdown renderer, and determine whether it works through configuration. 
</p>
<p style="text-indent:2em;">
This is my first time. It's settled for the time being.
</p>
```

## 支持文章头部的处理 front-matter
取消自动缩进

```markdown
---
 auto_indent: false
---

or

;;;
"auto_indent": false
;;;

```

# 安装命令
```bash
npm i hexo-filter-markdown-auto-indent

```
# 目前的本地测试
```bash
npm link hexo-filter-markdown-auto-indent
```
```json
{
    "dependencies":"hexo-filter-auto-indent"
}
```

# 缩进距离
你可以自定义全局的自动缩进举起 `2em`.
在你的 `_config.yml`,并且设置它. 

```yaml
    markdown:
        indent: 2
```
# 关于本地测试
    如果你使用包链接进行本地测试，请在package里显示的声明它，不然它不会工作。

# 相同的插件功能
在我准备提交插件的时候 ,我才发现了原来也有一些和我近似的功能，如果你对我的工作不满，你可以尝试着这一款 [hexo-filter-text-autospace](https://github.com/Cerallin/hexo-filter-text-autospace)

# 未来的任务
- [x] front-matter配置来设置禁止文章自动缩进
- [x] 尝试通过注入器减少代码量，其实没什么变化，但我不知道是否性能会更优。
- [ ] 学习有关 `hexo-filter-text-autospace` 插件如何工作，并比较我们开发的方式差异.
- [ ] 如果我有时间，我也会学习更多国家的缩进语法。如果你有好的想法，在我的GitHub留下issue.