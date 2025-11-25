---
title: "例题集"
date: 2025-11-22
summary: "数学分析例题解答"
math: true
---

# 1.求解$y'=Ay$齐次线性方程(homogene lineare System von DGLn)

{{<rawhtml>}}

$$
\mathbf{A}=\begin{pmatrix} 0 & -4 & 4 \\ 0 & 2 & 0 \\ -2 & -4 & 6 \end{pmatrix}
$$

{{</rawhtml>}}

$$
y_1'= -4y_2 + 4y_3 \\
y_2'=2y_2 \\
y_3'=-2y_1-4y_2+6y_3
$$

Eigentwerte 特征值 $\lambda$

$$
\det(A-\lambda E) = 0
$$

Einheitmatrix 单位矩阵 $E$
{{<rawhtml>}}

$$
E=\begin{pmatrix}1 & & \\ & 1 & \\  & & 1 \end{pmatrix} \\
\lambda E=\begin{pmatrix}\lambda & & \\ & \lambda & \\  & & \lambda \end{pmatrix}
$$

{{</rawhtml>}}

{{<rawhtml>}}

$$
A-\lambda E=\begin{pmatrix}  -\lambda & -4 & 4 \\ 0 & 2-\lambda & 0 \\ -2 & -4 & 6-\lambda \end{pmatrix}
$$

{{</rawhtml>}}

{{<rawhtml>}}
$$
\det (A-\lambda E)=\begin{vmatrix} -\lambda & -4 & 4 \\ 0 & 2-\lambda & 0 \\ -2 & -4 & 6-\lambda \end{vmatrix} =(2-\lambda)(\lambda-2)(\lambda-4)=0 \\
\lambda_1=\lambda_2=2,\lambda_3=4
$$
{{</rawhtml>}}

Eigentvector 特征向量$\vec v$

当$\lambda=\lambda_1=\lambda_2=2$（二重根）

{{<rawhtml>}}

$$
A-2E=\begin{pmatrix} -2 & -4 & 4 \\ 0 & 0 & 0 \\ -2 & -4 & 4 \end{pmatrix}
$$

{{</rawhtml>}}

{{<rawhtml>}}

$$
(A-2E)\vec v=\begin{pmatrix} -2 & -4 & 4 \\ 0 & 0 & 0 \\ -2 & -4 & 4 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}=\vec 0
$$

{{</rawhtml>}}
化简得：

$$
-2v_1-4v_2+4v_3=0 \Rightarrow v_1+2v_2-2v_3=0
$$

特征空间维数为 2，可以找到两个线性无关的特征向量：

取 $v_2=1, v_3=0$：$v_1=-2$，得 {{<rawhtml>}}$\vec v_1=\begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}$ {{</rawhtml>}}

取 $v_2=0, v_3=1$：$v_1=2$，得 {{<rawhtml>}}$\vec v_2=\begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}${{</rawhtml>}}

---

当$\lambda=\lambda_3=4$
{{<rawhtml>}}

$$
A-4E=\begin{pmatrix} -4 & -4 & 4 \\ 0 & -2 & 0 \\ -2 & -4 & 2 \end{pmatrix}
$$

{{</rawhtml>}}

{{<rawhtml>}}

$$
(A-4E)\vec v=\begin{pmatrix} -4 & -4 & 4 \\ 0 & -2 & 0 \\ -2 & -4 & 2 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}=\vec 0
$$

{{</rawhtml>}}
从第二行：$-2v_2=0 \Rightarrow v_2=0$

从第一行：$-4v_1-4v_2+4v_3=0 \Rightarrow v_1=v_3$

得特征向量{{<rawhtml>}} $\vec v_3=\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}${{</rawhtml>}}

---

## 通解 (Allgemeine Lösung)

齐次线性方程组 $y'=Ay$ 的通解为：
{{<rawhtml>}}

$$
\vec y(t)=c_1 e^{2t}\begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}+c_2 e^{2t}\begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}+c_3 e^{4t}\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}
$$

{{</rawhtml>}}
或写成分量形式：
{{<rawhtml>}}

$$
\begin{cases}
y_1(t)=-2c_1e^{2t}+2c_2e^{2t}+c_3e^{4t} \\
y_2(t)=c_1e^{2t} \\
y_3(t)=c_2e^{2t}+c_3e^{4t}
\end{cases}
$$

{{</rawhtml>}}
其中 $c_1, c_2, c_3 \in \mathbb{R}$ 为任意常数。

---

## 验证 (Verifikation)

可以验证：$y_2'=2y_2$ ✓

对于 $y_1'=-4y_2+4y_3$：

$$
y_1'=-4c_1e^{2t}+4c_2e^{2t}+4c_3e^{4t}
$$

$$
-4y_2+4y_3=-4c_1e^{2t}+4c_2e^{2t}+4c_3e^{4t} ✓
$$

# 2.Für die Funktion $ f: \mathbb{R}^3 \to \mathbb{R}^3 $ mit

$$
f(x, y, z) = \begin{pmatrix} 2x + 4xz \\ z^2 \\ 2x^2 + 2yz + 3z^2 \end{pmatrix}
$$

gibt es ein Potential $\varphi$. Im folgenden kann also von der Gültigkeit des Potentialkriteriums ausgegangen werden.

---

## 6.1 求势函数 $\varphi$ (Potential ermitteln)

若 $f$ 为势函数 $\varphi$ 的梯度场，则：

$$
f = \nabla \varphi = \begin{pmatrix} \frac{\partial \varphi}{\partial x} \\ \frac{\partial \varphi}{\partial y} \\ \frac{\partial \varphi}{\partial z} \end{pmatrix}
$$

