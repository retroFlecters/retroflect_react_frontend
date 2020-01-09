import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'

const Layout = (props) => (
    <div>
        <Head>
            <title>retroFlect</title>
            <link rel="icon" href="/logo.png"/>

            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
        </Head>
        <NavBar/>
        {props.children}
    </div>
);

export default Layout;