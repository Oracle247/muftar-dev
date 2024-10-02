interface ImageProps {
  image: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  styles?: string;
  handleClick?: () => void;
}

const ImageComp = ({
  image,
  alt = "image",
  width,
  height,
  styles = "",
  handleClick,
}: ImageProps) => {
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      className={styles}
      onClick={handleClick}
    />
  );
};

export default ImageComp;