即：

$$
\frac{\partial \varphi}{\partial x} = 2x + 4xz \quad (1)
$$

$$
\frac{\partial \varphi}{\partial y} = z^2 \quad (2)
$$

$$
\frac{\partial \varphi}{\partial z} = 2x^2 + 2yz + 3z^2 \quad (3)
$$

**第一步：** 对方程 (1) 关于 $x$ 积分：

$$
\varphi = \int (2x + 4xz) \, dx = x^2 + 2x^2z + g(y,z)
$$

其中 $g(y,z)$ 是关于 $y, z$ 的待定函数。

**第二步：** 利用方程 (2)：

$$
\frac{\partial \varphi}{\partial y} = \frac{\partial g}{\partial y} = z^2
$$

对 $y$ 积分：

$$
g(y,z) = \int z^2 \, dy = yz^2 + h(z)
$$

其中 $h(z)$ 是关于 $z$ 的待定函数。

因此：

$$
\varphi = x^2 + 2x^2z + yz^2 + h(z)
$$

**第三步：** 利用方程 (3)：

$$
\frac{\partial \varphi}{\partial z} = 2x^2 + 2yz + h'(z) = 2x^2 + 2yz + 3z^2
$$

比较得：

$$
h'(z) = 3z^2
$$

积分得：

$$
h(z) = \int 3z^2 \, dz = z^3 + C
$$

取 $C = 0$，得势函数：

$$
\boxed{\varphi(x,y,z) = x^2 + 2x^2z + yz^2 + z^3}
$$

---

## 6.2 计算曲线积分 (Kurvenintegral berechnen)

由于 $f$ 是保守场（Konservatives Vektorfeld），曲线积分与路径无关，仅依赖于起点和终点：

$$
s = \int_C \boldsymbol{f} \cdot d\boldsymbol{s} = \varphi(Q) - \varphi(P)
$$

**计算 $\varphi(P)$：** 在点 $P(0,0,0)$

$$
\varphi(0,0,0) = 0^2 + 2(0)^2(0) + (0)(0)^2 + 0^3 = 0
$$

**计算 $\varphi(Q)$：** 在点 $Q(1,1,2)$

$$
\varphi(1,1,2) = 1^2 + 2(1)^2(2) + (1)(2)^2 + 2^3
$$

$$
= 1 + 4 + 4 + 8 = 17
$$

**结果：**

$$
\boxed{s = \varphi(Q) - \varphi(P) = 17 - 0 = 17}
$$

---

## 验证 (Verifikation)

验证 $\nabla \varphi = f$：

$$
\frac{\partial \varphi}{\partial x} = 2x + 4xz \quad ✓
$$

$$
\frac{\partial \varphi}{\partial y} = z^2 \quad ✓
$$

$$
\frac{\partial \varphi}{\partial z} = 2x^2 + 2yz + 3z^2 \quad ✓
$$

---



## （i）螺旋线  
**Die Schraubenlinie**  
设向量函数：  

{{<rawhtml>}}
$$
\mathbf{f}(t) = 
\begin{pmatrix}
r \cos t \\
r \sin t \\
h \cdot t
\end{pmatrix},
\quad \text{其中 } 0 \le t \le 2\pi.
$$

{{</rawhtml>}}

---

## （ii）函数的图形  
**Der Graph der Funktion** $\mathbf{f} : [0,1] \to \mathbb{R}$，其中 $\mathbf{f}(x) = \cosh x$。

**提示 1：** 你可以将该图形描述为曲线，若定义参数化曲线 $\mathbf{s} : [0,1] \to \mathbb{R}^2$，其中：  

{{<rawhtml>}}
$$
\mathbf{s}(x) = 
\begin{pmatrix}
x \\
f(x)
\end{pmatrix}.
$$

{{</rawhtml>}}

**提示 2：** 有恒等式：$\cosh^2 x - \sinh^2 x = 1$。

---

## 3.4.46 练习题（Übung）  
计算积分 $\int_K \mathbf{f} \cdot d\mathbf{s}$ 的值，其中向量场  

{{<rawhtml>}}
$$
\mathbf{f} : \mathbb{R}^2 \to \mathbb{R}^2, \quad
\mathbf{f}(x,y) = 
\begin{pmatrix}
2xy + y^2 \\
2xy + x^2
\end{pmatrix}.
$$

{{</rawhtml>}}

![3.32Abbildung](/static/assets/3.32Abbildung.jpeg)

分别针对以下路径：

**(i)** 由线段 A1 与 A2 组成的曲线（参见图 3.32）；  
**(ii)** 由线段 B 组成的曲线；  
**(iii)** 通过求向量场 $\mathbf{f}$ 的势函数 $\varphi$（并任取一条从 $(-1,-1)$ 到 $(1,2)$ 的曲线）。

---

## 3.4.47 练习题（Übung）  
计算积分 $\int_C \mathbf{f} \cdot d\mathbf{s}$ 的值，其中积分路径 $C$ 从点 $P_1 = (1,0,1)$ 到点 $P_2 = (2,3,2)$，向量场为  

{{<rawhtml>}}
$$
\mathbf{f} : \mathbb{R}^3 \to \mathbb{R}^3, \quad
\mathbf{f}(x,y,z) = 
\begin{pmatrix}
3x^2y + 1 \\
x^3 + 2yz^2 \\
2y^2z + 3z^2
\end{pmatrix}.
$$

{{</rawhtml>}}

---

