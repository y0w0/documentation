---
sidebar_label: 'PC-based npu model transformation and inference tutorial (rknn-toolkit2)'
sidebar_position: 20
---

# PC-based npu model transformation and inference tutorial (rknn-toolkit2)
## Install dependencies and software required to compile and run rknn-toolkit2
```bash
sudo apt install git python-is-python3 python3-pip libxslt1-dev zlib1g-dev libglib2.0-dev libsm6 libgl1-mesa-glx libprotobuf-dev build-essential adb
```

## Download and installing rknn-toolkit2
```bash
git clone https://github.com/rockchip-linux/rknn-toolkit2.git
cd rknn-toolkit2/
pip install ./packages/rknn_toolkit2-1.5.2+b642f30c-cp310-cp310-linux_x86_64.whl
```

## Run the yolov5 example
<!-- :::info
This script is run on a PC emulator, if you need to debug with a board please refer to
::: -->
```bash
cd examples/onnx/yolov5
python test.py
```
:::info
After the conversion model and inference script test.py is run successfully, the converted model is saved in examples/onnx/yolov5/yolov5s_relu.rknn by default, and the result of the inference image is saved in examples/onnx/yolov5/result.jpg
:::
![inference result](/img/general-tutorial/rknn/result.webp)
