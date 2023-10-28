"use client";

import React from "react";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  textStyles,
  isDisabled,
  rightIcon,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType ? btnType : "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
