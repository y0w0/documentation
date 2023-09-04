---
sidebar_label: "Board-side Python NPU model inference tutorial (RKNN Toolkit Lite2)"
sidebar_position: 20
---

# Board-side Python NPU model inference tutorial (RKNN Toolkit Lite2)

:::info
This document only shows how to run the official example, for more information you can check the doc folder in the repository.
:::

## Install the dependencies required to compile and run RKNN Toolkit Lite2

```bash
sudo apt update
sudo apt install git python-is-python3 python3-pip python3-dev python3-opencv python3-numpy build-essential
```

## Downloading and Installing RKNPU2 Dependencies

:::info
The path to the source file for the copy command needs to be changed depending on the SOC and system architecture.
:::

```bash
git clone https://github.com/rockchip-linux/rknpu2.git
sudo cp rknpu2/runtime/RK3588/Linux/librknn_api/aarch64/* /usr/lib
```

## Download and Install RKNN Toolkit Lite2

:::info
RKNN Toolkit Lite2 documentation, examples and installation packages are in the RKNN Toolkit Lite2 folder of the RKNN Toolkit2 repository.
:::

```bash
git clone https://github.com/rockchip-linux/rknn-toolkit2.git
cd rknn-toolkit2/rknn_toolkit_lite2/
pip install ./packages/rknn_toolkit_lite2-1.5.2-cp39-cp39-linux_aarch64.whl
```

## Running the Resnet18 example

:::info
RKNN Toolkit Lite2 is mainly used for deploying RKNN models on Rockchip NPU.
Before using RKNN Toolkit Lite2, users need to convert the models exported by deep learning frameworks to RKNN models through RKNN Toolkit2.
The tutorial of using RKNN Toolkit2 can be found in [PC-based NPU model transformation and inference tutorial (RKNN Toolkit2)](./rknn-toolkit2).
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
Executing this example will load the Resnet18 model and perform inference to get the top5 classification results for the test image.
Here, category 812 has the highest probability, so the model may think that the input image belongs to category 812.
To understand what category 812 represents, you need to look at the dataset or labels that were used in the training of the model, or look for documents or resources related to the model to determine what category 812 means.
In this case category 812 would represent the space shuttle.
:::

![Input image](/img/general-tutorial/rknn/space_shuttle_224.webp)
