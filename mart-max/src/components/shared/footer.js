import React, { Component } from 'react';

const Footer = () =>
(
    <footer class="site-footer">
        <p>All rights Reserved 2021-<span>{(new Date().getFullYear())}</span> &copy; МаксМарт</p>
    </footer>
)

export default Footer