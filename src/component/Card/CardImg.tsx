'use client';
import Image from "next/image";
import styles from "./CardImg.module.css";

export const CardImg = (props:CardImgProps) => {
    const width = props.width || 128;
    const height = props.height || 128;

    return (
        <Image
            src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${props.id}.webp`}
            width={width}
            height={height}
            alt={props.id}
            loading="lazy"
            className={styles.Image}
        />
    )
}

type CardImgProps = {
    id: string;
    width?: number;
    height?: number;
}