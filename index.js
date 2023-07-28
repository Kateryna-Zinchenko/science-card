function generateHtmlFromJson(data) {
    let html = `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet">
    <title>Document</title>
    <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
    <style>
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section {
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline;
        }

        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }

        html {
            min-height: 100%;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
            min-height: 100%;
            color: #434343;
        }

        ol, ul {
            list-style: none;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            page-break-inside: auto;
        }

        table thead {
            display: table-header-group;
        }

        table td {
            padding: 3px 5px;
        }

        .wrapper {
            max-width: 900px;
            margin: 0px auto 0;
            height: 100%;
        }

        .p {
            line-height: 120%;
        }

        .logo {
            display: inline-block;
        }

        .title {
            font-size: 20px;
            font-weight: 600;
            display: inline-block;
            float: right;
            margin: 36px 0 0;
        }

        .info {
            margin: 60px 0 0;
        }

        .user_details_left {
            display: inline-block;
        }

        .p_header {
            font-size: 18px;
            font-weight: 600;
            line-height: 180%;
        }

        .user_details_right {
            margin: 0 0 0 180px;
            display: inline-block;
        }

        .period_details_wrapper {
            width: 100%;
        }

        .period_details {
            float: right;
        }

        .p_date {
            margin: 0 0 0 10px;
        }

        .period_table {
            border-collapse: collapse;
            border: 2px solid #000;
            table-layout: fixed;
            border-spacing: 0;
            margin: 5px 0 0;
            width: auto;
            background: #D9D9D9;
        }

        .period_table tr td {
            text-align: right;
        }

        .period_table tr:last-child {
            border: 2px solid #000;
        }

        .period_table tr:last-child td {
            font-size: 18px;
            font-weight: 600;
        }

        .table_wrapper {
            margin: 215px 0 0;
        }

        .main_table {
            margin: 0px 0 0;
        }

        .main_table_header {
            border: 2px solid #000;
            font-size: 18px;
            font-weight: 600;
            background: #D9D9D9;
        }

        footer {
            width: 100%;
            max-width: 900px;
            position: fixed;
            bottom: 0;
            padding: 0 var(--pagedjs-margin-right);
        }

        .p_footer:after {
            counter-increment: page;
            content: "PAGE " counter(page) " OF " counter(pages);
        }

        .p_footer {
            border-top: 2px solid #000;
            border-bottom: 2px solid #000;
            width: 100%;
            text-align: center;
            font-size: 18px;
        }

        .footer-text {
            line-height: 100%;
            font-size: 14px;
        }

        .pagedjs_page {
            margin: 0 auto;
        }

        @page {
            size: A4;
        }
    </style>
</head>
<body>
<footer>
    <div class="p_footer"></div>
    <p class="footer-text">
        Modulr accounts are provided by Modulr FS Limited, authorised and regulated by the Financial Conduct
        Authority for issuance of electronic money (FRN 900573). Modulr Finance Limited is a registered agent of
        Modulr FS Limited. Registered address: Scale Space, 58 Wood Lane, London W12 7RZ with company number:
        09897919. © 2023 Modulr FS Limited.
    </p>
</footer>
<div class="wrapper">
    <div>
        <img class="logo" src="logo.png" alt="#"/>
        <p class="title">STATEMENT</p>
    </div>
    <p class="p">Level 30, The Leadenhall Building,</p>
    <p class="p">122 Leadenhall Street,</p>
    <p class="p">London,</p>
    <p class="p">EC3V 4AB</p>
    <div class="info">
        <div class="user_details">
            <div class="user_details_left">
                <p class="p_header">Daniel Baeriswyl</p>
                <p class="p">55 Glouster Avenue,</p>
                <p class="p">London</p>
                <p class="p">EC2 1AB</p>
            </div>
            <div class="user_details_right">
                <p class="p_header">Account Details</p>
                <p class="p">Currency: GBP</p>
                <p class="p">Sort code: 00-00-00</p>
                <p class="p">Account number: 03193802</p>
            </div>
        </div>
        <div class="period_details_wrapper">
        <div class="period_details">
            <div>
                <p class="p_header">Period</p>
                <p class="p p_date">1 June - 19 June 2023</p>
                <table class="period_table">
                    <tr>
                        <td>Previous balance</td>
                        <td>£0.00</td>
                    </tr>
                    <tr>
                        <td>Paid out</td>
                        <td>£500.00</td>
                    </tr>
                    <tr>
                        <td>Paid in</td>
                        <td>£500.00</td>
                    </tr>
                    <tr>
                        <td>Current Balance</td>
                        <td>£0.00</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    </div>
    <div class="table_wrapper">
    <table class="main_table">
        <thead class="main_table_header">
            <tr>
                <td>Date</td>
                <td>Details</td>
                <td>Reference</td>
                <td>Paid in</td>
                <td>Paid out</td>
                <td>Balance</td>
            </tr>
        </thead>
        <tbody>
    `;
    data.map((obj) => {
        html += `
        <tr>
            <td>${obj.date}</td>
            <td>${obj.details}</td>
            <td>${obj.reference}</td>
            <td>${obj.paidIn}</td>
            <td>${obj.paidOut}</td>
            <td>${obj.balance}</td>
        </tr>
        `;
    });
    html += `
    </tbody>
    </table>
    </div>
</div>
</body>
</html>
</body>
</html>
    `;
    return html;
}
