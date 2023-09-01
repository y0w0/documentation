---
sidebar_label: "板端 Python npu 模型推理教程 (RKNN Toolkit Lite2)"
sidebar_position: 20
---

# 板端 Python npu 模型推理教程 (RKNN Toolkit Lite2)

:::info
本文档仅演示如何运行官方示例，更多资料可以查看源码库内的doc文件夹
:::

## 安装编译与运行 RKNN Toolkit Lite2 所需依赖

```bash
sudo apt install git python-is-python3 python3-pip python3-dev python3-opencv python3-numpy build-essential
```

## 下载与安装 RKNPU2 依赖
:::info
拷贝命令的源文件路径需要根据SOC与系统架构的不同更换文件路径名
:::
```bash
git clone https://github.com/rockchip-linux/rknpu2.git
sudo cp rknpu2/runtime/RK3588/Linux/librknn_api/aarch64/* /usr/lib
```

## 拉取与安装 RKNN Toolkit Lite2

:::info
RKNN Toolkit Lite2 相关文档、例程和安装包在RKNN Toolkit2库的 RKNN Toolkit Lite2 文件夹
:::

```bash
git clone https://github.com/rockchip-linux/rknn-toolkit2.git
cd rknn-toolkit2/rknn_toolkit_lite2/
pip install ./packages/rknn_toolkit_lite2-1.5.2-cp39-cp39-linux_aarch64.whl
```

## 运行 Resnet18 示例

:::info
RKNN Toolkit Lite2 主要用于 RKNN 模型在 Rockchip NPU 上的部署。在使用 RKNN Toolkit Lite2 之前，用户需要先通过RKNN Toolkit2 将各深度学习框架导出的模型转成 RKNN 模型。RKNN Toolkit2 使用教程可以参考 [PC 端 npu 模型转换与推理教程 (RKNN Toolkit2)](./rknn-toolkit2)
:::

```bash
cd examples/inference_with_lite
python3 test.py
--> Load RKNN model
done
--> Init runtime environment
I RKNN: [19:27:40.110] RKNN Runtime Information: librknnrt version: 1.5.2 (c6b7b351a@2023-08-23T15:28:22)
I RKNN: [19:27:40.110] RKNN Driver Information: version: 0.8.2
W RKNN: [19:27:40.110] Current driver version: 0.8.2, recommend to upgrade the driver to the new version: >= 0.8.8
I RKNN: [19:27:40.111] RKNN Model Information: version: 6, toolkit version: 1.5.2-source_code(compiler version: 1.5.2 (71720f3fc@2023-08-21T09:35:42)), target: RKNPU v2, target platform: rk3588, framework name: PyTorch, framework layout: NCHW, model inference type: static_shape
done
--> Running model
resnet18
-----TOP 5-----
[812]: 0.9996760487556458
[404]: 0.00024927023332566023
[657]: 1.449744013370946e-05
[466 833]: 9.023910024552606e-06
[466 833]: 9.023910024552606e-06

done
```

:::info
执行该示例将加载 Resnet18 模型并进行推理，得到测试图片的 top5 分类结果。在这里，类别812的概率最高，所以模型可能认为输入图像属于类别812。要了解类别812代表的是什么，您需要查看模型训练时使用的数据集或标签，或者查找与该模型相关的文档或资源，以确定类别812的含义。在这里类别812表示的应该是航天飞机。
:::

![输入的图片](/img/general-tutorial/rknn/space_shuttle_224.webp)
