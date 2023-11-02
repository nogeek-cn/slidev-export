#!/usr/bin/env bash

# 删除原来的导出文件
rm -rf slides-export
# 导出为图片
slidev export --format png


# 导出为 PDF
# slidev export