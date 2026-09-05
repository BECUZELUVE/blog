# 算法学习心得

## 1. 递归
### 两种递归模式
1. 分解型(自顶向下)
原问题 = 包含返回值的递归出口 + 子问题的结果
是合并问题结果的过程
2. 遍历搜索型
访问、处理、收集的过程，不一定依赖子问题的返回值，更多的是当前节点做处理，然后递归处理子部分；树、图、子集、排列组合

### 例：二叉树最大深度问题的两种解法
1. 分解型
```
def maxdeep(root:TreeNode)-> int:
    if not root:
        return 0
    # 递归左右子树的最大深度
    leftMax = maxdeep(root.left)
    rightMax = maxdeep(root.right)
    # 整棵树的最大深度就是左右子树的最大深度加1
    result = max(leftmax,rightmax) +1 
    return result
```
2. 遍历搜索型
```
class Solution:
    def __init__(self):
        self.res = 0      # 记录整棵树遍历过程中遇到的最大深度
        self.depth = 0    # 记录当前递归走到节点的深度，所有递归函数共用这一个变量

    def maxDepth(self, root):
        # 对外暴露的入口函数
        self.traverse(root)   # 启动深度优先遍历
        return self.res       # 遍历完成，返回统计出来的最大深度

    def traverse(self, root):
        # 真正做DFS遍历的递归函数
        if not root:
            # 递归基线：遇到空节点。
            # 此时 self.depth 正好是到达这个空节点之前的真实树深度
            self.res = max(self.res, self.depth)
            return

        # ========== 前序位置：刚进入这个节点，深度+1 ==========
        self.depth += 1

        # 递归去遍历左子树、右子树
        self.traverse(root.left)
        self.traverse(root.right)

        # ========== 后序位置：左右子树全部遍历完毕，要退回到父节点，深度回退（回溯撤销） ==========
        self.depth -= 1
    
```

