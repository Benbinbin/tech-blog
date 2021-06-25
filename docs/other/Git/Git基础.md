---
show: true
collection: git
collectionOrder: 2
tags:
  - git
---

# Git 基础

参考：[Git Book](https://git-scm.com/book/zh/v2)

Git 是一个**分布式**版本控制系统，其核心功能是**追踪文件的变更**，即保留项目的详细**历史记录**，并且能够在不同的版本上进行工作。保留详细的项目历史记录很重要，可以看出一段时间内项目的进度，如果需要还可以并恢复数据或文件，回到项目的某个阶段。

版本控制系统 version control system，简称 VCS，是一个管理源代码不同版本的工具，除了 Git 软件外还有其他版本控制系统，如 [Subversion](https://subversion.apache.org/)、[Mercurial](https://www.mercurial-scm.org/) 等。版本控制系统模型包括两大主要类型：

* **集中式模型** centralized version control systems, CVCS：所有用户都连接到一个中央的主仓库 `master repository`
* **分布式模型** distributed version control systems, DVCS：每个用户都在自己的计算机上拥有完整的仓库

:bulb: 源代码管理器 source code manager，简称 SCM，是版本控制系统的另一个名称。Git 是一个 SCM（因此也是 VCS！）。Git 网站地址是 https://git-scm.com/ （它的域名中直接包含 "SCM"）。


## 术语

参考：[Git 关键术语](./_v_attachments/20191120170555447_6092/Git-terms-cheatsheet.pdf) | [英文版](./_v_attachments/20191120170555447_6092/ud123-git-keyterms.pdf)
### 提交 commit
Git 将数据看做微型文件系统的一组**快照**。每次 commit （在 Git 中保持项目状态）它都对文件当时的状况拍照，并存储对该快照的引用，类似游戏中的保存点，它会保存项目的文件和关于文件的所有信息。commit 是 Git 中的基本单位。

### 仓库 Repository / repo
仓库是一个包含项目内容以及几个文件（在 Mac OS X 上默认地处于**隐藏状态**）的目录，用来与 Git 进行通信。仓库可以存储在本地，或作为远程副本存储在其他计算机上。仓库是由 commit 构建的。

### 工作目录/工作区 Working Directory
工作目录是你在计算机的文件系统中看到的文件。与这些文件形成对比的是保持在仓库中（在 commit 中，在 Mac OS X 上隐藏）的文件。

注意：在使用 Git 时，工作目录与命令行工具的 current working directory （当前工作目录）不一样，后者是 shell 当前正在查看的目录。

### 检出 Checkout
检出是指将仓库中的内容**复制**到工作目录下。

### 暂存区/暂存索引/索引 Staging Area/Staging Index/Index
Git 目录下的一个文件，**存储的是即将进入下个 commit 内容的信息**。可以将暂存区看做准备工作台，Git 将在此区域获取下个 commit。暂存索引中的文件是准备添加到仓库中的文件。

### SHA
`SHA` 是每个 commit 的 ID 编号。以下是 commit 的 `SHA` 示例：`e2adf8ae3e2e4ed40add75cc44cf9d0a869afeb6`。

它是一个**长 40 个字符的字符串（由 0–9 和 a–f 组成），并根据 Git 中的文件或目录结构的内容计算得出**。SHA 的全称是 "Secure Hash Algorithm" 安全哈希算法。

### 分支 Branch
分支是从主开发流程中分支出来的新的开发流程。这种分支开发流程可以在不更改主流程的情况下继续延伸下去。

回到之前关于游戏保存点的示例，你可以将分支看做在游戏中设立保存点后，尝试一个有风险的招式。如果有风险的招式不奏效，则回到保存的位置。**令分支非常强大的关键之处是你可以在一个分支上设定保存点，然后切换到另一个分支并继续设定保存点。**

