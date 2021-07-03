---
collection: MIT 18.06SC Linear Algebra
collectionOrder: 9
tags:
  - linear-algebra
---

# L7-求解Ax=0主变量和特解
参考：
* Unit I: Ax = b and the Four Subspaces - [Solving Ax = 0: Pivot Variables, Special Solutions](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/ax-b-and-the-four-subspaces/solving-ax-0-pivot-variables-special-solutions/) | [pdf](.attachments/MIT18_06SCF11_Ses1.7sum.pdf)
* 课本章节：Section *3.1* through *3.2* in the 4^th^ or 5^th^ edition

---

这一节主要讲解求矩阵 $Ax=0$ 的零空间 $N(A)$ 的算法步骤：

1. 通过矩阵变换和（或）矩阵置换，将矩阵 $A$ 变换为 $U$ 形式（阶梯形式 echelon form）
2. 通过主元位置，确认主列所对应的主变量，以及自由列对应的自由变量
3. 对自由变量分配任意数值
4. 通过回代替换，求出主变量的值
5. 得到特解（零空间中一个向量）
（可以重复以上 3~5（尽可能）求出所有 $x$ 值，构成零空间 $N(A)$）
6. 通过特解的线性组合构成/张成零空间 $N(A)$

## 求解零空间
已知方程组 $Ax=0$ 中系数矩阵如下，其中 $2 \times col1 = col2$，$row1 + row2 = row3$，即矩阵的列或行并非都「独立」。

<!-- #region-->
$$
\begin{aligned}
A=
\begin{bmatrix}
  1 &2 &2 &2\\
  2 &4 &6 &8\\
  3 &6 &8 &10\\
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

使用消元法求解方程组，得出的所有可能解（列向量） $x$ 就构成零空间 $N(A)$。

:bulb: 根据 [L2-矩阵消元](L2-矩阵消元.md) 这一节的算法，使用消元法求解 $Ax=b$ 时需要使用**增广矩阵**，但在求解方程组 $Ax=0$ 的零空间时，并不是使用增广矩阵，这是由于方程组右边都是 $0$，所以等式右侧对于最后回代替换并不影响。

:bulb: 消元并不会改变 Ax=0 的零空间，但会改变它的列空间。由于零空间只与方程组的等式相关，只要等式关系不变，求出的解构成的零空间都相同。消元步骤就是基于等式两边同乘系数，或两等式之间相加减，并不会改变各等式内的未知数的关系。而求解列空间时，是基于系数矩阵 $A$ 各列构成的向量张成的，在消元时进行系数矩阵的变换改动了元素，使得最后得到的矩阵 $U$ 或 $R$ 对应的列空间与 $A$ 对应的列空间不一样。

使用消元法将系数矩阵 $A$ 变换为 $U$（阶梯形式 echelon form）：

<!-- #region-->
$$
\begin{aligned}
A=
\begin{bmatrix}
  1 &2 &2 &2\\
  2 &4 &6 &8\\
  3 &6 &8 &10\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &2 &2\\
  0 &0 &2 &4\\
  0 &0 &2 &4\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &2 &2\\
  0 &0 &{\color{Red}2} &4\\
  0 &0 &0 &0\\
\end{bmatrix}
=U
\end{aligned}
$$
<!-- #endregion -->

:bulb: 由于第二列与第一列线性相关，所以在消元的第一步中，第二列本该是主元的元素被同时消去。使得矩阵 $U$ 只有 2 个主元。

消元后矩阵 $U$ 的各列有两种形式：

* 主列 pivot column：主元所在的列，第 1 列和第 3 列，分别对应未知数 $x_{1}$ 和 $x_{3}$，它们称为**主变量**
* 自由列 free column：主元不在的列，第 2 列和第 4 列，分别对应未知数 $x_{2}$ 和 $x_{4}$，它们称为**自由变量**

<!-- #region-->
$$
\begin{aligned}
Ux=
\begin{bmatrix}
  {\color{Red}1} &2 &2 &2\\
  0 &0 &{\color{Red}2} &4\\
  0 &0 &0 &0\\
\end{bmatrix}
\begin{bmatrix}
  x_{1}\\
  x_{2}\\
  x_{3}\\
  x_{4}
\end{bmatrix}=
x_{1}
\begin{bmatrix}
  1\\
  0\\
  0\\
\end{bmatrix}+
x_{2}
\begin{bmatrix}
  2\\
  0\\
  0\\
\end{bmatrix}+
x_{3}
\begin{bmatrix}
  2\\
  2\\
  0\\
\end{bmatrix}+
x_{4}
\begin{bmatrix}
  2\\
  4\\
  0\\
\end{bmatrix}=
\begin{bmatrix}
  0\\
  0\\
  0\\
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

将 $Ux=0$ 写成方程组形式

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  x_{1}+2x_{2}+2x_{3}+2x_{4}&=0\\
  2x_{2}+4x_{4}&=0\\
  0&=0
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->

