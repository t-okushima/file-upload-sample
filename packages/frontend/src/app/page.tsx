'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';

interface IFormValues {
  title: string;
  images: {
    order: number;
    file: File;
  }[];
}

interface IImage {
  id: number;
  order: number;
  url: string;
}
interface IImageInfo {
  id: number;
  title: string;
  images: IImage[];
}

async function fetchData(
  setData: React.Dispatch<React.SetStateAction<IImageInfo[]>>,
) {
  const response = await fetch('http://localhost:3001/api/image_infos', {
    method: 'GET',
  });
  const data = await response.json();
  setData(data);
}

export default function Home() {
  const [imageInfos, setImageInfos] = useState<IImageInfo[]>([]);
  useEffect(() => {
    fetchData(setImageInfos);
  }, []);

  const { register, handleSubmit, setValue } = useForm<IFormValues>({
    defaultValues: {
      title: '',
      images: [],
    },
  });
  const onChangeFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files) return;

    Array.from(event.target.files).forEach((file, index) => {
      setValue(`images.${index}.file`, file);
      setValue(`images.${index}.order`, index);
    });
  };
  const onClickSubmit = async (data: IFormValues) => {
    const formData = new FormData();
    formData.append('imageInfo[title]', data.title);
    data.images.forEach((image, index) => {
      formData.append(
        `imageInfo[images_attributes][][order]`,
        `${image.order}`,
      );
      formData.append(`imageInfo[images_attributes][][file]`, image.file);
    });

    await fetch('http://localhost:3001/api/image_infos', {
      method: 'POST',
      body: formData,
    });

    fetchData(setImageInfos);
  };
  const list = imageInfos.map((info) => (
    <div key={info.id}>
      <div>{info.title}</div>
      {info.images.map((image) => (
        <div key={image.id}>{image.url}</div>
      ))}
    </div>
  ));
  return (
    <main className={styles.main}>
      <div>{list}</div>

      <div>
        <input
          placeholder='イメージ情報のタイトル'
          {...register('title', { required: true })}
        />
        <input type='file' multiple accept='image/*' onChange={onChangeFiles} />
        <button type='button' onClick={handleSubmit(onClickSubmit)}>
          保存
        </button>
      </div>
    </main>
  );
}
