import React, { FC } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export const UploadSection:FC = () => {
  return (
    <Dragger {...props} >
      <p className="ant-upload-drag-icon ">
      <InboxOutlined />
      </p>
      <p>css test</p>
      <p>Click or drag file to this area to upload</p>
      <p>
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
      </p>
    </Dragger>
  )
}