:bulb: 在回代替换时，**对于自由变量可以取任意值**，由于无法通过等式关系确定它们的值，即它们取任意值也不响应方程组等式关系的成立。

假设 $x_{2}=1$ 和 $x_{4}=0$，代入方程组可以求出 $x_{1}=-2$ 和 $x_{3}=0$

所以零空间其中一个向量（方程组的特解）就是：

<!-- #region-->
$$
\begin{aligned}
x=
\begin{bmatrix}
  -2\\
  1\\
  0\\
  0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

如果假设 $x_{2}=0$ 和 $x_{4}=1$，代入方程组可以求出 $x_{1}=2$ 和 $x_{3}=-2$

所以零空间其中另一个向量（方程组的另一个特将）就是：

<!-- #region-->
$$
\begin{aligned}
x=
\begin{bmatrix}
  2\\
  0\\
  -2\\
  0
\end{bmatrix}
\end{aligned}
$$
<!-- #endregion -->

根据向量空间对于线性组合的封闭性，可以通过两个特解的所有线性组合，构建（张成）零空间 $N(A)$

<!-- #region-->
$$
\begin{aligned}
N(A)=
c
\begin{bmatrix}
  -2\\
  1\\
  0\\
  0
\end{bmatrix}+
d
\begin{bmatrix}
  2\\
  0\\
  -2\\
  0
\end{bmatrix}，
其中 c、d 是任意系数
\end{aligned}
$$
<!-- #endregion -->

:bulb: 如果希望通过特解之间进行线性组合来构成零空间，**所需特解的数量是由矩阵的<span style="color: red">自由变量的数量 $(n-r)$</span> 决定的**。由于主变量需要满足方程的等式关系（其自由度受到等式限制），**而自由变量可以任意取值，其自由度对应于零空间的维度**，示例中由于 $n-r=4-2=2$，则 $N(A)$ 应该由两个特解张成，其维度是 2，它的几何形式是在 $\mathbb{R}^{4}$ 上的一个平面（二维）。

## 简化行阶梯形式
将矩阵 $U$ 进一步使用消元法变换为**简化行阶梯形式 reduced row echelon form，rref 形式**（该过程零空间仍未改变），该形式的矩阵主元为 1，且主元所在列上下的元素全是 0，记作 $R$，便于求出零空间。

<!-- #region-->
$$
\begin{aligned}
U=
\begin{bmatrix}
  {\color{Red}1} &2 &2 &2\\
  0 &0 &{\color{Red}2} &4\\
  0 &0 &0 &0\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &0 &-2\\
  0 &0 &{\color{Red}2} &4\\
  0 &0 &0 &0\\
\end{bmatrix}
\xrightarrow
{E}
\begin{bmatrix}
  {\color{Red}1} &2 &0 &-2\\
  0 &0 &{\color{Red}1} &2\\
  0 &0 &0 &0\\
\end{bmatrix}
=R
\end{aligned}
$$
<!-- #endregion -->

然后将 $Rx=0$ 写回方程组等式的形式

<!-- #region-->
$$
\begin{aligned}
\left\{\begin{matrix}
  x_{1}+2x_{2}-2x_{4}&=0\\
  x_{3}+2x_{4}&=0\\
  0&=0
\end{matrix}\right.
\end{aligned}
$$
<!-- #endregion -->

只要为自由变量指定值，可以基于等式直接求出主变量的值，得到特解。

:bulb: 假设对于方程组 $Ax=0$ 经过变换得到 $Rx=0$ 形式，在简化行阶梯形式中，主列在前（如果有）自由列在后（如果不是，可以通过列交互得到相应的结构，对应向量 $x$ 的元素进行相应的调换即可）；还可能由于矩阵 $A$ 存在一些线性相关的行，在消元过程中元素都变成 0 在最后。将主列（主变量对应的系数）记作 $I$，由于该局部分块都成单位矩阵；将自由列（自由变量对应的系数）记作 $F$

$Rx=0$ 更一般的表达形式

<!-- #region-->
$$
\begin{aligned}
Rx=
\begin{bmatrix}
  I& F\\
  0& 0\\
\end{bmatrix}
\begin{bmatrix}
  x_{pivot}\\
  x_{free}\\
\end{bmatrix}
\Rightarrow
\begin{bmatrix}
  I& F\\
\end{bmatrix}
\begin{bmatrix}
  x_{pivot}\\
  x_{free}\\
\end{bmatrix}=
I \cdot x_{pivot}+F \cdot x_{free}=0
\end{aligned}
$$
<!-- #endregion -->

所以可以基于自由变量和相应的系数确定各主变量的解 $x_{pivot}=-F \cdot x_{free}$

通过求解 $Rx=0$ 得到的解 $x$ 构成零空间矩阵 $N$，即 $RN=0$，则从矩阵相乘的角度考虑，根据矩阵的分块乘法，即可以得到**零空间矩阵为 $N=\begin{bmatrix}-F\\I\\\end{bmatrix}$**



