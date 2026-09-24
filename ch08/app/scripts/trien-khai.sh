#!/usr/bin/env bash
# Script co loi shellcheck that: bien khong trich dan, cd khong kiem loi.
THU_MUC=$1
cd $THU_MUC
rm -rf $THU_MUC/tmp/*
echo "xong"
