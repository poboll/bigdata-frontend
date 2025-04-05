"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, FileJson, Upload } from "lucide-react";

export default function ReportLocation() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("http://10.3.36.106:5000");
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file) => {
    if (file) {
      // 当上传的文件是全国大学生就业数据分析.xlsx时，设置预览地址为/study
      if (file.name === "全国大学生就业数据分析.xlsx") {
        setFileName(file.name);
        setPreviewUrl("http://10.3.36.106:5000/study");
      }
      // 允许上传JSON文件
      else if (file.type === "application/json") {
        setFileName(file.name);

        // 根据文件名设置不同的预览URL
        if (file.name === "大数据可视化展板通用模板.json") {
          setPreviewUrl("http://10.3.36.106:5000/");
        } else if (file.name === "厦门招聘大数据.json") {
          setPreviewUrl("http://10.3.36.106:5000/job");
        } else if (file.name === "全国企业大数据.json") {
          setPreviewUrl("http://10.3.36.106:5000/corp");
        } else {
          setPreviewUrl("http://10.3.36.106:5000");
        }
      } else {
        alert("请上传JSON格式的文件或全国大学生就业数据分析.xlsx文件");
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!fileName) {
      alert("请先选择文件");
      return;
    }

    setIsUploading(true);

    // 模拟上传过程
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);

      // 重置状态，准备下一次上传
      setTimeout(() => {
        setIsSuccess(false);
        setFileName("");
      }, 3000);
    }, 1500);
  };

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Goons数据上传平台</CardTitle>
              <CardDescription>
                上传最新的Goons位置数据以更新追踪大屏
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center ${
                        isDragging ? "border-primary bg-primary/10" : "border-border"
                    } transition-all duration-200 cursor-pointer`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                >
                  <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept=".json, .xlsx"
                      onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center justify-center gap-2">
                    {fileName ? (
                        <>
                          <FileJson className="w-12 h-12 text-primary"/>
                          <p className="font-medium text-lg">{fileName}</p>
                          <p className="text-sm text-muted-foreground">点击更换文件</p>
                        </>
                    ) : (
                        <>
                          <Upload className="w-12 h-12 text-muted-foreground"/>
                          <p className="font-medium">拖放文件到此处</p>
                          <p className="text-sm text-muted-foreground">或点击选择文件</p>
                        </>
                    )}
                  </div>
                </div>

                {isSuccess && (
                    <div className="bg-green-500/20 border border-green-500 p-4 rounded-md flex items-center gap-3">
                      <CheckCircle className="text-green-500"/>
                      <p className="font-medium text-green-500">数据大屏已经更新！</p>
                    </div>
                )}

                <div className="flex gap-4 justify-end">
                  <Link href="/goonstracker">
                    <Button variant="outline" className="bg-black/40 border-border">
                      返回
                    </Button>
                  </Link>
                  <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="bg-black/40 border-border">
                      打开预览大屏
                    </Button>
                  </a>
                  <Button
                      className="bg-primary hover:bg-primary/80 transition-all"
                      onClick={handleUpload}
                      disabled={!fileName || isUploading}
                  >
                    {isUploading ? "上传中..." : "上传数据"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
