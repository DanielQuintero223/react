import { Layout } from "antd";
import React from "react";
import './LayoutAdmin.scss'

export default function layoutAdmin(props) {
    const { children } = props;
    /**Especifica los componentes que quieres obtener de este layout */
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <Layout className="layout-admin">
                <Header className="layout-admin_header">Header</Header>
                {/**El componnete de la pagina cambiara de forma dinamica por el children que es un componente hijo que llega */}
                <Content className="layout-admin_content"> { children } </Content>
                <Footer className="layout-admin_footer"> React Project 2022 </Footer>
            </Layout>
        </Layout>
    );
}
