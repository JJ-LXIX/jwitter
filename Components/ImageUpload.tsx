import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  onChange: (base64: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
};

function ImageUpload({ onChange, label, value, disabled }: Props) {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        setBase64(e.target.result);
        handleChange(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: Infinity,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
  });

  return (
    <div
      {...getRootProps({
        className:
          "w-full p-4 text-white text-center border-2 border-dotted rouned-md border-neutral-700 cursor-pointer",
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div className="flex items-center justify-center">
          <Image src={base64} height="100" width="100" alt="Uploaded image" />
        </div>
      ) : (
        <p className="text-white">
          {label}{" "}
          <span className="text-white/50 text-md">
            (File max size 2MB - JPG,JPEG or PNG)
          </span>
        </p>
      )}
    </div>
  );
}

export default ImageUpload;
