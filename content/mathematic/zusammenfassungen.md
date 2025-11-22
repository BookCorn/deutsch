---
title: "总结"
date: 2025-11-22
summary: "数学分析知识点总结"
math: true
---

# 数学分析复习总结 (Zusammenfassungen)

---

## 0. 保守场的证明 (Konservatives Vektorfeld)

### 定义
向量场 $\vec f:\mathbb{R}^3 \to \mathbb{R}^3$ 是保守场，当且仅当存在势函数 $\varphi$ 使得：
{{<rawhtml>}}
$$
\vec f = \nabla \varphi = \text{grad } \varphi
$$
{{</rawhtml>}}

### 判定准则 (Potentialkriterium)
对于向量场：
{{<rawhtml>}}
$$
\vec f=\begin{pmatrix} f_1 \\ f_2 \\ f_3 \end{pmatrix}
$$
{{</rawhtml>}}

**充要条件**：旋度为零 $\nabla \times \vec f = \vec 0$，即：
{{<rawhtml>}}
$$
\boxed{\begin{cases}
\frac{\partial f_3}{\partial x_2}=\frac{\partial f_2}{\partial x_3} \\[8pt]
\frac{\partial f_1}{\partial x_3}=\frac{\partial f_3}{\partial x_1} \\[8pt]
\frac{\partial f_2}{\partial x_1}=\frac{\partial f_1}{\partial x_2}
\end{cases}}
$$
{{</rawhtml>}}

### 保守场的性质
1. **路径无关性**：曲线积分 $\int_C \vec f \cdot d\vec s$ 只依赖于起点和终点
2. **闭合路径积分为零**：$\oint_C \vec f \cdot d\vec s = 0$
3. **势函数差**：$\int_C \vec f \cdot d\vec s = \varphi(B) - \varphi(A)$

---

## 0.1 行列式的计算 (Determinante)

### 2×2 行列式
{{<rawhtml>}}
$$
\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc
$$
{{</rawhtml>}}

### 3×3 行列式（Sarrus 规则）
{{<rawhtml>}}
$$
\det \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}
$$
{{</rawhtml>}}

**记忆方法**：主对角线三项为正，副对角线三项为负

### 拉普拉斯展开（按行/列展开）
按第 $i$ 行展开：
{{<rawhtml>}}
$$
\det(A) = \sum_{j=1}^n (-1)^{i+j} a_{ij} M_{ij}
$$
{{</rawhtml>}}
其中 $M_{ij}$ 是去掉第 $i$ 行第 $j$ 列后的余子式。

