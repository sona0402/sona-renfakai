# 权限+流程

<!-- 权限可以参考[周志明老师架构安全性](https://jingyecn.top:18080/architect-perspective/general-architecture/system-security/)， -->
框架组合使用在某些场景下就会产生新的问题。

## 下一流程

讲点技术相关的，词法分析树可以分析出流程树，idea已经支持根据当前数据进行推断代码执行，图中可以看出已经根据当前标量进行推断出下一分支执行，此段代码仅做展示使用，在编译期间会优化掉不会执行的分支。

![An image](./images/idea_next_tip.jpg)

在工作流程，有一种场景就是获取下一个流程，即根据当前页面的值动态的获取下一个页面流程，然后当前人会根据下一流程选取不同人做处理，并且流程上处理人员不一样。

```mermaid
stateDiagram-v2
    state if_state <<choice>>
    [*] --> 当前人
    当前人 --> if_state
    if_state --> A部门处理 : if n < 3
    if_state --> B部门处理 : if n >= 3
```

在工作流程如果处理的话流程如下，代码参考了[zhoupeng20188](https://github.com/zhoupeng20188/activitispringboot/blob/master/src/main/java/com/zp/activitispringboot/utils/ActivitiUtil.java)，这里很复杂，因为涉及到子流程获取下一流程问题以及一些未知问题（对bpmn使用还少），所以这里只能做到暂时业务可以获取，短时间内很难穷举出所有case。

```mermaid
flowchart LR
  根据taskId查找bpmn --> 根据activityId获取node
  根据activityId获取node --> 进行变量判断
  进行变量判断 --> 然后推断出下一节点
```

## 获取流转人

找到了下一工作流节点，而每一个节点都设置跳转路由，现在可以根据页面路由查找到拥有该页面的角色。

```sql
select role_id from url_permission where permission = '页面路由'
```

根据角色查找到角色下所有人。

```sql
select user_id from role_dis where role_id = 'xxx'
```

根据找到的所有人然后找到其部门和父亲部门，构建组织架构树，这里需要[树](https://github.com/rfk1118/leetcode/blob/main/markdown/binary_tree.md)的算法和组合设计模式，此时更加理解算法的重要性。幸亏当时已经练习过。

## 进阶版

* jvm可以根据长期调用对字节码编译进行优化和退化，这种基于预期，并且有衰退，应用到业务上，即在业务上进行流转时，可以根据当前人和变量已经历史指派进行处理。