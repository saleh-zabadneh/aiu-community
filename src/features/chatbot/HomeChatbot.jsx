import { motion } from "framer-motion";
import React from "react";

export default function HomeChatbot() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="relative w-full p-6 border-2 shadow-lg rounded-2xl"
        animate={{
          border: [
            "2px solid #000", // Red
            "2px solid #010101", // Green
            "2px solid #0f0f0f", // Blue
            "2px solid #a1a1a1", // Red
          ],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div className="p-6 bg-background rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-primary-foreground">
                🤖
              </div>
              <div className="bg-card rounded-2xl p-4 max-w-[70%] animate-text">
                <p className="text-card-foreground">مرحبا انا</p>
              </div>
            </div>
            <div className="flex items-start justify-end gap-4">
              <div className="bg-card rounded-2xl p-4 max-w-[70%] animate-text">
                <p className="text-card-foreground">
                  ما الحد الأدنى للمعدل التراكمي للبقاء في الجامعة؟
                </p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-secondary-foreground">
                👤
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-primary-foreground">
                🤖
              </div>
              <div className="bg-card rounded-2xl p-4 max-w-[70%] animate-text">
                <p className="text-card-foreground">
                  الحد الأدنى للمعدل التراكمي هو 2.0.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end gap-4">
              <div className="bg-card rounded-2xl p-4 max-w-[70%] animate-text">
                <p className="text-card-foreground">كيف أحسب معدلي الفصلي؟</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-secondary-foreground">
                👤
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-primary-foreground">
                🤖
              </div>
              <div className="bg-card rounded-2xl p-4 max-w-[70%] animate-text">
                <p className="text-card-foreground">
                  اجمع نقاط المقررات، واقسم على عدد الساعات.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