**例子**：按第一行展开
{{<rawhtml>}}
$$
\det(A) = a_{11}\begin{vmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{vmatrix} - a_{12}\begin{vmatrix}a_{21}&a_{23}\\a_{31}&a_{33}\end{vmatrix} + a_{13}\begin{vmatrix}a_{21}&a_{22}\\a_{31}&a_{32}\end{vmatrix}
$$
{{</rawhtml>}}

### 性质
1. 交换两行/列，行列式变号
2. 某行/列乘以常数 $k$，行列式乘以 $k$
3. 有两行/列相同或成比例，行列式为 0
4. $\det(AB) = \det(A) \cdot \det(B)$
5. $\det(A^T) = \det(A)$

---

## 0.2 矩阵的计算 (Matrizenrechnung)

### 矩阵乘法
$(AB)_{ij} = \sum_{k=1}^n a_{ik}b_{kj}$

**注意**：$AB \neq BA$（一般不可交换）

### 矩阵的逆 (Inverse Matrix)
若 $\det(A) \neq 0$，则 $A$ 可逆。

**2×2 矩阵的逆**：
{{<rawhtml>}}
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$
{{</rawhtml>}}

**验证**：$AA^{-1} = E$（单位矩阵）

### 特征值和特征向量 (Eigenwerte und Eigenvektoren)
{{<rawhtml>}}
$$
A\vec v = \lambda \vec v
$$
{{</rawhtml>}}

**求解步骤**：
1. 求特征多项式：$\det(A - \lambda E) = 0$
2. 解方程得特征值 $\lambda_1, \lambda_2, ...$
3. 对每个 $\lambda_i$，求解 $(A - \lambda_i E)\vec v = \vec 0$ 得特征向量

### 矩阵的秩 (Rang)
通过高斯消元法化为行阶梯形，非零行的数量即为秩。

**性质**：$\text{Rang}(A) = n \Leftrightarrow \det(A) \neq 0$（满秩）

---

## 1. 求势函数 (Potential ermitteln)

### 前提条件
向量场 $\vec f = \begin{pmatrix} f_1 \\ f_2 \\ f_3 \end{pmatrix}$ 必须是保守场（验证旋度为零）

### 方法：逐步积分法

**步骤**：

**第一步**：对 $\frac{\partial \varphi}{\partial x} = f_1$ 关于 $x$ 积分
{{<rawhtml>}}
$$
\varphi = \int f_1(x,y,z) \, dx + g(y,z)
$$
{{</rawhtml>}}
其中 $g(y,z)$ 是关于 $y,z$ 的待定函数。

**第二步**：利用 $\frac{\partial \varphi}{\partial y} = f_2$ 确定 $g(y,z)$
{{<rawhtml>}}
$$
\frac{\partial}{\partial y}\left[\int f_1 \, dx + g(y,z)\right] = f_2
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
\Rightarrow \frac{\partial g}{\partial y} = f_2 - \frac{\partial}{\partial y}\int f_1 \, dx
$$
{{</rawhtml>}}
积分得：
{{<rawhtml>}}
$$
g(y,z) = \int \left(f_2 - \frac{\partial}{\partial y}\int f_1 \, dx\right) dy + h(z)
$$
{{</rawhtml>}}

**第三步**：利用 $\frac{\partial \varphi}{\partial z} = f_3$ 确定 $h(z)$
{{<rawhtml>}}
$$
\frac{\partial \varphi}{\partial z} = f_3
$$
{{</rawhtml>}}
解出 $h'(z)$，积分得 $h(z) = \int h'(z) \, dz + C$

**最终**：$\varphi(x,y,z) = ...$ （取 $C=0$）

### 验证
检查 $\nabla \varphi = \vec f$：
- $\frac{\partial \varphi}{\partial x} = f_1$ ✓
- $\frac{\partial \varphi}{\partial y} = f_2$ ✓
- $\frac{\partial \varphi}{\partial z} = f_3$ ✓

---

## 2. 求曲线长度 (Kurvenlänge)

### 参数曲线的弧长
给定曲线 $\vec r(t) = \begin{pmatrix} x(t) \\ y(t) \\ z(t) \end{pmatrix}$，$t \in [a,b]$

**弧长公式**：
{{<rawhtml>}}
$$
\boxed{L = \int_a^b \|\vec r'(t)\| \, dt = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2 + [z'(t)]^2} \, dt}
$$
{{</rawhtml>}}

