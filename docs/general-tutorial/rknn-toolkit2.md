---
sidebar_label: "PC 端 npu 模型转换与推理教程 (RKNN Toolkit2)"
sidebar_position: 20
---

# PC 端 npu 模型转换与推理教程 (RKNN Toolkit2)

## 安装编译与运行 RKNN Toolkit2 所需依赖及软件

```bash
sudo apt install git python-is-python3 python3-pip libxslt1-dev zlib1g-dev libglib2.0-dev libsm6 libgl1-mesa-glx libprotobuf-dev build-essential adb
```

## 拉取与安装 RKNN Toolkit2

```bash
git clone https://github.com/rockchip-linux/rknn-toolkit2.git
cd rknn-toolkit2/
pip install ./packages/rknn_toolkit2-1.5.2+b642f30c-cp310-cp310-linux_x86_64.whl
```

## 运行 yolov5 例程

<!-- :::info
此脚本是在 PC 模拟器上运行，若需要连板调试请参考
::: -->

```bash
cd examples/onnx/yolov5
python test.py
```

:::info
转换模型和推理脚本 test.py 运行成功后，转换后的模型默认保存路径为 examples/onnx/yolov5/yolov5s_relu.rknn，推理的图片结果保存在 examples/onnx/yolov5/result.jpg
:::

![推理结果](/img/general-tutorial/rknn/result.webp)
