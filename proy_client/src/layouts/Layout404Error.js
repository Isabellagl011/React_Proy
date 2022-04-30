import React from "react";
import { Layout } from "antd";

export default function Layout404Error(props) {
  const { children } = props;
  return (
    <Layout>
      <div>
        <h3>Error 404</h3>
        <p>Not Found</p>
      </div>
    </Layout>
  );
}
