# hexo-filter-markdown-auto-indent
This is the auto indenting filter for my hexo markdown article. It works very simply. Maybe I need to submit a pull request to the markdown renderer, and determine whether it works through configuration. This is my first time. It's settled for the time being.

# What does it do?
Add indent content that is not a p tag within a list element.

# Show
If you use `hexo-renderer-marked` module,you can write this to handle.

## Connected paragraphs

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
This is the auto indenting filter for my hexo markdown article. It works very simply. W
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

## front-matter

```markdown
---
 auto_indent: false
---

or

;;;
"auto_indent": false
;;;

```

# Install
```bash
npm i hexo-filter-markdown-auto-indent

```
# Test in Local
```bash
npm link hexo-filter-markdown-auto-indent
```
```json
{
    "dependencies":"hexo-filter-auto-indent"
}
```

# Hello,this is update content
You can decide how many spaces to indent the text,and defualt indent is `2em`.
In your `_config.yml`,add this to control it. 
```yaml
    markdown:
        indent: 2
```
# something is about to local test.
If you want to tast in local,and you use `npm link`,you must to add package name in `package.json` dev .Or not,nothing will happend.

# similar plugin
When I want to push hexo plugin ,I find [hexo-filter-text-autospace](https://github.com/Cerallin/hexo-filter-text-autospace)

# Feature Work
- [x] A front-matter config can stop to filter
- [x] A injector make code be less.
- [ ] Study `hexo-filter-text-autospace` how to work and what's the different.
- [ ] If I have time,I will study indent and write style in more countrie.