### 平面曲线（笛卡尔坐标）
若 $y = f(x)$，$x \in [a,b]$：
{{<rawhtml>}}
$$
L = \int_a^b \sqrt{1 + [f'(x)]^2} \, dx
$$
{{</rawhtml>}}

### 极坐标曲线
若 $r = r(\theta)$，$\theta \in [\alpha, \beta]$：
{{<rawhtml>}}
$$
L = \int_\alpha^\beta \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2} \, d\theta
$$
{{</rawhtml>}}

### 计算步骤
1. 参数化曲线（如果尚未参数化）
2. 求导数 $\vec r'(t)$
3. 计算模长 $\|\vec r'(t)\|$
4. 积分

**例子**：螺旋线
曲线 $\vec r(t) = \begin{pmatrix} \cos t \\ \sin t \\ t \end{pmatrix}$，$t \in [0, 2\pi]$

$\vec r'(t) = \begin{pmatrix} -\sin t \\ \cos t \\ 1 \end{pmatrix}$

$\|\vec r'(t)\| = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{2}$

$L = \int_0^{2\pi} \sqrt{2} \, dt = 2\sqrt{2}\pi$

---

## 3. 求体积/面积（二重积分）(Doppelintegral)

### 直角坐标系
区域 $D$ 上的二重积分：
{{<rawhtml>}}
$$
\iint_D f(x,y) \, dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \, dx
$$
{{</rawhtml>}}
或者
{{<rawhtml>}}
$$
= \int_c^d \int_{h_1(y)}^{h_2(y)} f(x,y) \, dx \, dy
$$
{{</rawhtml>}}

**面积**：$A = \iint_D 1 \, dA$

**体积**（曲顶柱体）：$V = \iint_D f(x,y) \, dA$（其中 $z=f(x,y) \geq 0$）

### 极坐标系
变换：$x = r\cos\theta$，$y = r\sin\theta$

**雅可比行列式**：$\frac{\partial(x,y)}{\partial(r,\theta)} = r$

{{<rawhtml>}}
$$
\iint_D f(x,y) \, dx\,dy = \int_\alpha^\beta \int_{r_1(\theta)}^{r_2(\theta)} f(r\cos\theta, r\sin\theta) \cdot r \, dr \, d\theta
$$
{{</rawhtml>}}

### 计算步骤
1. **画出积分区域** $D$
2. **确定积分限**（可能需要分成多个子区域）
3. **选择坐标系**：
   - 圆形区域 → 极坐标
   - 矩形区域 → 直角坐标
4. **计算积分**

**例子**：圆盘的面积
区域：$D = \{(x,y) : x^2 + y^2 \leq R^2\}$

极坐标：$0 \leq r \leq R$，$0 \leq \theta \leq 2\pi$

{{<rawhtml>}}
$$
A = \iint_D 1 \, dA = \int_0^{2\pi} \int_0^R r \, dr \, d\theta = \int_0^{2\pi} \frac{R^2}{2} \, d\theta = \pi R^2
$$
{{</rawhtml>}}

### 体积（三重积分）
{{<rawhtml>}}
$$
V = \iiint_V 1 \, dV = \iiint_V dx\,dy\,dz
$$
{{</rawhtml>}}

---

## 4. 标量的曲线积分 (Kurvenintegral erster Art)

### 定义
沿曲线 $C$ 对标量函数 $f$ 的积分（第一类曲线积分）：
{{<rawhtml>}}
$$
\boxed{\int_C f \, ds = \int_a^b f(\vec r(t)) \|\vec r'(t)\| \, dt}
$$
{{</rawhtml>}}

其中：
- $\vec r(t)$ 是曲线的参数表示，$t \in [a,b]$
- $ds = \|\vec r'(t)\| dt$ 是弧长微元

### 物理意义
- **质量**：线密度为 $\rho(x,y,z)$ 的曲线质量 $m = \int_C \rho \, ds$
- **重心坐标**：$\bar{x} = \frac{1}{m}\int_C x\rho \, ds$
- **平均值**：$\bar{f} = \frac{1}{L}\int_C f \, ds$（$L$ 为曲线长度）

### 计算步骤
1. 参数化曲线 $\vec r(t)$，$t \in [a,b]$
2. 计算 $\vec r'(t)$ 和 $\|\vec r'(t)\|$
3. 代入 $f(\vec r(t))$
4. 计算积分 $\int_a^b f(\vec r(t)) \|\vec r'(t)\| \, dt$

### 性质
- **与路径方向无关**（标量积分）
- **可加性**：$\int_{C_1+C_2} f \, ds = \int_{C_1} f \, ds + \int_{C_2} f \, ds$

**例子**：
$f(x,y) = xy$，沿半圆 $\vec r(t) = \begin{pmatrix} \cos t \\ \sin t \end{pmatrix}$，$t \in [0,\pi]$

$\vec r'(t) = \begin{pmatrix} -\sin t \\ \cos t \end{pmatrix}$，$\|\vec r'(t)\| = 1$

$f(\vec r(t)) = \cos t \sin t$

$\int_C xy \, ds = \int_0^\pi \cos t \sin t \cdot 1 \, dt = \int_0^\pi \frac{1}{2}\sin 2t \, dt = \left[-\frac{1}{4}\cos 2t\right]_0^\pi = 0$

---

## 5. 曲面积分求面积 (Oberflächeninhalt)

### 参数曲面的面积
给定曲面 $\vec r(u,v) = \begin{pmatrix} x(u,v) \\ y(u,v) \\ z(u,v) \end{pmatrix}$，$(u,v) \in D$

**面积公式**：
{{<rawhtml>}}
$$
\boxed{A = \iint_D \left\|\frac{\partial \vec r}{\partial u} \times \frac{\partial \vec r}{\partial v}\right\| \, du \, dv}
$$
{{</rawhtml>}}

### 显式曲面 $z = f(x,y)$
参数化：$\vec r(x,y) = \begin{pmatrix} x \\ y \\ f(x,y) \end{pmatrix}$

{{<rawhtml>}}
$$
\frac{\partial \vec r}{\partial x} \times \frac{\partial \vec r}{\partial y} = \begin{pmatrix} -f_x \\ -f_y \\ 1 \end{pmatrix}
$$
{{</rawhtml>}}

{{<rawhtml>}}
$$
\boxed{A = \iint_D \sqrt{1 + f_x^2 + f_y^2} \, dx \, dy}
$$
{{</rawhtml>}}

### 计算步骤
1. 参数化曲面 $\vec r(u,v)$
2. 求偏导数 $\vec r_u = \frac{\partial \vec r}{\partial u}$，$\vec r_v = \frac{\partial \vec r}{\partial v}$
3. 计算叉积 $\vec r_u \times \vec r_v$
4. 计算模长 $\|\vec r_u \times \vec r_v\|$
5. 二重积分

**例子**：球面面积
球面 $x^2 + y^2 + z^2 = R^2$

球坐标参数化：
{{<rawhtml>}}
$$
\vec r(\theta,\phi) = \begin{pmatrix} R\sin\phi\cos\theta \\ R\sin\phi\sin\theta \\ R\cos\phi \end{pmatrix}
$$
{{</rawhtml>}}
其中 $0 \leq \theta \leq 2\pi$，$0 \leq \phi \leq \pi$

计算得：$\|\vec r_\theta \times \vec r_\phi\| = R^2\sin\phi$

{{<rawhtml>}}
$$
A = \int_0^{2\pi}\int_0^\pi R^2\sin\phi \, d\phi \, d\theta = 2\pi R^2 \cdot 2 = 4\pi R^2
$$
{{</rawhtml>}}

---

## 6. 已知路径求曲线积分 (Kurvenintegral zweiter Art)

### 向量场的曲线积分（第二类曲线积分）
{{<rawhtml>}}
$$
\boxed{\int_C \vec f \cdot d\vec s = \int_a^b \vec f(\vec r(t)) \cdot \vec r'(t) \, dt}
$$
{{</rawhtml>}}

### 分量形式
{{<rawhtml>}}
$$
\int_C \vec f \cdot d\vec s = \int_C (f_1 \, dx + f_2 \, dy + f_3 \, dz)
$$
{{</rawhtml>}}

### 计算方法

#### 方法一：直接参数化计算（适用于所有情况）
1. 参数化路径 $\vec r(t) = \begin{pmatrix} x(t) \\ y(t) \\ z(t) \end{pmatrix}$，$t \in [a,b]$
2. 计算 $\vec r'(t) = \begin{pmatrix} x'(t) \\ y'(t) \\ z'(t) \end{pmatrix}$
3. 计算 $\vec f(\vec r(t)) = \begin{pmatrix} f_1(x(t),y(t),z(t)) \\ f_2(x(t),y(t),z(t)) \\ f_3(x(t),y(t),z(t)) \end{pmatrix}$
4. 计算点积 $\vec f(\vec r(t)) \cdot \vec r'(t)$
5. 积分 $\int_a^b [\vec f(\vec r(t)) \cdot \vec r'(t)] \, dt$

#### 方法二：势函数法（仅适用于保守场）
**前提**：先验证 $\vec f$ 是保守场（旋度为零）

步骤：
1. 求势函数 $\varphi$（使 $\nabla \varphi = \vec f$）
2. 计算 $\varphi(B) - \varphi(A)$（$A$ 是起点，$B$ 是终点）

{{<rawhtml>}}
$$
\boxed{\int_C \vec f \cdot d\vec s = \varphi(B) - \varphi(A)}
$$
{{</rawhtml>}}

### 性质
- **与路径方向相关**：$\int_{-C} \vec f \cdot d\vec s = -\int_C \vec f \cdot d\vec s$
- **保守场的路径无关性**

### 物理意义
- **功**：力场 $\vec F$ 沿路径 $C$ 做的功 $W = \int_C \vec F \cdot d\vec s$
- **环流量**：闭合路径的积分 $\oint_C \vec f \cdot d\vec s$

**例子一**（直接法）：
$\vec f = \begin{pmatrix} y \\ x \end{pmatrix}$，沿直线从 $(0,0)$ 到 $(1,1)$

参数化：$\vec r(t) = \begin{pmatrix} t \\ t \end{pmatrix}$，$t \in [0,1]$

$\vec r'(t) = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

$\vec f(\vec r(t)) = \begin{pmatrix} t \\ t \end{pmatrix}$

$\vec f \cdot \vec r' = t \cdot 1 + t \cdot 1 = 2t$

$\int_C \vec f \cdot d\vec s = \int_0^1 2t \, dt = [t^2]_0^1 = 1$

**例子二**（势函数法）：
$\vec f = \begin{pmatrix} 2x + 4xz \\ z^2 \\ 2x^2 + 2yz + 3z^2 \end{pmatrix}$，从 $P(0,0,0)$ 到 $Q(1,1,2)$

验证保守场（旋度为零）✓

势函数：$\varphi(x,y,z) = x^2 + 2x^2z + yz^2 + z^3$

$\int_C \vec f \cdot d\vec s = \varphi(Q) - \varphi(P) = 17 - 0 = 17$

---

## 7. 求通量 $\Phi$ (Fluss)

### 定义
向量场 $\vec f$ 通过定向曲面 $S$ 的通量：
{{<rawhtml>}}
$$
\boxed{\Phi = \iint_S \vec f \cdot d\vec A = \iint_S \vec f \cdot \vec n \, dS}
$$
{{</rawhtml>}}

其中：
- $\vec n$ 是单位法向量
- $d\vec A = \vec n \, dS$ 是定向面积微元
- $dS$ 是面积微元

### 参数曲面的通量
给定 $\vec r(u,v)$，$(u,v) \in D$

法向量：$\vec N = \frac{\partial \vec r}{\partial u} \times \frac{\partial \vec r}{\partial v}$（未归一化）

{{<rawhtml>}}
$$
\boxed{\Phi = \iint_D \vec f(\vec r(u,v)) \cdot \left(\frac{\partial \vec r}{\partial u} \times \frac{\partial \vec r}{\partial v}\right) \, du \, dv}
$$
{{</rawhtml>}}

### 显式曲面 $z = g(x,y)$
参数化：$\vec r(x,y) = \begin{pmatrix} x \\ y \\ g(x,y) \end{pmatrix}$

法向量（向上）：$\vec N = \begin{pmatrix} -g_x \\ -g_y \\ 1 \end{pmatrix}$

对于 $\vec f = \begin{pmatrix} P \\ Q \\ R \end{pmatrix}$：
{{<rawhtml>}}
$$
\boxed{\Phi = \iint_D (-P g_x - Q g_y + R) \, dx \, dy}
$$
{{</rawhtml>}}

或写成：
{{<rawhtml>}}
$$
\Phi = \iint_D \vec f(x,y,g(x,y)) \cdot \begin{pmatrix} -g_x \\ -g_y \\ 1 \end{pmatrix} \, dx \, dy
$$
{{</rawhtml>}}

### 计算步骤
1. 参数化曲面（或识别显式曲面）
2. 计算法向量 $\vec N = \vec r_u \times \vec r_v$（**注意方向！**）
3. 代入向量场 $\vec f(\vec r(u,v))$
4. 计算点积 $\vec f \cdot \vec N$
5. 二重积分

### 高斯散度定理 (Gaußscher Integralsatz)
对于封闭曲面 $S$ 包围体积 $V$（法向量向外）：
{{<rawhtml>}}
$$
\boxed{\iint_S \vec f \cdot d\vec A = \iiint_V \nabla \cdot \vec f \, dV}
$$
{{</rawhtml>}}

其中散度：
{{<rawhtml>}}
$$
\nabla \cdot \vec f = \frac{\partial f_1}{\partial x}+\frac{\partial f_2}{\partial y}+\frac{\partial f_3}{\partial z}
$$
{{</rawhtml>}}

### 物理意义
- **流体流量**：速度场 $\vec v$ 通过曲面的体积流量
- **电通量**：电场 $\vec E$ 通过曲面的通量
- **热流**：热流密度 $\vec q$ 通过曲面的热量

### 注意事项
⚠️ **法向量方向**：
- 开放曲面：题目会指定方向（向上、向外等）
- 封闭曲面：通常取向外的法向量

**例子一**：平面区域
$\vec f = \begin{pmatrix} 0 \\ 0 \\ z \end{pmatrix}$，通过平面 $z=1$，$x^2+y^2 \leq 1$（向上）

曲面可视为 $z = g(x,y) = 1$，$g_x = g_y = 0$

$\vec f(x,y,1) = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$

$\Phi = \iint_D (0 \cdot 0 - 0 \cdot 0 + 1) \, dx \, dy = \iint_D 1 \, dx \, dy = \pi \cdot 1^2 = \pi$

**例子二**：球面（用高斯定理）
$\vec f = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$，通过球面 $x^2+y^2+z^2=R^2$（向外）

散度：$\nabla \cdot \vec f = 1 + 1 + 1 = 3$

{{<rawhtml>}}
$$
\Phi = \iiint_V 3 \, dV = 3 \cdot \frac{4}{3}\pi R^3 = 4\pi R^3
$$
{{</rawhtml>}}

---

## 重要公式总结 (Wichtige Formeln)

### 梯度、散度、旋度

**梯度**（标量函数 → 向量场）：
{{<rawhtml>}}
$$
\nabla f = \text{grad } f = \begin{pmatrix} \frac{\partial f}{\partial x} \\ \frac{\partial f}{\partial y} \\ \frac{\partial f}{\partial z} \end{pmatrix}
$$
{{</rawhtml>}}

**散度**（向量场 → 标量函数）：
{{<rawhtml>}}
$$
\nabla \cdot \vec f = \text{div } \vec f = \frac{\partial f_1}{\partial x}+\frac{\partial f_2}{\partial y}+\frac{\partial f_3}{\partial z}
$$
{{</rawhtml>}}

**旋度**（向量场 → 向量场）：
{{<rawhtml>}}
$$
\nabla \times \vec f = \text{curl } \vec f = \begin{vmatrix} \vec i & \vec j & \vec k \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ f_1 & f_2 & f_3 \end{vmatrix}
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
= \begin{pmatrix} \frac{\partial f_3}{\partial y}-\frac{\partial f_2}{\partial z} \\ \frac{\partial f_1}{\partial z}-\frac{\partial f_3}{\partial x} \\ \frac{\partial f_2}{\partial x}-\frac{\partial f_1}{\partial y} \end{pmatrix}
$$
{{</rawhtml>}}

### 三大积分定理

**1. 格林公式** (Greenscher Satz)（平面曲线积分→二重积分）
{{<rawhtml>}}
$$
\oint_C (P \, dx + Q \, dy) = \iint_D \left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right) dx \, dy
$$
{{</rawhtml>}}

**2. 斯托克斯定理** (Stokesscher Satz)（空间曲线积分→曲面积分）
{{<rawhtml>}}
$$
\int_C \vec f \cdot d\vec s = \iint_S (\nabla \times \vec f) \cdot d\vec A
$$
{{</rawhtml>}}

**3. 高斯定理** (Gaußscher Satz)（曲面积分→三重积分）
{{<rawhtml>}}
$$
\iint_S \vec f \cdot d\vec A = \iiint_V (\nabla \cdot \vec f) \, dV
$$
{{</rawhtml>}}

### 坐标变换

**极坐标**（平面）：
{{<rawhtml>}}
$$
x = r\cos\theta, \quad y = r\sin\theta, \quad dA = r \, dr \, d\theta
$$
{{</rawhtml>}}

**柱坐标**：
{{<rawhtml>}}
$$
x = r\cos\theta, \quad y = r\sin\theta, \quad z = z, \quad dV = r \, dr \, d\theta \, dz
$$
{{</rawhtml>}}

**球坐标**：
{{<rawhtml>}}
$$
x = \rho\sin\phi\cos\theta, \quad y = \rho\sin\phi\sin\theta, \quad z = \rho\cos\phi
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
dV = \rho^2\sin\phi \, d\rho \, d\phi \, d\theta
$$
{{</rawhtml>}}

### 常用积分
{{<rawhtml>}}
$$
\int \sin x \, dx = -\cos x + C
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
\int \cos x \, dx = \sin x + C
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
\int e^{ax} \, dx = \frac{1}{a}e^{ax} + C
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
\int \frac{1}{x} \, dx = \ln|x| + C
$$
{{</rawhtml>}}
{{<rawhtml>}}
$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)
$$
{{</rawhtml>}}

---

## 常见题型总结

### 类型一：判断保守场
**方法**：验证 $\nabla \times \vec f = \vec 0$

### 类型二：求势函数
**方法**：逐步积分法（见第1节）

### 类型三：计算曲线积分
- **保守场** → 势函数法
- **非保守场** → 参数化直接计算
- **闭合曲线** → 格林公式或斯托克斯定理

### 类型四：计算曲面积分（通量）
- **简单曲面** → 直接参数化
- **封闭曲面** → 高斯定理（散度定理）

### 类型五：计算面积/弧长
- **曲线长度** → $\int \|\vec r'(t)\| dt$
- **曲面面积** → $\iint \|\vec r_u \times \vec r_v\| du\,dv$

### 类型六：计算体积
- **简单区域** → 直角坐标
- **圆形/球形** → 极坐标/球坐标
- **旋转体** → 柱坐标
