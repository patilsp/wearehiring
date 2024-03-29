"use client";
import React from 'react';
import Lottie from "lottie-react";
import animationData from "../assets/loading.json";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div style={{ width: '120px', height: '120px' }}>
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}
