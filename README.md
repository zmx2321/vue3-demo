# 系统模板操作

### husky

代码检查规则

1. 执行 `npx husky-init`
2. 下面内容复制到 .husky/pre-commit

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

### 发起请求

```js
1. src/api/modules 中新建需要的模块 js 文件
2. vue 文件中引入 请求

import { http } from '@/api'
```
