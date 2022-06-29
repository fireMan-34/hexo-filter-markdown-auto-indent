# hexo-filter-markdown-auto-indent
This is the auto indenting filter for my hexo markdown article. It works very simply. Maybe I need to submit a pull request to the markdown renderer, and determine whether it works through configuration. This is my first time. It's settled for the time being.

# What does it do?
Add indent content that is not a p tag within a list element.

# Install
```bash
npm i hexo-filter-markdown-auto-indent

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