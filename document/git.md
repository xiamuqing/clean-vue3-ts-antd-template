# 分支命名规则

由于 gitlab 服务器对大小写不敏感，且为了方便使用，不允许使用驼峰命名（如`feature/updateStyles`），故规则以**下划线**链接词句（如：`feature/update_styles`。
使用 `git config core.ignorecase false` 命令,可识别文件名大小写修改

# commit 规范

提交本地代码前，执行 `git pull origin master` 拉取最新的代码合并到本地分支（无论有无更新），
之后再提交本地的修改。

**在每次执行提交代码时会有插件自动检查代码规范，不符合规范则无法提交。**

请写明每次提交具体做了哪些事情，基本提交信息如下：`type(类型)` + `:` + `content(做的事情)`。
**当完成指定 issues 时，在 commit 信息里加上对应的 issues id**。

类型分类主要有：
* **feat**：新功能（feature）
* **fix**：修补 bug
* **docs**：文档（documentation）
* **style**： 格式（不影响代码运行的变动）
* **refactor**：重构（即不是新增功能，也不是修改 bug 的代码变动）
* **test**：增加测试
* **chore**：构建过程或辅助工具的变动
* **static**：静态文件变动
* **optimize**：优化相关

# merge request 规范

1. 在 merge request 页面点击 `new merge request`
2. 在 Source branch 选择自己所需要合并的分支
3. 在 Target branch 选择 `master` 分支
4. 在 Discussion 里写明自己所修改、增加的东西
5. 在 Labels 里选择一个标签，表示属于哪类
6. 在 Milestone 里选择一个里程碑，表示属于哪个阶段
7. 在 Assignee 选择项目管理员
8. 告知管理员，请求合并

 * 注：merge request 在 review 之后可能会有问题，提交者根据**批注**进行相关改动直接直接提交到该分支下（会自动同步到当前的 merge request 里），**不需要关闭当前 merge request 重新再开一个**。
