"use client";

import React, { createContext, useContext } from "react";
import { message } from "antd";

const AntdMessageContext = createContext<
  ReturnType<typeof message.useMessage> | undefined
>(undefined);

export const useAntdMessageApi = () => {
  const context = useContext(AntdMessageContext);
  if (!context) {
    throw new Error("useAntdMessageApi must be used within a MessageProvider");
  }
  return context;
};

export const AntdMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <AntdMessageContext.Provider value={[messageApi, contextHolder]}>
      {contextHolder}
      {children}
    </AntdMessageContext.Provider>
  );
};
